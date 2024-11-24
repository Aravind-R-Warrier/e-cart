import React from 'react'
import Header from '../Components/Header'

function Cart() {
  return (
    <div>
        <Header/>
      <div className="row container">
        <div className="col-lg-1"></div>
        <div className="col-lg-7">
          <div className="table shadow mt-5">
            <table className='w-100'>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>1</td>
                <td>product</td>
                <td><img src="https://t3.ftcdn.net/jpg/02/71/77/56/360_F_271775672_yo8ZgraN2IHGbfqP2k0PsLjwvmatUNUJ.jpg" style={{width:'70%',height:'200px'}}/></td>
                <td>$555</td>
                <td><button><i class="fa-solid fa-trash text-danger me-2"></i></button></td>
              </tr>
            </table>
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-3">
          <div className="card shadow rounded mt-5 p-5 w-100">
            <h2 className='text-dark fw-bolder'>Cart Summary</h2>
            <h3><span className='text-dark fw-bolder'>Total products:</span>5</h3>
            <h3>Total price:<span className='text-dark fw-bolder'>$400</span></h3>
          </div>
          <div className="d-grid">
            <button className='btn btn-info mt-2'>Check Out</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
