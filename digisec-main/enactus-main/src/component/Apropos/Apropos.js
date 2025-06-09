import React from "react";
import './Apropos.css';
import fsbm from './fsbm.png';
import eerchad from './eerchad.png';
import imitech from './imitech.png';
import injaz from './injaz.png';
import pe2i from './pe2i.png';
import pie from './pie.png';
function Apropos() {
    return (
        <>
            <h3 className="tit">Notre Club en Chiffres</h3>
            <table id="tab1">
                <tr>
                    <td className="cad">
                        Jeunes mobilisés :
                        <br />
                        <span className="bold">+1000 étudiants impactés</span>
                    </td>
                    <td className="cad">
                        Projets développés :
                        <br />
                        <span className="bold">+40 projets réalisés</span>
                    </td>
                    <td className="cad">
                        Bénéficiaires impactés :
                        <br />
                        <span className="bold">+500 personnes</span>
                    </td>
                    <td className="cad">
                        Heures de formations et<br />
                        d’accompagnement dispensées:
                        <br />
                        <span className="bold">+3000 heures</span>
                    </td>
                </tr>
            </table>
            <h3 className="tit">Nos Réalisations</h3>
            <table id='tab2'>
                <tr>
                    <td className="cad1">Top 12 du Maroc</td>
                    <td className="cad1">Demi finaliste 2023-2024</td>
                    <td className="cad1">gagnant de prix Enactus Got Impact</td>
                </tr>
            </table>
            <br />
            <h3 className="tit">Nos Partenaires</h3>
            <table id='tab3'>
                <tr>
                    <td ><img src={pie} alt="photo1" className="ph" /></td>
                    <td ><img src={pe2i} alt="photo2" className="ph" /></td>
                    <td ><img src={injaz} alt="photo3" className="ph" /></td>
                    <td ><img src={imitech} alt="photo4" className="ph" /></td>
                    <td ><img src={eerchad} alt="photo5" className="ph" /></td>
                    <td ><img src={fsbm} alt="photo6" className="ph" /></td>
                </tr>
            </table>


        </>
    )

}
export default Apropos;