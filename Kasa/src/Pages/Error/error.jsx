import { Link } from "react-router-dom";
import "../../Sass/main.scss";

function Error() {
  return (
    <div className="ErrorWrapper">
      <h1 className="ErrorTitle">404</h1>

      <h2 className="ErrorSubtitle">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link to="/" className="ErrorLink">
        Retourner sur la page d'acceuil
      </Link>
    </div>
  );
}

export default Error;
