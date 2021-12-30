import chilis from '../imgs/platos.jpg'
import StandardBtn from './StanBtn'

const TacoHome = (props) => {
   
    return (
    <div className="taco-header home" style={{backgroundImage: `linear-gradient(rgb(65, 65, 65, 0.568), rgb(65, 65, 65, 0.568)), url(${chilis})`}}>
        <div className="home-header">
            <h1>Juicy Juice Tacos</h1>
            <div className="home-btn">
                <StandardBtn>
                    Order Now
                </StandardBtn>
                <StandardBtn>
                    Catering
                </StandardBtn>
            </div>
        </div>
        
    </div>
)
}
export default TacoHome