import React from 'react'
import NewMenu from './components/NewMenu'
import LocationPicker from './components/LocationPicker'
import TacoHeader from './components/TacoHeader'
import sign from './imgs/sign.jpg'





class DashboardMenu extends React.Component {
    
        render(){
                    
            return (
                <div className="dashboard-menu" >
                    <TacoHeader sign={sign} classProp={'taco-header'}/>
                    <LocationPicker />
                    <NewMenu />
                </div>                
            )
    }
}


export default DashboardMenu