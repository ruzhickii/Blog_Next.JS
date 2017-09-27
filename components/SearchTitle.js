const searchTitleBlock = {
    maxWidth: '380px',
    maxHeight: '110px',
    textAlign: 'center',
    textTransform: 'uppercase',
    position: 'absolute',
    top: '735px',
    left: 0,
    right: 0,
    background: '#fff',
    color: '#86888c',
    margin: '0 auto',
    borderRadius: '5px',
    cursor: 'pointer'
};

const h2 = {
    color: '#86888c',
    lineHeight: '45px',
    fontSize: '40px',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '400'
};

const image = {
    width: '60px',
    position: 'absolute',
    top: '50px',
    right: 0
};

const SearchTitle = (props) => {
    function toggle () {
        let searchElem = document.body.querySelector('#search');
        searchElem.style.display = searchElem.style.display === 'none' ? 'flex' : 'none';

        let masonry = document.body.querySelector('#masonry');
        searchElem.style.display === 'none' ? masonry.style.marginTop = '200px' : masonry.style.marginTop = '0px';
    }
    return (
        <div onClick={toggle} style={searchTitleBlock}>
            <h2 style={h2}>search</h2>
            <img style={image} src='/static/icon-search.jpg' alt='search icon' />
        </div>
    );
};

export default SearchTitle;
