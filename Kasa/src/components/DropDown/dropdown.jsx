import React, { useState } from "react";
import "../../Sass/coponents/DropDown.scss";

function DropDown() {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleItem = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  const isItemExpanded = (index) => expandedItems.includes(index);

  return (
    <div className="DropDownContainer">
      <button
        className={`DropDown ${isItemExpanded(0) ? "active" : ""}`}
        onClick={() => toggleItem(0)}
      >
        Fiabilité <i class="fa-solid fa-chevron-up"></i>
      </button>
      <div className={`DropDownContent ${isItemExpanded(0) ? "active" : ""}`}>
        Les annonces postées sur Kasa garantissent une fiabilité totale.Les
        photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes{" "}
      </div>
      <button
        className={`DropDown ${isItemExpanded(1) ? "active" : ""}`}
        onClick={() => toggleItem(1)}
      >
        Respect <i class="fa-solid fa-chevron-up"></i>
      </button>
      <div className={`DropDownContent ${isItemExpanded(1) ? "active" : ""}`}>
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </div>
      <button
        className={`DropDown ${isItemExpanded(2) ? "active" : ""}`}
        onClick={() => toggleItem(2)}
      >
        Service <i class="fa-solid fa-chevron-up"></i>
      </button>
      <div className={`DropDownContent ${isItemExpanded(2) ? "active" : ""}`}>
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </div>
      <button
        className={`DropDown ${isItemExpanded(3) ? "active" : ""}`}
        onClick={() => toggleItem(3)}
      >
        Sécurité <i class="fa-solid fa-chevron-up"></i>
      </button>
      <div className={`DropDownContent ${isItemExpanded(3) ? "active" : ""}`}>
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
        les voyageurs, chaque logement correspond aux critères de sécurité
        établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont
        bien respectés. Nous organisons également des ateliers sur la sécurité
        domestique pour nos hôtes.
      </div>
    </div>
  );
}

export default DropDown;
