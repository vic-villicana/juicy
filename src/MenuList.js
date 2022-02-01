import React from 'react'
import MenuTile from './MenuTile.js'
import FamilyMeals from './imgs/mexicantable.jpg'
import Individuals from './imgs/plates.jpg'
import aLaCarte from './imgs/platos.jpg'
import DailySpecials from './imgs/burrito.jpg'
import Catering from './imgs/chilis.jpg'
import Sides from './imgs/fajitas.jpg'

const menuOptions = [
    {
        menu:'FamilyMeals',
        img:FamilyMeals,
        id:0
    },
    {
        menu:'Dinner Menu',
        img:Individuals,
        id:1
    },
    {
        menu:'a La Carte',
        img:aLaCarte,
        id:2
    },
    {
        menu:'Daily Specials',
        img:Sides,
        id:3
    },
    {
        menu:'Vegan Menu',
        img:Catering,
        id:4
    },
    {
        menu:'Kids Menu',
        img:DailySpecials,
        id:5
    },
]

class MenuList extends React.Component{

   constructor(props) {
       super(props)
       this.clickIt = this.clickIt.bind(this)
   }

   clickIt(menuId, link){
    window.history.pushState({}, '', link)
    
    this.props.handleClick(menuId)
    
   }
    render(){
        //any time we render a list of items we must append a unique "key" prop
        const tiles = menuOptions.map((option) => (
            // console.log(option.img)
            <MenuTile bgImg={option.img} href='/menu' key={option.id} id={option.id} title={option.menu} onClick={this.clickIt} />
        ))
        return (            
            <div className='menu-container'>
                {tiles}
            </div>            
            )
    }
    
    
}

export default MenuList