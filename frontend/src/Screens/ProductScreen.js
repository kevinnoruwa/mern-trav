import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../components/Rating.js'
import axios from 'axios'


const ProductScreen = ({match}) => {
    const [product, setproduct] = useState([])

    useEffect(() => {
        const fetchProduct = async () => {
            const {data} = await axios.get(`/api/products/${match.params.id}`)

            setproduct(data)
        }

        fetchProduct()
    }, [])
    return (
        <>
           <Link className='btn btn-light my-3' to='/'>
               Go Back
           </Link>
           <Row>
               <Col md={6}>
                   <Image alt={product.name} src={product.image} fluid/>
               </Col>
               <Col md={3}>
                   <ListGroup varient="flush">
                       <ListGroup.Item>
                           <h3>{product.name}</h3>
                       </ListGroup.Item>
                       <ListGroup.Item>
                           <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                       </ListGroup.Item>
                       <ListGroup.Item>
                          Price: ${product.price}
                       </ListGroup.Item>
                       <ListGroup.Item>
                          description: ${product.description}
                       </ListGroup.Item>
                   </ListGroup>
               </Col>

               <Col md={3}>
                   <Card>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                          
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                    <strong>{product.countInStock > 0 ?'in Stock' : 'out of stock'}</strong>
                                </Col>
                            </Row>
                            <ListGroup.Item>
                                <Button disabled={product.countInStock == 0} className='btn-block'type='button'>
                                    Add To Cart
                                </Button>
                            </ListGroup.Item>
                          
                        </ListGroup.Item>

                   </Card>

               </Col>


           </Row>
        </>
    )
}

export default ProductScreen
