import './OrderItem.css';

function OrderItem({ order, removeOrder}) {
    return (
      <li className="order-item">
        {order.name} x{order.quantity} - ${order.price}
        <button className='remove-button' onClick={() => removeOrder(order)}>❌</button>
      </li>
    );
  }
  
export default OrderItem;  