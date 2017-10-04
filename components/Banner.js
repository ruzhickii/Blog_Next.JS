import styled from 'styled-components';

const Div = styled.div`
    position: relative;
    background-image: url('/static/bg-blog.jpg');
    background-size: cover;
    width: 100%;
    height: 700px;
    font-family: 'Roboto', sans-serif;

        @media (max-width: 923px) {
            height: 425px;
        }

        @media (max-width: 920px) and (min-width: 786px) {
            height: 362px;
        }

        @media (max-width: 780px) and (min-width: 640px) {
            height: 295px;
        }

        @media (max-width: 635px) and (min-width: 320px) {
            height: 147px;
        }
`;

const WrapperBlog = styled.div`
        margin: 0 auto;
        position: absolute;
        top: 100px;
        left: 40px;
        
        @media (max-width: 923px) {
            top: 35px;
            left: 20px;
        }

        @media (max-width: 920px) and (min-width: 786px) {
            top: 30px;
            left: 30px;
        }

        @media (max-width: 780px) and (min-width: 640px) {
            top: 15px;
            left: 13px;
        }

        @media (max-width: 635px) and (min-width: 320px) {
            top: 6px;
            left: 10px;
        }
`;

const TitleBlog = styled.h1`
        margin: 0;
        color: #fff;
        font-size: 57px;
        text-transform: uppercase;
        font-family: 'Lato',sans-serif;
        border-left: 3px solid #fff;
        padding-left: 10px;
        line-height: 60px;
        
        @media (max-width: 923px) {
            font-size: 64px;
            padding-left: 33px;
            line-height: 70px;
        }

        @media (max-width: 920px) and (min-width: 786px) {
            font-size: 52px;
            padding-left: 30px;
        }

        @media (max-width: 780px) and (min-width: 640px) {
            font-size: 45px;
            line-height: 50px;
            padding-left: 18px;
        }

        @media (max-width: 635px) and (min-width: 320px) {
            font-size: 21px;
            line-height: 24px;
        }
`;

const Banner = (props) => (
    <Div>
        <WrapperBlog>
            <TitleBlog>find creative engineering inspiration here</TitleBlog>
        </WrapperBlog>
    </Div>
);

export default Banner;
