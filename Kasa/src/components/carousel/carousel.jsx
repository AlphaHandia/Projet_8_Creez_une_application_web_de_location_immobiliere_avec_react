import logements from "../../datas/logements.json";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import arrowRight from "../../assets/image/arrow_right.png";
import arrowLeft from "../../assets/image/arrow_left.png";
import "../../Sass/components/carousel.scss";

function Carousel() {
  const { logementId } = useParams();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0); 

  const logement = logements.find((logement) => logement.id === logementId);

  const goToSlide = (index) => {
    if (index < 0 || index >= logement.picture.length) {
      return;
    }
    setCurrentSlideIndex(index); 
  };

  const showArrows = logement.picture.length > 1;

  const handlePrevClick = () => {
    const prevSlideIndex = currentSlideIndex - 1;
    if (prevSlideIndex < 0) {
      goToSlide(logement.picture.length - 1);
    } else {
      goToSlide(prevSlideIndex);
    }
  };

  const handleNextClick = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex >= logement.picture.length) {
      goToSlide(0);
    } else {
      goToSlide(nextSlideIndex);
    }
  };

  return (
    <div className="carousel-container">
      {showArrows && (
        <div className={`button-prev ${showArrows ? "show" : "hide"}`}>
          <button
            onClick={handlePrevClick}
            title="Précédent"
            className="button-prev"
          >
            <img src={arrowLeft} alt="Flèche gauche" />
          </button>
        </div>
      )}

      {showArrows && (
        <div className={`button-next ${showArrows ? "show" : "hide"}`}>
          <button
            onClick={handleNextClick}
            title="Suivant"
            className="button-next"
          >
            <img src={arrowRight} alt="Flèche droite" />
          </button>
        </div>
      )}

      <div className="banner-img">
        <img
          src={logement.picture[currentSlideIndex]}
          alt={`Slide ${currentSlideIndex + 1}`}
        />
      </div>

      {logement.picture.length > 1 && (
        <p className="image-numbers">
          {currentSlideIndex + 1}/{logement.picture.length}
        </p>
      )}
    </div>
  );
}

export default Carousel;
