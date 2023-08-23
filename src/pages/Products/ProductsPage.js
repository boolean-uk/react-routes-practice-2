import { Link } from "react-router-dom";

function ProductsPage(props) {
  console.log("Inside ProductsPage: ", { props });

  const { products } = props;

  return (
    <main>
      <h2>Products</h2>
      <div className="products-container">
        {products.map((product, index) => {
          return (
            <div className="product-item" key={index}>
              <h3>{product.name}</h3>
              <img src={product.imageUrl} alt={product.name} style={{ width: "150px", height: "auto" }} />
              <p>£{product.price}</p>
              <Link to={`/products/${product.id}`} state={{ product }}>
                View Product
              </Link>
              &nbsp;&nbsp;
              <Link to={`/products/${product.id}/edit`} state={{ product }}>
                Edit Product
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
      }
export default ProductsPage
