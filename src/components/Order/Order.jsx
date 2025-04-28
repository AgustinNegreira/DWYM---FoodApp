import OrderItem from './OrderItem/OrderItem';

function Order() {
  return (
    <div className="order">
      <h2>Tu Pedido</h2>
      <ul>
        <OrderItem name="Pizza" price={10} quantity={1} />
        <OrderItem name="Hamburguesa" price={8} quantity={2} />
      </ul>
      <div className="order-total">
        <strong>Total: $26</strong>
      </div>
    </div>
  );
}

export default Order;
