import { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductList() {
  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? products
      : products.filter(product => product.category === category);

  return (
    <>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Grocery">Grocery</option>
        <option value="Sports">Sports</option>
      </select>

      <div className="grid">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductList;
