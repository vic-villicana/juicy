
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

import {connect} from 'react-redux'
import {selectMenu} from './actions'

import {Amplify, API} from 'aws-amplify'
import awsConfig from './aws-exports'

Amplify.configure(awsConfig)

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {item:{}, cart:[]}
    this.handleItemClick = this.handleItemClick.bind(this)
    this.changeQuantity = this.changeQuantity.bind(this)
    this.sendToCart = this.sendToCart.bind(this)
    this.formPromo = this.formPromo.bind(this)
    this.formContact = this.formContact.bind(this)
  }

  formPromo({email, name}){
    const apiName = 'juiceApi';
    const path = '/promos'
    const myInit = {
      body:{email, name}
    }
    API.post(apiName, path, myInit)
    .then(res => {
      return res.data
    })
    .catch(err => {
      throw new Error(err.response)
    })
   
  }
  
  formContact({id, name, email, content}){
    const apiName = 'juiceApi'
    const path = '/contactus'
    const myInit = {
      body:{id, name, content, email},
    }
    
    API.post(apiName, path, myInit)
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log(err)
    })
  }


  handleItemClick(item){
    console.log(item)
    this.setState({item:item})
    
  }
  
  changeQuantity(quan){
    const name = quan.name
    const value = quan.value
    const newItem = Object.assign({}, this.state.item)
    const quantity = this.state.item.quantity    

    console.log(value)
    if(value){
      newItem[name] = quantity + 1
    }else if(!value && quantity > 1){
      newItem[name] = quantity - 1
    }

    this.setState({item:newItem})
    
  }

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
    console.log(this.state)
    return(
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home promoSub={this.formPromo} />}/>
          <Route path="order" element={<DashboardMenu handleClick={this.handleItemClick} />}/>
          <Route path="order/:item" element={<MenuItem theItem={this.state.item} changeQuantity={this.changeQuantity} sendToCart={this.sendToCart} />} />
          <Route path="cart" element={<Cart items={this.state.cart} />} />
          <Route path="contact" element={<ContactForm contactSub={this.formcontact} />} />
        </Routes> 
      </BrowserRouter>


    )
    
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return{
    menuId: state.menus
  }
}

export default connect(mapStateToProps, {selectMenu})(App);