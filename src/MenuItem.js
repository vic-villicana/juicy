import React from 'react'
import TacoHeader from './TacoHeader'
import QuantityCounter from './QuantityCounter'
import Substitutions from './Substitutions'
import AddButton from './AddButton'
class MenuItem extends React.Component {
    

    render() {
        return(
            <div className='menu-item'>
                <div className='item-container'>
                    <TacoHeader/>
                    <h2 className='menu-item-title'>Enchiladas Verdes</h2>
                    <p className='menu-paragraph'>
                        Since 2011Juicy Juize Tacos has been
                        on a mission to provide Los Angeles 
                        with the best authentic Mexican food 
                        but also the hospitality you can 
                        expect at the
                    </p>
                    <QuantityCounter />                    
                </div>
                <Substitutions />
                <AddButton />
            </div>
        )
    }
}

export default MenuItem