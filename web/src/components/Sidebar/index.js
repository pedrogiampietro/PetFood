import React from 'react'
import Dock from 'react-dock'
import ProductList from '../../components/Product/List'
import './styles.css'

const Sidebar = () => {
	const [opened, setOpened] = React.useState(false)

	React.useEffect(() => {
		window.addEventListener('openCart', () => {
			setOpened(true)
		})
	}, [])

	console.log(opened)

	return (
		<Dock
			isVisible={opened}
			onVisibleChange={(visible) => {
				setOpened(visible)
			}}
			position="right"
		>
			<div className="container-fluid h-100 pt-4 sidebar">
				<h5>Minha Sacola (5)</h5>

				<div className="row products">
					{[1, 2, 3, 4, 5].map((p) => (
						<ProductList />
					))}
				</div>
			</div>
		</Dock>
	)
}

export default Sidebar
