import juicer from '../api/juicer'

//menu action
export const fetchMenu = () => async dispatch => {
    const response = await juicer.get('/menuitems')
    dispatch({type:'FETCH_MENU', payload:response.data.data})
}
//item action
export const setItem = (state) => async dispatch => {
    dispatch({type:'SET_ITEM', payload:state})
}

export const increment = (state) => async dispatch => {
    dispatch({type:'INCREMENT_ACTION', payload: state})
}

export const decrement = (state) =>  async dispatch => {
    dispatch({type:'DECREMENT_ACTION', payload: state})
}

//cart action

export const addToCart = (state) => async dispatch => {
    dispatch({type: 'ADD_TO_CART', payload:state})

}


