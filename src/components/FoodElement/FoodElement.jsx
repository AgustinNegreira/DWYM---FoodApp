import './FoodElement.css';
import { useTheme } from "../../context/ThemeContext";

export function FoodElement({ product, addFood }) {

    const { darkMode, toggleTheme } = useTheme();

    const stockClass = product.stock > 0 ? 'stock-positive' : 'stock-zero';

    return (
        <li>
            <div className={darkMode ? "food-element dark" : "food-element"}>
                <span className="food-emoji">{product.img}</span>
                <span className={stockClass}>
                    Precio: ${product.price} <br />
                    Stock: {product.stock}
                </span>
                <button className='add-button' onClick={() => addFood(product)}>Añadir</button>
            </div>
        </li>
    );
}