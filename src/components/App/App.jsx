import Order from "../Order/Order";
import { FoodList } from "../FoodList/FoodList";
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState({ foods: [], orders: [] });

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:3001/foods').then(res => res.json()),
      fetch('http://localhost:3001/orders').then(res => res.json())
    ])
      .then(([foods, orders]) => {
        setData({ foods, orders });
      })
      .catch(err => console.error('Error:', err));
  }, []);

  const addToCart = (selectedFood) => {

    if (selectedFood.stock === 0) {
      return;
    }
    
    const updatedFoods = data.foods.map(food =>
      food.name === selectedFood.name ? { ...food, stock: food.stock - 1 } : food
    );

    const orderExists = data.orders.find(order => order.name === selectedFood.name)

    let updatedOrders;
    if (orderExists) {
      updatedOrders = data.orders.map(order =>
        order.name === selectedFood.name ?
          { ...order, quantity: order.quantity + 1, price: selectedFood.price * (order.quantity + 1) }
          : order
      );
    } else {
      updatedOrders = [...data.orders, { name: selectedFood.name, quantity: 1, price: selectedFood.price }]
    }

    setData({ foods: updatedFoods, orders: updatedOrders })
  }


  return (
    <div className="app-container">
      <h1>FoodApp</h1>
      <Order orders={data.orders} />
      <FoodList foodElements={data.foods} addFood={addToCart} />
    </div>
  );
}

export default App;