import React, { useState } from "react";
import "../../Sass/components/collapse.scss";

function Collapse({ content }) {
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
    <div className="collapseContainer">
      {content.map((item, index) => (
        <div key={index}>
          <button
            className={`collapse ${isItemExpanded(index) ? "active" : ""}`}
            onClick={() => toggleItem(index)}
          >
            {item.title} <i className="fa-solid fa-chevron-up"></i>
          </button>
          <div
            className={`collapseContent ${
              isItemExpanded(index) ? "active" : ""
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Collapse;
