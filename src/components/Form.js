import React from 'react' 
import isEmail from 'validator/lib/isEmail'
import Field from './Field'

class Form extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            fields:{
                name:'',
                email:''
            },
            emailList: [],
            fieldErrors: {}
        }
        
        this.changed = this.changed.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }
    
    validate () {
        const person = this.state.fields
        const fieldErrors = this.state.fieldErrors
        const errMessages = Object.keys(fieldErrors).filter((k) => fieldErrors[k] )
        if(!person.name) return true
        if(!person.email) return true
        if(errMessages.length) return true

        return false
    }
    // validate = person => {
    //     const errors = {}
    //     if(!person.name) errors.name = 'Name Required'
    //     if(!person.email) errors.email = 'Email Required'
    //     if(person.email && !isEmail(person.email)) errors.email = 'invalid email'
    //     return errors
    // }

    // changed(event){
    //     const obj = Object.assign({}, this.state.fields)
    //     obj[event.target.name] = event.target.value
    //     console.log(obj)
    //     this.setState({fields:obj})
    // }
    changed({name, value, error}){
        const obj = Object.assign({}, this.state.fields)
        const fieldErrors = Object.assign({}, this.state.fieldErrors)
        fieldErrors[name] = error
        obj[name] = value
        this.setState({fields:obj, fieldErrors})
    }

    // onFormSubmit(event){
    //     // const list = [...this.state.emailList, this.state.fields]
    //     // this.setState({emailList:list, fields:{name:'', email:''}})
    //     const person = this.state.fields
    //     const list = [...this.state.emailList]
    //     const fieldErrors = this.validate(person)
    //     this.setState({fieldErrors})
    //     if(Object.keys(fieldErrors).length) return
    //     this.setState({
    //         emailList:list.concat(person),
    //         fields:{
    //             name:'',
    //             email:''
    //         }
    //     })
    //     event.preventDefault()

    // }
        
        onFormSubmit(event) {
            
            const person = this.state.fields
            event.preventDefault()
            
            if (this.validate()) return 
            const persona = {
                email:person.email,
                name:person.name
                
            }
            this.props.promo(persona)
            
        
            
        }

    render() {
       
        return (
            <div className="form-section info-container">
                <form onSubmit={this.onFormSubmit}>
                    <Field  
                        changed={this.changed} 
                        placeholder={"name"} 
                        name="name"
                        validate={val => (val ?  false : 'name required')} 
                        value={this.state.fields.name}
                    />

                    {/* <input placeholder="name" name="name" value={this.state.fields.name} type="text" onChange={this.changed} />
                    <span style={{color: 'red'}}>{this.state.fieldErrors.name}</span> */}
                    <br />
                    <Field 
                        placeholder={"Email"}
                        name={"email"}
                        changed={this.changed}
                        value={this.state.fields.email}
                        validate={val => (isEmail(val) ? false : 'email required')}
                    />
                    {/* <input placeholder="email" name="email" value={this.state.fields.email} type="text" onChange={this.changed} />
                    <span style={{color:'red'}}>{this.state.fieldErrors.email}</span> */}
                    <input type="submit" disabled={this.validate()} />
                </form>
            </div>
        )
    }
}

export default Form