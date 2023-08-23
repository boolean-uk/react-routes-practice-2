import { Link } from "react-router-dom";

function ProductsPage(props) {
  console.log("Inside ProductsPage: ", { props });

  const { products } = props;

  return (
    <main>
      <h2>Products</h2>
      <ul>
        {products.map((product, index) => {
          return (
            <li key={index}>
              <h3>{product.name}</h3>
              <p>£{product.price}</p>
              <Link to={`/products/${product.id}`} state={{ product }}>
                View Product
              </Link>
              &nbsp;&nbsp; {/* Adding space between View and Edit so it looks better*/}
              <Link to={`/products/${product.id}/edit`} state={{ product }}> 
                Edit Product
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default ProductsPage;
