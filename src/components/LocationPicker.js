import React, {useState} from 'react'
import Modal from './Modal'
import sugar from '../imgs/sugarskullwhite.jpg'

    const city = [
        'Pacoima, CA', 
        'WoodlandHills, CA', 
        'Los Angeles, CA',
        'Hollywood, CA'
    ]

const LocationPicker = () => {

    const [modalActive, setModalActive] = useState(false)
    const [selectedCity, setSelectedCity] = useState('select location')
    const activateModal = () => {
        setModalActive(true)
    }

    const deactivate = () => {
        setModalActive(false)
    }

    const setCity = (option) => {
        return () => {
            setSelectedCity(option)
            setModalActive(false)
        }
    }

    const locationOptions = (option1, option2, option3, option4) => {
        return (
            <div className="modal-options">
                <button className="option-1"  onClick={setCity(option1)}>{option1}</button>
                <button className="option-2" onClick={setCity(option2)}>{option2}</button>
                <button className="option-2" onClick={setCity(option3)}>{option3}</button>
                <button className="option-2" onClick={setCity(option4)}>{option4}</button>
            </div>
        )
    }

    return (
        <React.Fragment>
            <Modal handleClose={deactivate} show={modalActive}>
                {locationOptions(...city)}
            </Modal>
            <div className='location-container' style={{backgroundImage:`linear-gradient(rgba(16, 214, 92, 0.903), rgba(16, 214, 92, 0.903)), url(${sugar})`}}>
                <h4>Current Location:<br/>{selectedCity}</h4>
                <button className='DButton' onClick={activateModal}>location</button>
            </div>
        </React.Fragment>
        
    )
}

export default LocationPicker