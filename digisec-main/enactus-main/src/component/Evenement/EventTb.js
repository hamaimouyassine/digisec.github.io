import React from "react";
import Event from "./Event";
import hackathon from "./hackathon.JPG";
import competion from "./competion.JPG";
import mars from "./mars.JPG";
import integration from './integration.JPG'
import './Event.css'

function EventTab() {
    const evs = [
        { id: 3,im:competion, d: "  29/06/2024", name: 'Compétition:', txt: " ⇒ Demi finale : La fin d'une aventure, mais le début d'une autre. Nous aurions pu atteindre des sommets, mais les choses ne se passent pas toujours comme on l'aurait souhaité.L'histoire est en marche et nous sommes fiers d’être parmi les 12 meilleures équipes du Maroc, une première historique pour Enactus FSBM.The journey is ongoing.E la storia continua.⇒ Phase des ligues:Le 29 juin 2024, en compétition à UIT Kenitra, Enactus FSBM a pris sa place méritée en tête, prouvant que la foi dépasse les statistiques. Malgré des chances qui semblaient minimes, c’est la confiance et l’esprit d’équipe qui ont dominé. Avec la certitude de se qualifier pour le prochain tour, chaque membre de l’équipe a fait preuve de détermination. Parce qu’en famille et entre coéquipiers, la force est décuplée, et ensemble, ils avancent vers de nouveaux défis avec la conviction que le meilleur est à venir." },
         { id: 4, im:integration,d: " 2024-2025", name: "Journée d'intégration:", txt: "La journée de lancement et d'intégration a permis de présenter le club Enactus FSBM tout en facilitant l'intégration des nouveaux membres à travers des jeux et des activités de cohésion. Un moment de partage et de convivialité, marquant le début d'une aventure collective." },
        { id: 2, im:mars,d: " 09/03/2024", name: 'Journée 8 mars:', txt: " L'événement L'innovation au féminin : Explorer la science et l'entrepreneuriat a mis en lumière le rôle des femmes dans ces deux domaines. Au programme : des panels sur les femmes leaders en sciences et l'entrepreneuriat, suivis d'un atelier sur le Brand Building. Des experts tels qu’Abdellah Zerhouni, Sanaâ Benahmed et Malika Izid ont partagé leurs expériences inspirantes, clôturant ainsi une journée riche en échanges et apprentissages." },
        { id: 1,im:hackathon, d: " 15/12/2023  16/12/2023 et 17/12/202", name: 'Hackathon:', txt: "Du 15 au 17 décembre 2023, notre équipe a participé au Méga Hackathon Panafricain, où nous avons eu l'opportunité de développer des idées de projets innovants en un temps limité, démontrant notre créativité et notre capacité à relever des défis dans un cadre compétitif." }
        
    ]
    return (
        <>
        <h3 className="tit">Nos Evenements</h3>
            {evs.map(ev => (
                <Event
                    key={ev.id}
                    nom={ev.name}
                    image={ev.im}
                    description={ev.txt}
                    date={ev.d}
                />
            ))
            }
        </>
    )
}
export default EventTab;