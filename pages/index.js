import Layout from '../components/MyLayout'
import Search from '../components/Search'
import Banner from '../components/Banner'
import Search_title from '../components/Search_title'
import Show_more from '../components/Show_more'
import Posts_big from '../components/Posts_big'

import fetch from 'isomorphic-unfetch'


const container = {
    maxWidth: 1400,
    margin: "0 auto"
};


const Index = (props) => (

    <Layout>
        <Banner />
        <Search_title />
        <div style={container}>
            <Search />
            <Posts_big shows={props.shows} categories={props.categories}/>
            <Show_more />
        </div>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('http://localhost/wordpress/wp-json/wp/v2/posts/');
    const show = await res.json();

    const resCat = await fetch('http://localhost/wordpress/wp-json/wp/v2/categories/');
    const category = await resCat.json();


    console.log(`Show data fetched. Count: ${show.length}`);

    console.log('DATA', category);

    return {
        shows: show,
        categories: category,
    }
};

export default Index