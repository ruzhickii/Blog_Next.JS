import Layout from '../components/MyLayout';
import {makeStore} from '../store/index';
import wrapper from './wrapper';

const style = {
    fontSize: 50,
    textAlign: 'center'
};

export default wrapper(makeStore)(({url: {pathname}}) => (
    <Layout>
        <p style={style}>LETS TALK PAGE!</p>
    </Layout>
));
