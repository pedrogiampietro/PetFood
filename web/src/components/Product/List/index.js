import './styles.css'
const ProductList = () => {
	return (
		<div className="product-list col-12">
			<div className="row">
				<div className="col-3">
					<img
						src="https://www.petlove.com.br/images/products/223198/large/Ra%C3%A7%C3%A3o_Seca_Pedigree_Carne__Frango_e_Cereais_para_C%C3%A3es_Adultos_Ra%C3%A7as_M%C3%A9dias_e_Grandes_3104832_1_20kg.jpg?1587145750"
						alt=""
						className="img-fluid"
					/>
				</div>
				<div className="col-6">
					<h6>
						<label className="badge badge-primary">R$ 30,00</label>
					</h6>
					<small>
						<b>Nome do Produto</b>
					</small>
				</div>
				<div className="col-3">
					<button className="btn btn-secondary rounded-circle">-</button>
				</div>
			</div>
		</div>
	)
}

export default ProductList
