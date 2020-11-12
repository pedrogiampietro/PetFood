import React from 'react'
import Logo from '../../assets/logo.png'
import LogoWhite from '../../assets/logo-white.png'
import { ShoppingCart } from '@material-ui/icons'

import { Link } from 'react-router-dom'

import './styles.css'

const Header = ({ whiteVersion, hideCart }) => {
	const openDrawer = () => {
		const event = new CustomEvent('openCart')
		window.dispatchEvent(event)
	}

	return (
		<div className="col-12">
			<header className="py-4 px-4 text-center">
				<Link to="/">
					<img
						src={whiteVersion ? LogoWhite : Logo}
						className="img-fluid"
						alt="Logo"
					/>
				</Link>
			</header>
			{!hideCart && (
				<button
					className="btn btn-secondary cart-button"
					onClick={() => openDrawer()}
				>
					<ShoppingCart />
					(2) Itens
				</button>
			)}
		</div>
	)
}

export default Header
