import React from 'react'
import ReactDOM from 'react-dom'

import Register from './pages/Register'
import Checkout from './pages/Checkout'
import Petshop from './pages/Petshop'
import './styles/global.css'

ReactDOM.render(
	<React.StrictMode>
		<Petshop />
	</React.StrictMode>,
	document.getElementById('root')
)
