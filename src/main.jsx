import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App/App.jsx'

const PRODUCTS = [
  {id: "1", price: "$1", stock: 5, img: "src/assets/img/hamburger.png"},
  {id: "2", price: "$1", stock: 4, img: "src/assets/img/hamburger.png"},
  {id: "3", price: "$1", stock: 0, img: "src/assets/img/hamburger.png"},
  {id: "4", price: "$1", stock: 2, img: "src/assets/img/hamburger.png"},
  {id: "5", price: "$1", stock: 0, img: "src/assets/img/hamburger.png"},
];

const ORDERS = [
  {name: "name1", price: 50, quantity: 3},
  {name: "name2", price: 40, quantity: 2},
  {name: "name3", price: 50, quantity: 4},
  {name: "name4", price: 50, quantity: 2},
  {name: "name5", price: 30, quantity: 2}
]


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App foodElements={PRODUCTS} orders={ORDERS}/>
  </StrictMode>,
)
