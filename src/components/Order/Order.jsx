import OrderItemHolder from '../OrderItemHolder/OrderItemHolder';

function Order({orders}) {
  const total = orders.reduce((sum, o) => sum + o.price, 0);

  return (
    <div className="order">
      <h2>Tu Pedido</h2>
      <OrderItemHolder orders={orders}/>
      <div className="order-total">
        <strong>Total: {total}</strong>
      </div>
    </div>
  );
}

export default Order;
