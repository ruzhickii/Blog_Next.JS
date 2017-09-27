import Link from 'next/link';

const socialLinksBlock = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
};

const socialLinks = {
    marginRight: 28,
    maxWidth: 50,
    textAlign: 'center',
    cursor: 'pointer'
};

const socialLinksLast = {
    maxWidth: 50,
    textAlign: 'center',
    cursor: 'pointer'
};

const img = {
    width: '100%'
};

const infoSocialLinks = (props) => (
    <div style={socialLinksBlock}>
        <div style={socialLinks}>
            <Link href='/'><img style={img} src='/static/facebook.png' /></Link>
        </div>
        <div style={socialLinks}>
            <Link href='/'><img style={img} src='/static/google.png' /></Link>
        </div>
        <div style={socialLinks}>
            <Link href='/'><img style={img} src='/static/linkedin.png' /></Link>
        </div>
        <div style={socialLinksLast}>
            <Link href='/'><img style={img} src='/static/twitter.png' /></Link>
        </div>
    </div>
);

export default infoSocialLinks;
