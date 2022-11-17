import { useEffect, useState } from "react";
import { useLocation } from "react-router";

function EditProductPage(props) {
  const [productToUpdate, setProductToUpdate] = useState(null);

  console.log({ productToUpdate });

  const location = useLocation();

  useEffect(() => {
    setProductToUpdate(location.state.product);
    console.log(productToUpdate);
  }, [location]);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setProductToUpdate({ ...productToUpdate, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // map the products checking for the productToUpdate name
    const updatedProducts = props.products.map((product) => {
      if (product.id === productToUpdate.id) {
        // Update the respective item of new Array to have the same value as product to update
        return productToUpdate;
      }
      // if not the same, just return the iterated one
      else return product;
    });

    // when found, update the name of the product

    props.setProducts([...updatedProducts]);
  }

  if (!productToUpdate) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Product Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={productToUpdate.name}
      />
      <button type="submit">Edit</button>
    </form>
  );
}

export default EditProductPage;
