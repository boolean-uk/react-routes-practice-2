import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

function EditProductPage(props) {

  const [productToUpdate, setProductToUpdate] = useState(null)

  const { products } = props

  const { id } = useParams()

  const navigate = useNavigate();

  console.log({ productToUpdate });

  /** TODO: Write code to set the `productToUpdate` state with the product data
   *  based on the ID that we get from the URL path parameter.
   *  You will need to use: `props`, `useParams`, and `useEffect` to achieve this.
   */

  useEffect(() => {
    if (products && id) {
      const updatedProduct = products.find((product) => Number(product.id) === Number(id))

      setProductToUpdate(updatedProduct)
    }
  }, [products, id])
  

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setProductToUpdate({ ...productToUpdate, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.updateProduct(productToUpdate);

    navigate('/products');
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
