import React from 'react'
import ReactDOM from 'react-dom'

import Register from './pages/Register'
import Checkout from './pages/Checkout'
import Petshop from './pages/Petshop'
import Home from './pages/Home'

import './styles/global.css'
import Sidebar from './components/Sidebar'

ReactDOM.render(
	<React.StrictMode>
		<Sidebar />
		<Home />
	</React.StrictMode>,
	document.getElementById('root')
)
