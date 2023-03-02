import '../styles/App.css';
import Panier from './Panier'
import Header from './Header'
import Concept from './Concept'
import Contact from './Contact'
import Configurateur from './Configurateur'
import Produits from './Produits'
import Footer from './Footer'
import { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {

  const savedCart = localStorage.getItem('cart')

  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

  const [showCart, setShowCart] = useState(false)

  // ici j'aurais pas utilisé le local storage, j'aurais utilsisé :
  // - un useContext (hook dans react que tu vas check quand tu sera grand) il te permet de partager des infos dans toute ton appli ou une partie de ton application sans passer par les props
  // - un useReducer, c'est un super state manager (comme Redux, mais sans lib tiers) te permettant de gerer l'état d'un state globallement. Le panier sera là sur n'importe quel page * jusqu'a ce que la personne fasse un F5 (bon après c'est pas le but de faire des refresh sur un application React)
  // Attention c'est "idéalement"

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  // Juste pour plus de clarté dans ton code, en plus d'aérer le tout histoire que ce soit plus lisible : 
  // tu peux :
  // - différencier tes composants sont déjà des fonctions, des fonctions que tu utilise au dessus de ton jsx. 
  // a l'interieure tu peux utiliser des fonctions flêchées par exemple.
  // ce qui ferait ça : 

  // function MyAwesomeComp(props) {

  //const functionInsisde = () => {
  // do stuff
  //}
  // return (
  //  <jsx></jsx> 
  //   )
  //}

  return (

    <BrowserRouter>

      <div className="App">

        <Header showCart={showCart} setShowCart={setShowCart} />

        {showCart && (
          <Panier cart={cart} updateCart={updateCart} />
        )}

        <Routes>

          <Route path="/" element={<Concept />} />
          <Route path="/produits" element={<Produits cart={cart} updateCart={updateCart} />} />
          <Route path="/configurateur" element={<Configurateur />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

        <Footer />

      </div>
    </BrowserRouter>

  );
}

export default App;
