function ProductCard({ product, index }) {
  const animationDelay = { animationDelay: `${index * 0.05}s` };

  return (
    <div className="card" style={animationDelay}>
      <div className="image-container">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <h3>{product.name}</h3>
      <p className="price">₹ {product.price}</p>
      <button className="btn-buy">Buy Now</button>
    </div>
  );
}

export default ProductCard;
