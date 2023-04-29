import {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import {fetchMenu} from '../actions'
import {setItem} from '../actions'
//components
import MenuBtns from "./MenuBtns"
import ItemModal from "./ItemModal"
import MenuItems from '../MenuItems'

//onClick handler for selecting menu
//new components to reperesent all the menus
const menuOptions = [
    {
        menu:'FamilyMeals',
        id:0,
        desc:"We’re committed to continuously evolving our menu so that we’re always WOW-ing our guests with new unexpected flavor combinations. Be sure to check back to discover our Chef’s latest innovations."
    },
    {
        menu:'Dinner Menu',
        id:1,
        desc:"We’re committed to continuously evolving our menu so that we’re always WOW-ing our guests with new unexpected flavor combinations. Be sure to check back to discover our Chef’s latest innovations."
    },
    {
        menu:'a La Carte',
        id:2,
        desc:"Traditional Mexican dinners that are enough to feed the whole family, All plates feed up to two people"
    },
    {
        menu:'Daily Specials',
        id:3,
        desc:"Some of our more unique and seasonal dishes. Get them while they're here. For a limited time!!"
    },
    {
        menu:'Vegan Menu',
        id:4,
        desc:"Yes we even have something for you!"
    },
    {
        menu:'Kids Menu',
        id:5,
        desc:"RECOMMENDED FOR KIDS 8 & UNDER Served with a kids beverage and sliced apples (organic milk add 2.40)"
    },
]
const NewMenu = (props) => {

    const menuItems = props.menu

    useEffect(() => {
        props.fetchMenu()
    }, [])

    const [selected, setSelected] = useState(0) 
    const [modalActive, setModalActive] = useState(false)


    const clickedMenu = (id) => {
        console.log('clicked menu:', id)
        setSelected(id)
    }

    const selectItem = (item, href) => {
        setModalActive(true)

        props.setItem(item)
        console.log(modalActive)
    }

    const menu = menuItems.map(item => {
        if(item.menuId === selected){
            return(
                <MenuItems onClick={selectItem} href={`/order/${item.menuItemId}`} quantity={item.quantity} img={item.img} key={item.menuItemId} dish={item.dish} price={item.price} description={item.description}/>
            )
        }
        
    })
    console.log(props.menu)

    return (
        // style={{backgroundImage:`linear-gradient(rgba(255, 218, 224, 0.963), rgba(2255, 218, 224, 0.953)), url(${pattern})`}}
        <div className="back-print" >
            <h1>MENU</h1>
         <MenuBtns menuOptions={menuOptions} menuClick={clickedMenu} selected={selected}/>
         <div className="title-paragraph-med">
            <h2>{menuOptions[selected].menu}</h2>
            <p>{menuOptions[selected].desc}</p>
         </div>

         <div className="menu-list">
            <ItemModal active={modalActive} setModal={setModalActive}/>
             {menu}
         </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        menu: state.menu,
        item: state.item
    }
}

export default connect(mapStateToProps, {fetchMenu, setItem})(NewMenu)