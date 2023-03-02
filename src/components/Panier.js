import '../styles/Panier.css'
// import { useState } from 'react'

function Panier({
	cart,
	updateCart
}) {

	const total = cart.reduce((acc, pastryType) => acc + pastryType.amount * pastryType.price, 0)

	/* Très bonne utilisation des ternaires dans le JSX */

	return (

		<div className='lp-cart'>

			{cart.length > 0 ? (

				<div className='lp-cart-nonvoid'>

					<h2>Panier</h2>

					<ul>

						{cart.map(({ name, price, amount }, index) => (

							<div key={`${name}-${index}`}>

								{name} {price}€ x {amount}

							</div>
						))}

					</ul>

					<div className='lp-tot'>

						<h3>Total :{total}€</h3>

						<button onClick={() => updateCart([])}>Vider le panier</button>

					</div>

				</div>

			) : (

				<div>Votre panier est vide</div>

			)}

		</div>

	)
}

export default Panier