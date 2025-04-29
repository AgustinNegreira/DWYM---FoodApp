import { FoodElement } from "../FoodElement/FoodElement";

export function FoodList({ foodElements }) {
    return (
        <div className="FoodList">
            <ul>
                {foodElements.map(producto => (
                    <FoodElement key={producto.id} product={producto} />
                ))}
            </ul>
        </div>
    );
}