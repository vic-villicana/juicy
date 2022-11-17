import TacoHome from './TacoHome'
import mexicanTable from '../imgs/mexicantable.jpg'
import StanBtn from './StanBtn'
import pattern from '../imgs/pattern.jpg'
import chilis from '../imgs/chilis.jpg'
import Card from './Card'
import mexitable from '../imgs/mexicantable.jpg'
import sign from '../imgs/sign.jpg'
import TacoHeader from '../components/TacoHeader'
import ContactForm from '../components/ContactForm'
import Message from './Message'

const Home = (props) => {

    return(
        <div>
            <TacoHome />
            
            <section className="cards" >
                <div className="sub-heading">
                    <h2>A unique and authentic <br/> blend of flavors</h2>
                    <div className="line"></div>
                </div>
                <div className="card-flex">
                    <Card 
                        name="all your favorites, made fresh"
                        img={chilis}
                    >
                        
                        <StanBtn href="/order">
                            Order Now
                        </StanBtn>
                    </Card>
                    <Card 
                    
                        name="Family, Food, Tradition"
                        img={mexitable}
                    >
                        
                        <StanBtn href="/contact">
                            Catering
                        </StanBtn>
                    </Card>
                    <Card 
                        name="Ask us Anything"
                        img={sign}
                    >
                        
                        <StanBtn href={"/contact"} >
                            Contact Us
                        </StanBtn>
                    </Card>
                </div>
            </section>
            <Message />
            {/* <section className="intro" style={{backgroundImage:`linear-gradient(rgba(143, 255, 193, 0.863), rgba(143, 255, 193, 0.863)), url(${pattern})`}}>
                <div className="info-pic" style={{backgroundImage: `linear-gradient(rgb(65, 65, 65, 0.568), rgb(65, 65, 65, 0.268)), url(${mexicanTable})`}}>
                    <h2>bringing the party <br/> to you!</h2>
                </div>
                <div className="info-p">
                    <p>
                        Since 2011 Juicy Juize Tacos has 
                        been on a mission to provide
                        Los Angeles with the best 
                        authentic Mexican food but 
                        also the hospitality you can 
                        expect at the dinner table. 
                        Which is why weare proud to 
                        announce that we are starting
                        our own meal prep service!
                    </p>
                </div>
                <StanBtn className="info-btn" href="/contact">
                    Book Event
                </StanBtn>
            </section> */}


                    <ContactForm promo={props.promoSub} />
               

        </div>
        
    )
}

export default Home