import Navigation from './NavigationHeader';
import Logo from './LogoHeader';
import styled from 'styled-components';

const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 50;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    background: #fff;
    border-bottom: 2px solid #041936;
    font-family: Roboto;

        @media (max-width: 922px) {
           
        }

        @media (max-width: 768px) {
            
        }

        @media (max-width: 640px) {
            
        }

        @media (max-width: 320px) {
            
        }
`;

const Header = (props) => (
    <HeaderStyle>
        <Logo />
        <Navigation />
    </HeaderStyle>
);

export default Header;
