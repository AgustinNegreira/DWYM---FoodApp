function OrderItem({ order }) {
    return (
      <li className="order-item">
        {order.name} x{order.quantity} - ${order.price * order.quantity}
      </li>
    );
  }
  
export default OrderItem;  