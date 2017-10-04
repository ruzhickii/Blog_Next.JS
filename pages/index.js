import React, { Component } from 'react';
import {makeStore} from '../store/index';
import wrapper from 'next-redux-wrapper';
import Link from 'next/link';

import Layout from '../components/MyLayout';
import Search from '../components/Search';
import Banner from '../components/Banner';
import SearchTitle from '../components/SearchTitle';
import ShowMore from '../components/ShowMore';
import PostsBig from '../components/PostsBig';

import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
`;

class Index extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isOpenSearch: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle () {
        let masonry = document.body.querySelector('#masonry');
        this.setState((prevState) => {
            return {isOpenSearch: !prevState.isOpenSearch};
        });

    }

    render () {
        return (
            <Layout>
                <Banner />
                <SearchTitle click={this.toggle} />
                <Container>
                    {this.state.isOpenSearch && <Search />}
                    <PostsBig shows={this.props.shows} categories={this.props.categories} />
                    <ShowMore />
                </Container>
            </Layout>
        );
    }
}

Index.getInitialProps = async function () {
    const res = await fetch('http://localhost/wordpress/wp-json/wp/v2/posts/');
    const show = await res.json();

    const search = await fetch('http://localhost/wordpress/wp-json/wp/v2/posts?search=search');
    const resCat = await fetch('http://localhost/wordpress/wp-json/wp/v2/categories/');
    const category = await resCat.json();
    const resS = await search.json();

    console.log(resS);
    //
    // console.log(`Show data fetched. Count: ${show.length}`);
    //
    // console.log('DATA !!!', category);

    return {
        shows: show,
        categories: category
    };
};

export default wrapper(makeStore, state => state)(Index);
