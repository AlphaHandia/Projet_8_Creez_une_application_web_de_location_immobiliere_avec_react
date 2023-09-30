import AproposFront from "../../assets/image/AproposFront.png";
import "../../Sass/pages/Home.scss";
import Collapse from "../../components/Collapse/Collapse";
import content from "../../datas/content.json";

function APropos() {
  return (
    <div className="displayHome">
      <span className="displayHomeFront">
        <img
          src={AproposFront}
          alt="A-proposfront"
          className="HomeFrontPicture"
        ></img>
      </span>
      <span className="Displaycollapse">
        <Collapse content={content} />
      </span>
    </div>
  );
}
export default APropos;
