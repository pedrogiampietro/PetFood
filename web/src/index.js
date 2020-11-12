import React from 'react'
import ReactDOM from 'react-dom'

import Register from './pages/Register'
import Checkout from './pages/Checkout'
import Petshop from './pages/Petshop'

import './styles/global.css'
import Sidebar from './components/Sidebar'

ReactDOM.render(
	<React.StrictMode>
		<Sidebar />
		<Petshop />
	</React.StrictMode>,
	document.getElementById('root')
)
