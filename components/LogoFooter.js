const logo = {
    padding: '25px 0 0 60px'
};

const logoLink = {
    display: 'block',
    whiteSpace: 'nowrap'
};

const Logo = (props) => (
    <div style={logo}>
        <a style={logoLink} href='#'>
            <img src='/static/logo_footer.jpg' alt='PERCEPTION BOX' />
        </a>
    </div>
);

export default Logo;
