import juicer from '../api/juicer'


export const setItem = (state) => async dispatch => {
    dispatch({type:'SET_ITEM', payload:state})
}

export const fetchMenu = () => async dispatch => {
        const response = await juicer.get('/menuitems')

        dispatch({type:'FETCH_MENU', payload:response.data.data})
}


