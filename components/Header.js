import Navigation from './Navigation_header'
import Logo from './Logo_header'

const headerStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 50,
    left: 0,
    right: 0,
    top: 0,
    width: "100%",
    background: "#fff",
    borderBottom: "2px solid #041936",
    fontFamily: "Roboto"
};

const Header = (props) => (
    <div style={headerStyle}>
        <Logo />
        <Navigation />
    </div>
);

export default Header
