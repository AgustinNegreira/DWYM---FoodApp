import OrderItemHolder from '../OrderItemHolder/OrderItemHolder';

function Order({orders}) {
  return (
    <div className="order">
      <h2>Tu Pedido</h2>
      <OrderItemHolder orders={orders}/>
      <div className="order-total">
        <strong>Total: $26</strong>
      </div>
    </div>
  );
}

export default Order;
