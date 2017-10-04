import styled from 'styled-components';

const SearchTitleBlock = styled.div`
        max-width: 380px;
        max-height: 110px;
        text-align: center;
        text-transform: uppercase;
        position: absolute;
        top: 735px;
        left: 0;
        right: 0;
        background: #fff;
        color: #86888c;
        margin: 0 auto;
        border-radius: 5px;
        cursor: pointer;

        @media (max-width: 923px) {
            top: 440px;
        }

        @media (max-width: 920px) and (min-width: 786px) {
            top: 350px;
        }

        @media (max-width: 780px) and (min-width: 640px) {
            top: 295px;
            max-width: 320px;
            max-height: 90px;
        }

        @media (max-width: 635px) and (min-width: 320px) {
            top: 160px;
            max-width: 180px;
            max-height: 80px;
        }
`;

const H2 = styled.h2`
        color: #86888c;
        line-height: 45px;
        font-size: 40px;
        font-family: Open Sans, sans-serif;
        font-weight: 400;

        @media (max-width: 920px) and (min-width: 786px) {

        }

        @media (max-width: 780px) and (min-width: 640px) {
            line-height: 28px;
            font-size: 40px;
        }

        @media (max-width: 635px) and (min-width: 320px) {
            line-height: 20px;
            font-size: 25px;
        }
`;
const Img = styled.img`
        width: 60px;
        position: absolute;
        top: 50px;
        right: 0;

        @media (max-width: 920px) and (min-width: 786px) {

        }

        @media (max-width: 780px) and (min-width: 640px) {
            width: 45px;
            top: 44px;
        }

        @media (max-width: 635px) and (min-width: 320px) {
            width: 26px;
            top: 35px;
        }
`;

const SearchTitle = (props) => {
    return (
        <SearchTitleBlock onClick={props.click}>
            <H2>search</H2>
            <Img src='/static/icon-search.jpg' alt='search icon' />
        </SearchTitleBlock>
    );
};

export default SearchTitle;
