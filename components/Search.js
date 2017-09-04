const inputs_wrapper = {
    boxShadow: "0 0 5px black",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: "60px 0 0 0",
    padding: "55px 0 55px 0"
};

const tag_name_input = {
    maxWidth: 465,
    height: 95,
    textAlign: "center",
    color: "#778094",
    fontFamily: "Roboto",
    fontSize: 45,
    fontWeight: 400,
    textTransform: "uppercase",
    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.45)"
};

const square_wrapper = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
};

const first = {
    width: 30,
    height: 30,
    backgroundColor: "#fbaf5d",
    margin: "10px 10px 0 0"
};

const second = {
    width: 30,
    height: 30,
    backgroundColor: "#7cc576",
    margin: "10px 10px 0 0"
};

const third = {
    width: 30,
    height: 30,
    backgroundColor: "#5674b9",
    margin: "10px 10px 0 0"
};

const forth = {
    width: 30,
    height: 30,
    backgroundColor: "#f26d7d",
    margin: "10px 10px 0 0"
};

const fifth = {
    width: 30,
    height: 30,
    backgroundColor: "#c69c6d",
    margin: "10px 10px 0 0"
};

const six = {
    width: 30,
    height: 30,
    backgroundColor: "#f06eaa",
    margin: "10px 10px 0 0"
};

const title_name_input = {
    maxWidth: 465,
    height: 95,
    textAlign: "center",
    color: "#778094",
    fontFamily: "Roboto",
    fontSize: 45,
    fontWeight: 400,
    textTransform: "uppercase",
    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.45)"
};


const Search = (props) => (
    <div style={inputs_wrapper}>
        <div>
            <input style={tag_name_input} type="search" placeholder="tag name" />
                <div style={square_wrapper}>
                    <div style={first}></div>
                    <div style={second}></div>
                    <div style={third}></div>
                    <div style={forth}></div>
                    <div style={fifth}></div>
                    <div style={six}></div>
                </div>
        </div>
        <div>
            <input style={title_name_input} type="search" placeholder="title name" />
        </div>
    </div>
);

export default Search