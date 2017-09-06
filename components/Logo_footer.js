const logo = {
    padding: "25px 0 0 60px"
};

const logo_link = {
    display: "block",
    whiteSpace: "nowrap"
};

const Logo = (props) => (
    <div style={logo}>
        <a style={logo_link} href="#">
            <img src="/static/logo_footer.jpg" alt="PERCEPTION BOX" />
        </a>
    </div>
);

export default Logo
