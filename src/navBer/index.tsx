import logoImage from "./ic_launcher.png";
import * as Style from "./style"

const NavBar = () => {
  return (
    <Style.Header>
        <Style.ResponsiveNavbar>
          <Style.LogoContainer>
            <Style.ResponsiveLogo>
              <img src={logoImage} alt="Company Logo" />
            </Style.ResponsiveLogo>
            <Style.ResponsiveCompanyName>Password Generator</Style.ResponsiveCompanyName>
          </Style.LogoContainer>
          {/* Add any other navbar items or links here */}
        </Style.ResponsiveNavbar>
      </Style.Header>
  );
};

export default NavBar;
