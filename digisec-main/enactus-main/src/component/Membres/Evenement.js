import React from "react";
import ReactDOM from "react-dom";
import Eventp from "./Eventp";
import younes from "./younes.png";
import maryam from "./maryam.png";
import wiam from "./wiam.png";
import ammar from "./ammar.png";
import abdelwadoud from "./abdelwadoud.png";
import basma from "./basma.png";
import hind from "./hind.png";
import imane from "./imane.png";

import './membre.css'
function Evenement() {
    const evenements = [
        { id: 1, nom: "Younes TAOUMI", post: "Team Leader", img: younes },
        { id: 2, nom: "Maryam BADRI", post: "Vice Team Leader", img: maryam },
        { id: 3, nom: "Wiam ABOUTARA BELRHITI ", post: "Vice President Project", img: wiam },
        { id: 4, nom: "Ammar MASSAOUDI", post: "Communication Manager", img: ammar },
        { id: 5, nom: "Hind ZAKY", post: "Human Ressources Manager", img: hind },
        { id: 6, nom: "Abdelwadoud EL BAROUJI", post: " Treasurer", img: abdelwadoud },
        { id: 7, nom: "Basma JAWHAR ", post: "Event Manager", img: basma },
        { id: 8, nom: "Imane OUAZZANI CHAHDI", post: "Head of partnerships", img: imane }
    ]
    return (
        <>
        <h3 className="tit">Notre Equipe</h3>
        < table id="membre">
            {evenements.map((evenement) => (
                <Eventp
                    key={evenement.id}
                    img={evenement.img}
                    nom={evenement.nom}
                    post={evenement.post}

                />
            ))}
        </table >
        </>
    )
}

export default Evenement;