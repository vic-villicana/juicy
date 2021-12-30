import pattern from '../imgs/pattern.jpg'

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage:`url(${pattern})`}}>
            <p className="legalText"></p>
        </div>
    )
}

export default Footer