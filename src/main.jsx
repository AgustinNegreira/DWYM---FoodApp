import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App/App.jsx'

const PRODUCTS = {
  foods: [
    { id: "1", name: "pizza", price: "$1", stock: 5, img: "img" },
    { id: "2", name: "burger", price: "$1", stock: 4, img: "img2" },
    { id: "3", name: "hotdog", price: "$1", stock: 0, img: "img3" },
    { id: "4", name: "shake", price: "$1", stock: 2, img: "img4" },
    { id: "5", name: "burrito", price: "$1", stock: 0, img: "img5" }
  ],
  orders: []
};


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App foodElements={PRODUCTS} />
  </StrictMode>,
)
