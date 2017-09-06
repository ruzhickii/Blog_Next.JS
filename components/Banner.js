const banner = {
    position: "relative",
    backgroundImage: "url('/static/bg-blog.jpg')",
    backgroundSize: "cover",
    width: "100%",
    height: "700px",
    fontFamily: "'Roboto', sans-serif"
};

const titleBlog = {
    paddingTop: "85px",
    margin: 0,
    color: "#fff",
    fontSize: "60px",
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "'Lato', sans-serif"
};


const Banner = (props) => (
    <div style={banner}>
        <h1 style={titleBlog}>find creative engineering inspiration here</h1>
    </div>
);

export default Banner