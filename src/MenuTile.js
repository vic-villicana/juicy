import React from 'react'
//import MenuItems from './MenuItems.js'

 class MenuTile extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            //100px x 100px squares for the diffrent menus
            <div className='menu' onClick={this.props.onClick}>
               <div className='menu-text'>{this.props.title}</div>
            </div>
        )
    }
    
}

export default MenuTile