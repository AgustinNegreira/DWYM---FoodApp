import './FoodElement.css';
export function FoodElement({ product }) {
    const stockClass = product.stock > 0 ? 'stock-positive' : 'stock-zero';

    return (
        <li key={product.id}>
            <div>
                {product.img}
                <span className={stockClass}>
                    {product.stock}
                </span>
            </div>
        </li>
    );
}
