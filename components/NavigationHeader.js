import Link from 'next/link';

const nav = {
    margin: 0,
    height: '100%'
};

const navigation = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    listStyleType: 'none'
};

const navigationItem = {
    position: 'relative',
    height: '100%',
    padding: '5px 0',
    margin: '0 3px',
    textAlign: 'center'
};

const headerLink = {
    textDecoration: 'none',
    color: '#4a5269',
    fontFamily: 'Roboto',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    padding: '10px'
};

const connectLink = {
    background: '#0a2954',
    color: '#fff',
    borderRadius: '5px',
    border: '1px solid transparent',
    transition: 'all 0.5s',
    padding: '10px',
    textDecoration: 'none',
    fontFamily: 'Roboto'
};

const Navigation = () => (
    <div style={nav}>
        <ul style={navigation}>
            <li style={navigationItem}>
                <Link href='/'>
                    <a style={headerLink} href='#'>HOME</a>
                </Link>
            </li>
            <li style={navigationItem}>
                <Link href='/technologies'>
                    <a style={headerLink} href='#'>TECHNOLOGIES</a>
                </Link>
            </li>
            <li style={navigationItem}>
                <Link href='/aboutUs'>
                    <a style={headerLink} href='#'>ABOUT US</a>
                </Link>
            </li>
            <li style={navigationItem}>
                <Link href='/letsTalk'>
                    <a style={connectLink} href='#'>LET'S TALK!</a>
                </Link>
            </li>
        </ul>
    </div>
);

export default Navigation;
