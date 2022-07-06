import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Furniture from "./Pages/Furniture/Furniture";
import Products from "./Pages/Products/Products";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Cart from "./Pages/Cart/Cart";
import About from "./Pages/About/About";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="furniture" element={<Furniture />} />
          <Route exact path="products" element={<Products />} />
          <Route exact path="productdetail" element={<ProductDetail />} />
          <Route exact path="cart" element={<Cart />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="signup" element={<Signup />} />
          <Route exact path="login" element={<Login />} />
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
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
