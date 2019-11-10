import {createStore,combineReducers,applyMiddleware} from 'redux'
import userReducer from '../reducers/userReducer'
import contactsReducer from '../reducers/contactsReducer'
import thunk from 'redux-thunk'

const configureStore=()=>{
    const store=createStore(combineReducers({
        user:userReducer,
        contacts:contactsReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore