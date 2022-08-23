import React from 'react'
import HeaderCont from '../headercont/headercont'
import GoogleMapReact from 'google-map-react'

function Map() {
    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
    }
    const defaultMapOptions = {
        fullscreenControl: false,
        zoomControl: false
    };

    return (
        <div className='dashboard-body-2' id='dashboard-body-1-2'>
            <div className='dashboard-mid-child dashboard-cont'>
                <HeaderCont
                    arrow={false}
                    links={true}
                    title={
                        <p className='dashboard-head-title'>Expeditions en cours</p>
                    }
                />
                <div style={{ width: "100%", height: "calc(100% - 54px)" }} >
                    <GoogleMapReact
                        style={{ width: "100%", height: "100%", position: "relative" }}
                        bootstrapURLKeys={{ key: 'AIzaSyCam9XJ2kKD1sPz7PuekN9rlWByIMmkSGQ' }}
                        defaultCenter={location}
                        defaultZoom={7}
                        options={defaultMapOptions}
                    >
                    </GoogleMapReact>
                </div>
            </div>
        </div>
    )
}

export default Map