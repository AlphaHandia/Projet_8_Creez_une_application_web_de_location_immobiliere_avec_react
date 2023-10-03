import "../../Sass/coponents/Footer.scss";
import styled from "styled-components";
import D_Footer from "../../assets/image/D_Footer.png";
import D_Footer_2 from "../../assets/image/D_footer_2.png";

const FootLogoText = styled.img``;
function Footer() {
  return (
    <div className="FooterContainer">
      <FootLogoText src={D_Footer} />
      <FootLogoText src={D_Footer_2} />
    </div>
  );
}

export default Footer;
