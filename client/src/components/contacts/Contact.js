import React,{ useState } from 'react';
import {connect} from 'react-redux'
import AddContacts from './AddContacts'
import {Row,Col,Container,Button} from 'react-bootstrap'
import {startCustomerDelete} from '../../actions/contacts'
import swal from 'sweetalert'
import EditContact from  './EditContact'
import SearchPage from './SearchContacts'

const Contact=(props)=>{
    console.log(props.contacts)
    const [isEdit, setIsEdit] = useState(false);
    const handleDelete=(id)=>{
        swal({
          title: "Are you sure you want to delete it?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if(willDelete) {
            props.dispatch(startCustomerDelete(id))
            swal("Successfully Deleted", {
              icon: "success",
              timer:1500,
            });
            }
        })
    }

    const st={
        background: '#f5f5f5',
        width:'60%',
        margin:'16px auto',
        border:'1px solid #eee',
        boxShadow:'0 2px 3px #ccc',
        padding:'16px',
        textAlign:'center'
    }
        return(
           <React.Fragment>
            <Container>
                    <Row>
                        <Col className="col-lg-9">
                        
                <ul style={{listStyleType:"none"}}>
                    { (props.contacts.length>0)? props.contacts.map((c)=>{
                        return(
                            <li style={st} key={c._id}>
                            <p><strong><em>Name-</em></strong> {c.name}</p>
                            <p><strong><em>Email-</em></strong> {c.email}</p>
                            <p><strong><em>Mobile-</em></strong> {c.mobile}</p>
                            <p><strong><em>Category-</em></strong> {c.category}</p>
                            <Row>
                            <Col className="col-lg-4" >
                            <EditContact customerInfo={c}/>
                            </Col>
                           <Col  className="col-lg-6">
                            <Button className="btn btn-danger" onClick={()=>{handleDelete(c._id)}}>Delete</Button>
                            </Col>
                            </Row>
                            </li>
                        )
                    }):null}
                </ul>
                        </Col>
                    
                
                
                        <Col className="col-lg-3">
                                <h1>ADD Contact</h1>
                                <AddContacts/>
                        </Col>
                    </Row>
               
            
            </Container>
            
            </React.Fragment>
        )
    
}
const mapStateToProps=(state)=>{
    return{
        contacts:state.contacts
    }
}

export default connect(mapStateToProps)(Contact)