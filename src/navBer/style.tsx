import styled from 'styled-components';

export const Header = styled.header`
  background-color: #333;
  padding: 10px 0;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 10px;
  
  img {
    width: 100%;
    height: auto;
  }
`;

export const CompanyName = styled.span`
  font-size: 1.5rem;
  color: #fff;
  margin-left: 60px;
`;

export const Content = styled.div`
  padding: 20px;
`;

// Responsive styles
export const ResponsiveNavbar = styled(Navbar)`
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ResponsiveCompanyName = styled(CompanyName)`
  @media only screen and (max-width: 768px) {
    margin-left: 10px;
    margin-top: 10px;
  }
`;

export const ResponsiveLogo = styled(Logo)`
  @media only screen and (max-width: 768px) {
    position: static;
    margin-bottom: 10px;
  }
`;