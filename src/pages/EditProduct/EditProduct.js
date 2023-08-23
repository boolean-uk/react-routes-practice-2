import { useEffect, useState } from "react";
import { useLocation } from "react-router"; // importing useLocation hook

// added the function extra's

  function EditProductPage(props) {
    const [productToUpdate, setProductToUpdate] = useState(null);
    const location = useLocation()

    useEffect(() => {
      if (location.state && location.state.product) {
        setProductToUpdate(location.state.product)
      }
    }, [location])

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setProductToUpdate({ ...productToUpdate, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    //modifying for updated product list
    if (props.updateProduct) {
      props.updateProduct(productToUpdate)
    }
  }

  if (!productToUpdate) {
    return <div>Loading...</div>
  }

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
