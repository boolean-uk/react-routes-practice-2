import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function EditProductPage({ onUpdateProduct, products }) {
  const { id } = useParams();

  const navigate = useNavigate(); 

  const [productToUpdate, setProductToUpdate] = useState(
    products.find((product) => product.id === parseInt(id))
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductToUpdate({
      ...productToUpdate,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProduct(productToUpdate);
    navigate(`/products/${id}`, { state: { product: productToUpdate } });
  };

  if (!productToUpdate) return <div>Loading...</div>;
  
  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Product Name</label>
        <input type="text" id="name" name="name" onChange={handleChange} value={productToUpdate.name} />
        <label htmlFor="price">Product Price</label>
        <input type="number" id="price" name="price" onChange={handleChange} value={productToUpdate.price} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditProductPage;