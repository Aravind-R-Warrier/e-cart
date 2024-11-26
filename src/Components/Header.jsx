import React, { useEffect, useState } from 'react'
import { Badge, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProducts } from '../Redux/slice/productSlice'



function Header({insideHome}) {

  const dispatch=useDispatch()
  const[count,SetCount]=useState(0)
  const[cartCount,setCartCount]=useState(0)
  const {wishlist}=useSelector(state=>state.WishListReducer)
  const cart=useSelector(state=>state.cartReducer)
  





  useEffect(()=>{
    SetCount(wishlist.length)
    setCartCount(cart.length)
  },[wishlist,cart])
  return (
    <>
      
      <Navbar expand="lg" style={{height:'80px'}} className="bg-info fixed-top" >
      <Container>
        <Navbar.Brand  className='fs-3 head'>
          <Link to={'/'}style={{color:'white',textDecoration:'none',fontSize:'30px'}}>
          <i class="fa-solid fa-truck-fast fa-bounce me-2"></i>Buy-It
          </Link>
         
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {insideHome && <Form.Control
              type="text"
              placeholder="Search"
              className=" w-25 ms-5"
            style={{height:'40px'}}
            onChange={e=>dispatch(searchProducts(e.target.value.toLowerCase()))}
            />}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <Link to={'./wishlist'} style={{textDecoration:'none',color:"black",fontWeight:"bold"}}><i class="fa-solid fa-heart text-danger me-2"></i>Wishlist
              <Badge bg='sucess rounded ms-2'>{count}</Badge>
              </Link>
              </Nav.Link>

            <Nav.Link href="#link">
            <Link to={'./cart'} style={{textDecoration:'none',color:"black",fontWeight:"bold"}}><i class="fa-solid fa-cart-shopping text-warning me-2"></i>Cart
              <Badge bg='success rounded ms-2'>{cartCount}</Badge>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
