const itemReducer = (state = [], action) => {
    switch(action.type) {
        case "SET_ITEM":
            return action.payload;
        case "INCREMENT_ACTION":
            return {...state, quantity: state.quantity +1 || 1}
        case "DECREMENT_ACTION":
            return {...state, quantity:((state.quantity <= 1) ? 1 :state.quantity -1)}
        default:
            return state
    }
}
export default itemReducer