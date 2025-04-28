function OrderItem({ name, price, quantity }) {
    return (
      <li className="order-item">
        {name} x{quantity} - ${price * quantity}
      </li>
    );
  }
  
  export default OrderItem;  