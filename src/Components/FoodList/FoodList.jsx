import { FoodElement } from "../FoodElement/FoodElement";

export function FoodList({ Products }) {

    return (
        <ul>
            {products.map(producto => renderProducto(producto))}
        </ul>
    );
}
