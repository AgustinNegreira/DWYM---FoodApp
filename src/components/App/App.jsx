import Order from "../Order/Order";
import { FoodList } from "../FoodList/FoodList";

function App({foodElements}) {

  const addToCart = (food) => {
    foodElements.foods.find(f => f.name === food.name);
    
  } 

  return (
    <div className="app-container">
      <h1>FoodApp</h1>
      <Order />
      <FoodList foodElements={foodElements} />
    </div>
  );
}

export default App;