import logements from "../../../datas/logements.json";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../../../components/Slideshow/Slideshow";
import '../../../Sass/pages/Housing.scss'
import '../../../Sass/coponents/Slideshow.scss'

function Housing() {
  const [expandedItems, setExpandedItems] = useState([]);
  const { logementId } = useParams();

  const logement = logements.find((logement) => logement.id === logementId);

  // Vérifiez si logement est undefined
  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  const toggleItem = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  const isItemExpanded = (index) => expandedItems.includes(index);

  return (
    <div className='housing-container'>
      <Slideshow />

      <div className= 'display-housingcontent'>
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>
        <span className="housingcontenttags" >{logement.tags}</span>

        <span>
          <p>{logement.host ? logement.host.name : ""}</p>
          <span>{logement.rating}</span>
        </span>

        <button
          className={`DropDown ${isItemExpanded(0) ? "active" : ""}`}
          onClick={() => toggleItem(0)}
        >
          Description <i className="fa-solid fa-chevron-up"></i>
        </button>
        <div className={`DropDownContent ${isItemExpanded(0) ? "active" : ""}`}>
          {logement.description}
        </div>

        <button
          className={`DropDown ${isItemExpanded(1) ? "active" : ""}`}
          onClick={() => toggleItem(1)}
        >
          Equipements <i className="fa-solid fa-chevron-up"></i>
        </button>
        <div className={`DropDownContent ${isItemExpanded(1) ? "active" : ""}`}>
          {logement.equipments ? (
            logement.equipments.map((equipment, subIndex) => (
              <div key={subIndex}>{equipment}</div>
            ))
          ) : (
            <p>Aucun équipement disponible.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Housing;
