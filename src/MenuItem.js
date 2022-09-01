import React from 'react'
import { Link, useParams } from 'react-router-dom'

import data from './data'
import TacoHeader from './components/TacoHeader'
import QuantityCounter from './components/QuantityCounter'
import Substitutions from './components/Substitutions'
import AddButton from './components/AddButton'

import taco from '../src/imgs/tacos.jpg'
import burry from '../src/imgs/burry.jpg'
import enchiladas from '../src/imgs/enchiladas.jpg'
import tinga from '../src/imgs/tinga.jpg'
import mole from '../src/imgs/mole.jpg'
import huaraches from '../src/imgs/huaraches.jpg'
import mexiPattern from './imgs/pattern.jpg'

//the MenuItem component is goingto keep the state of the substituted items, and the quantity of the selected item

const MenuItem = () => {
    const {item} = useParams()
    const menuItem = data.find((items) => items.menuItemId === Number(item))
    console.log(typeof item)
    console.log(useParams())

        return(
            <div className='menu-item'>
                <div className='item-container' style={{background:`linear-gradient(#8fffc1dc, #8fffc1dc), url(${mexiPattern})`}}>
                    <TacoHeader sign={menuItem.imgs}/>
                    <h2 className='menu-item-title'> {menuItem.dish}</h2>
                    <h4 className='menu-item-price'> ${menuItem.price}.00 ea.</h4> 
                    <p className='menu-paragraph'>
                        {menuItem.description}
                    </p>
                    {/* pass the props.quantity in as props */}
                    <QuantityCounter quantity={menuItem.quantity} changeQuantity={menuItem.changeQuantity} />                    
                </div>
                <Substitutions />
                <AddButton item={menuItem} sendToCart={menuItem.sendToCart} />
            </div>
        )

}

export default MenuItem