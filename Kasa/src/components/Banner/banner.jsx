import "../../Sass/main.scss";

function Banner({ image, text }) {
  return (
    <div className="displayHomeFront">
    
      {image && <img src={image} alt="Homefront" className="HomeFrontPicture" />}
      {text && <div><h1>{text}</h1><p></p></div>}


    
    </div>
  );
}

export default Banner;
