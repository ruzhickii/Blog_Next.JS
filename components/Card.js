import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const card = {
    boxShadow: "0 5px 5px rgba(0, 0, 0, 0.31)",
    marginBottom: 30,
};

const card_img = {
    display: "flex",
    flexDirection: "column-reverse",
    width: 635,
    height: 355,
    backgroundImage: "url('/static/bg-blog.jpg')",
    backgroundSize: "cover"
};

const article_name = {
    background: "#fbaf5d",
    maxWidth: 200,
    marginLeft: 35
};

const title_name = {
    padding: "10px 0px 55px 20px",
    fontSize: 35,
    textTransform: "uppercase",
    fontFamily: "Roboto",
    fontWeight: 300
};

const description = {
    margin: 0,
    padding: "5px 0 5px 0",
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Roboto"
};

const Card = (props) => (
    <div key={show.id}>
        <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <div style={card}>
                <div style={card_img}>
                    <div style={article_name}>
                        <p style={description}>{show.excerpt.rendered}</p>
                    </div>
                </div>
                <div style={title_name}>
                    <span dangerouslySetInnerHTML={{__html: <span>{show.title.rendered}</span>}} />
                    <span>{show.title.rendered}</span>
                </div>
            </div>
        </Link>
    </div>
);

Card.getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch('http://localhost/wordpress/wp-json/wp/v2/posts/');
    const data = await res.json();
    const show = await res.json();

    console.log(`Fetched show: ${data.name}`);

    return {
        shows: show
    }
};



export default Card