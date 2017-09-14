import User_widget from "../components/User_widget"

import Link from 'next/link'

const post_wrapper_small = {
    display: "flex",
    padding: "40px 100px 50px 100px"
};

const small_card = {
    maxWidth: "33.3%",
    maxHeight: 300,
    position: "relative",
    background: "#ccc",
    overflow: "hidden"
};

const small_img = {
    width: "100%"
};

const colors = {
    backend: "#fbaf5d",
    software: "#5674b9",
    mobile: "#f26d7d",
    consulting: "#c69c6d",
    company: "#f06eaa",
    frontend: '#7cc576'
};

const article_name = {
    width: 150,
    position: "absolute",
    textAlign: "center",
    background: "rgb(86, 116, 185)",
    top: 20,
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#fff"
};

const post_name = {
    position: "absolute",
    top: "135",
    color: "#fff",
    fontSize: 35,
    left: 0,
    right: 0,
    margin: "0 auto",
    maxWidth: 235,
    textAlign: "center",
    borderLeft: "1px solid #fff",
    lineHeight: "30px",
    fontFamily: "ProximaNovaSemibold"
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
    console.log(style, "ARTICLE NAME", slug);
    return style;
}

const Posts_small = (props) => (
    <div style={post_wrapper_small}>
        {props.posts && props.posts.map((post) => (
            <div style={small_card} key={post.id}>
                <Link as={`/p/${post.id}`} href={`/post?id=${post.id}`}>
                    <a>
                        <img style={small_img} src={post.better_featured_image.source_url}/>
                        <div className="small_category" style={getColor(getCategory(props.categories, post.categories[0]))} dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}/>
                        <div>
                            <span style={post_name}>{post.title.rendered}</span>
                        </div>
                        <User_widget small={true} />
                    </a>
                </Link>
            </div>
        ))}
    </div>
);

export default Posts_small
