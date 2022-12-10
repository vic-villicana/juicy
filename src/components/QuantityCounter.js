import React from 'react'
import { connect} from 'react-redux'
import {increment, decrement} from '../actions'

class QuantityCounter extends React.Component {


//   onbuttonClick = (event) => {
//       const btn = event.target.parentElement
      
//       console.log(this.props)
//       this.props.changeQuantity(btn)
//     console.log(typeof btn.value)
//     console.log(btn)
//   }

    render() {
        console.log(this.props)
        return (
            <div className='quantity-counter'>
                <div className="counter-title">
                    <p>Quantity</p>
                </div>
                <div className='counter'>
                    <button name='quantity' className='minus' value={undefined} onClick={() => this.props.decrement(this.props.item)}><i className="icon angle down"></i></button>
                    <p className='counter-window'>{this.props.quantity}</p>
                    <button name='quantity' className='plus' value='true' onClick={() => this.props.increment(this.props.item)}><i className="icon angle up"></i></button>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        menu:state.menu,
        item: state.item
    }

}

export default connect(mapStateToProps, {increment, decrement})(QuantityCounter)
