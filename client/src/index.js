import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import configureStore from './store/configureStore'
import axios from '../src/config/axios'
import {setUser} from './actions/users'
import {startSetContacts} from './actions/contacts'
import App from './App'
import * as serviceWorker from './serviceWorker';


const store = configureStore()

console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})

if(localStorage.getItem('authToken')){
    axios.get('/users/account',{
        headers:{
            'x-auth':localStorage.getItem('authToken')
        }
    })
    .then((response)=>{
        const user=response.data
        store.dispatch(setUser(user))
        store.dispatch(startSetContacts())
    })
}



ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

serviceWorker.unregister();

