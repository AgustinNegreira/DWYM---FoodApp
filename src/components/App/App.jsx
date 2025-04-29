import Order from "../Order/Order";
import { FoodList } from "../FoodList/FoodList";

function App({foodElements}) {
  return (
    <div className="app-container">
      <h1>FoodApp</h1>
      <Order />
      <FoodList foodElements={foodElements} />
    </div>
  );
}

export default App;