import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const img_block = {
    position: "relative"
};

const img = {
  width: "100%"
};

const category = {
    position: "absolute",
    top: 150,
    width: 200,
    maxHeight: 60,
    textAlign: "center",
    background: "rgb(86, 116, 185)",
    padding: "15px 55px 15px 55px",
    fontSize: 35,
    color: "#fff"
};

const title_name = {

};

const style = {
    position: "absolute",
    top: 330,
    color: "#fff",
    fontSize: 100,
    left: 0,
    right: 0,
    margin: "0 auto",
    maxWidth: 670,
    textAlign: "center",
    borderLeft: "3px solid #fff",
    lineHeight: "70px"
};

const Post = (props) => (
    <Layout>
        {props.shows &&
        <div>
            <div style={img_block}>
                <img style={img} src={props.shows.better_featured_image.source_url}/>
                <div style={category} dangerouslySetInnerHTML={{ __html: props.shows.excerpt.rendered }}/>
                <div style={title_name}>
                    <span style={style}>{props.shows.title.rendered}</span>
                </div>
            </div>





            <div dangerouslySetInnerHTML={{ __html: props.shows.content.rendered }}/>
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