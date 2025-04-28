export function FoodElement({ product }) {

    return (
        <li key={product.id}>
            <div>
                {product.img},
                {product.stock}
            </div>
        </li>
    );
}