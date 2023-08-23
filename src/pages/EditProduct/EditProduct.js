import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function EditProductPage(props) {
    const [productToUpdate, setProductToUpdate] = useState(null);
    
    //TODO: Write code to set the productToUpdateState
    //with the product data from the location.
    //
    //Use useEffect so that when the location changes
    //you get the product data from the location. See
    //ViewProductPage.js to check

    const { products, setProducts } = props;

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state) {
            setProductToUpdate(location.state.product);
        }
    }, []);

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        setProductToUpdate({ ...productToUpdate, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const updatedProducts = products.map((p) =>
            p.id === productToUpdate.id ? productToUpdate : p
        );
        setProducts(updatedProducts);
        navigate("/products");
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
              <input
                type="text"
                id="price"
                name="price"
                onChange={handleChange}
                value={productToUpdate.price}
            />
            <button type="submit">Edit</button>
        </form>
    );
}

export default EditProductPage;
