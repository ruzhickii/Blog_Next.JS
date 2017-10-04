import styled from 'styled-components';

const PostWidgetWrapper = styled.div`
    background: #d8dade;
    max-width: 250px;
    padding: 20px;
`;

const PostWidgetTitleBlock = styled.div`
    border-left: 1px solid black;
`;

const PostWidgetTitle = styled.div`
    margin: 0;
    font-size: 30px;
    text-transform: uppercase;
    padding: 0 0 0 15px;
    font-family: ProximaNovaLight;
    color: #292a2c;
`;

const TitleWord = styled.span`
    font-family: ProximaNovaSemibold;
`;

const P = styled.p`
        font-family: ProximaNovaSemibold;
        color: #292a2c;
`;

const Active = styled.p`
    font-family: ProximaNovaSemibold;
    color: #cf4f50;
`;

const postWidget = (props) => (
    <div>
        <PostWidgetWrapper>
            <PostWidgetTitleBlock>
                <PostWidgetTitle>
                    recent <TitleWord>blogs</TitleWord>
                </PostWidgetTitle>
            </PostWidgetTitleBlock>
            <P>
            Украинский умный держатель для смартфона собрал $125 000 на Kickstarter
            </P>
            <Active>
            Украинский умный держатель для смартфона собрал $125 000 на Kickstarter
            </Active>
            <P>
            Украинский умный держатель для смартфона собрал $125 000 на Kickstarter
            </P>
            <P>
            Украинский умный держатель для смартфона собрал $125 000 на Kickstarter
            </P>
            <P>
            Украинский умный держатель для смартфона собрал $125 000 на Kickstarter
            </P>
        </PostWidgetWrapper>
    </div>
);

export default postWidget;
