export interface StoreItem {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export interface CartItem {
  id: number;
  quantity: number;
}

export interface ShoppingCartContextType {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
}
