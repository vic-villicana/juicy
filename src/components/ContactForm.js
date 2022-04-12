import React from 'react'
import StanBtn from './StanBtn.js'
import pattern from '../imgs/pattern.jpg'
import mexicanTable from '../imgs/mexicantable.jpg'


class ContactForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            formField:{
                name:'',
                email:'',
                content:''
            }
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.onSubmision = this.onSubmission.bind(this)
    }

    onInputChange(){

    }

    onSubmission(){

    }

    render(){
        return(
            <div>
                <section className="intro" style={{backgroundImage:`linear-gradient(rgba(255, 218, 224, 0.863), rgba(2255, 218, 224, 0.863)), url(${pattern})`}}>
                    
                    <div className="info-p">
                        <h2 className="title">More Than Just Food</h2>
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
                    <div className="info-pic" style={{backgroundImage: `linear-gradient(rgb(65, 65, 65, 0.568), rgb(65, 65, 65, 0.268)), url(${mexicanTable})`}}>
                        <h2>bringing the party <br/> to you!</h2>
                    </div>
                    <div className="form-section contact-us info-container">
                        <form >
                            <input 
                                type={"text"}
                                placeholder="Full Name"
                                onChange={this.onInputChange}
                                value={this.state.formField.name}
                                name={"name"}
                            />
                            <input 
                                type={"text"}
                                placeholder={"Email"}
                                value={this.state.formField.email}
                                onChange={this.onInputChange}
                                name={"email"}
                            />
                            <textarea
                                rows = "6" 
                                cols = "40"
                                type={"text"}
                                placeholder={"How can we help you?"}
                                value={this.state.formField.content}
                                name={"content"}
                                onChange={this.onInputChange}
                            ></textarea>
                            <input type={"submit"} placeholder={"Submit"} />
                        </form>
                    </div>
                </section>
                
            </div>
        )
    }
}

export default ContactForm