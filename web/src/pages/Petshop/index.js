import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestPetshop } from '../../store/modules/shop/actions'
import Header from '../../components/Header'
import ProductCard from '../../components/Product/Card'
import { Star, AttachMoneyOutlined, GpsFixed } from '@material-ui/icons'

import './styles.css'

const Petshop = ({ match }) => {
  const dispatch = useDispatch()
  const { petshop } = useSelector((state) => state.shop)

  React.useEffect(() => {
    dispatch(requestPetshop(match.params.id))
  }, [])

  return (
    <div className="h-100">
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-2">
            <img
              src={petshop.logo}
              className="img-fluid petshop-image"
              alt="Logo"
            />
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
          <div className="col-10">
            <h5>Produtos</h5>
            <br />
            <div className="row">
              {petshop.products?.map((p) => (
                <ProductCard product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Petshop
