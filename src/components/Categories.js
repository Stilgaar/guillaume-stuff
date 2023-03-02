import '../styles/Categories.css'

function Categories({
	setActiveCategory,
	categories,
	activeCategory
}) {

	// invoque useContext
	// récupérer les data du context sans passer par les props

	return (

		<div className='lp-categories'>

			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='lp-categories-select'>

				<option value=''>---</option>

				{categories.map((cat) => (

					<option key={cat} value={cat}>
						{cat}
					</option>

				))}

			</select>

			<button onClick={() => setActiveCategory('')}>Réinitialiser</button>

		</div>
	)
}

export default Categories