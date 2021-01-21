import React from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from '../Marker'
import './styles.css'

const Map = ({ petshops }) => {
  return (
    <div className="container-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
        center={{
          lat: -22.8156632,
          lng: -43.2127449,
        }}
        defaultZoom={15}
      >
        {petshops.map((p) => (
          <Marker lat={p.location.lat} lng={p.location.lng} />
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map
