import axios from '../config/axios'
import swal from 'sweetalert'

export const setContacts=(contacts)=>{
    return{
        type:"CONTACTS_LIST",
        payload:contacts
    }
}

export const addContact=(contact)=>{
    return{
        type:"ADD_CONTACT",
        payload:contact
    }
}

export const editContact=(c)=>{
    return {
        type:"EDIT_CONTACT",
        payload:c
    }

}

export const deleteContact=(id)=>{
    return{
        type:"REMOVE_CONTACT",
        payload:id
    }
}

export const searchContact=(name)=>{
        return {
            type:"SEARCH_CONTACT",
            payload:name
        }
}


export const startSetContacts=()=>{
    return (dispatch)=>{
    axios.get("/contacts",{
        headers:{
            'x-auth':localStorage.getItem('authToken')
        }
    })
    .then((response)=>{
        const contacts=response.data
        dispatch(setContacts(contacts))
    })
    .catch((err)=>{
        alert(err)
    })
}

}



export const startAddContacts=(formData)=>{
    return(dispatch)=>{
        axios.post('/contacts',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const contact=response.data
            dispatch(addContact(contact))
        })
        .catch((err)=>{
            alert(err)
        })
    }
}


export const startEditContacts=(obj,id)=>{
    return(dispatch)=>{
        axios.put(`/contacts/${id}`,obj,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            swal({
                title: "Edited!",
                text: `${obj.name} contact has been Edited! You can close the Modal`,
                type: "success",
                timer: 2000
                })
            dispatch(editContact(response.data))
        })
        .catch((err)=>{
            alert(err)
        })
    }
}

export const startCustomerDelete=(id)=>{
    return(dispatch)=>{
        axios.delete(`/contacts/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            
            dispatch(deleteContact(id))
        })
        .catch((err)=>{
            alert(err)
        })
    }
}