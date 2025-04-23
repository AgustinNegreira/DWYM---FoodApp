export function FoodElement({ product }) {

    return (
        <div>
            {product.img},
            {product.stock}
        </div>
    );
}