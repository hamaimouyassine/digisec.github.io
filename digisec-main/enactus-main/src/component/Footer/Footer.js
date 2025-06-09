import React from "react";
import email from "./email.png";
import instgram from "./instgram.png";
import linkedin from "./linkdin.png";
import tiktok from "./tiktok.png";
import teleph from "./teleph.png";
import "./foot.css";



function Footer() {
    return (
        <div>
            <footer id="f">
                <br/>
                <div id="foot">
                    <h3>suivez-nous</h3>
                    <a href="mailto:enactus24.25fsbm@gmail.com"><img className="icone" src={email} /></a>
                    <a href="tel:+212639380894"><img src={teleph} className="icone" /></a>
                    <a href="https://www.linkedin.com/company/enactus-fsbmc/"><img src={linkedin} className="icone" /></a>
                    <a href="https://www.instagram.com/3nac1us.fsbm?igsh=YWcyaGQyOGMzNzJo"><img src={instgram} className="icone" /></a>
                    <a href="https://www.tiktok.com/@enactus.fsbmposting"><img src={tiktok} className="icone" /></a>
                </div>
                <div id="loc">
                    <h3>adresse</h3>
                    <h5>
                        Enactus FSBM, Faculté des Sciences Ben M'Sick - Bd Commandant Driss Al Harti,Casablanca 20670 - Maroc
                    </h5>

                </div>
                <div>
                    <h6>© 2025 Développé par Hanae El Haddani.</h6>
                </div>
                <br/>
            </footer>
        </div>
    )
}

export default Footer;