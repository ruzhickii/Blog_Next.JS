const post_widget_wrapper = {
    background: "#d8dade",
    maxWidth: 250,
    padding: 20
};

const post_widget_title_block = {
    borderLeft: "1px solid black"
};

const post_widget_title = {
    margin: 0,
    fontSize: 30,
    textTransform: "uppercase",
    padding: "0 0 0 15px",
    fontFamily: "ProximaNovaLight",
    color: "#292a2c"
};

const title_word = {
  fontFamily: "ProximaNovaSemibold"
};

const p_1 = {
    fontFamily: "ProximaNovaSemibold",
    color: "#292a2c"
};

const p_2 = {
    fontFamily: "ProximaNovaSemibold",
    color: "#cf4f50"
};

const p_3 = {
    fontFamily: "ProximaNovaSemibold",
    color: "#292a2c"
};

const p_4 = {
    fontFamily: "ProximaNovaSemibold",
    color: "#292a2c"
};

const p_5 = {
    fontFamily: "ProximaNovaSemibold",
    color: "#292a2c"
};


const post_widget = (props) => (
    <div>
        <div style={post_widget_wrapper}>
            <div style={post_widget_title_block}>
                <div style={post_widget_title}>
                    recent <span style={title_word}>blogs</span>
                </div>
            </div>
            <p style={p_1}>
                Украинский умный держатель для смартфона собрал $125 000 на Kickstarter
            </p>
            <p style={p_2}>
                Украинский умный держатель для смартфона собрал $125 000 на Kickstarter
            </p>
            <p style={p_3}>
                Украинский умный держатель для смартфона собрал $125 000 на Kickstarter
            </p>
            <p style={p_4}>
                Украинский умный держатель для смартфона собрал $125 000 на Kickstarter
            </p>
            <p style={p_5}>
                Украинский умный держатель для смартфона собрал $125 000 на Kickstarter
            </p>
        </div>
    </div>
);

export default post_widget