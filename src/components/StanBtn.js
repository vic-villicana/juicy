import Link from '../Link'

const StanBtn = ({className, href, children}) => {
    return (
        <button className={`standard-btn ${className}`} >
           <Link href={href}>{children}</Link>
        </button>
    )
}

export default StanBtn