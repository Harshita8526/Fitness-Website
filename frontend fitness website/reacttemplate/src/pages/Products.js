import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from "./NavBar";
import './Shop.css';

const ShopPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products', error));
  }, []);

  return (
    <>
      <NavBar />
      <div className="shop-page">
        <h1>Welcome to our Shop</h1>
        <div className="product-list">
          {products.map(product => (
            <div key={product.Product_Id} className="card1">
              {product.image && (
                <img
                  src={product.image}
                  alt={product.Product_Name}
                  className="card-img-top"
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{product.Product_Name}</h5>
                <p className="card-text desc">Description: {product.Description}</p>
                <p className="card-text cat">Category: {product.Category}</p>
                <p className="card-text pri">Price: ${product.Price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShopPage;
