import TacoHome from './TacoHome'
import mexicanTable from '../imgs/mexicantable.jpg'
import StandardBtn from '../components/StanBtn'
import pattern from '../imgs/pattern.jpg'
import chilis from '../imgs/chilis.jpg'
import Card from './Card'
import mexitable from '../imgs/mexicantable.jpg'
import sign from '../imgs/sign.jpg'
import TacoHeader from '../components/TacoHeader'
import Form from '../components/Form'

const Home = () => {
    return(
        <div>
            <TacoHome />
            <section className="intro" style={{backgroundImage:`linear-gradient(rgba(143, 255, 193, 0.863), rgba(143, 255, 193, 0.863)), url(${pattern})`}}>
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
                <StandardBtn className="info-btn">
                    Book Event
                </StandardBtn>
            </section>
            <section className="cards" >
                <div className="sub-heading">
                    <h2>A unique and authentic <br/> blend of flavors</h2>
                    <div className="line"></div>
                </div>
                <Card 
                    name="all your favorites, made fresh"
                    img={chilis}
                >
                    
                    <StandardBtn >
                        Order Now
                    </StandardBtn>
                </Card>
                <Card po
                
                    name="Family, Food, Tradition"
                    img={mexitable}
                >
                    
                    <StandardBtn >
                        Book Event
                    </StandardBtn>
                </Card>
                <Card 
                    name="Ask us Anything"
                    img={sign}
                >
                    
                    <StandardBtn >
                        Contact Us
                    </StandardBtn>
                </Card>
            </section>
            <section className="contact-section">
                <h4 className="info-p">
                    Come taste years of tradition, 
                    serving authentic recipes with 
                    Los Angeles for 20 years.
                </h4>
                <TacoHeader sign={chilis}/>
                <div className="info-container">
                    <div className="sub-heading">
                        <h2>meals made fresh daily</h2>
                    </div>
                    <div className="info-p">
                    <p>
                        since 2011 Juicy Juize Tacos has been
                        on a mission to provide Los Angeles
                        with the best authentic Mexican food
                        but also the hospitality you can 
                        expect at the dinner table. 
                    </p>
                    </div>
                    <StandardBtn className="info-btn">
                        Contact Us!
                    </StandardBtn>
                </div>
                <div className="contact-form">
                    <div className="sub-heading">
                        <h3>Always happy to answer questions</h3>
                    </div>
                    
                    <div className="info-p">
                        <p>
                            sign Up for monthly promotions and special offers.
                        </p>
                    </div>
                    <Form />
                </div>
            </section>
        </div>
        
    )
}

export default Home