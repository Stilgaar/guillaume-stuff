import '../styles/Contact.css'
import React, { useState } from 'react';
import pomme from '../assets/pomme.jpg'
import citron from '../assets/citron.jpg'
import millefeuille from '../assets/millefeuille.JPG'
import religieuse from '../assets/religieuse.jpg'

function Contact() {


    // Quand c'est comme ça il y a moyen de faire qu'un state : 
    // const [data, setData] = useState({})
    // puis d'utliser une seule fonction pour tes handlechange : 
    //const handleChange = (e) =>  setData((data) => ({ ...data, [e.target.name]: e.target.value.trim() }))
    // ça te permet dans ton <input d'avoir onChange={handleChange} />
    // puis pour acceder à tes values t'aura 
    // {data.firstName} par exemple
    // ça t'évite pleins de useState comme ça par exemple
    // par contre tes inputs devraient avoir un name : <input name={`firstName`}/>

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');

    // C'est pas très catholique ça mais jvais faire comme si j'avais rien vu !

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:guillaume.cuadrado@gmail.com?subject=Message de ${firstName} ${lastName}&body=${message}`;
        window.location.href = mailtoLink;
    };

    // Ce que tu peux faire également c'est un tableau pour map tes inputs (c'est qu'un exemple)
    // Mais tu peux faire ça avec pleins de trucs par la suite.

    // const inputList = [
    // {
    // "label" : "Prénom",
    // "type" : "text",
    // "name" : "firstName"

    // },
    // {
    // "label" : "Prénom",
    // "type" : "text",
    // "name" : "firstName"
    // },
    // ]

    // puis tu peux mapper ça dans ton jsx.
    // {inputList.map(input => {
    // <label>
    // {input.label}
    // <input type={input.type} value={data[`${input.name}`]} name={input.name} onChange={handleChange} />
    // </label>
    // })}

    return (

        <div className='contact-style'>

            <form onSubmit={handleSubmit}>

                <label>
                    Prénom:
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </label>

                <label>
                    Nom:
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </label>

                <label>
                    Message:
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                </label>

                <button type="submit">Envoyer</button>

            </form>

            <div className="gallery">
                <img src={citron} alt="citronmeringuee" />
                <img src={pomme} alt="tarte pomme" />
                <img src={millefeuille} alt="millefeuille" />
                <img src={religieuse} alt="religieuse" />
            </div>

        </div>
    )
}

export default Contact