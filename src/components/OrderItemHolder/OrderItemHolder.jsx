import OrderItem from '../OrderItem/OrderItem';

function OrderItemHolder() {
    return (
      <div className="orderItemHolder">
        <ul>
          <OrderItem name="Pizza" price={10} quantity={1} />
          <OrderItem name="Hamburguesa" price={8} quantity={2} />
        </ul>
      </div>
    );
  }
  
  export default OrderItemHolder;