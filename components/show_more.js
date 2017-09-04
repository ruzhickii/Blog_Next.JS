const show_more = {
    width: "100%",
    margin: "20px 0 100px 0",
    height: 100,
    fontSize: 49,
    textTransform: "uppercase",
    color: "#46648e",
    textDecoration: "none",
    border: "2px solid #ccc",
    background: "#fff"
};

const Show_more = (props) => (
    <div>
        <button style={show_more}>show more</button>
    </div>
);

export default Show_more