import Link from 'next/link'

const blockLinkStyle = {
    margin: 0,
    padding: "0 60px 0 0px"
};

const ulStyles = {
    display: "flex",
    flexDirection: "row",
    listStyleType: "none",
    margin: "0 0 20px 0",
    justifyContent: "flex-end"
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

const copyright = {
  color: "#fff"
};

const Navigation = () => (
    <div style={blockLinkStyle}>
        <ul style={ulStyles}>
            <li>
                <Link href="/about_us">
                    <a style={aStyles}>about us</a>
                </Link>
            </li>
            <li>
                <Link href="/technologies">
                    <a style={aStyles}>technologies</a>
                </Link>
            </li>
        </ul>
        <span style={copyright}>© PerceptionBox, Custom Software Development Company. All rights reserved.</span>
    </div>
);

export default Navigation


