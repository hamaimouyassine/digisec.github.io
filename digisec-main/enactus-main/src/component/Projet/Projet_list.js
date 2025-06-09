import React from "react";
import Projet from "./Projet";
import voltainos from "./voltainos.png";
import uniride from "./uniride.png";
import sitauti from "./sitauti.png";
import reskin from "./reskin.png";
import potrinov from "./potrinov.png";
import enbo from "./enbo.png";
import educlass from "./educlass.png";
import bottle3d from "./bottle3d.png";
import Botaba9a from "./Botaba9a.png";
import bistrokab from "./bistrokab.png";
import biogazify from "./biogazify.png";
import "./Projet.css";


function Project_list() {
    const projs = [
        { id: 1, name: "Voltainos", img: voltainos, txt: "Avec sa solution énergétique durable, VOLTAINOS combine l'énergie éolienne avec la technologie piézo électrique pour une production d'électricité flexible et durable", linke: "" },
        { id: 2, name: "uniride ", img: uniride, txt: "une application mobile optimise le transport étudiant au Maroc avec covoiturage adaptatif, promouvant mobilité durable, économique et sécurisée. ", linke: "" },
        { id: 3, name: "Sitauti ", img: sitauti, txt: "Une plateforme interactive dédiée à l'autisme, offrant divers moyens de soutien aux autistes, leurs familles et aidants,répondant à un besoin social urgent. ", linke: "" },
        { id: 4, name: "Reskin ", img: reskin, txt: "Face au gaspillage alimentaire et à l'impact néfaste des cosmétiques industriels sur l’environnement, Reskin transforme ces résidus en cosmétiques durables. En recyclant les déchets alimentaires, l'entreprise réduit l'empreinte carbone et crée des produits respectueux de la peau et de la planète, répondant ainsi aux attentes des consommateurs éco-conscients.", linke: "https://www.instagram.com/reskincosmetique?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
        { id: 5, name: "Potrinov", img: potrinov, txt: "POTRINOV réinvente l’art de la poterie en alliant savoir-faire traditionnel et innovation moderne. Avec des créations uniques et un service digital en cours de finalisation, nous offrirons à nos partenaires une visibilité authentique et engageante. Ce projet vise à soutenir un artisanat durable.", linke: "https://www.instagram.com/potrinov.ma?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
        { id: 6, name: "Enbo", img: enbo, txt: "propose des boîtes écologiques à trois couches, faites de matériaux recyclés, pour protéger les produits et assurer leur traçabilité.", linke: "" },
        { id: 7, name: "Educlass mingle", img: educlass, txt: "un site web intégrant réseaux sociaux et étude, facilitant l'apprentissage, la révision et la communication simultanément pour les utilisateurs.", linke: "https://www.instagram.com/educlassmingle?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
        { id: 8, name: "Bottle 3D", img: bottle3d, txt: "projet vise à collecter et traiter les bouteilles en plastique pour les recycler en filaments utilisables dans les imprimantes 3D.", linke: "" },
        { id: 9, name: "Botabaقa", img:Botaba9a, txt: "Lorsque des coupures inattendues de gaz interrompent vos repas ou douches, cela perturbe votre quotidien. Bota Baقa apporte une solution intelligente avec un capteur qui mesure le niveau de gaz restant et envoie des alertes avant que la bouteille ne soit vide, garantissant ainsi une gestion fluide et sans surprise de vos réserves.", linke: "https://www.instagram.com/botaba9a/?utm_source=ig_web_button_share_sheet" },
        { id: 10, name: "Bistrokabb", img:bistrokab, txt: "le câprier, trésor nutritionnel souvent négligé au Maroc, est mis en lumière par Bistrolabb. En créant des produits alimentaires sains et variés à base de câpres, cette initiative soutient les producteurs locaux, valorise le savoir-faire artisanal et crée des opportunités économiques pour les femmes, tout en ravivant la cuisine marocaine traditionnelle.", linke: "https://www.instagram.com/bistro_kabb/?utm_source=ig_web_button_share_sheet" },
        { id: 11, name: "Biogazify", img:biogazify, txt: "projet vise à convertir du biogaz issu de déchets organiques en une source d'énergie pratique pour la cuisine. ", linke: "" }


    ]
    return (
        <>
            <h3 className="tit">Nos Projets</h3>
            <br />
            {projs.map(proj => (
                <Projet
                    key={proj.id}
                    nom={proj.name}
                    texte={proj.txt}
                    image={proj.img}
                    lien={proj.linke}
                />
            )
            )}
        </>
    )
}

export default Project_list;