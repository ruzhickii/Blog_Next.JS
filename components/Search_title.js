const searchTitleBlock = {
    maxWidth: "380px",
    maxHeight: "110px",
    textAlign: "center",
    textTransform: "uppercase",
    position: "absolute",
    top: "756px",
    left: 0,
    right: 0,
    background: "#fff",
    color: "#86888c",
    margin: "0 auto",
    borderRadius: "5px"
};

const h2 = {
    color: "#5c7493",
    lineHeight: "45px",
    fontSize: "40px",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: "400"
};

const image = {
    width: "60px",
    position: "absolute",
    top: "29px",
    right: 0
};

const Search_title = (props) => (
    <div style={searchTitleBlock}>
        <h2 style={h2}>search</h2>
        <img style={image} src="/static/icon-search.jpg" alt="search icon" />
    </div>
);

export default Search_title