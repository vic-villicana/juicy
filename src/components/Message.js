import mexicanTable from "../imgs/mexicantable.jpg"

const Message = () => {
    return(
        <section className="customer-message">
            <div className="m-message">
                <h2>A Journey That Never Ends</h2>
                <div className="line"></div>
                <p>
                    Since 2011 Juicy Juize Tacos has been on a mission
                    to not only provide Los Angeles with the best
                    authentic Mexican food but also the hospitality 
                    you can expect at the dinner table. From our 
                    family recipes to our excellent catering staff, we 
                    make everynight a special night
                </p>
                <p>sincerly,</p> 
                <h3 className="signature">The Juicy Juice Team</h3>
            </div>
            <div className="m-image" style={{backgroundImage: `url(${mexicanTable})`}} ></div>
        </section>
    )
}
export default Message