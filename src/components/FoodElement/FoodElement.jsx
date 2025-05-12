import './FoodElement.css';
import { useTheme } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

export function FoodElement({ product, addFood }) {
    const navigate = useNavigate();

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
                <button className='add-button' onClick={() => navigate(`/verDetalles/${product.id}`)}>Ver detalles</button>
            </div>
        </li>
    );
}