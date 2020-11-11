import React from 'react'
import ReactDOM from 'react-dom'

import Register from './pages/Register'
import Checkout from './pages/Checkout'
import './styles/global.css'

ReactDOM.render(
	<React.StrictMode>
		<Checkout />
	</React.StrictMode>,
	document.getElementById('root')
)
