import Link from 'next/link'
import Masonry from 'react-masonry-component';


const img = {
    width: "100%",
    display: "block",
};

const card = {
    boxShadow: "0 5px 5px rgba(0, 0, 0, 0.31)",
    marginBottom: 30,
    width: 685
};

const card_img = {
    position: "relative",
};

const description = {
    margin: 0,
    padding: "5px 0 5px 0",
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Roboto"
};

const article_name = {
    width: 200,
    marginLeft: 35,
    position: "absolute",
    bottom: 0,
    textAlign: "center",
};

const title_name = {
    color: "#000",
    padding: "10px 0px 55px 20px",
    fontSize: 35,
    textTransform: "uppercase",
    fontFamily: "Roboto",
    fontWeight: 300
};

const colors = {
    backend: "#fbaf5d",
    software: "#5674b9",
    mobile: "#f26d7d",
    consulting: "#c69c6d",
    company: "#f06eaa",
    frontend: '#7cc576'
};


const masonryOptions = {
    transitionDuration: 0,
    gutter: 30
};

function getCategory(categories, id) {
    const category = categories.find(item => {
        return item.id === id;
    });

    return category ? category.slug : null;
}

function getColor(slug) {
    const style = Object.assign({}, article_name);
    style.background = colors[slug];
    // console.log(style, "ARTICLE NAME", slug);
    return style;
}

const Posts_big = (props) => (
    <Masonry options={masonryOptions}>
        {props.shows && props.shows.map((show) => (
            <div className="card" style={card} key={show.id}>
                <div className="card_img" style={card_img}>
                    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                        <a style={description}>
                            <img style={img} src={show.better_featured_image.source_url}/>
                            <div className="title" style={getColor(getCategory(props.categories, show.categories[0]))} dangerouslySetInnerHTML={{ __html: show.excerpt.rendered }}/>
                        </a>
                    </Link>
                </div>
                <div style={title_name}>
                    <span>{show.title.rendered}</span>
                </div>
            </div>
        ))}
    </Masonry>
);

export default Posts_big
