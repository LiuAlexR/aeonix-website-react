// src/App.tsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/homepage/Home";
import About from "./pages/about/About";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import Contact from "./pages/contact/Contact";
import NewsPage from "./pages/news/News";
import Error404 from "./pages/error/Error404";
import Admin from "./pages/admin/Admin";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Technology" element={<Products />} />
        <Route path="/Technology/:product_id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
