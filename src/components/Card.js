const Card = ({name, img, children}) => {
    return(
        <div className="card" style={{backgroundImage:`url(${img})`}}>
            <h3>{name}</h3>
            {children}
        </div>
    )
}

export default Card