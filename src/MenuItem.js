import {React, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchMenu } from './actions'

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

const MenuItem = (props) => {
    const {item} = useParams()
    //this is a fucking stupid line of code you should NEVER EVER read hard coded values to use as state.
    // const menuItem = props.menu.find((items) => items.menuItemId === Number(item))
    const menuItem = props.item
    console.log(typeof item)
    console.log( menuItem)
    console.log(props.menu)
    console.log(useParams())
    useEffect(() => {
        props.fetchMenu()
    }, [])
        return(
            <div className='menu-item'>
                <div className='item-container' style={{background:`linear-gradient(#8fffc1dc, #8fffc1dc), url(${mexiPattern})`}}>
                    <TacoHeader sign={"menuItem.imgs"}/>
                    <h2 className='menu-item-title'> {menuItem.dish}</h2>
                    <h4 className='menu-item-price'> ${menuItem.price}.00 ea.</h4> 
                    <p className='menu-paragraph'>
                        {menuItem.description}
                    </p>
                    {/* pass the props.quantity in as props */}
                    <QuantityCounter quantity={props.theItem.quantity} changeQuantity={props.changeQuantity} />                    
                </div>
                <Substitutions />
                <AddButton item={menuItem} sendToCart={menuItem.sendToCart} />
            </div>
        )

}

const mapStateToProps = state => {
    console.log(state)
    return {
        menu:state.menu,
        item:state.item
    }
}

export default connect(mapStateToProps, {fetchMenu})(MenuItem)