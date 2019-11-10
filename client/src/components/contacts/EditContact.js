import React from 'react'
import { Button,Modal } from 'react-bootstrap';
import Addcontacts from './AddContacts'
class EditContact extends React.Component{
    constructor(props) {
        super(props);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    
      render() {
        
    
        return (
          <div>
           
    
            <Button onClick={this.handleShow}>
              Edit 
            </Button>
    
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Contact</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Addcontacts customerInfo={this.props.customerInfo} />
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
      }
}
export default EditContact