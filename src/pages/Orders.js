import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../slices/cartSlice.js'; 
import '../index.css';
import { useNavigate } from 'react-router-dom';

function Orders() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const [shipping, setShipping] = useState(5);
  const [promoCode, setPromoCode] = useState('');

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPriceAfterDiscount = item.price - (item.discount || 0); 
      return total + itemPriceAfterDiscount * item.quantity;
    }, 0);
  };

  const navigate = useNavigate();

  const applyPromoCode = () => {
    if (promoCode === "DISCOUNT") {
      return calculateSubtotal() * 0.1;
    }
    return 0;
  };

  const calculateTotalPrice = () => {
    const subtotal = calculateSubtotal();
    const discount = applyPromoCode();
    return subtotal + shipping - discount;
  };
  const handleQuantityChange = (id, action) => {
    if (action === 'increase') {
      dispatch(addToCart({ id, quantity: 1 }));
    } else if (action === 'decrease') {
      dispatch(removeFromCart({ id }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <section className="h-100 h-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0">Shopping Cart</h1>
                        <h6 className="mb-0 text-muted">{cartItems.length} items</h6>
                      </div>
                      <hr className="my-4"/>
                      {cartItems.map((item) => (
                        <div className="row mb-4 d-flex justify-content-between align-items-center" key={item.id}>
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img src={item.image} className="img-fluid rounded-3" alt={item.title} />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">{item.category}</h6>
                            <h6 className="mb-0">{item.title}</h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button
                              className="btn btn-link px-2"
                              onClick={() => handleQuantityChange(item.id, 'decrease')}
                            >
                              <i className="fas fa-minus"></i>
                            </button>

                            <input
                              id={`quantity-${item.id}`}
                              min="0"
                              name="quantity"
                              value={item.quantity}
                              type="number"
                              className="form-control form-control-sm"
                              readOnly
                            />

                            <button
                              className="btn btn-link px-2"
                              onClick={() => handleQuantityChange(item.id, 'increase')}
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                          <div className="col-md-2 col-lg-2 col-xl-2 text-muted">
                            {item.discount > 0 && <h6 className="mb-0">Discount: -${(item.discount * item.quantity).toFixed(2)}</h6>}
                          </div>

                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <h6 className="mb-0">${(item.price - (item.discount || 0)) * item.quantity}</h6>
                          </div>
                         
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-muted" onClick={() => handleRemove(item.id)}>
                              <i className="fas fa-times"></i>
                            </a>
                          </div>
                        </div>
                      ))}
                      <hr className="my-4"/>

                      <div className="pt-5">
                        <h6 className="mb-0"><a href='#' className="text-body" onClick={() => navigate('/products')}>
                            <i className="fas fa-long-arrow-alt-left me-2"></i>Back to shop
                          </a></h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-body-tertiary">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr className="my-4"/>

                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">Items {cartItems.length}</h5>
                        <h5>${calculateSubtotal().toFixed(2)}</h5>
                      </div>

                      <h5 className="text-uppercase mb-3">Shipping</h5>

                      <div className="mb-4 pb-2">
                        <select className="form-select" onChange={(e) => setShipping(Number(e.target.value))}>
                          <option value="5">Standard Delivery - $5.00</option>
                          <option value="10">Express Delivery - $10.00</option>
                          <option value="20">Overnight Delivery - $20.00</option>
                        </select>
                      </div>

                      <h5 className="text-uppercase mb-3">Promo Code</h5>

                      <div className="mb-5">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter promo code"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                        />
                      </div>

                      <hr className="my-4"/>

                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>${calculateTotalPrice().toFixed(2)}</h5>
                      </div>

                      <button type="button" className="btn btn-dark btn-block btn-lg" data-mdb-ripple-color="dark">
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Orders;
