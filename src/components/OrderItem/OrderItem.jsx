function OrderItem({ order }) {
    return (
      <li className="order-item">
        {order.name} x{order.quantity} - ${order.price}
      </li>
    );
  }
  
export default OrderItem;  