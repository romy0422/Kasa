import React from "react";

function Card({id, image, titre}) {
    return(
        <div className="card" id={id}>
            <img className="card-image" src={image} alt="card"/>
            <div className="card-sombre"></div>
            <span className="card-titre">{titre}</span>
        </div>
    );
}

export default Card;