import React from 'react'
import MenuItems from './MenuItems'

class Menu extends React.Component {
    
    render() {
        return (
            <div className='Menu-Menu'>
                <div className='menu-text'><h2>Menu</h2></div>
                <MenuItems />
                <MenuItems />
                <MenuItems />
                <MenuItems />
                <MenuItems />
                <MenuItems />
            </div>
        )
    }
}

export default Menu