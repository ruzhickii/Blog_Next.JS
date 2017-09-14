
const user = {
	position: "absolute",
	bottom: 50,
	left: 100,
	display: "flex"
};

const img_wrapper = {
  width: "100%",
	borderRadius: "50%"
};

const img = {
	width: "100%",
	borderRadius: "50%"
};

const user_info_wrapper = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	padding: "0 0 0 15px",
};

const border_block = {
	borderLeft: "1px solid #fff"
};

const author = {
	padding: "0 0 0 15px",
	color: "#fff",
	fontSize: 30,
	textTransform: "uppercase",
	fontFamily: "ProximaNovaRegular"
};

const position = {
	padding: "0 0 0 15px",
	color: "#fff",
	fontSize: 20,
	textTransform: "uppercase",
	fontFamily: "ProximaNovaLight"
};

const user_small = {
	position: "absolute",
	bottom: 5,
	left: 15,
	display: "flex"
};

const img_wrapper_small = {
	maxWidth: 50
};

const img_small = {
	width: "100%",
	borderRadius: "50%"
};

const user_info_wrapper_small = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	padding: "0 0 0 10px",
};

const border_block_small = {
	borderLeft: "1px solid #fff"
};

const author_small = {
	padding: "0 0 0 10px",
	color: "#fff",
	fontSize: 15,
	textTransform: "uppercase",
	fontFamily: "ProximaNovaRegular"
};

const position_small = {
	padding: "0 0 0 15px",
	color: "#fff",
	fontSize: 10,
	textTransform: "uppercase",
	fontFamily: "ProximaNovaLight"
};

const user_widget = (props) => (
	<div style={props.small ? user_small : user}>
		<div style={props.small ? img_wrapper_small : img_wrapper}>
			<img style={props.small ? img_small : img} src="/static/user.jpg" />
		</div>
		<div style={props.small ? user_info_wrapper_small : user_info_wrapper}>
			<div style={props.small ? border_block_small : border_block}>
				<div style={props.small ? author_small : author}>
					<span>
						matvey dunuk
					</span>
				</div>
				<div style={props.small ? position_small : position}>
					<span>
						graphic designer
					</span>
				</div>
			</div>
		</div>
	</div>
);

export default user_widget