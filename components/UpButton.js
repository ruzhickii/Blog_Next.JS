import ScrollToTop from 'react-scroll-up';
import styled from 'styled-components';

const UpBlock = styled.span`
    position: fixed;
    left: 28px;
    bottom: 160px;
`;

const UpImg = styled.img`
    width: 60%;
`;

const UpButton = (props) => {
    return (
        <ScrollToTop showUnder={500} topPosition={100} duration={2000}>
            <UpBlock>
                <UpImg src='/static/up.jpg' alt='arrow' />
            </UpBlock>
        </ScrollToTop>
    );
};

export default UpButton;
