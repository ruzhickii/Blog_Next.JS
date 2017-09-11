import Link from 'next/link'


const main_block = {
    display: "flex",
    flexDirection: "row"
};

const google_link = {
    width: "33.3%",
    textAlign: "center",
    background: "#d34535",
    padding: "15px",
    cursor: "pointer"
};

const facebook_link = {
    width: "33.3%",
    textAlign: "center",
    background: "#46609a",
    padding: "15px",
    cursor: "pointer"
};

const twitter_link = {
    width: "33.3%",
    textAlign: "center",
    background: "#00abf0",
    padding: "15px",
    cursor: "pointer"
};

const img = {
    width: "45px"
};

const social_links_colored = (props) => (
    <div style={main_block}>
        <div style={google_link}>
            <Link href='/'><img style={img} src="/static/google_link.jpg" /></Link>
        </div>
        <div style={facebook_link}>
            <Link href='/'><img style={img} src="/static/facebook_link.jpg" /></Link>
        </div>
        <div style={twitter_link}>
            <Link href='/'><img style={img} src="/static/twitter_link.jpg" /></Link>
        </div>
    </div>
);

export default social_links_colored