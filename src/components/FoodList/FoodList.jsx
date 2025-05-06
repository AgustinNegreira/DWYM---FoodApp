import './FoodList.css';
import { FoodElement } from "../FoodElement/FoodElement";
import { useTheme } from "../../context/ThemeContext";


export function FoodList({ foodElements, addFood }) {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <div className="FoodList">
            <ul>
                {foodElements.map(producto => (
                    <FoodElement key={producto.id} product={producto} addFood={addFood} />
                ))}
            </ul>
        </div>
    );
}