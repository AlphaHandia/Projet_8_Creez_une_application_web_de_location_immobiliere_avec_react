import React from "react";
import { Link } from "react-router-dom";
import "../../Sass/main.scss";

function Cards({ logements }) {
  return (
    <div className="CardContainer">
      {logements.map((logement) => (
        <Link
          to={`/Housing/${logement.id}`}
          className="CardContent"
          key={logement.id}
        >
          <div className="CardImageContainer">
            <img
              src={logement.cover}
              alt={logement.title}
              className="CardImage"
            />
          </div>
          <p>{logement.title}</p>
        </Link>
      ))}
    </div>
  );
}

export default Cards;
