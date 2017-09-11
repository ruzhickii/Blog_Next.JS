import Link from 'next/link'

const social_links_block = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
};

const social_links = {
    marginRight: 28,
    maxWidth: 50,
    textAlign: "center"
};

const social_links_last = {
    maxWidth: 50,
    textAlign: "center"
};

const img = {
  width: "100%"
};

const info_social_links = (props) => (
    <div style={social_links_block}>
        <div style={social_links}>
            <Link href='/'><img style={img} src="/static/facebook.png" /></Link>
        </div>
        <div style={social_links}>
            <Link href='/'><img style={img} src="/static/google.png" /></Link>
        </div>
        <div style={social_links}>
            <Link href='/'><img style={img} src="/static/linkedin.png" /></Link>
        </div>
        <div style={social_links_last}>
            <Link href='/'><img style={img} src="/static/twitter.png" /></Link>
        </div>
    </div>
);

export default info_social_links