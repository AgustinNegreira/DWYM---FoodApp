
import { FoodList } from "../FoodList/FoodList";
import { Order } from "../Order/Order";
import '../App/App.css';

export function HomePage({ data, addToCart, removeFromCart }) {
    return (
        <div className="content">
            <FoodList foodElements={data.foods} addFood={addToCart} />
            <Order orders={data.orders} removeOrder={removeFromCart} />
        </div>
    )
}
