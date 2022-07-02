import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Furniture from "./Pages/Furniture/Furniture";
import Products from "./Pages/Products/Products";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="furniture" element={<Furniture />} />
          <Route path="products" element={<Products />} />
          <Route path="productdetail" element={<ProductDetail />} />
          {/* <Route path="mattress" element={<Mattress />} />
              <Route path="outdoor" element={<Outdoor />} />
              <Route path="kids" element={<Kids />} />
              <Route path="baby" element={<Baby />} />
              <Route path="organization" element={<Organization />} />
              <Route path="bath" element={<Bath />} />
              <Route path="bedding" element={<Bedding />} />
              <Route path="decor" element={<Decor />} />
              <Route path="rugs" element={<Rugs />} />
              <Route path="lighting" element={<Lighting />} />
              <Route path="shopby" element={<Shopby />} />
              <Route path="deals" element={<Deals />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
