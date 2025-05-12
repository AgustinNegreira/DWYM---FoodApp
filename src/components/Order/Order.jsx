import './Order.css';
import OrderItemHolder from '../OrderItemHolder/OrderItemHolder';

export function Order({ orders, removeOrder }) {
  const total = orders.reduce((sum, o) => sum + o.price, 0);

  return (
    <div className="order">
      <h2>Tu Pedido</h2>
      <OrderItemHolder orders={orders} removeOrder={removeOrder} />
      <div className="order-total">
        <strong>Total: {total}</strong>
      </div>
    </div>
  );
}
