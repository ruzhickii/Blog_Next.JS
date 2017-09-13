

const up_block = {
    position: "fixed",
    left: 28,
    bottom: 150
};

const up_img = {
    width: "60%"
};

const Up_button = (props) => (
    <a style={up_block} href="#">
        <img style={up_img} src="/static/up.jpg" alt="arrow"/>
    </a>
);

export default Up_button