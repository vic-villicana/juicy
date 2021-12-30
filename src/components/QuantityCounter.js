import React from 'react'

class QuantityCounter extends React.Component {
    
  onbuttonClick = (event) => {
      const btn = event.target.parentElement
      
    //   console.log(this.props)
      this.props.changeQuantity(btn)
    // console.log(`clicked on the ${btn.name}: ${btn.value}`)
  }

    render() {
        return (
            <div className='quantity-counter'>
                <div className="counter-title">
                    <p>Quantity</p>
                </div>
                <div className='counter'>
                    <button name='quantity' className='minus' value={false} onClick={this.onbuttonClick}><i className="icon angle down"></i></button>
                    <p className='counter-window'>{this.props.quantity}</p>
                    <button name='quantity' className='plus' value={true} onClick={this.onbuttonClick}><i className="icon angle up"></i></button>
                    
                </div>
            </div>
        )
    }
}

export default QuantityCounter