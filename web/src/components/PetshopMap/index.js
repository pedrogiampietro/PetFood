import React from 'react'
import { Star, AttachMoneyOutlined, GpsFixed } from '@material-ui/icons'
import './styles.css'

const PetshopMap = ({ petshop }) => {
  return (
    <li className="petshop d-inline-block">
      <div className="d-inline-block">
        <img src={petshop.logo} className="img-fluid" alt="Logo" />
      </div>

      <div className="d-inline-block pl-3 align-bottom">
        <b>{petshop.name}</b>
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
