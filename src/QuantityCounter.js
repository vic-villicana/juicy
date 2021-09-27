import React from 'react'

class QuantityCounter extends React.Component {
    
    render() {
        return (
            <div className='quantity-counter'>
                <div className="counter-title">
                    <p>Quantity</p>
                </div>
                <div className='counter'>
                    <button className='plus'>+</button>
                    <p className='counter-window'>2</p>
                    <button className='minus'>-</button>
                </div>
            </div>
        )
    }
}

export default QuantityCounter