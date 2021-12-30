import React, {useState} from 'react'
import ModalBtn from './ModalBtn'
import Modal from './Modal'
import pattern from '../imgs/pattern.jpg'

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

   //modal functions for cart state

   const getCartState = (cart) => {
        // const contents = cart.map(item => {
        //     return <div className="cartItem">{item.dish} x{item.quantity} - ${item.price}.55</div>
        // })
        console.log(props)
        console.log(cart[0])
       return (
        <div>
            <ul>
                
                
            </ul>
        </div>
       )
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
                    <button className="back-to-menu" ><a href="/">Add More Items</a></button>
                </div>

                <div className="item-cart details">
                    Items: {getCartState(props.items)}
                </div>
                <div className="details cartTotal">
                    Total: {props.items.price}
                </div>
                
                <button className="add-btn cart-btn"><a href="/dashboard">Checkout</a></button>                    
            </div>
            
        </div>
        )
    
}

export default Cart