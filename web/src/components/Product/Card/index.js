import { useDispatch, useSelector } from 'react-redux'
import { toggleCartProduct } from '../../../store/modules/shop/actions'
import './styles.css'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.shop)
  const added = cart.findIndex((p) => p._id === product._id) !== -1

  return (
    <div className="product col-3">
      <img
        src={product.cover}
        alt="Products"
        className="img-fluid align-center"
      />
      <button
        className={`btn btn-${added ? 'secondary' : 'primary'} rounded-circle`}
        onClick={() => dispatch(toggleCartProduct(product))}
      >
        {added ? '-' : '+'}
      </button>
      <h4>
        <label className="badge badge-primary">
          R$ {product.price.toFixed(2)}
        </label>
      </h4>
      <small>
        <b>{product.name}</b>
      </small>
    </div>
  )
}

export default ProductCard
