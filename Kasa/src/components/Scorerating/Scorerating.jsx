import staractive from "../../assets/image/staractive.png";
import starunactive from "../../assets/image/starunactive.png";
import { useParams } from "react-router-dom";
import logements from "../../datas/logements.json";

function Scorerating() {
  const { logementId } = useParams();

  const logement = logements.find((logement) => logement.id === logementId);

  if (!logement) {
    return <div>etoiles non trouvé</div>;
  }

  var notation = logement.rating;

  let nombreEtoiles = Math.floor(notation);

  let codeEtoiles = "";
  for (let i = 0; i < nombreEtoiles; i++) {
    codeEtoiles += `<img src="${staractive}" alt="étoile active" />`;
  }

  for (let i = nombreEtoiles; i < 5; i++) {
    codeEtoiles += `<img src="${starunactive}" alt="étoile inactive" />`;
  }

  return (
    <div
      dangerouslySetInnerHTML={{ __html: codeEtoiles }}
      className="rating-display"
    />
  );
}

export default Scorerating;
