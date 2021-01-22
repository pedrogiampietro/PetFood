import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setShopMapSelected,
  setMapCenter,
} from '../../store/modules/shop/actions'
import { Star, AttachMoneyOutlined, GpsFixed } from '@material-ui/icons'
import './styles.css'

const PetshopMap = ({ petshop }) => {
  const dispatch = useDispatch()
  const { petshopMapSelected } = useSelector((state) => state.shop)

  const setSelectedPetshop = () => {
    //setar a petshop selecionada
    dispatch(setShopMapSelected(petshop._id))

    //setar o centro do mapa
    dispatch(setMapCenter(petshop.location))
  }

  return (
    <li
      className={`petshop d-inline-block ${
        petshopMapSelected === petshop._id ? 'active' : ''
      }`}
      onClick={() => setSelectedPetshop()}
    >
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
