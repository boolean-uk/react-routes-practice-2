import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'

function ViewProductPage(props) {
  const [product, setProduct] = useState(null);

  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      const { product } = location.state;
      setProduct(product);
    }
  }, [location]);
  
  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>£{product.price}</p>
      <Link to={`/products/${product.id}/edit`} state={{ product }}>
        Edit Product
      </Link>
    </div>
  );
}

export default ViewProductPage;