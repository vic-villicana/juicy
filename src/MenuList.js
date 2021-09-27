import React from 'react'
import MenuTile from './MenuTile.js'

const menuOptions = [
    {
        menu:'FamilyMeals',
        img:''
    },
    {
        menu:'Individual Plates',
        img:''
    },
    {
        menu:'a La Carte',
        img:''
    },
    {
        menu:'Daily Specials',
        img:''
    },
    {
        menu:'Catering',
        img:''
    },
    {
        menu:'Nutritional facts',
        img:''
    },
]
class MenuList extends React.Component{

   
    render(){
        const tiles = menuOptions.map((option) => (
            <MenuTile title={option.menu} onClick={this.props.onClick} />
        ))
        return (            
            <div className='menu-container'>
                {tiles}
            </div>            
            )
    }
    
    
}

export default MenuList