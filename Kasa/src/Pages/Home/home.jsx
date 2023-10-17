import HomeFront from "../../assets/image/HomeFront.png";
import Cards from "../../components/cards/cards";
import "../../Sass/main.scss";
import logements from "../../datas/logements.json";
import Banner from "../../components/Banner/banner";

function Home() {
  return (
    <div className="displayHome">
      <Banner 
      image={HomeFront}
      text="Chez vous, partout et ailleurs"/>
      <span>
        <Cards logements={logements} />
      </span>
    </div>
  );
}

export default Home;
