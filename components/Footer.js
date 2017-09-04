import Navigation from './Navigation_footer'

const footerStyle = {
    color: "#fff",
    background: "#000",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: 20,
    fontFamily: "Roboto"
};

const Footer = (props) => (
    <div style={footerStyle}>
        <Navigation />
        <span>© PerceptionBox, Custom Software Development Company. All rights reserved.</span>
    </div>

);

export default Footer
