const menuReducer =  (state = [], action) => {
    switch (action.type) {
        case 'MENU_SELECTED':
            return action.payload;
        default:
            return state
    }
}
export default menuReducer 