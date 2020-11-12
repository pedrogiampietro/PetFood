import React from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from '../Marker'
import './styles.css'

const Map = () => {
	return (
		<div className="container-map">
			<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyA10VJxVJeBMJDtfTYpL4SjloNRvuaifk0' }}
				center={{
					lat: -23.561684,
					lng: -44.625478,
				}}
				defaultZoom={15}
			>
				<Marker lat={-23.561684} lng={-44.625478} />
			</GoogleMapReact>
		</div>
	)
}

export default Map
