import { FoodList } from "../FoodList/FoodList";
import { FoodElement } from "../FoodElement/FoodElement";

function App({ foodElements }) {
    return (
        <div className="app-container">
            <h1>FoodApp</h1>
            <FoodList foodElements={foodElements} />
        </div>
    )
}
export default App;