import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeFromCart } from '../Redux/slice/cartSlice';
import { Link } from 'react-router-dom';

function Cart() {
  const cart = useSelector((state) => state.cartReducer); 
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  // useEffect to update total price whenever the cart changes
  useEffect(() => {
    if (cart?.length > 0) {
      setTotal(
        cart.map((product) => product?.totalPrice).reduce((p1, p2) => p1 + p2, 0) // Sum them up
      );
    } else {
      setTotal(0); 
    }
  }, [cart]);

  return (
    <div style={{ marginTop: '100px',marginBottom:'150px' }}>
      <Header />
      {cart.length > 0 ? (
        <div className="row container">
          <div className="col-lg-1"></div>
          <div className="col-lg-7">
            <div className="table shadow mt-5">
              <table className="w-100">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart?.map((product, index) => (
                    <tr key={product.id}>
                      <td>{index + 1}</td>
                      <td>{product.title}</td>
                      <td>
                        <img
                          src={product.thumbnail}
                          style={{ width: '100%', height: '100%',objectFit:'cover' }}
                          alt={product.title}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          style={{ width: '25px' }}
                          readOnly
                          placeholder={product.quantity}
                        />
                      </td>
                      <td>{product.totalPrice}</td>
                      <td>
                        <button
                          onClick={() => dispatch(removeFromCart(product?.id))} // Fix to dispatch correctly
                        >
                          <i className="fa-solid fa-trash text-danger me-2"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-3">
            <div className="card shadow rounded mt-5 p-5 w-100">
              <h3 className="text-dark fw-bolder">Cart Summary</h3>
              <h4>
                <span className="text-dark fw-bolder">Total products:</span>
                {cart.length}
              </h4>
              <h4>
                Total price:
                <span className="text-dark fw-bolder">${total.toFixed(2)}</span>
              </h4>
            </div>
            <div className="d-grid">
              <button className="btn btn-info mt-2">Check Out</button>
             <div className='d-flex justify-content-between mt-2'>
             <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger'>Empty cart</button>
             <Link to={'/'} className='btn btn-danger'>Shop more</Link>
             </div>
            </div>
         
          </div>
         
          
        </div>
      ) : (
        <div className="text-center">
          <img
            style={{ height: '350px' }}
            src="https://bigbucket.in/static/media/empty-cart.3a208a5e6c065c16bc17.gif"
            alt="Empty Cart"
          />
          <h2 className="fw-2 text-danger mt-2">Cart is empty</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
