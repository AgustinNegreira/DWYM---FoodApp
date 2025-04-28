import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Components/App/App.jsx'

const PRODUCTS = [
  {id: "1", price: "$1", stock: 5, img: "img"},
  {id: "2", price: "$1", stock: 4, img: "img2"},
  {id: "3", price: "$1", stock: 0, img: "img3"},
  {id: "4", price: "$1", stock: 2, img: "img4"},
  {id: "5", price: "$1", stock: 0, img: "img5"},
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App foodElements={PRODUCTS}/>
  </StrictMode>,
)
