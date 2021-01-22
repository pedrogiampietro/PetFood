import React from 'react'
import GoogleMapReact from 'google-map-react'
import { useSelector } from 'react-redux'
import Marker from '../Marker'
import './styles.css'

const Map = ({ petshops }) => {
  const { mapCenter } = useSelector((state) => state.shop)

  return (
    <div className="container-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
        center={mapCenter}
        defaultZoom={15}
      >
        {petshops.map((p) => (
          <Marker petshop={p} lat={p.location.lat} lng={p.location.lng} />
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map
