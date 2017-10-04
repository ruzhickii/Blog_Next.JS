import styled from 'styled-components';

const LogoWrapper = styled.div`
    padding: 25px 0 0 60px;

        @media (max-width: 922px) {
            padding: 0 0 0 25px;
        }

        @media (min-width: 786px) and (max-width: 922px) {
            padding: 0 0 0 15px;
        }

        @media (min-width: 640px) and (max-width: 780px) {
            padding: 12px 0 0 35px;
            width: 180px;
        }

        @media (min-width: 320px) and (max-width: 635px) {
            padding: 20px 0 0 0;
        }
`;

const Img = styled.img`
  width: 100%;
`;

const Logo = (props) => (
    <LogoWrapper>
        <Img src='/static/logo_footer.jpg' alt='PERCEPTION BOX' />
    </LogoWrapper>
);

export default Logo;
