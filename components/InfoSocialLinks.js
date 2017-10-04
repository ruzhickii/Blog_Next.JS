import Link from 'next/link';
import styled from 'styled-components';

const SocialLinksBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const SocialLinks = styled.div`
    margin-right: 28px;
    max-width: 50px;
    text-align: center;
    cursor: pointer;
`;

const SocialLinksLast = styled.div`
    max-width: 50px;
    text-align: center;
    cursor: pointer;
`;

const Img = styled.img`
    width: 100%;
`;

const infoSocialLinks = (props) => (
    <SocialLinksBlock>
        <SocialLinks>
            <Link href='/'><Img src='/static/facebook.png' /></Link>
        </SocialLinks>
        <SocialLinks>
            <Link href='/'><Img src='/static/google.png' /></Link>
        </SocialLinks>
        <SocialLinks>
            <Link href='/'><Img src='/static/linkedin.png' /></Link>
        </SocialLinks>
        <SocialLinksLast>
            <Link href='/'><Img src='/static/twitter.png' /></Link>
        </SocialLinksLast>
    </SocialLinksBlock>
);

export default infoSocialLinks;
