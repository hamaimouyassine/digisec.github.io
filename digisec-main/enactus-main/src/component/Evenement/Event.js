import React from "react";

function Event({ nom, description, image, date }) {
    return (
        <div className="contenaire">
            <div>
                <h3 className="compe">{nom}</h3>
                <br />
                <img className="imcomp"src={image} alt={nom}/>
                <br/>
                <b id="date">
                    {date}
                </b>
                <div>
                    {description}
                </div>
            </div>
        </div>

    )
}
export default Event;