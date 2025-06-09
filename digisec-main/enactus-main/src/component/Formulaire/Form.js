import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Form.css";

function Form() {
    const [nom, setNom] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState(null);
    const [tele, setTele] = useState(null);
    function handlechange(e) {
        let lenom = document.getElementById("nom").value
        setNom(lenom);
        let lage = document.getElementById("age").value
        setAge(lage);
        let Ema = document.getElementById("email").value
        setEmail(Ema);
        let telef = document.getElementById("telephone").value
        setTele(telef);
    }
    function hundl(e) {
        e.preventDefault()
        console.log(nom + " " + email + " " + tele + " " + age)
    }

    return (
        <>
            <div id="blur">
                <br/>
                <form className="form">
                    <h3 className="tit">Bienvenue sur Enactus!</h3>

                    <label htmlFor="nom">Nom Complet:</label>
                    <input type="text" id="nom" placeholder="Entrer votre nom complet" onChange={handlechange} />
                    <br />
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" placeholder="Entrer votre nom complet" onChange={handlechange} />
                    <br />
                    <label htmlFor="email">email:</label>
                    <input type="email" id="email" placeholder="Entrer votre e-mail" onChange={handlechange} />
                    <br />
                    <label htmlFor="telephone">Téléphone:</label>
                    <input type="tel" id="telephone" placeholder="Entrer votre Téléphone" onChange={handlechange} />
                    <br />

                    <input type="reset" value="Annuler" />
                    <input type="submit" value="Envoyer" onSubmit={hundl} />
                </form>
                <br/>
                </div>
        </>

    )
}

export default Form;