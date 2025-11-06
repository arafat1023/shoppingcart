import { createContext, useContext, ReactNode, useState, useEffect, useMemo } from 'react';
import { ShoppingCart } from '../components/ShoppingCart';
import { ShoppingCartContextType, CartItem } from '../types';

type ShoppingCartProviderProps = {
  children: ReactNode;
};

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

const CART_STORAGE_KEY = 'shopping-cart';

// Helper function to load cart from localStorage
function getStoredCart(): CartItem[] {
  try {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error('Failed to load cart from localStorage:', error);
    return [];
  }
}

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>(getStoredCart);

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }, [cartItems]);

  // Memoize cartQuantity calculation for performance
  const cartQuantity = useMemo(() => {
    return cartItems.reduce((quantity, item) => item.quantity + quantity, 0);
  }, [cartItems]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      const existingItem = currItems.find((item) => item.id === id);
      // Fix: Use strict equality instead of loose equality
      if (existingItem === undefined) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      const existingItem = currItems.find((item) => item.id === id);
      if (existingItem?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  }

  const value: ShoppingCartContextType = {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    openCart,
    closeCart,
    cartItems,
    cartQuantity,
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
