import React from 'react'
import MenuItems from './MenuItems'
import taco from './imgs/tacos.jpg'
import burry from './imgs/burry.jpg'
import enchiladas from './imgs/enchiladas.jpg'
import tinga from './imgs/tinga.jpg'
import mole from './imgs/mole.jpg'
import huaraches from './imgs/huaraches.jpg'
//import connect funciton
import {connect} from 'react-redux'
const menuItems = [
    {
        menuId:0,
        menuItemId:0,
        dish:'tacos',
        price:2.00,
        description:'The best tacos on the planet',
        quantity:1,
        img:taco,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },
    {
        menuId:0,
        menuItemId:1,
        dish:'Burrito',
        price:12.00,
        description:'The best burrito in the world',
        quantity:1,
        img:burry,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },
    {
        menuId:0,
        menuItemId:2,
        dish:'Enchiladas Verdes',
        side:'fajitas',
        price:24.00,
        description:'The best combo plate in town',
        quantity:1,
        img:enchiladas,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },
    {
        menuId:0,
        menuItemId:3,
        dish:'Tinga',
        price:25.00,
        description:'Shredded chicken marinated in chipotle special Sauce',
        quantity:1,
        img:tinga,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },
    {
        menuId:1,
        menuItemId:4,
        dish:'huaraches De Pollo',
        price:10.00,
        description:'The Original Huarache',
        quantity:1,
        img:huaraches,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },
    {
        menuId:1,
        menuItemId:5,
        dish:'mole',
        price:15.00,
        description:'Traditional ancient recipe handed down genration after generation',
        quantity:1,
        img:mole,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },{
        menuId:1,
        menuItemId:6,
        dish:'Enchiladas Verdes',
        side:'fajitas',
        price:24.00,
        description:'The best combo plate in town',
        quantity:1,
        img:enchiladas,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },
    {
        menuId:1,
        menuItemId:7,
        dish:'Tinga',
        price:25.00,
        description:'Shredded chicken marinated in chipotle special Sauce',
        quantity:1,
        img:tinga,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },
    {
        menuId:1,
        menuItemId:8,
        dish:'Huaraches',
        price:10.00,
        description:'The Origonal Huarache',
        quantity:1,
        img:huaraches,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },
    {
        menuId:1,
        menuItemId:9,
        dish:'mole',
        price:15.00,
        description:'Traditional ancient recipe handed down genration after generation',
        quantity:1,
        img:mole,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },
    {
        menuId:2,
        menuItemId:10,
        dish:'Chicken Tinga Tostadas',
        price:25.00,
        description:'Shredded chicken marinated in chipotle special Sauce',
        quantity:1,
        img:tinga,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },
    {
        menuId:2,
        menuItemId:11,
        dish:'huaraches',
        price:10.00,
        description:'The Origonal Huarache',
        quantity:1,
        img:huaraches,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },
    {
        menuId:2,
        menuItemId:12,
        dish:'mole',
        price:15.00,
        description:'Traditional ancient recipe handed down genration after generation',
        quantity:1,
        img:mole,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },{
        menuId:2,
        menuItemId:13,
        dish:'Enchiladas Verdes',
        side:'fajitas',
        price:24.00,
        description:'The best combo plate in town',
        quantity:1,
        img:enchiladas,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },
    {
        menuId:2,
        menuItemId:14,
        dish:'Tinga',
        price:25.00,
        description:'Shredded chicken marinated in chipotle special Sauce',
        quantity:1,
        img:tinga,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },
    {
        menuId:3,
        menuItemId:15,
        dish:'Huarache de carne cpn chile',
        price:10.00,
        description:'The Original Huarache',
        quantity:1,
        img:huaraches,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },
    {
        menuId:3,
        menuItemId:16,
        dish:'mole',
        price:15.00,
        description:'Traditional ancient recipe handed down genration after generation',
        quantity:1,
        img:mole,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },{
        menuId:3,
        menuItemId:0,
        dish:'tacos',
        price:2.00,
        description:'The best tacos on the planet',
        quantity:1,
        img:taco,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },
    {
        menuId:3,
        menuItemId:1,
        dish:'Burrito',
        price:12.00,
        description:'The best burrito in the world',
        quantity:1,
        img:burry,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },
    {
        menuId:3,
        menuItemId:2,
        dish:'Enchiladas Verdes',
        side:'fajitas',
        price:24.00,
        description:'The best combo plate in town',
        quantity:1,
        img:enchiladas,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },
    {
        menuId:4,
        menuItemId:3,
        dish:'Beyond Meat Tostadas',
        price:5.00,
        description:'Traditional Horchata made from scratch',
        quantity:1,
        img:tinga,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },
    {
        menuId:4,
        menuItemId:4,
        dish:'Fried Avocado Huaraches',
        price:10.00,
        description:'The Original Huarache, now even better.',
        quantity:1,
        img:huaraches,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },
    {
        menuId:4,
        menuItemId:5,
        dish:'Michoacan Style Mole',
        price:15.00,
        description:'Traditional ancient recipe handed down genration after generation',
        quantity:1,
        img:mole,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },{
        menuId:4,
        menuItemId:6,
        dish:'Enchiladas Rojas De Papa',
        side:'fajitas',
        price:24.00,
        description:'The best combo plate in town',
        quantity:1,
        img:enchiladas,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },{
        menuId:5,
        menuItemId:0,
        dish:'Fried chicken tacos',
        price:2.00,
        description:'The best tacos on the planet',
        quantity:1,
        img:taco,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },
    {
        menuId:5,
        menuItemId:1,
        dish:'Burrito',
        price:12.00,
        description:'The best burrito in the world',
        quantity:1,
        img:burry,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },{
        menuId:5,
        menuItemId:2,
        dish:'Enchiladas Verdes',
        side:'fajitas',
        price:24.00,
        description:'The best combo plate in town',
        quantity:1,
        img:enchiladas,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },
    {
        menuId:5,
        menuItemId:3,
        dish:'Beyond Meat Tostadas',
        price:5.00,
        description:'Traditional Horchata made from scratch',
        quantity:1,
        img:tinga,
        
        selected:{}
    },
    {
        menuId:5,
        menuItemId:4,
        dish:'Fried Avocado Huaraches',
        price:10.00,
        description:'The Original Huarache, now even better.',
        quantity:1,
        img:huaraches,
        subs:[
            {
                item:'fries',
                price:3.00,
                img:''
            },
            {
                item:'rice',
                price:3.00,
                img:''
            },
            {
                item:'beans',
                price:3.00,
                img:''
            },
        ],
        selected:{}
    },
]


class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.chooseItem = this.chooseItem.bind(this)
        
    }

    
    chooseItem(item, href){
        
        window.history.pushState({}, '', href)
        this.props.handleItemClick(item)
        
    }

    render() {
        //access the menu data through props and filter/map
        let Items = this.props.theItems.filter(item =>  item.menuId === this.props.menuIdd)
        console.log(Items)
        console.log(this.props.menuIdd)
        let menuItem = Items.map((item, i) => (
            <MenuItems imgs={item.img} key={i} href='/item' dish={item.dish} price={item.price} desc={item.description} quantity={item.quantity} subis={item.subs} onClick={this.chooseItem} />
        ))
        
        
        return (
            <div className='Menu-Menu'>
                <div className='menu-heading'><h2>Menu</h2>{"\n"}{}</div>
                {menuItem}
            </div>
        )
    }
}
//use our mapStateToPropsFunction to access our state(so we can grab our Menu state data)
const mapStateToProps = (state) => {
    console.log(state)
    return {
        theItems: state.menuItems,
        menuIdd: state.menus
    }
}
//replace this export with our connect fnuction export 
export default connect(mapStateToProps)(Menu)
// export default Menu