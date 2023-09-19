import { Link,  } from "react-router-dom"
import styled from "styled-components"
import Logo from '../../assets/image/logo.png'

import '../../Sass/utils/style/_styled-link.scss';
const HomeLogo= styled.img`
height : 68px;`

const NavContainer = styled.nav`
padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;`

function Header() {
    return (
      <NavContainer>
        <Link to="/">
          <HomeLogo src={Logo} />
        </Link>
        <div>
          <Link to="/"className='StyledLink'>Accueil</Link>
          <Link to="/A-Propos" className='StyledLink'>A Propos</Link>
          
        </div>
      </NavContainer>
    )
  }
  
  export default Header
  