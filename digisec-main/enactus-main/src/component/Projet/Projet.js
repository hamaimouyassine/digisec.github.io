import React from "react";
import insta3 from './insta3.jpeg';
function Projet({ nom, texte, image,lien }) {
    return (
        <div>
            <div className="carte">
                <table>
                    <tr className="tr">
                        <td colSpan={2}><h4 className="center">{nom}</h4></td>
                    </tr>
                    <tr className="tr">
                        <td><img className="imj" src={image} alt={nom} /></td>
                        <td className="top"><span><b>description:</b> {texte}</span></td>
                    </tr>
                    <tr><td colSpan={2}><a href={lien} className="lien"><img className="insta"src={insta3} alt="instagram"/></a></td></tr>
                </table>
                <br />
            </div>
        </div>
    )

}
export default Projet;