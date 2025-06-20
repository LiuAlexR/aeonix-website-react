// src/App.tsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/homepage/Home";
import About from "./pages/about/About";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/products/:product_id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
