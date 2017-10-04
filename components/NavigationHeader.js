import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.div`
    margin: 0;
    height: 100%;

        @media (max-width: 923px) {
            display: none;
        }

        @media (max-width: 768px) {
            display: none;
        }

        @media (max-width: 640px) {
            display: none;
        }

        @media (max-width: 320px) {
            display: none;
        }
`;

const UlNavigation = styled.ul`
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    list-style-type: none;
`;

const NavigationItem = styled.li`
    position: relative;
    height: 100%;
    padding: 5px 0;
    margin: 0 3px;
    text-align: center;
`;

const HeaderLink = styled.span`
    text-decoration: none;
    color: #4a5269;
    font-family: Roboto;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 10px;
    cursor: pointer;
`;

const ConnectLink = styled.span`
    background: #0a2954;
    color: #fff;
    border-radius: 5px;
    border: 1px solid transparent;
    transition: all 0.5s;
    padding: 10px;
    text-decoration: none;
    font-family: Roboto;
    cursor: pointer;
`;

const Navigation = () => (
    <Nav>
        <UlNavigation>
            <NavigationItem>
                <Link href='/'>
                    <HeaderLink>HOME</HeaderLink>
                </Link>
            </NavigationItem>
            <NavigationItem>
                <Link href='/technologies'>
                    <HeaderLink>TECHNOLOGIES</HeaderLink>
                </Link>
            </NavigationItem>
            <NavigationItem>
                <Link href='/aboutUs'>
                    <HeaderLink>ABOUT US</HeaderLink>
                </Link>
            </NavigationItem>
            <NavigationItem>
                <Link href='/letsTalk'>
                    <ConnectLink>LET'S TALK!</ConnectLink>
                </Link>
            </NavigationItem>
        </UlNavigation>
    </Nav>
);

export default Navigation;
