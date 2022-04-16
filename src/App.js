
import './App.css';
import React from 'react'
import DashboardMenu from './DashboardMenu';
import MenuItem from './MenuItem'
import Menu from './Menu'
import Router from './components/Route'
import Cart from './components/Cart'
import Home from './components/Home'
import Ddown from './components/Ddown';
import Footer from './components/Footer.js'
import ContactForm from './components/ContactForm.js'

import {connect} from 'react-redux'
import {selectMenu} from './actions'

import {Amplify, API} from 'aws-amplify'
import awsConfig from './aws-exports'

Amplify.configure(awsConfig)

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {item:{}, cart:[]}
    this.handleClick = this.handleClick.bind(this)
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
    const path = 'contactus'
    const myInit = {
      body:{id, name, content, email}
    }
    
    API.post(apiName, path, myInit)
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleClick(menuId){
    // this.setState({menu:menuId})
    this.props.selectMenu(menuId)
    console.log(menuId)
  }

  handleItemClick(item){
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
      <div>
        <Ddown />
        <Router path='/'>
          <Home promoSub={this.formPromo} />
        </Router>
        <Router path='/order' >
          <DashboardMenu handleClick={this.handleClick} />
        </Router>
        <Router path='/menu'>
          <Menu handleItemClick={this.handleItemClick} menuId={this.props.menuId} />
        </Router>
        <Router path='/item'>
          <MenuItem theItem={this.state.item} changeQuantity={this.changeQuantity} sendToCart={this.sendToCart} />
        </Router>
        <Router path="/cart">
          <Cart items={this.state.cart} />
        </Router>
        <Router path='/contact'>
          <ContactForm contactSub={this.formContact} />
        </Router>
        <Footer/>
      </div>
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

// if(this.state.isMenuOpen === false && this.state.isItemOpen === false){

//   return <DashboardMenu handleClick={this.handleClick} />
    
  
// }else if(this.state.isMenuOpen === true){

//   return <Menu handleItemClick={this.handleItemClick} menuId={this.state.menu} />

  
// }else if(this.state.isItemOpen === true){

//   return <MenuItem theItem={this.state.item} changeQuantity={this.changeQuantity} sendToCart={this.toCart} />
// }
  