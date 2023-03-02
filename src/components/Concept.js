import '../styles/Concept.css'
import banderole from '../assets/banderole_patisseries.jpg'

function Concept() {

    // Ton image est trop grosse. Faudrait la réduire en taille.
    // Je tai rajouté un loading="lazy" comme ça le reste charge avant l'image aussi. Pense à le foutre partout sur tes images

    return (

        <div className='concept-style'>

            <h1>Passion Gâteaux, Passion Partage...</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent non porta tortor. Ut pulvinar nulla a vestibulum luctus.
                Sed sed metus justo. Nunc tellus massa, consequat a quam sed, commodo
                venenatis felis. Aenean non erat orci. Etiam sit amet magna porttitor,
                lacinia nisi sit amet, ultricies odio. Aenean eget est neque. Nulla eu
                neque sit amet nulla varius facilisis.
                Vestibulum sollicitudin dui ac nisl laoreet, ut commodo diam dapibus.
                Phasellus ut sem in ipsum sodales aliquam eu sed lorem. Vestibulum ut pulvinar
                felis, in iaculis nulla. Maecenas justo eros, lacinia non porta non, tempus vitae nisl.
                Integer placerat tellus a mi porttitor, at condimentum sem pharetra. Donec quis sapien at
                turpis lacinia consectetur. Nulla lobortis mi sit amet euismod eleifend. Praesent et mauris
                magna. Nulla nec tellus nec diam vulputate mattis at in odio.</p>

            <div className="banderole_gateaux">

                <img src={banderole} alt="gateaux" loading="lazy" />

            </div>

        </div>
    )
}

export default Concept