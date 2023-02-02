
import './App.css';
import React from 'react'

import DashboardMenu from './DashboardMenu';
import MenuItem from './MenuItem'
import Cart from './components/Cart'
import Home from './components/Home'
import Navbar from './components/Ddown';
// import Footer from './components/Footer.js'
import ContactForm from './components/ContactForm.js'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

// import Router from './components/Route'



// import {Amplify, API} from 'aws-amplify'
// import awsConfig from './aws-exports'

// Amplify.configure(awsConfig)

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {cart:[]}
    this.sendToCart = this.sendToCart.bind(this)
    // this.formPromo = this.formPromo.bind(this)
    // this.formContact = this.formContact.bind(this)
  }

  // formPromo({email, name}){
  //   const apiName = 'juiceApi';
  //   const path = '/promos'
  //   const myInit = {
  //     body:{email, name}
  //   }
  //   API.post(apiName, path, myInit)
  //   .then(res => {
  //     return res.data
  //   })
  //   .catch(err => {
  //     throw new Error(err.response)
  //   })
   
  // }
  
  // formContact({id, name, email, content}){
  //   const apiName = 'juiceApi'
  //   const path = '/contactus'
  //   const myInit = {
  //     body:{id, name, content, email},
  //   }
    
  //   API.post(apiName, path, myInit)
  //   .then(res => {
  //     return res.data
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }


  sendToCart({dish, price, quantity}){
    const newDish = {
      dish:dish,
      price:price,
      quantity:quantity
    }

    this.setState((state) => {
      return { cart:[newDish, ...state.cart]}
    })
    
  }
 
  
  render(){
    return(
     <BrowserRouter>

      <Navbar />
        <Routes>
          <Route path="/" element={<Home promoSub={this.formPromo} />}/>
          <Route path="order" element={<DashboardMenu />}/>
          {/* <Route path="order/:item" element={<MenuItem sendToCart={this.sendToCart} />} /> */}
          <Route path="cart" element={<Cart items={this.state.cart} />} />
          <Route path="contact" element={<ContactForm contactSub={this.formcontact} />} />
        </Routes> 

    </BrowserRouter>

    )
    
  }
}

export default App