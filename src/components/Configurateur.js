import { useId } from "react"

import '../styles/Configurateur.css'

function Configurateur() {

  // Generateur d'ID pour un map, à coupler, par exemple, plus bas avec l'index
  const id = useId()

  // ça comme je t'ai dit, c'est plus propre de le séparer dans un fichier à part

  const prepaList = [
    {
      id: 0,
      nom: 'Mousse',
      color: '#FFE95E'
    },
    {
      id: 1,
      nom: 'Biscuit',
      color: '#FF1E1E'
    },
    {
      id: 2,
      nom: 'Insert',
      color: '#FFA67C'
    },
    {
      id: 3,
      nom: 'Croustillant',
      color: '#63A1FF'
    },
  ]

  // cette ligne permet de désactiver les messages d'erreurs dans ton terminal. (oui ça me perturbe)
  // eslint-disable-next-line 
  function updatePrepa() {
    let index;
    index = (index + 1) % prepaList.length
    alert(index)
  }

  const handleDoStuff = () => {
    console.log("dostuff")
  }

  return (

    <div className='lp-configurateur'>

      <h1>Le Configurateur</h1>
      <h2>Comme avec une voiture neuve mais en plus gourmand...</h2>

      <ul>

        {prepaList.map((prepa, index) => (

          <li key={`${index}-${id}`}
            className='lp-stack'
            style={{ backgroundColor: prepa.color }}
            onClick={handleDoStuff}>

            {prepa.nom}

          </li>

        ))}

      </ul>


    </div>
  )
}

export default Configurateur