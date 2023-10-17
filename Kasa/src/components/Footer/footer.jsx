import "../../Sass/main.scss";
import styled from "styled-components";
import D_Footer from "../../assets/image/D_Footer.png";


const FootLogoText = styled.img``;
function Footer() {
  return (
    <div className="FooterContainer">
      <FootLogoText src={D_Footer} />
      <p>© 2020 Kasa, All rights reserved</p>
    </div>
  );
}

export default Footer;
