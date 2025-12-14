import { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductList() {
  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <>
      <select
        className="filter-select"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      >
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Grocery">Grocery</option>
        <option value="Sports">Sports</option>
      </select>

      <div className="grid">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={product.id || index}
            product={product}
            index={index}
          />
        ))}
        {filteredProducts.length === 0 && (
          <p style={{ gridColumn: "1 / -1", color: "#666" }}>
            No products found in this category.
          </p>
        )}
      </div>
    </>
  );
}

export default ProductList;
