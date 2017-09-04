import Layout from '../components/MyLayout'
import Search from '../components/Search'
import Banner from '../components/Banner'
import Search_title from '../components/Search_title'
import Show_more from '../components/show_more'

import Link from 'next/link'
import fetch from 'isomorphic-unfetch'


const img = {
    width: "100%",
    display: "block",
};

const container = {
    maxWidth: 1400,
    margin: "0 auto"
};

const card_wrapper = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
};

const card = {
    boxShadow: "0 5px 5px rgba(0, 0, 0, 0.31)",
    marginBottom: 30
};

const card_img = {
    maxWidth: 635,
    position: "relative"
};

const article_name = {
    background: "#fbaf5d",
    maxWidth: 200,
    marginLeft: 35,
    position: "absolute",
    bottom: 0,
    textAlign: "center"
};

const title_name = {
    color: "#000",
    padding: "10px 0px 55px 20px",
    fontSize: 35,
    textTransform: "uppercase",
    fontFamily: "Roboto",
    fontWeight: 300
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

const Index = (props) => (
    <Layout>
        <Banner />
        <Search_title />
        <div style={container}>
            <Search />

            <div style={card_wrapper}>
                {props.shows && props.shows.map((show) => (
                    <div style={card} key={show.id}>
                        <div style={card_img}>
                            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                                <a style={description}>
                                <img style={img} src={show.better_featured_image.source_url}/>
                                <div style={article_name}>
                                    <p style={description}>{show.excerpt.rendered}</p>
                                </div>
                                </a>
                            </Link>
                        </div>
                        <div style={title_name}>
                            <span>{show.title.rendered}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/*<div style={cardWrapper}>*/}
                {/*{props.shows && props.shows.map((show) => (*/}
                    {/*<div key={show.id}>*/}
                        {/*<Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>*/}
                            {/*<a>*/}
                                {/*{show.better_featured_image && <img style={img} src={show.better_featured_image.source_url}/>}*/}
                                {/*{show.title.rendered}*/}
                                {/*{show.excerpt.rendered}*/}
                            {/*</a>*/}
                        {/*</Link>*/}
                    {/*</div>*/}
                {/*))}*/}
            {/*</div>*/}

            <Show_more />
        </div>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('http://localhost/wordpress/wp-json/wp/v2/posts/');
    const show = await res.json();

    console.log(`DATA`, show);
    console.log(`Show data fetched. Count: ${show.length}`);

    return {
        shows: show
    }
};

export default Index