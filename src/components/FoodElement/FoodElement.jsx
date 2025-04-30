import './FoodElement.css';
export function FoodElement({ product }) {
    const stockClass = product.stock > 0 ? 'stock-positive' : 'stock-zero';

    return (
        <li>
            <div className="food-element">
                <img src={product.img} alt={product.name} />
                <span className={stockClass}>
                    {product.stock}
                </span>
            </div>
        </li>
    );
}