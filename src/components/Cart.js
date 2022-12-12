import React, {useState} from 'react'
import ModalBtn from './ModalBtn'
import Modal from './Modal'
import pattern from '../imgs/pattern.jpg'
import { connect } from 'react-redux'
import StanBtn from './StanBtn'


const Cart = (props) => {
 
    // const [cart, setCart] = useState('Tacos')
    // const [cartTotal, setCartTotal] = useState('$19.55')
    const [orderType, setOrderType] = useState('TakeOut')
    const [pickUpTime, setpickUpTime] = useState('Today 12:35')
    const [orderModal, setOrderModal] = useState(false)
    const [timeModal, setTimeModal] = useState(false)

    // functions for order modal
   const openOrderModal = () => {
       setOrderModal(true)    
   }

   const closeOrderModal = () => {
       setOrderModal(false)
   }

   const setModalOptions = (option) => {
        setOrderType(option)
        closeOrderModal()
   }

   const displayOptions = (optionOne, optionTwo, optionThree) => {
        return (
            <div className="modal-options">
                Select Your Order Type
                <button className="option-1" onClick={() => setModalOptions(optionOne)}>{optionOne}</button>
                <button className="option-2" onClick={() => setModalOptions(optionTwo)}>{optionTwo}</button>
                <button className="option-2" onClick={() => setModalOptions(optionThree)}>{optionThree}</button>
            </div>
        )
   }

   //modal functions for time modal
   const openTimeModal = () => {
       setTimeModal(true)
   }
   const closeTimeModal = () => {
       setTimeModal(false)
   }

   const calculateTotal = () => {
       let cartTotal = 0
       const cartItems = props.items
       for(let key of cartItems ){
           cartTotal += (key.price * key.quantity)
       }
       return cartTotal
   }

   const getCartState = () => {
       
        const items = props.cart
        console.log(props.items)
        console.log(props.cart)
        
        return items.map((item) => {
            return (
                <React.Fragment>
                    <li className='cart-items'>
                        <div className='cart-title'>{item.dish}</div>
                        <div>{item.quantity}</div>
                        <div>${item.price}</div>
                    </li>
                </React.Fragment>
           )
        })
        
   }
    
    return(
        <div className="Cart" style={{backgroundImage:`url(${pattern})`}} >
            <h2>Cart</h2>
            <div className="order-details">
                <Modal handleClose={closeOrderModal} show={orderModal}>
                    {displayOptions("Takeout", "Delivery", "Curbside")}
                </Modal>
                <ModalBtn modalOpen={openOrderModal}>
                    Order Type: {orderType}
                </ModalBtn>

                <Modal show={timeModal} handleClose={closeTimeModal}>
                    feature coming soon!
                </Modal>
                <ModalBtn modalOpen={openTimeModal}>When: {pickUpTime}</ModalBtn>

                <div className="backToMenu">
                    <StanBtn className="back-to-menu" href="/order" >Add More Items</StanBtn>
                </div>

                <div className="item-cart details">
                    Items: <ul>
                        {getCartState()}
                    </ul>
                    
                </div>
                <div className="details cartTotal">
                    Total: ${calculateTotal()}
                </div>
                
                <button className="add-btn cart-btn"><a href="/dashboard">Checkout</a></button>                    
            </div>
            
        </div>
        )
    
}

const mapStateToProps = (state) => {
    return {
        cart:state.cart
    }
}

export default connect(mapStateToProps)(Cart)