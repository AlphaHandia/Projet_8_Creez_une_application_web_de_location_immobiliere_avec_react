import HomeFront from "../../assets/image/HomeFront.png";
import Cards from "../../components/cards/cards";
import "../../Sass/pages/Home.scss";
import logements from "../../datas/logements.json";

function Home() {
  return (
    <div className="displayHome">
      <span className="displayHomeFront">
        <img src={HomeFront} alt="Homefront" className="HomeFrontPicture" />
        <p></p>
        <h1>Chez vous, partout et ailleurs</h1>
      </span>
      <span>
        <Cards logements={logements} />
      </span>
    </div>
  );
}

export default Home;
