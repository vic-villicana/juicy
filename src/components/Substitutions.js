import React from 'react'
import rice from '../imgs/rice.jpg'
import beans from '../imgs/beans.jpg'
import fries from '../imgs/fries.webp'

const subis = [
    {
        item:'fries',
        price:3.00,
        img:fries
    },
    {
        item:'rice',
        price:3.00,
        img:rice
    },
    {
        item:'beans',
        price:3.00,
        img:beans
    },
    
]

class Substitutions extends React.Component {
    
        state = { selected: {
            item:'rice',
            price:3.00,
            img:rice
        }}
    
    select = (sub) => {
        return () => {
            this.setState({
                selected:  sub
            })
            
        }
    }
    
    RenderChoice = () => { 
        return subis.map((sub, i) => {
        
            if(this.state.selected.item === sub.item){
                return null
            }else{
                return <div key={i} style={{backgroundImage:`linear-gradient(rgb(12, 12, 12, 0.65), rgba(0, 0, 0, 0) 25%), url(${sub.img})`}} className="options" onClick={this.select(sub)}>{sub.item}: ${sub.price}.00</div>
            }
        })
    }
        // for (let dish of choice){
        //     if(this.state.choice === dish){
        //         continue
        //     }else{
        //         return(
        //             <div className="option" onClick={choice}></div>
        //         )
        //     }
        // }
        
        
    
//app re-renders when function on line 73 executes
    render(){
      
        return (
            <div className='substitutions-container'>
                <div className='sub-heading'>
                    <h2>Substitutions</h2>
                </div>
                <h5 className="chosen-heading">You have chosen:</h5>
                <div className='sub-grid'>
                    <div className="option chosen" style={{backgroundImage:`linear-gradient(rgb(12, 12, 12, 0.630), rgba(0, 0, 0, 0) 25%), url(${this.state.selected.img})`}}>{this.state.selected.item} ${this.state.selected.price}.00</div>
                    
                    <div className="choices">{this.RenderChoice()}</div>
                    
                </div>
                
            </div>
        )
    }
 
}



export default Substitutions