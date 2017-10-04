import styled from 'styled-components';

const a = styled.a`
    display: block;
    white-space: nowrap;
`;

const Logo = (props) => (
    <div>
        <a href='#'>
            <img src='/static/logo-black.png' alt='PERCEPTION BOX' />
        </a>
    </div>
);

export default Logo;
