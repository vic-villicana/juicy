import React from 'react'
import NewMenu from './components/NewMenu'
import LocationPicker from './components/LocationPicker'
import TacoHeader from './components/TacoHeader'
import sign from './imgs/sign.jpg'

import Cart from './components/Cart'

//we will leave the state for the todayslocation component out for the portfolio project version
class DashboardMenu extends React.Component {
    
        render(){
                    
            return (
                <div className="back-print" >
                    <TacoHeader sign={sign} />
                    <LocationPicker />
                    <NewMenu handleClick={this.props.handleClick} />
                </div>                
            )
            
        
    
    }
}


export default DashboardMenu