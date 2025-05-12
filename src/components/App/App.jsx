import Order from "../Order/Order";
import { FoodList } from "../FoodList/FoodList";
import './App.css';
import React, { useState, useEffect } from 'react';
import { useTheme } from "../../context/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ViewDetails } from "../ViewDetails/ViewDetails";

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

  const removeFromCart = (selectedOrder) => {
    const updatedOrders = data.orders.filter(order => order.name !== selectedOrder.name)

    const updatedFoods = data.foods.map(food =>
      food.name === selectedOrder.name ? { ...food, stock: food.stock + selectedOrder.quantity }
        : food
    );

    setData({ foods: updatedFoods, orders: updatedOrders })
  }

  const { darkMode, toggleTheme } = useTheme()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className={darkMode ? "app-container dark" : "app-container"}>
            <button className={"dark-mode-button"} onClick={toggleTheme}>Dark Mode</button>
            <h1>FoodApp</h1>
            <div className="content">
              <FoodList foodElements={data.foods} addFood={addToCart} />
              <Order orders={data.orders} removeOrder={removeFromCart} />
            </div>
          </div>} />
        <Route path="/verDetalles/:id" element={<ViewDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;