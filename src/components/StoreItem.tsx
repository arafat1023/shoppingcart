import { Card, Button } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { StoreItem as StoreItemType } from '../types';

type StoreItemProps = StoreItemType;

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        alt={name}
        height="200px"
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100"
              onClick={() => increaseCartQuantity(id)}
              aria-label={`Add ${name} to cart`}
            >
              + Add To Cart
            </Button>
          ) : (
            <div className="d-flex align-items-center flex-column" style={{ gap: '.5rem' }}>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: '.5rem' }}
              >
                <Button
                  onClick={() => decreaseCartQuantity(id)}
                  aria-label={`Decrease ${name} quantity`}
                >
                  -
                </Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button
                  onClick={() => increaseCartQuantity(id)}
                  aria-label={`Increase ${name} quantity`}
                >
                  +
                </Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant="danger"
                size="sm"
                aria-label={`Remove ${name} from cart`}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
