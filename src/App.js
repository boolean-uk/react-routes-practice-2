import { useState } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductsPage from "./pages/Products/ProductsPage";
import ViewProductPage from "./pages/ViewProduct/ViewProductPage";
import "./styles.css";
import EditProductPage from "./pages/EditProduct/EditProduct"; //adding import

const productsData = [
  {
    id: 1,
    name: "iMac",
    type: "computer",
    price: 1400,
    imageUrl:"https://images.iskysoft.com/images/blog/6.jpg?_gl=1*yw2s46*_gcl_au*MTM4NzQ1NDI4OC4xNjkyNzgzOTIy*_ga*OTQ5MTIyMDgwLjE2OTI3ODM5MjM.*_ga_24WTSJBD5B*MTY5Mjc4MzkyMi4xLjAuMTY5Mjc4MzkyMi42MC4wLjA.&_ga=2.8189873.2052765823.1692783923-949122080.1692783923",
    inventory: {
      quantity: 100,
      incomingDelivery: false
    }
  },
  {
    id: 2,
    name: "Macbook Pro",
    type: "computer",
    price: 2000,
    imageUrl:"https://img-9gag-fun.9cache.com/photo/ayBKxQ8_460s.jpg",
    inventory: {
      quantity: 10,
      incomingDelivery: true
    }
  },
  {
    id: 3,
    name: "iPad Mini",
    type: "tablet",
    price: 600,
    imageUrl:"https://i.chzbgr.com/full/6700044032/h425367E5/i-shall-call-him-ipad-mini",
    inventory: {
      quantity: 200,
      incomingDelivery: false
    }
  },
  {
    id: 4,
    name: "iPad Pro",
    type: "tablet",
    imageUrl:"https://i.dailymail.co.uk/i/pix/2015/09/10/03/2C21536200000578-0-image-a-55_1441851935934.jpg",
    price: 800,
    inventory: {
      quantity: 0,
      incomingDelivery: true
    }
  }
];

const appsData = [
  {
    id: 1,
    name: "Farmville",
    type: "game",
    price: 0
  },
  {
    id: 2,
    name: "Facebook",
    type: "social",
    price: 0
  }
];

export default function App() {
  const [products, setProducts] = useState(productsData);
  const [apps, setApps] = useState(appsData);

  console.log({ products, apps });

  //function for updated product
  function updateProduct(updatedProduct) {
    setProducts(prevProducts => {
      return prevProducts.map(product =>
        product.id === updatedProduct.id ? updatedProduct : product)
    })
  }

  return (
    <div className="App">
      <header>
        <h1>Apple Shop</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </header> 
      <Routes>
        <Route path="/products/:id/edit" element={<EditProductPage updateProduct={updateProduct}/>} />
        <Route path="/products/:id" element={<ViewProductPage />} />
        <Route path="/products" element={<ProductsPage products={products} />}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
