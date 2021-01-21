import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestPetshops } from '../../store/modules/shop/actions'
import Header from '../../components/Header'
import PetshopMap from '../../components/PetshopMap'
import Map from '../../components/Map'
import './styles.css'

const Home = () => {
  const dispatch = useDispatch()
  const { petshops } = useSelector((state) => state.shop)

  React.useEffect(() => {
    dispatch(requestPetshops())
  }, [])

  return (
    <div className="h-100">
      <Header hideCart />

      <div className="container-fluid petshop-list-container">
        <div className="col-12 px-4 text-center">
          <h5>Mais proximos de voce (5)</h5>
        </div>
        <ul className="col-12 petshop-list">
          {petshops.map((p) => (
            <PetshopMap key={p._id} petshop={p} />
          ))}
        </ul>
      </div>
      <Map petshops={petshops} />
    </div>
  )
}

export default Home
