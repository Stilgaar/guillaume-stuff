import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header({ showCart, setShowCart }) {

    // J'ai viré ton <a></a> qui te faisait un message d'erreur j'ai remplace par un bouton
    // J'ai reset tous les boutons dans app.css
    // La modif du bouton sinon se fait toujours dans headers.css

    // j'ai viré ton <strong></strong> aussi parce qu'on est pas en 1999

    return (
        <div>

            <header className="App-header">

                <div id="logo">

                    <h1> Gourman<span className={`font-bold`} >Gui</span>ses </h1>

                </div>

                <div className="titre-nav">

                    <h2> Pour des douceurs à votre guise </h2>

                    <nav className="menu-style">

                        <ul>
                            <li>
                                <Link to='/'> Accueil </Link>
                            </li>

                            <li>
                                <Link to='/produits'> Produits </Link>
                            </li>

                            <li>
                                <Link to='/configurateur'> Configurateur </Link>
                            </li>

                            <li>
                                <Link to='/contact'> Contact </Link>
                            </li>

                            <li>
                                <button className={`menu-style-button`} onClick={() => setShowCart(!showCart)}> Panier </button>
                            </li>

                        </ul>

                    </nav>

                </div>

            </header>

        </div>
    )
}

export default Header;