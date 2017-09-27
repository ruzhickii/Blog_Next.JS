import Navigation from './NavigationFooter';
import Logo from './LogoFooter';

const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    background: '#000',
    fontFamily: 'Roboto',
    padding: '0 0 25px 0'
};

const Footer = (props) => (
    <div style={footerStyle}>
        <Logo />
        <Navigation />
    </div>

);

export default Footer;
