import React from 'react';
import {connect} from 'react-redux'
import {startAddUser} from '../../actions/users'
import {Container,Row,Col,Button,Form} from 'react-bootstrap'
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            email:"",
            mobile:"",
            password:""
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleRegistraionSubmit=(e)=>{
        e.preventDefault()
        const registerData = {
            username: this.state.username,
            email: this.state.email,
            mobile:this.state.mobile,
            password: this.state.password
        }
        const redirect = () => this.props.history.push('/users/login')
        this.props.dispatch(startAddUser(registerData,redirect))
    }
    render(){
        return(
            <div >
                <Container>
                    <Row>
                       
                    <Col className="col-lg-3"></Col>
                    <Col className="col-lg-6">
                    <h3>Register</h3>
                    <Form onSubmit={this.handleRegistraionSubmit}>
                    <Form.Group >
                                <Form.Label>User Name</Form.Label>
                                <Form.Control name="username" value={this.state.username} onChange={this.handleChange} type="text" placeholder="Enter name" />
                            </Form.Group>
                        <Form.Group >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" value={this.state.email} onChange={this.handleChange} type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control name="mobile" value={this.state.mobile} onChange={this.handleChange} type="text" placeholder="Enter mobile number" />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" value={this.state.password} onChange={this.handleChange}   type="password" placeholder="Password" />
                            </Form.Group>
                           
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                    </Form>
                </Col>
                </Row>
                </Container>
            </div>

        )
    }
}

export default connect()(Register)