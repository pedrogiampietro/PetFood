import { useDispatch } from 'react-redux'
import { toggleCartProduct } from '../../../store/modules/shop/actions'

import './styles.css'

const ProductList = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <div className="product-list col-12">
      <div className="row">
        <div className="col-3">
          <img src={product.cover} alt="" className="img-fluid" />
        </div>
        <div className="col-6">
          <h6>
            <label className="badge badge-primary">
              R$ {product.price.toFixed(2)}
            </label>
          </h6>
          <small>
            <b>{product.name}</b>
          </small>
        </div>
        <div className="col-3">
          <button
            className="btn btn-secondary rounded-circle"
            onClick={() => dispatch(toggleCartProduct(product))}
          >
            -
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductList
