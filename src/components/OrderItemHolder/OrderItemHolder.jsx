import Order from '../Order/Order';
import OrderItem from '../OrderItem/OrderItem';

function OrderItemHolder({orders}) {
  return (
    <div className="orderItemHolder">
      <ul>
        {orders.map(order => (
          <OrderItem key={order.name} order={order} />
        ))}
      </ul>

    </div>
  );
}

export default OrderItemHolder;