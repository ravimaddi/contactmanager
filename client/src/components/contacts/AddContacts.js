import React from 'react'
import {connect} from 'react-redux'
import {startAddContacts} from '../../actions/contacts'
import {Form,Button} from 'react-bootstrap'
import {startEditContacts} from '../../actions/contacts'
class AddContacts extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name: (props.customerInfo)? props.customerInfo.name:"",
      email:(props.customerInfo)? props.customerInfo.email:"",
      mobile:(props.customerInfo)? props.customerInfo.mobile:"",
      category:(props.customerInfo)? props.customerInfo.category:false
    }
  }

  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  handleAddContactSubmit=(e)=>{
    e.preventDefault()
    if(this.props.customerInfo){
      const obj=Object.assign({},this.state)
      this.props.dispatch(startEditContacts(obj,this.props.customerInfo._id))
    }
    else{
    const obj=Object.assign({},this.state)
    this.setState({ name:"",
    email:"",
    mobile:"",
    category:""})
    this.props.dispatch(startAddContacts(obj))
    }
    
  }

  render(){
    return(
      <div>
        <Form >
             <Form.Group >
                  <Form.Label><strong>Name</strong></Form.Label>
                  <Form.Control required={true} name="name" value={this.state.name} onChange={this.handleChange} type="text" placeholder="Enter name" />
                  </Form.Group>
                  <Form.Group >
                  <Form.Label><strong>Email address</strong></Form.Label>
                  <Form.Control required={true} name="email" value={this.state.email} onChange={this.handleChange} type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group >
                  <Form.Label><strong>Mobile</strong></Form.Label>
                  <Form.Control required={true} name="mobile" value={this.state.mobile} onChange={this.handleChange} type="text" placeholder="Enter mobile number" />
                  </Form.Group>
                  <Form.Label><strong>Category</strong></Form.Label>
                  <Form.Check
                        type="radio"
                        label="Home"
                        name="category"
                        value="home"
                        onChange={this.handleChange}
                        checked={this.state.category=='home'}
                        required={true}
                      />
                      <Form.Check
                        type="radio"
                        label="Work"
                        value="work"
                        name="category"
                        onChange={this.handleChange}
                        checked={this.state.category=='work'}
                        required={true}
                      />
                           
                  <Button variant="primary" type="submit" onClick={(e)=>this.handleAddContactSubmit(e)}>
                                Submit
                  </Button>
          </Form>
                
      </div>
    )
  }
}


export default connect()(AddContacts)