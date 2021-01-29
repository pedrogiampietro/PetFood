import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Dock from 'react-dock'
import ProductList from '../../components/Product/List'
import './styles.css'

const Sidebar = () => {
  const { cart } = useSelector((state) => state.shop)
  const total = cart.reduce((total, product) => {
    return total + product.price
  }, 0)

  const [opened, setOpened] = React.useState(false)
  const history = useHistory()

  React.useEffect(() => {
    window.addEventListener('openCart', () => {
      setOpened(true)
    })
  }, [])

  return (
    <Dock
      isVisible={opened}
      onVisibleChange={(visible) => {
        setOpened(visible)
      }}
      position="right"
    >
      <div className="container-fluid h-100 pt-4 sidebar">
        <h5>Minha Sacola ({cart.length})</h5>

        <div className="row products">
          {cart.map((p) => (
            <ProductList key={p} product={p} />
          ))}
        </div>

        <div className="row align-items-end footer">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <b className="d-inline-block">Total</b>
            <h3 className="d-inline-block">R$ {total.toFixed(2)}</h3>
          </div>
          <button
            className="btn btn-block btn-lg btn-primary rounded-0 h-50 align-items-center"
            onClick={() => history.push('/register')}
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </Dock>
  )
}

export default Sidebar
