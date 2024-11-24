import React, { useEffect } from 'react'
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../Redux/slice/productSlice'
import Header from '../Components/Header'
import { addToWishlist } from '../Redux/slice/wishListSlice'




function Home() {

  const dispatch=useDispatch()
  

  const{allproducts,loading,error}=useSelector(state=>state.productReducer)
  const {wishlist}=useSelector(state=>state.WishListReducer)


  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  const handleWishList=(product)=>{
    const existingProduct=wishlist.find(item=>item.id==product.id)
    if(existingProduct){
      alert("product already exists")
    }else{
      dispatch(addToWishlist(product))
    }
  }

  return (
   <>
    <Header insideHome/>
    <div style={{marginTop:'100px',marginBottom:'200px'}}className='container-fluid'>
       {
      loading? <div className='text-center mt-5'>
          <Spinner animation="border" variant="primary" />
      </div>:
       <Row>

      {
        allproducts?.length>0?allproducts.map(product=>(
          <Col key={product?.id}>
          <Card style={{ width: '16rem', marginTop:"10px"}}>
           <Link to={`/view/${product?.id}`}><Card.Img variant="top" style={{width:'100%'}} src={product?.thumbnail}/></Link>
         <Card.Body>
           <Card.Title>{product?.title.slice(0,10)}..</Card.Title>
           <Card.Text>
             {product?.description.slice(0,20)}
           </Card.Text>
           <div className="d-flex justify-content-between">
           <Button className='btn btn-light ' onClick={()=>handleWishList(product)}><i class="fa-solid fa-heart text-danger me-2"></i></Button>
          <Button className='btn btn-light ' ><i class="fa-solid fa-cart-shopping text-warning me-2"></i></Button>
           </div>
         </Card.Body>
       </Card>
         </Col>
      
        )): <p>Nothing To display</p>
      }
        
      </Row>
    }
    
    </div>
    </>
  )
}

export default Home
