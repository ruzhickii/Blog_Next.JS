import Navigation from './NavigationFooter';
import Logo from './LogoFooter';
import styled from 'styled-components';

const FooterStyle = styled.div`
        background: #000;
        font-family: Roboto;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 0 25px 0;

        @media (max-width: 635px) and (min-width: 320px) {
            flex-direction: column;
        }
`;

const Copyright = styled.div`
    text-align: right;
    color: #fff;
    padding: 0 64px 40px 0;

        
        @media (max-width: 920px) and (min-width: 786px) {
            padding: 0 26px 40px 0;
            text-align: right;
        }

        @media (max-width: 780px) and (min-width: 640px) {
            text-align: right;
            padding: 0 56px 25px 0;
        }

        @media (max-width: 635px) and (min-width: 320px) {
            max-width: 255px;
            margin: 0 auto;
            padding: 0;
            text-align: center;
        }
`;

const Footer = (props) => (
    <FooterStyle>
        <Wrapper>
            <Logo />
            <Navigation />
        </Wrapper>
        <Copyright>© PerceptionBox, Custom Software Development Company. All rights reserved.</Copyright>
    </FooterStyle>

);

export default Footer;
