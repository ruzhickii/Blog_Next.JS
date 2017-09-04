import Layout from '../components/MyLayout.js'
import Card from '../components/Card'

import fetch from 'isomorphic-unfetch'

const Post =  (props) => (
    <Layout>
        {/*<h1>{props.show.name}</h1>*/}
        {/*<p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>*/}
        {/*<img src={props.show.image.medium}/>*/}
        <Card />
    </Layout>
);

Post.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await fetch(`http://localhost/wordpress/wp-json/wp/v2/posts/${id}`);
    const show = await res.json();

    console.log(`Fetched show: ${show.name}`);

    return { show }
};

export default Post