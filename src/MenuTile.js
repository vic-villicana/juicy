import React from 'react'
 class MenuTile extends React.Component {
    constructor(props){
        super(props)
        this.handleIt = this.handleIt.bind(this)
    }
    handleIt(){
       this.props.onClick(this.props.id, this.props.href)      
       
    }
    render() {
        return(
            //100px x 100px squares for the diffrent menus
            <div style={{backgroundImage:`url(${this.props.bgImg})`}} className='menu' onClick={this.handleIt}>
               <div className='menu-text'>{this.props.title}</div>
            </div>
        )
    }
    
}

export default MenuTile