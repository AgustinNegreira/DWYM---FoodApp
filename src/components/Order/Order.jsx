import OrderItemHolder from '../OrderItemHolder/OrderItemHolder';

function Order() {
  return (
    <div className="order">
      <h2>Tu Pedido</h2>
      <OrderItemHolder/>
      <div className="order-total">
        <strong>Total: $26</strong>
      </div>
    </div>
  );
}

export default Order;
