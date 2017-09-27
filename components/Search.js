const inputsWrapper = {
    boxShadow: '0 0 5px black',
    borderRadius: 5,
    display: 'none',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: '60px 0 0 0',
    padding: '55px 0 55px 0'
};

const tagNameInput = {
    maxWidth: 465,
    height: 95,
    textAlign: 'center',
    color: '#778094',
    fontFamily: 'Roboto',
    fontSize: 45,
    fontWeight: 400,
    textTransform: 'uppercase',
    boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.45)'
};

const squareWrapper = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
};

const first = {
    width: 30,
    height: 30,
    backgroundColor: '#fbaf5d',
    margin: '10px 10px 0 0',
    cursor: 'pointer'
};

const second = {
    width: 30,
    height: 30,
    backgroundColor: '#7cc576',
    margin: '10px 10px 0 0',
    cursor: 'pointer'
};

const third = {
    width: 30,
    height: 30,
    backgroundColor: '#5674b9',
    margin: '10px 10px 0 0',
    cursor: 'pointer'
};

const forth = {
    width: 30,
    height: 30,
    backgroundColor: '#f26d7d',
    margin: '10px 10px 0 0',
    cursor: 'pointer'
};

const fifth = {
    width: 30,
    height: 30,
    backgroundColor: '#c69c6d',
    margin: '10px 10px 0 0',
    cursor: 'pointer'
};

const six = {
    width: 30,
    height: 30,
    backgroundColor: '#f06eaa',
    margin: '10px 10px 0 0',
    cursor: 'pointer'
};

const titleNameInput = {
    maxWidth: 465,
    height: 95,
    textAlign: 'center',
    color: '#778094',
    fontFamily: 'Roboto',
    fontSize: 45,
    fontWeight: 400,
    textTransform: 'uppercase',
    boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.45)'
};

const Search = (props) => (
    <div id='search' style={inputsWrapper}>
        <div>
            <input style={tagNameInput} type='search' placeholder='tag name' />
            <div style={squareWrapper}>
                <div style={first} />
                <div style={second} />
                <div style={third} />
                <div style={forth} />
                <div style={fifth} />
                <div style={six} />
            </div>
        </div>
        <div>
            <input style={titleNameInput} type='search' placeholder='title name' />
        </div>
    </div>
);

export default Search;
