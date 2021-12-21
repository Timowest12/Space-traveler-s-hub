import React from 'react'
import { useSelector } from 'react-redux'
import RocketCard from '../components/rockets/RocketCard'

const Rockets = () => {
    const rockets = useSelector(state => state)
    //alert(rockets[0])
    return (
        <div>
            {rockets.map((item) => 
            <RocketCard data={item} />
            )}
            
        </div>
    )
}

export default Rockets
