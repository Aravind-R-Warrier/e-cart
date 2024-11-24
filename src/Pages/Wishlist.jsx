import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import {removeFromWishlist} from '../Redux/slice/wishListSlice'


function Wishlist() {

  const {wishlist}=useSelector(state=>state.WishListReducer)
  const dispatch=useDispatch()



  return (
   <>
    <Header/>
    <div style={{marginTop:'100px'}}className='container-fluid'>
   <Row>
{ wishlist?.length>0?wishlist.map(product=>(
  <Col>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{width:'100%'}} src= {product?.thumbnail} />
      <Card.Body>
        <Card.Title>{product?.title.slice(0,10)}</Card.Title>
        <Card.Text>
        {product?.description.slice(0,20)}
        </Card.Text>
        <div className="d-flex justify-content-between">
        <Button className='btn btn-light 'onClick={()=>dispatch(removeFromWishlist(product.id))}><i class="fa-solid fa-trash text-danger me-2"></i></Button>
       <Button className='btn btn-light '><i class="fa-solid fa-cart-plus text-info me-2"></i></Button>
        </div>
      </Card.Body>
    </Card>
    </Col>
)):<div className='text-center'>
<img style={{height:"350px"}} src="https://bigbucket.in/static/media/empty-cart.3a208a5e6c065c16bc17.gif" alt="" />
<h2 className='fw-2 text-danger mt-2'>WishList is empty</h2>
</div>
}   </Row>
    </div>
    </>
  )
}

export default Wishlist
