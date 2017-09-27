import ScrollToTop from 'react-scroll-up';

const upBlock = {
    position: 'fixed',
    left: 28,
    bottom: 150
};

const upImg = {
    width: '60%'
};

const UpButton = (props) => {
    function goTop (e) {
        // document.body.scrollTop = 0;
    }

    return (
        <ScrollToTop showUnder={500} topPosition={100} duration={2000}>
            <a onClick={goTop} style={upBlock}>
                <img style={upImg} src='/static/up.jpg' alt='arrow' />
            </a>
        </ScrollToTop>
    );
};

export default UpButton;
