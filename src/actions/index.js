import juicer from '../api/juicer'

export const fetchMenu = () => async dispatch => {
        const response = await juicer.get('/menuitems')

        dispatch({type:'FETCH_MENU', payload:response.data.data})
    }

