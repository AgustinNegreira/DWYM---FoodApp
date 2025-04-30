import Order from "../Order/Order";
import { FoodList } from "../FoodList/FoodList";
import './App.css';

function App({foodElements, orders}) {
  return (
    <div className="app-container">
      <h1>FoodApp</h1>
      <Order orders={orders} />
      <FoodList foodElements={foodElements} />
    </div>
  );
}

export default App;