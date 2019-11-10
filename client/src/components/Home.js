import React from 'react';
import {Container,Col,Row} from 'react-bootstrap'
import image from './image.png'

class Home extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col className="col-lg-3"></Col>
                    <Col className="col-lg-9">
            <div>
               <h2 className="mb-5">Welcome To Contact Manager App</h2>
                <img src={image} alt="man holding sign"/>
            </div>
            </Col>
            </Row>
            </Container>
        )
    }
}

export default Home