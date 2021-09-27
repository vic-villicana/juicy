import React from 'react'
    const city = 'Pacoima, USA'
const TodaysLocation = () => {
    return (
        <div className='location-container'>
            <h5>Todays Location:<br/>{city}</h5>
            <button className='DButton'>Details</button>
        </div>
    )
}

export default TodaysLocation