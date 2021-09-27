import React from 'react'
import MenuList from './MenuList'
import TodaysLocation from './TodaysLocation'
import TacoHeader from './TacoHeader'
import Menu from './Menu'

//dashboard menu could render the selected menu
//we could use dashboard state as a conditional to either render 
//our selected menu or the 3 components that make up the home screen.
//our state could live here instead of passing down to another parent component
class DashboardMenu extends React.Component {

    constructor(props) {
        super(props)
        // this.state = {menuOpen: false, menu:'Family Meals'}

        // this.handleClick = this.handleClick.bind(this)
    }

    // handleClick({target}){
    //     const io = this.state.menuOpen === true ? false : true
    //     const food = target.value
    //     this.setState({menuOpen:io}, {menu:food})
    // }

    
    render(){
        //we write our code that decides what components 
        //to render based on the condition of the menuOpen state before the return statement
      
        return <Menu />
        
    }
    
}

export default DashboardMenu