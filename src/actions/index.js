export const selectMenu = (menuId) => {
    return (dispatch, getState) => {
        dispatch({type: "MENU_SELECTED", payload: menuId})
    }
    
    // return {
    //     type:'MENU_SELECTED',
    //     payload:menuId
    // }
}

export const fetchItems = () => {
    const menuItems =[0,1,2,3,4,5,5,]
    return{
        type:'FETCH_ITEMS'
    }
}