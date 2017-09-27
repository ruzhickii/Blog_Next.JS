const postWidgetWrapper = {
    background: '#d8dade',
    maxWidth: 250,
    padding: 20
};

const postWidgetTitleBlock = {
    borderLeft: '1px solid black'
};

const postWidgetTitle = {
    margin: 0,
    fontSize: 30,
    textTransform: 'uppercase',
    padding: '0 0 0 15px',
    fontFamily: 'ProximaNovaLight',
    color: '#292a2c'
};

const titleWord = {
    fontFamily: 'ProximaNovaSemibold'
};

const p1 = {
    fontFamily: 'ProximaNovaSemibold',
    color: '#292a2c'
};

const p2 = {
    fontFamily: 'ProximaNovaSemibold',
    color: '#cf4f50'
};

const p3 = {
    fontFamily: 'ProximaNovaSemibold',
    color: '#292a2c'
};

const p4 = {
    fontFamily: 'ProximaNovaSemibold',
    color: '#292a2c'
};

const p5 = {
    fontFamily: 'ProximaNovaSemibold',
    color: '#292a2c'
};

const postWidget = (props) => (
    <div>
        <div style={postWidgetWrapper}>
            <div style={postWidgetTitleBlock}>
                <div style={postWidgetTitle}>
                    recent <span style={titleWord}>blogs</span>
                </div>
            </div>
            <p style={p1}>
            Украинский умный держатель для смартфона собрал $125 000 на Kickstarter
            </p>
            <p style={p2}>
            Украинский умный держатель для смартфона собрал $125 000 на Kickstarter
            </p>
            <p style={p3}>
            Украинский умный держатель для смартфона собрал $125 000 на Kickstarter
            </p>
            <p style={p4}>
            Украинский умный держатель для смартфона собрал $125 000 на Kickstarter
            </p>
            <p style={p5}>
            Украинский умный держатель для смартфона собрал $125 000 на Kickstarter
            </p>
        </div>
    </div>
);

export default postWidget;
