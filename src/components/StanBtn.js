const StandardBtn = ({className, children}) => {
    return (
        <button className={`standard-btn ${className}`} >
           {children}
        </button>
    )
}

export default StandardBtn