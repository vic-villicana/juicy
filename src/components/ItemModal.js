import {React, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchMenu } from '../actions'
import juicer from "../api/juicer"


import TacoHeader from '../components/TacoHeader'
import QuantityCounter from '../components/QuantityCounter'
import Substitutions from '../components/Substitutions'
import AddButton from '../components/AddButton'

import mexiPattern from '../imgs/pattern.jpg'


const ItemModal = (props) => {

    const closeModal = (e) => {
        if(e.target.className === 'modal display-block'){
            props.setModal(false);
        }
    }

    const menuItem = props.item
    console.log(props)
    let showOrNo = props.active === true ? 'modal display-block' : 'modal display-none'  
    return(
        <div className={showOrNo} onClick={(e) => closeModal(e)}>
            <div className='small-menu-item'>
                <div className='item-container' style={{background:`linear-gradient(#8fffc1dc, #8fffc1dc), url(${mexiPattern})`}}>
                    <TacoHeader classProp={'_taco-header'} sign={`https://juize.s3.us-west-2.amazonaws.com/${menuItem.img}`}/>
                    <h2 className='menu-item-title'> {menuItem.dish}</h2>
                    <h4 className='menu-item-price'> ${menuItem.price}.00 ea.</h4> 
                    <p className='menu-paragraph'>
                        {menuItem.description}
                    </p>
                    {/* pass the props.quantity in as props */}
                    <QuantityCounter quantity={menuItem.quantity}  />                    
                </div>
                <Substitutions />
                <div className="item-btn">
                    <AddButton item={menuItem} sendToCart={menuItem.sendToCart} />
                </div>
            </div>
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

export default connect(mapStateToProps, {fetchMenu})(ItemModal)