
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

//how do i get the data values i need out of div DOM elements?
//should i use a diffrent element for this?(ex. buttons, etc..)
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { menu:3, isItemOpen:false, item:{}, cart:[]}
    this.handleClick = this.handleClick.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
    this.changeQuantity = this.changeQuantity.bind(this)
    this.sendToCart = this.sendToCart.bind(this)
  }

  handleClick(menuId){
    this.setState({menu:menuId})
    console.log(menuId)
  }

  handleItemClick(item){
    this.setState({isMenuOpen:false, isItemOpen:true, item:item})
    
  }
  
  changeQuantity(quan){
    const name = quan.name
    const value = quan.value
    const newItem = Object.assign({}, this.state.item)
        
    if(value === 'true'){
      newItem[name] = this.state.item.quantity + 1
    }else {
      newItem[name] = this.state.item.quantity - 1
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
        <Router path='/order' >
          <DashboardMenu handleClick={this.handleClick} />
        </Router>
        <Router path='/menu'>
          <Menu handleItemClick={this.handleItemClick} menuId={this.state.menu} />
        </Router>
        <Router path='/item'>
          <MenuItem theItem={this.state.item} changeQuantity={this.changeQuantity} sendToCart={this.sendToCart} />
        </Router>
        <Router path="/cart">
          <Cart items={this.state.cart} />
        </Router>
        <Router path='/'>
          <Home />
        </Router>
        <Footer/>
      </div>
    )
    
  }
}
export default App;

// if(this.state.isMenuOpen === false && this.state.isItemOpen === false){

//   return <DashboardMenu handleClick={this.handleClick} />
    
  
// }else if(this.state.isMenuOpen === true){

//   return <Menu handleItemClick={this.handleItemClick} menuId={this.state.menu} />

  
// }else if(this.state.isItemOpen === true){

//   return <MenuItem theItem={this.state.item} changeQuantity={this.changeQuantity} sendToCart={this.toCart} />
// }
  