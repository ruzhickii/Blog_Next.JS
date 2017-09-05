import Link from 'next/link'

const blockLinkStyle = {
    margin: 0
};

const ulStyles = {
    display: "flex",
    flexDirection: "row",
    listStyleType: "none",
    margin: "0 0 35px 0"
};

const liStyles = {
    marginLeft: 20
};

const aStyles = {
    textDecoration: "none",
    color: "#fff",
    fontFamily: "Roboto",
    display: "flex",
    alignItems: "center",
    height: "100%",
    padding: 10,
    textTransform: "uppercase"
};

const Navigation = () => (
    <div style={blockLinkStyle}>
        <ul style={ulStyles}>
            <li style={liStyles}>
                <Link href="/">
                    <a style={aStyles}>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/technologies">
                    <a style={aStyles}>technologies</a>
                </Link>
            </li>
            <li>
                <Link href="/about_us">
                    <a style={aStyles}>about us</a>
                </Link>
            </li>
            <li>
                <Link href="/lets_talk">
                    <a style={aStyles}>lets talk!</a>
                </Link>
            </li>
        </ul>
    </div>
);

export default Navigation


