import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'

class AddButton extends React.Component {

    addToCart = () => {
        
        // this.props.sendToCart(Item)
        // console.log(this.props)
    }
    render() {
        console.log(this.props)
        return(
        
                <button className='add-btn' onClick={() => this.props.addToCart(this.props.item)}>Add To Cart</button>
       
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart:state.cart,
    }
}
export default connect(mapStateToProps, {addToCart})(AddButton)