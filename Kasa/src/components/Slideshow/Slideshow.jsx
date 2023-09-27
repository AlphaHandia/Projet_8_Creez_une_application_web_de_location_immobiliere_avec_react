import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logements from "../../datas/logements.json";
import arrowLeft from "../../assets/image/arrow_left.png";
import arrowRight from "../../assets/image/arrow_right.png";
import "../../Sass/coponents/Slideshow.scss"; 

function Slideshow() {
  const { logementId } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Trouver le logement par son ID
  const logement = logements.find((logement) => logement.id === logementId);

  // Vérifier si logement est undefined
  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  const handleImageChange = (index) => {
    setCurrentIndex(index);
  };

  const showCarousel = logement.pictures.length > 1;

  return (
    <div className="slideshow-container">
      {showCarousel && (
        <Carousel
          infiniteLoop
          autoPlay
          selectedItem={currentIndex}
          onChange={handleImageChange}
          showThumbs={false} 
          renderArrowPrev={(onClickHandler, hasPrev, label) => (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="button-prev"
            >
              <img src={arrowLeft} alt="Flèche gauche" />
            </button>
          )}
          renderArrowNext={(onClickHandler, hasNext, label) => (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="button-next"
            >
              <img src={arrowRight} alt="Flèche droite" />
            </button>
          )}
        >
          {logement.pictures.map((picture, index) => (
            <div key={index} className="carousel-image">
              <img src={picture} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      )}

      {showCarousel && (
        <p className="image-numbers">
          {currentIndex + 1}/{logement.pictures.length}
        </p>
      )}
    </div>
  );
}

export default Slideshow;
