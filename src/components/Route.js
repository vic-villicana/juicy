import {useEffect, useState} from 'react'

const Router = ({path, children}) => { 
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
            console.log('popevent', window.location.pathname)
        };
        window.addEventListener('popstate', onLocationChange)
        
        return () => {
             window.removeEventListener('popstate', onLocationChange)
        }
    },[])
    console.log(window.location.pathname)
    const childe = window.location.pathname === path ? children : null 
    return(
        <div className=''>
            {childe}
        </div>
    )
}
export default Router