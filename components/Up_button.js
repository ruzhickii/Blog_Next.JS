import ScrollToTop  from 'react-scroll-up';

const up_block = {
    position: "fixed",
    left: 28,
    bottom: 150
};

const up_img = {
    width: "60%"
};


const Up_button = (props) => {
    function goTop(e) {
        // document.body.scrollTop = 0;
    }

    return (
        <ScrollToTop showUnder={500}>
            <a onClick={goTop} style={up_block}>
                <img style={up_img} src="/static/up.jpg" alt="arrow"/>
            </a>
        </ScrollToTop>
    )
};

export default Up_button