

const contactsReducer=(state=[],action)=>{
    switch(action.type){
        case "CONTACTS_LIST":
            return [...action.payload]
        case "ADD_CONTACT":
            return [...state,action.payload]
        case "REMOVE_CONTACT":
            return state.filter((c)=>{return c._id!=action.payload})
        case "EDIT_CONTACT":
            return state.map((c)=>{if(c._id==action.payload._id){
                                return action.payload
                                    }
                                    else{
                                        return c
                                    }
        })
        case "SEARCH_CONTACT":
            const arr=[]
            let obj= state.filter((c)=>{
                if(c.name==action.payload){
                    return c
                }  
            })
            if(obj){
                arr.push(obj)
                return [...arr]
            }
            else{
                return [...state]
            }
        default:
            return state
    }

}

export default contactsReducer