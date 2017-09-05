import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const wrapper = {
    padding: 20
};

const card = {
  display: "flex",
  flexDirection: "row",
  padding: 20,
  boxShadow: "1px 8px 18px #e3e3e3"
};

const img = {
    position: "relative"
};

const category = {
    position: "absolute",
    width: 200,
    color: "#fff",
    textAlign: "center",
    left: 10,
    fontSize: 25
};

const title = {
    margin: "0 auto",
    fontSize: 30
};

const Post = (props) => (
    <Layout>
        {props.shows &&
        <div>
            <div style={wrapper}>
                <div style={card}>
                    <img style={img} src={props.shows.better_featured_image.source_url}/>
                    <div style={category} dangerouslySetInnerHTML={{ __html: props.shows.excerpt.rendered }}/>
                    <span style={title}>{props.shows.title.rendered}</span>
                </div>
            </div>
        </div>
        }
    </Layout>
);

Post.getInitialProps = async function({query}) {
    const {id} = query;
    const res = await fetch(`http://localhost/wordpress/wp-json/wp/v2/posts/${id}`);
    const show = await res.json();

    return {
        shows: show
    }
};

export default Post