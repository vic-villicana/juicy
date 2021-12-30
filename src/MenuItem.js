import React from 'react'
import TacoHeader from './components/TacoHeader'
import QuantityCounter from './components/QuantityCounter'
import Substitutions from './components/Substitutions'
import AddButton from './components/AddButton'
import mexiPattern from './imgs/pattern.jpg'

//the MenuItem component is goingto keep the state of the substituted items, and the quantity of the selected item

class MenuItem extends React.Component {
    
    render() {       
        return(
            <div className='menu-item'>
                <div className='item-container' style={{background:`linear-gradient(#8fffc1dc, #8fffc1dc), url(${mexiPattern})`}}>
                    <TacoHeader sign={this.props.theItem.imgs}/>
                    <h2 className='menu-item-title'> {this.props.theItem.dish}</h2>
                    <h4 className='menu-item-price'> ${this.props.theItem.price}.00 ea.</h4> 
                    <p className='menu-paragraph'>
                        {this.props.theItem.desc}
                    </p>
                    {/* pass the props.theItem.quantity in as props */}
                    <QuantityCounter quantity={this.props.theItem.quantity} changeQuantity={this.props.changeQuantity} />                    
                </div>
                <Substitutions />
                <AddButton item={this.props.theItem} sendToCart={this.props.sendToCart} />
            </div>
        )
    }
}

export default MenuItem