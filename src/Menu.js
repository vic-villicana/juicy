import React from 'react'
import MenuItems from './MenuItems'
import taco from './imgs/tacos.jpg'
import burry from './imgs/burry.jpg'
import enchiladas from './imgs/enchiladas.jpg'
import tinga from './imgs/tinga.jpg'
import mole from './imgs/mole.jpg'
import huaraches from './imgs/huaraches.jpg'
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
        menuId:0,
        menuItemId:4,
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
        menuId:0,
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
        menuId:0,
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
        let Items = menuItems.filter(item =>  item.menuId === this.props.menuId)
        
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

export default Menu