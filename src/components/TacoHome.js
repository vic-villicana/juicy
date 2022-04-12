import chilis from '../imgs/platos.jpg'
import StanBtn from './StanBtn'

const TacoHome = (props) => {
   
    return (
    <div className="taco-header home" style={{backgroundImage: `linear-gradient(rgb(65, 65, 65, 0.568), rgb(65, 65, 65, 0.568)), url(${chilis})`}}>
        <div className="home-header">
            <h1>Juicy Juice Tacos</h1>
            <div className="home-btn">
                <StanBtn href="/order">
                    Order Now
                </StanBtn>
                <StanBtn>
                    Catering
                </StanBtn>
            </div>
        </div>
        
    </div>
)
}
export default TacoHome