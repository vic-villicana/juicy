import React from 'react'

class subs extends React.component {
    state: {}

    render(){
        return(
            <div className='substitutions-container'>
                <div className='sub-heading'>
                    <h2>Substitutions</h2>
                    <p>Substitute your current Selection with any of the sides below.</p>
                </div>
                <div className='sub-grid'>
                    <div className='option chosen'></div>
                    <div className='option-1'></div>
                    <div className='option-2'></div>
                </div>
                
            </div>
        )
    }
}

export default subs