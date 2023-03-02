import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import '../styles/Footer.css'

function Footer() {

    // Jeff : je t'ai viré les textes sous les icones, parce que c'est grave pas beau :D coeur coeur

    // je t'ai remplacé la div inutile par des chevrons, ça s'appelle aussi des React.Fragments et peuvent être call <React.Fragments></React.Fragements>
    // Les Fragments te permettent de passer une key={quelquechose}. Ce que ne te permettent pas les <></> seuls
    // Ils allègent le code (html) 

    // D'ailleurs ça aussi tu peux le mettre dans une liste et le mapper

    return (

        <>

            <footer>

                <ul id="networking">

                    <li>

                        <a href="https://www.facebook.com/guillaume.cuad/" title="Facebook">
                            {/* Facebook  */}
                            <img src={facebook} alt="Facebook" />
                        </a>

                    </li>

                    <li>

                        <a href="https://www.instagram.com/guillaume.quad/" title="Instagram">
                            {/* Instagram  */}
                            <img src={instagram} alt="Instagram" />
                        </a>

                    </li>

                    <li>

                        <a href="https://www.linkedin.com/in/guillaume-cuadrado-95820723/" title="LinkedIn">
                            {/* LinkedIn  */}
                            <img src={linkedin} alt="Linkedin" />
                        </a>

                    </li>

                </ul>

                <span id="tel"> <p> Guillaume CUADRADO <br /> Tel : 06.22.40.67.81 </p></span>

            </footer>

        </>
    )
}

export default Footer