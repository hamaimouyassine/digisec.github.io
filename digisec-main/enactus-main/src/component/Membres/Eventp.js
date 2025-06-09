import React from "react";
import ReactDOM from "react-dom";

function Eventp({ id, nom, post, img }) {
    return (
       <tr className="line">
            <td className="arrondie"><img src={img} alt={nom} className="imb"style={{ width: '180px', height: '180px' }}/></td>
            <td className="nom" >{nom}</td>
            <td className="poste">{post}</td>
        </tr>
    )
}

export default Eventp;