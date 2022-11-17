import React from 'react'
import NewMenu from './components/NewMenu'
import LocationPicker from './components/LocationPicker'
import TacoHeader from './components/TacoHeader'
import sign from './imgs/sign.jpg'





class DashboardMenu extends React.Component {
    
        render(){
                    
            return (
                <div  >
                    <TacoHeader sign={sign} />
                    <LocationPicker />
                    <NewMenu handleClick={this.props.handleClick}  />
                </div>                
            )
    }
}


export default DashboardMenu