import React from 'react'
import Sliderbar from '../components/Sliderbar'
import Header from '../components/Header'

const Home = () => {
    return (
        <div>
            <Header userName="Marlon"/>
            <Sliderbar />
            <div className='bg-red-600'>hola que tal</div>
        </div>
    )
}

export default Home
