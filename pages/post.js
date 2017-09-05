import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Post = (props) => (
    <Layout>
        {props.shows &&
        <div>
            <img src={props.shows.better_featured_image.source_url}/>
            <div dangerouslySetInnerHTML={{ __html: props.shows.excerpt.rendered }}/>
            <span>{props.shows.title.rendered}</span>
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