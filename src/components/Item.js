import '../styles/Item.css'

// Je t'ai remis ta fonction dans ton composant, parce que c'est vilain.
// D'ailleurs je pige pas trop à quoi sert l'alert au final. 
// D'ailleurs je t'ai fait une fonction flechée au lieu d'une fonction aussi

function Item({
	cover,
	name,
	price
}) {

	const handleClick = (pastryName) => {
		alert(`Vous voulez acheter 1 ${pastryName}? Très bon choix 🌱✨`)
	}

	return (

		<li className='lp-pastry-item' onClick={() => handleClick(name)}>

			<img className='lp-pastry-item-cover'
				src={cover}
				alt={`${name} pic`} />

			{name} {price}€

		</li>
	)
}

export default Item