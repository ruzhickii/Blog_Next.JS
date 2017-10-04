import Link from 'next/link';
import styled from 'styled-components';

const MainBlock = styled.div`
    display: flex;
    flex-direction: row;
`;

const GoogleLink = styled.div`
    width: 33.3%;
    text-align: center;
    background: #d34535;
    padding: 15px;
    cursor: pointer;
`;

const FacebookLink = styled.div`
    width: 33.3%;
    text-align: center;
    background: #46609a;
    padding: 15px;
    cursor: pointer;
`;

const TwitterLink = styled.div`
    width: 33.3%;
    text-align: center;
    background: #00abf0;
    padding: 15px;
    cursor: pointer;
`;

const img = styled.img`
    width: 45px;
`;

const socialLinksColored = (props) => (
    <MainBlock>
        <GoogleLink>
            <Link href='/'><img src='/static/google_link.jpg' /></Link>
        </GoogleLink>
        <FacebookLink>
            <Link href='/'><img src='/static/facebook_link.jpg' /></Link>
        </FacebookLink>
        <TwitterLink>
            <Link href='/'><img src='/static/twitter_link.jpg' /></Link>
        </TwitterLink>
    </MainBlock>
);

export default socialLinksColored;
