const logo_wrapper = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};

const logo_link = {
    display: "block",
    whiteSpace: "nowrap"
};

const Logo = (props) => (
    <div style={logo_wrapper}>
        <a style={logo_link} href="#">
            <img src="/static/logo-black.png" alt="PERCEPTION BOX" />
        </a>
    </div>
);

export default Logo
