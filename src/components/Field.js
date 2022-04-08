import React from 'react'
import PropTypes from 'prop-types'

class Field extends React.Component{
    
    static propTypes = {
        placeholder: PropTypes.string,
        name: PropTypes.string.isRequired,
        value: PropTypes.string,
        validate: PropTypes.func,
        changed: PropTypes.func.isRequired
    };

    state = {
        value: this.props.value,
        error: false
    };

    static getDerivedStateFromProps(nextProps) {
        return {value: nextProps.value}
    }

    onChange = evt => {
        const name = this.props.name
        const value = evt.target.value
        const error = this.props.validate ? this.props.validate(value) : false

        this.setState({value, error})

        this.props.changed({name, value, error})
    } 

    render(){
        return (
            <div>
                <input
                    type="text"
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                    onChange={this.onChange}
                />
                <span style={{color:'red'}}>{this.state.error}</span>
            </div>
        )
    }
}

export default Field