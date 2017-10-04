import styled from 'styled-components';

const Show = styled.div`
    margin: 20px 0 100px 0;
    text-align: center;
    font-size: 49px;
    text-transform: uppercase;
    color: #5d5f64;
    text-decoration: none;
    border: 2px solid #ccc;
    background: #fff;
    padding: 15px 0 15px 0;
    cursor: pointer;
    font-family: Open Sans, sans-serif;

        @media (max-width: 660px) {
            font-size: 25px;
            margin: 10px 0 30px 0;
        }
    
        @media (max-width: 320px) {
            font-size: 20px;
            margin: 10px 0 30px 0;
        }
`;

const ShowMore = (props) => (
    <div>
        <Show>show more</Show>
    </div>
);

export default ShowMore;
