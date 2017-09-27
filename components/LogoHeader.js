const logoLink = {
    display: 'block',
    whiteSpace: 'nowrap'
};

const Logo = (props) => (
    <div>
        <a style={logoLink} href='#'>
            <img src='/static/logo-black.png' alt='PERCEPTION BOX' />
        </a>
    </div>
);

export default Logo;
