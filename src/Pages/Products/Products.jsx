import React from "react";
import image from "./assets/image.jpg";
import "./Products.scss";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Products = () => {
  return (
    <div className="products_wrapper">
      <div className="filter_products_wrapper">
        <div className="filters_wrapper">
          <div className="filter_heading">
            <h3>Beds</h3>
            <p>1 - 16 of 605 products</p>
          </div>
          <div className="filter_cats">
            <h4>Dummy Text</h4>
            <h4>Dummy Text</h4>
            <h4>Dummy Text</h4>
            <h4>Dummy Text</h4>
            <h4>Dummy Text</h4>
            <h4>Dummy Text</h4>
            <h4>Dummy Text</h4>
            <h4>Dummy Text</h4>
          </div>
        </div>
        {/* filters ends here  */}
        <div className="products_item_wrapper">
          <div className="categories_wrapper">
            <img src={image} alt="cat-img" />
          </div>
          {/* cats ends here  */}
          <div className="products_cards_wrapper">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          {/* products cards ends here  */}
        </div>
      </div>
    </div>
  );
};

export default Products;
