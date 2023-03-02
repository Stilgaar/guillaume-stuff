import { useState } from 'react'
import { pastryList } from '../datas/pastryList'
import Item from './Item'
import Categories from './Categories'
import '../styles/Produits.css'

function Produits({
	cart,
	updateCart
}) {

	const [activeCategory, setActiveCategory] = useState('')

	const categories = pastryList.reduce(
		(acc, pastry) =>
			acc.includes(pastry.category) ? acc : acc.concat(pastry.category),
		[]
	)

	function addToList(name, recette) {
		console.log(name, recette)
	}

	function addToCart(name, price) {

		const currentPastrySaved = cart.find((pastry) => pastry.name === name)

		if (currentPastrySaved) {

			const cartFilteredCurrentPastry = cart.filter(

				(pastry) => pastry.name !== name
			)

			updateCart([
				...cartFilteredCurrentPastry,
				{ name, price, amount: currentPastrySaved.amount + 1 }
			])

		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (

		<div className='lp-shopping-list'>

			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lp-pastry-list'>

				{pastryList.map(({ id, cover, name, price, category, recette }) =>

					!activeCategory || activeCategory === category ? (

						<div key={id}>

							<Item
								cover={cover}
								name={name}
								price={price}
							/>

							<div className='lp-button-row'>

								<button onClick={() => addToCart(name, price)}>Ajouter<br />au Panier</button>

								<button onClick={() => addToList(name, recette)}>Ajouter<br />à la liste<br />de courses</button>


							</div>

						</div>

					) : null
				)}
			</ul>
		</div>
	)
}

export default Produits