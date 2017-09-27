import Link from 'next/link';

const mainBlock = {
    display: 'flex',
    flexDirection: 'row'
};

const googleLink = {
    width: '33.3%',
    textAlign: 'center',
    background: '#d34535',
    padding: '15px',
    cursor: 'pointer'
};

const facebookLink = {
    width: '33.3%',
    textAlign: 'center',
    background: '#46609a',
    padding: '15px',
    cursor: 'pointer'
};

const twitterLink = {
    width: '33.3%',
    textAlign: 'center',
    background: '#00abf0',
    padding: '15px',
    cursor: 'pointer'
};

const img = {
    width: '45px'
};

const socialLinksColored = (props) => (
    <div style={mainBlock}>
        <div style={googleLink}>
            <Link href='/'><img style={img} src='/static/google_link.jpg' /></Link>
        </div>
        <div style={facebookLink}>
            <Link href='/'><img style={img} src='/static/facebook_link.jpg' /></Link>
        </div>
        <div style={twitterLink}>
            <Link href='/'><img style={img} src='/static/twitter_link.jpg' /></Link>
        </div>
    </div>
);

export default socialLinksColored;
