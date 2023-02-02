import {React} from 'react'
import {Link} from 'react-router-dom'
// import itemTile from './itemTiles'

//so far i added an item id to ALL food items and passed it down from Menu component as props to this component
const MenuItems = (props) => {


    const itemChoosen = () => {
        props.onClick(props, props.href)
    }


        return (
            //component does not need an add button attach event listener on parent element
            <div onClick={itemChoosen}>
                <div className='menu-items'>
                    <img alt="current food item" className='menu-pic' src={`https://juize.s3.us-west-2.amazonaws.com/${props.img}`}/>
                    {/* <div className='menu-pic' style={{backgroundImage:`url(${props.imgs})`}}></div> */}
                    <div className='simple-flex'>
                        <div className='menu-title'>{props.dish}<br/></div>
                        <p>{props.description}</p>
                        <div className='menu-price'>${props.price}.00</div>
                    </div>
                </div>                    
              
            </div>
        )
    
    
}

export default MenuItems