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
        id:0
    },
    {
        menu:'Dinner Menu',
        id:1
    },
    {
        menu:'a La Carte',
        id:2
    },
    {
        menu:'Daily Specials',
        id:3
    },
    {
        menu:'Vegan Menu',
        id:4
    },
    {
        menu:'Kids Menu',
        id:5
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
         <MenuBtns menuOptions={menuOptions} menuClick={clickedMenu} selected={selected}/>
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