import logements from "../../../datas/logements.json";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Error from "../../Error/error";
import Carousel from "../../../components/carousel/carousel";
import Scorerating from "../../../components/Scorerating/Scorerating";
import Tags from "../../../components/tags/tags";
import HostInfo from "../../../components/host/host";


function Housing() {
  const [expandedItems, setExpandedItems] = useState([]);
  const { logementId } = useParams();

  const logement = logements.find((logement) => logement.id === logementId);

  if (!logement) {
    return <Error />;
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
    <section className="housing-container">
      <Carousel />
      <section className="display-housingcontent">
        <section className="display-rating">
          <span className="order-display-rating-one">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            <Tags tags={logement.tags} />
          </span>
          <span className="order-display-rating-two">
            <HostInfo host={logement.host} />
            <div className="ScoreRating">
              <Scorerating />
            </div>
          </span>
        </section>
        <section className="display-content">
          <span className="display-content-one">
            <button
              className={`collapse  ${isItemExpanded(0) ? "active" : ""}`}
              onClick={() => toggleItem(0)}
            >
              Description <i className="fa-solid fa-chevron-up"></i>
            </button>
            <div
              className={`collapseContent ${isItemExpanded(0) ? "active" : ""}`}
            >
              {logement.description}
            </div>
          </span>
          <span className="display-content-one">
            <button
              className={`collapse  ${isItemExpanded(1) ? "active" : ""}`}
              onClick={() => toggleItem(1)}
            >
              Equipements <i className="fa-solid fa-chevron-up"></i>
            </button>
            <div
              className={`collapseContent ${isItemExpanded(1) ? "active" : ""}`}
            >
              {logement.equipments ? (
                logement.equipments.map((equipment, subIndex) => (
                  <div key={subIndex}>{equipment}</div>
                ))
              ) : (
                <p>Aucun équipement disponible.</p>
              )}
            </div>
          </span>
        </section>
      </section>
    </section>
  );
}
export default Housing;
