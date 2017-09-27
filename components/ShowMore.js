const showMore = {
    margin: '20px 0 100px 0',
    textAlign: 'center',
    fontSize: 49,
    textTransform: 'uppercase',
    color: '#5d5f64',
    textDecoration: 'none',
    border: '2px solid #ccc',
    background: '#fff',
    padding: '15px 0 15px 0',
    cursor: 'pointer',
    fontFamily: 'Open Sans, sans-serif'
};

const ShowMore = (props) => (
    <div>
        <div style={showMore}>show more</div>
    </div>
);

export default ShowMore;
