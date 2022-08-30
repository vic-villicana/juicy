import {Link} from 'react-router-dom'

const StanBtn = ({className, href, children}) => {
    
    return (
        <button className={`standard-btn ${className}`} >
           <Link to={href}> {children} </Link>
        </button>
    )
}

export default StanBtn