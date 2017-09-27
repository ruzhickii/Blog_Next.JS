import React from 'react';
//import { DevTools } from '../utils/index';

import Layout from '../components/MyLayout';
import Search from '../components/Search';
import Banner from '../components/Banner';
import SearchTitle from '../components/SearchTitle';
import ShowMore from '../components/ShowMore';
import PostsBig from '../components/PostsBig';

import fetch from 'isomorphic-unfetch';

const container = {
    maxWidth: 1400,
    margin: '0 auto'
};

const Index = (props) => (
    <Layout>
        {/*{ process.env.NODE_ENV !== 'production' ? <DevTools /> : null }*/}
        <Banner />
        <SearchTitle />
        <div style={container}>
            <Search />
            <PostsBig shows={props.shows} categories={props.categories} />
            <ShowMore />
        </div>
    </Layout>
);

Index.getInitialProps = async function () {
    const res = await fetch('http://localhost/wordpress/wp-json/wp/v2/posts/');
    const show = await res.json();

    const resCat = await fetch('http://localhost/wordpress/wp-json/wp/v2/categories/');
    const category = await resCat.json();

    console.log(`Show data fetched. Count: ${show.length}`);

    console.log('DATA', category);

    return {
        shows: show,
        categories: category
    };
};

export default Index;
