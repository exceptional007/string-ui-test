function ProductCard({ product }) {
  return (
    <div className="card">
        <img src={product.image} alt={product.name}/>
        <h3>{product.name}</h3>
        <p>Rs. {product.price}</p>

        <button>Buy Now</button>
    </div>
  );
}

export default ProductCard;


