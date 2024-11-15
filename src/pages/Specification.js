import React, { useState, useEffect } from 'react';
import '../index.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';
function Specification() {
  const [productData, setProductData] = useState(null);
  const { id } = useParams();
 let dispatch=useDispatch();
  useEffect(() => {
    axios.get(`https://fakestoreapi.in/api/products/${id}`)
      .then((res) => {
        setProductData(res.data.product); 
        console.log(res.data.product);
      })
  }, [id]);

  if (!productData) {
    return <div>Loading...</div>;
  }
  const handleAddToCart = () => {
    dispatch(addToCart(productData));
  };

  return (
    <div className='specification-container'>
      <div className='left-container'>
        <img className='specification-image' src={productData.image} alt={productData.title} />
      </div>
      <div className='right-container'>
        <b><p className='title'>{productData.title}</p></b>
        <p className='description'>{productData.description}</p>
        <p className='brand'><b>Brand:</b> {productData.brand}</p>
        <p className='model'><b>Model:</b> {productData.model}</p>
        <p className='color'><b>Color:</b> {productData.color}</p>
        <p className='category'><b>Category:</b> {productData.category}</p>
        <p className='price'><b>Price:</b>${productData.price}</p>
        <p className='discount'><b>Discount:</b> {productData.discount}%</p>
        <button type="button" class="btn btn-primary" onClick={handleAddToCart}><i class="fa-solid fa-cart-plus"></i><span className='cart-text'>Add to Cart</span></button>
      </div>
    </div>
  );
}

export default Specification;
