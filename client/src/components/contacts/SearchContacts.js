import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import {connect} from 'react-redux'
import {searchContact} from '../../actions/contacts'

const SearchPage = (props) => {

    const handleChange=(e)=>{
        props.dispatch(searchContact(e.target.value))
    }
  return (
    <MDBCol md="6">
      <div className="input-group md-form form-sm form-1 pl-0">
        <div className="input-group-prepend">
          <span className="input-group-text purple lighten-3" id="basic-text1">
            <MDBIcon className="text-white" icon="search" />
          </span>
        </div>
        <input onChange={handleChange} className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
      </div>
    </MDBCol>
  );
  
}
const mapStateToProps=(state)=>{
        return{
            contacts:state.contacts
        }
}



export default connect(mapStateToProps)(SearchPage)