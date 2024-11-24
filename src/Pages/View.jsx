import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../Redux/slice/wishListSlice'
function View() {
  const{id}=useParams() //can handle pathRelated infrmations frm components
  // console.log(id);
  const[product,setProduct]=useState({})
  const dispatch=useDispatch()

  const {wishlist}=useSelector(state=>state.WishListReducer)

  useEffect(()=>{
    if(localStorage.getItem("allProducts")){
      const allProducts=JSON.parse(localStorage.getItem("allProducts"))
      setProduct(allProducts.find(item=>item.id==id))
    }else{
      setProduct("")
    }
  },[])

  const handleWishList=(product)=>{
    const existingProduct=wishlist.find(item=>item.id==product.id)
    if(existingProduct){
      alert("product already exists")
    }else{
      dispatch(addToWishlist(product))
    }
  }


  // console.log(product)
  return (
    <>
    <Header/>
    <div style={{marginBottom:"200px",marginTop:"150px"}}>
    <div className="container-fluid mt-5 row ">
      <div className="col-lg-4">
        <img src={product?.thumbnail} alt="" />
      </div>
      <div className="col-lg-2"></div>
      <div className="col-lg-6">
        <p>PID:{product?.id}</p>
        <h1>{product?.title}</h1>
        <p>{product?.description}</p>
           <h3>price: <span className='text-danger'>{product?.price}</span></h3>
           <div className="d-flex justify-content-between">
           <Button className='btn btn-outline-info ' onClick={()=>handleWishList(product)}><i class="fa-solid fa-cart-plus text-info me-2"></i></Button>
        <Button className='btn btn-outline-warning '><i class="fa-solid fa-trash text-danger me-2"></i></Button>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default View
