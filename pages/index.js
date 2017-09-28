import React, { Component } from 'react';
import {makeStore} from '../store/index';
import wrapper from './wrapper';
import Link from 'next/link';

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

class Index extends Component {
    static getInitialProps ({ store, isServer, pathname, query }) {
        console.log(Index.name, '- 2. Cmp.getInitialProps uses the store to dispatch things, pathname', pathname, 'query', query);

        // If it's a server, then all async actions must be done before return or return a promise
        if (isServer) {
            return new Promise((res) => {
                setTimeout(() => {
                    store.dispatch({type: 'TICK', payload: 'server'});
                    res({custom: 'custom server'});
                }, 200);
            });
        }

        // If it's a client, then it does not matter because client can be progressively rendered
        store.dispatch({type: 'TICK', payload: 'client'});

        return {custom: 'custom client'};
    }

    render () {
        return (
            <Layout>
                <Banner />
                <SearchTitle />
                <div style={container}>
                    <Search />
                    <PostsBig shows={this.props.shows} categories={this.props.categories} />
                    <ShowMore />

                    <section>
                        <div>Redux tick: {this.props.tick} (this page)</div>
                        <div>Custom: {this.props.custom}</div>
                        <Link href='/other'><a>Navigate</a></Link>
                    </section>

                </div>
            </Layout>
        );
    }
}

Index.getInitialProps = async function () {
    const res = await fetch('http://localhost/wordpress/wp-json/wp/v2/posts/');
    const show = await res.json();

    const resCat = await fetch('http://localhost/wordpress/wp-json/wp/v2/categories/');
    const category = await resCat.json();

    console.log(`Show data fetched. Count: ${show.length}`);

    console.log('DATA !!!', category);

    return {
        shows: show,
        categories: category
    };
};

Index = wrapper(makeStore, state => state)(Index);

export default Index;
