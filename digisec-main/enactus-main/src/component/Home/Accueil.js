import React,{useState} from "react";
import './Accueil.css';
import Apropos from "../Apropos/Apropos";
import Evenement from "../Membres/Evenement";
import Form from "../Formulaire/Form";
import { useNavigate } from "react-router-dom";
function Accueil() {
    const navigate = useNavigate();
        return (
            <>
                <div id="back">

                    <div>
                        <br />
                        <h1 className="tith">Agir, Innover, Inspirer</h1>

                        <p id="para">
                            Enactus est un réseau mondial qui inspire les jeunes à utiliser l'entrepreneuriat pour
                            résoudre les défis sociaux et économiques. Enactus Maroc, fondé en 2003, fait partie de
                            ce réseau et offre aux étudiants l'opportunité de concrétiser des projets innovants ayant
                            un impact direct sur leur communauté.
                        </p>
                    </div>
                    <br />
                    <table id="acc">
                        <tr>
                            <td>
                                <h3 className="tith">Qu'est ce que vous attendez pour rejoindre l'aventure?</h3>
                                <br />
                                <button id="clique" onClick={() => navigate("/Form")}>Rejoignez-Nous</button>
                            </td>
                        </tr>
                    </table>


                </div>
                <br />
                <Apropos />
                <Evenement />

            </>

        )
    }
    export default Accueil;