import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import fetch from 'isomorphic-unfetch';

const InputWrapper = styled.div`
    box-shadow: 0 0 5px black;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 60px 0 0 0;
    padding: 55px 0 55px 0;

        @media (max-width: 920px) and (min-width: 786px) {
            
        }

        @media (max-width: 780px) and (min-width: 640px) {
            flex-direction: row;
        }

        @media (max-width: 635px) and (min-width: 320px) {
            flex-direction: column;
            text-align: center;
        }
`;

const TagNameInput = styled.input`
    max-width: 465px;
    height: 95px;
    text-align: center;
    color: #778094;
    font-family: Roboto;
    font-size: 45px;
    font-weight: 400;
    text-transform: uppercase;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.45);
    
        @media (max-width: 960px) {
            max-width: 380px;
        }

        @media (max-width: 920px) and (min-width: 786px) {
            max-width: 350px;
        }

        @media (max-width: 780px) and (min-width: 640px) {
            max-width: 280px;
        }

        @media (max-width: 635px) and (min-width: 320px) {
            max-width: 280px;
        }
`;

const SquareWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const First = styled.div`
    width: 30px;
    height: 30px;
    background-color: #fbaf5d;
    margin: 10px 10px 0 0;
    cursor: pointer;
`;

const Second = styled.div`
    width: 30px;
    height: 30px;
    background-color: #7cc576;
    margin: 10px 10px 0 0;
    cursor: pointer;
`;

const Third = styled.div`
    width: 30px;
    height: 30px;
    background-color: #5674b9;
    margin: 10px 10px 0 0;
    cursor: pointer;
`;

const Forth = styled.div`
        width: 30px;
        height: 30px;
        background-color: #f26d7d;
        margin: 10px 10px 0 0;
        cursor: pointer;
`;

const Fifth = styled.div`
        width: 30px;
        height: 30px;
        background-color: #c69c6d;
        margin: 10px 10px 0 0;
        cursor: pointer;
`;

const Six = styled.div`
        width: 30px;
        height: 30px;
        background-color: #f06eaa;
        margin: 10px 10px 0 0;
        cursor: pointer;
`;

const TitleNameInput = styled.input`
        max-width: 465px;
        height: 95px;
        text-align: center;
        color: #778094;
        font-family: Roboto;
        font-size: 45px;
        font-weight: 400;
        text-transform: uppercase;
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.45);

        @media (max-width: 960px) {
            max-width: 380px;
        }

        @media (max-width: 920px) and (min-width: 786px) {
            max-width: 350px;
        }

        @media (max-width: 780px) and (min-width: 640px) {
            max-width: 280px;
        }

        @media (max-width: 635px) and (min-width: 320px) {
            margin-top: 15px;
            max-width: 280px;
        }
`;

class Search extends Component {
    render (props) {
        return (
            <InputWrapper id='search'>
                <div>
                    <TagNameInput onInput={search} type='search' placeholder='tag name' />
                    <SquareWrapper>
                        <First />
                        <Second />
                        <Third />
                        <Forth />
                        <Fifth />
                        <Six />
                    </SquareWrapper>
                </div>
                <div>
                    <TitleNameInput onInput={search} type='search' placeholder='title name' />
                </div>
            </InputWrapper>
        );
    }
}

async function search (e) {
    const search = await fetch(`http://localhost/wordpress/wp-json/wp/v2/posts?slug=${e.target.value.toLowerCase()}`);
    const resSearch = await search.json();
    console.log(resSearch);
}

export default connect(state => {
    return {user: state};
})(Search);
