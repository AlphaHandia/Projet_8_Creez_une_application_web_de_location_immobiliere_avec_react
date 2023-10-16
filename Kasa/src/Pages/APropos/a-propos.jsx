import AproposFront from "../../assets/image/AproposFront.png";
import "../../Sass/pages/Home.scss";
import Collapse from "../../components/Collapse/Collapse";
import content from "../../datas/content.json";
import Banner from "../../components/Banner/banner";

function APropos() {
  return (
    <div className="displayHome">
      <Banner 
      image={AproposFront}
      />
      <span className="Displaycollapse">
        <Collapse content={content} />
      </span>
    </div>
  );
}
export default APropos;
