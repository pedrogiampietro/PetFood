import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Register from './pages/Register'
import Petshop from './pages/Petshop'
import Checkout from './pages/Checkout'
import Sidebar from './components/Sidebar'

import './styles/global.css'

const Routes = () => {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/petshop/:id" exact component={Petshop} />
					<Route path="/checkout" exact component={Checkout} />
					<Route path="/register" exact component={Register} />
				</Switch>
			</BrowserRouter>
			<Sidebar />
		</>
	)
}

export default Routes
