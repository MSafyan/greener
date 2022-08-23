import './preloader.css'
import React from 'react'
import spinner from '../../assets/images/preload_icon.png'

function Preloader() {
    return (
        <div className="preloader">
            <div className='preloader-child'>
                <img src={spinner} alt="" className="spinner" />
            </div>
        </div>
    )
}

export default Preloader