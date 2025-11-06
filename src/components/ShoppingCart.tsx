import { useMemo } from 'react';
import { Offcanvas, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';
import storeItems from '../data/items.json';
import { CartItem } from './CartItem';

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();

  // Memoize total calculation for performance
  const total = useMemo(() => {
    return cartItems.reduce((total, cartItem) => {
      const item = storeItems.find((i) => i.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0);
  }, [cartItems]);

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.length === 0 ? (
            <div className="text-center text-muted py-4">Your cart is empty</div>
          ) : (
            <>
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
              <div className="ms-auto fw-bold fs-5">Total {formatCurrency(total)}</div>
            </>
          )}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
