import React from 'react'
// import itemTile from './itemTiles'

//so far i added an item id to ALL food items and passed it down from Menu component as props to this component
class MenuItems extends React.Component {
    constructor(props) {
        super(props)
        this.itemChoosen = this.itemChoosen.bind(this)
    }

    itemChoosen(){
        this.props.onClick(this.props, this.props.href)
        console.log(this.props)
    }
    render(){
        return (
            //component does not need an add button attach event listener on parent element
            <div  className='menu-items' onClick={this.itemChoosen}>
                <div className='menu-pic' style={{backgroundImage:`url(${this.props.imgs})`}}></div>
                <div className='simple-flex'>
                    <div className='menu-title'>{this.props.dish}<br/>con fajitas de res</div>
                    <div className='menu-price'>${this.props.price}.00</div>
                </div>
            </div>
        )
    }
    
}

export default MenuItems