import Link from 'next/link';
import styled from 'styled-components';

const BlockLinkStyle = styled.div`
    margin: 0;  
    padding: 0 60px 0 0;

        @media (max-width: 922px) {
            padding: 0 30px 0 0;
        }

        @media (min-width: 786px) and (max-width: 922px) {

        }

        @media (min-width: 640px) and (max-width: 780px) {
            padding: 0 48px 0 0;
            line-height: 0;
        }

        @media (min-width: 320px) and (max-width: 635px) {
            padding: 0;
            
        }
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    list-styleType: none;
    margin: 0 0 20px 0;
    justify-content: flex-end;

        @media (max-width: 922px) {
            margin: 0 0 40px 0;
        }

        @media (min-width: 786px) and (max-width: 922px) {
           
        }

        @media (min-width: 640px) and (max-width: 786px) {
           
        }

        @media (min-width: 320px) and (max-width: 640px) {
            padding: 0;
            margin: 0 0 10px 0;
        }
`;

const Pages = styled.div`
    text-decoration: none;
    color: #fff;
    font-family: Roboto;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 10px;
    text-transform: uppercase;
    cursor: pointer;

        @media (min-width: 320px) and (max-width: 640px) {
            height: 50%;
        }
`;

const Navigation = () => (
    <BlockLinkStyle>
        <Ul>
            <li>
                <Link href='/'>
                    <Pages>home</Pages>
                </Link>
            </li>
            <li>
                <Link href='/technologies'>
                    <Pages>technologies</Pages>
                </Link>
            </li>
            <li>
                <Link href='/aboutUs'>
                    <Pages>about us</Pages>
                </Link>
            </li>
        </Ul>
    </BlockLinkStyle>
);

export default Navigation;
