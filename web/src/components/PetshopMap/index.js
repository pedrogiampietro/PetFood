import React from 'react'
import { Star, AttachMoneyOutlined, GpsFixed } from '@material-ui/icons'
import './styles.css'

const PetshopMap = () => {
	return (
		<li className="petshop d-inline-block">
			<div className="d-inline-block">
				<img
					src="https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png"
					className="img-fluid"
					alt="Logo"
				/>
			</div>

			<div className="d-inline-block pl-3 align-bottom">
				<b>PetLove</b>
				<div className="petshop-infos">
					<Star className="star-container" />
					<text>
						<b>2.8</b>
					</text>
					<AttachMoneyOutlined />
					<text>
						<b>$</b>
					</text>
					<GpsFixed />
					<text>
						<b>2.4 km</b>
					</text>
				</div>
				<label className="badge badge-primary">Frete Gratis</label>
			</div>
		</li>
	)
}

export default PetshopMap
