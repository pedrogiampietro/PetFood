import Header from '../../components/Header'
import PetshopMap from '../../components/PetshopMap'
import Map from '../../components/Map'
import './styles.css'

const Home = () => {
	return (
		<div className="h-100">
			<Header hideCart />

			<div className="container-fluid petshop-list-container">
				<div className="col-12 px-4 text-center">
					<h5>Mais proximos de voce (5)</h5>
				</div>
				<ul className="col-12 petshop-list">
					{[1, 2, 3, 4, 5].map((p) => (
						<PetshopMap />
					))}
				</ul>
			</div>
			<Map />
		</div>
	)
}

export default Home
