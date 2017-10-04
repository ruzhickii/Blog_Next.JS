import Layout from '../components/MyLayout';
import {makeStore} from '../store/index';
import wrapper from './wrapper';

import styled from 'styled-components';

const Page = styled.p`
    font-size: 50px;
    text-align: center;
`;

export default wrapper(makeStore)(({url: {pathname}}) => (
    <Layout>
        <Page>TECHNOLOGIES PAGE!</Page>
    </Layout>
));
