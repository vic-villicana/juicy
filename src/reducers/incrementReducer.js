const incrementReducer = (state =[], action) => {
    
    switch(action.payload) {
        case "INCREMENT_ACTION":
            return {...state, quantity: state.quantity +1 || 1}
        case "DECREMENT_ACTION":
            return {...state, quantity:state.quantity -1}
        default:
            return state
    } 
}