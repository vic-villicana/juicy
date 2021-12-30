import React from 'react' 

class Form extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            fields:{
                name:'',
                email:''
            },
            emailList:[]
        }
        
        this.changed = this.changed.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    
    

    changed(event){
        const obj = Object.assign({}, this.state.fields)
        obj[event.target.name] = event.target.value
        console.log(obj)
        this.setState({fields:obj})
    }

    onFormSubmit(event){
        const list = [...this.state.emailList, this.state.fields]
        this.setState({emailList:list, fields:{name:'', email:''}})
        event.preventDefault()

    }

    render() {
        console.log(this.state)
        return (
            <div className="form-section info-container">
                <form onSubmit={this.onFormSubmit}>
                    <input placeholder="name" name="name" value={this.state.fields.name} type="text" onChange={this.changed} />
                    <input placeholder="email" name="email" value={this.state.fields.email} type="text" onChange={this.changed} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Form