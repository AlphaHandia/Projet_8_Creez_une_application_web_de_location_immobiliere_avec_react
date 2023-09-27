import "../../Sass/coponents/Footer.scss";

import styled from "styled-components";
import D_Footer from "../../assets/image/D_Footer.png";

const FootLogoText = styled.img``;
function Footer() {
  return (
    <div className="FooterContainer">
      <FootLogoText src={D_Footer} />
    </div>
  );
}

export default Footer;
