
const user = {
    position: "absolute",
    bottom: 5,
    left: 15,
    display: "flex"
};

const img_wrapper = {
    maxWidth: 50
};

const img = {
    width: "100%",
    borderRadius: "50%"
};

const user_info_wrapper = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0 0 0 10px",
};

const border_block = {
    borderLeft: "1px solid #fff"
};

const author = {
    padding: "0 0 0 10px",
    color: "#fff",
    fontSize: 15,
    textTransform: "uppercase",
    fontFamily: "ProximaNovaRegular"
};

const position = {
    padding: "0 0 0 15px",
    color: "#fff",
    fontSize: 10,
    textTransform: "uppercase",
    fontFamily: "ProximaNovaLight"
};

const user_widget = (props) => (
    <div style={user}>
        <div style={img_wrapper}>
            <img style={img} src="/static/user.jpg" />
        </div>
        <div style={user_info_wrapper}>
            <div style={border_block}>
                <div style={author}>
                    <span>
                        matvey dunuk
                    </span>
                </div>
                <div style={position}>
                    <span>
                        graphic designer
                    </span>
                </div>
            </div>
        </div>
    </div>
);

export default user_widget