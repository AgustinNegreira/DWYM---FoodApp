import Order from "../Order/Order";
import { FoodList } from "../FoodList/FoodList";
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [foods, setFoods] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/foods')
      .then(res => res.json())
      .then(data => setFoods(data));
  }, []);


  useEffect(() => {
    fetch('http://localhost:3001/orders')
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);


  return (
    <div className="app-container">
      <h1>FoodApp</h1>
      <Order orders={orders} />
      <FoodList foodElements={foods} />
    </div>
  );
}

export default App;