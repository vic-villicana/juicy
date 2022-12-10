import juicer from '../api/juicer'


export const setItem = (state) => async dispatch => {
    dispatch({type:'SET_ITEM', payload:state})
}

export const fetchMenu = () => async dispatch => {
    const response = await juicer.get('/menuitems')
    dispatch({type:'FETCH_MENU', payload:response.data.data})
}

export const increment = (state) => async dispatch => {
    dispatch({type:'INCREMENT_ACTION', payload: state})
}

export const decrement = (state) =>  async dispatch => {
    dispatch({type:'DECREMENT_ACTION', payload: state})
}


