import React from 'react'

class AddButton extends React.Component {

    addToCart = () => {
        const Item = this.props.item
        this.props.sendToCart(Item)
        
    }
    render() {
        return(
            <div>
                <button className='add-btn' onClick={this.addToCart}>Add To Cart</button>
            </div>
        )
    }
}

export default AddButton