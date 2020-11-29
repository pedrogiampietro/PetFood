import React from 'react'
import { useDispatch } from 'react-redux'
import { setCustomer as setStoreCustomer } from '../../store/modules/shop/actions'
import Header from '../../components/Header'
import Illustration from '../../assets/illustration.png'

const Register = () => {
	const dispatch = useDispatch()
	const [customer, setCustomer] = React.useState({
		external_id: new Date().getTime().toString(),
		name: '',
		type: 'individual',
		country: 'br',
		email: '',
		documents: [
			{
				type: 'cpf',
				number: '',
			},
		],
		phone_numbers: [''],
		birthday: '',
	})

	const goToCheckout = () => {
		dispatch(setStoreCustomer(customer))
	}

	return (
		<div className="container-fluid h-100 bg-primary">
			<Header whiteVersion hideCart />

			<div className="row">
				<div className="col-6 text-right my-auto">
					<img src={Illustration} className="img-fluid" alt="Logo" />
				</div>
				<div className="col-6">
					<div className="box col-8">
						<h2 className="text-center">Falta pouco pro seu pet ser feliz.</h2>
						<br />
						<br />
						<input
							type="text"
							className="form-control form-control-lg mb-3"
							placeholder="Nome Completo"
							onChange={(e) => {
								setCustomer({ ...customer, name: e.target.value })
							}}
						/>

						<input
							type="text"
							className="form-control form-control-lg mb-3"
							placeholder="Email"
							onChange={(e) => {
								setCustomer({ ...customer, email: e.target.value })
							}}
						/>

						<input
							type="text"
							className="form-control form-control-lg mb-3"
							placeholder="Telefone"
							onChange={(e) => {
								setCustomer({ ...customer, phone_numbers: [e.target.value] })
							}}
						/>

						<input
							type="text"
							className="form-control form-control-lg mb-3"
							placeholder="CPF"
							onChange={(e) => {
								setCustomer({
									...customer,
									documents: [
										{
											type: 'cpf',
											number: e.target.value,
										},
									],
								})
							}}
						/>

						<input
							type="date"
							className="form-control form-control-lg mb-3"
							placeholder="Data de Nascimento"
							onChange={(e) => {
								setCustomer({ ...customer, birthday: e.target.value })
							}}
						/>

						<button
							onClick={() => goToCheckout()}
							className="btn btn-lg btn-block btn-secondary"
						>
							Finalizar Pedido
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Register
