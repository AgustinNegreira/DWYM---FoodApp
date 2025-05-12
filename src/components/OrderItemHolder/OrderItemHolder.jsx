import {Order} from '../Order/Order';
import OrderItem from '../OrderItem/OrderItem';

function OrderItemHolder({orders, removeOrder}) {
  return (
    <div className="orderItemHolder">
      <ul>
        {orders.map(order => (
          <OrderItem key={order.name} order={order} removeOrder={removeOrder}/>
        ))}
      </ul>

    </div>
  );
}

export default OrderItemHolder;