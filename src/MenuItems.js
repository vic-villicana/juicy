import React from 'react'


class MenuItems extends React.Component {
  

    render() {

        return (
            <div className='menu-items'>
                <div className='menu-pic'></div>
                <div className='simple-flex'>
                    <div className='menu-title'>enchiladas Verdes<br/>con fajitas de res</div>
                    <div className='menu-price'>$25.00</div>
                </div>
                
                <button className='menu-butt'>add</button>
            </div>
        )
    }
    
}

export default MenuItems