import Layout from '../components/MyLayout.js';
import InfoSocialLinks from '../components/InfoSocialLinks';
import SocialLinksColored from '../components/SocialLinksColored';
import PostWidget from '../components/PostWidget';
import UserWidget from '../components/UserWidget';
import PostsSmall from '../components/PostsSmall';
import UpButton from '../components/UpButton';

import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';

const ImgBlock = styled.div`
    position: relative;
`;

const Img = styled.img`
    width: 100%;
`;

const PostName = styled.span`
    position: absolute;
    top: 330px;
    color: #fff;
    font-size: 100px;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 670px;
    text-align: center;
    border-left: 3px solid #fff;
    line-height: 70px;
    font-family: ProximaNovaSemibold;
`;

const Container = styled.div`
    max-width: 1320px;
    margin: 0 auto;
`;

const SocialWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 25px;
`;

const SocialTextBlock = styled.div`
    border-left: 1px solid black;
    max-width: 860px;
    font-size: 35px;
    font-weight: 600;
`;

const SocialText = styled.p`
    margin: 0;
    font-size: 36px;
    padding: 0 0 0 40px;
    color: #292a2c;
    font-family: ProximaNovaSemibold;
`;

const PostInfoBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const PostInfoText = styled.div`
        max-width: 820px;
`;

const FirstP = styled.p`
    font-size: 22px;
    color: #292a2c;
    text-indent: 20px;
    font-family: ProximaNovaCondensedRegular;
`;

const MainList = styled.ul`
    font-size: 21px;
    padding: 0 0 0 20px;
    margin: 0;
    font-family: ProximaNovaCondensedRegular;
`;

const ImgInside = styled.img`
    width: 100%;
`;

const Text1 = styled.span`
    font-size: 21px;
    font-family: ProximaNovaCondensedRegular;
`;

const Text2 = styled.p`
    font-size: 21px;
    text-indent: 20px;
    font-family: ProximaNovaSemibold;
    color: #292a2c;
`;

const Text3 = styled.p`
        font-size: 20px;
        text-indent: 20px;
        font-family: ProximaNovaCondensedRegular;
`;

const Text4 = styled.span`
        font-size: 20px;
        font-family: ProximaNovaRegularItalic;
`;

const Text5 = styled.p`
        font-size: 30px;
        font-family: ProximaNovaSemibold;
`;

const Text6 = styled.span`
        font-size: 20px;
        display: inline-block;
        text-indent: 20px;
        font-family: ProximaNovaCondensedRegular;
`;

const Text7 = styled.span`
        font-size: 20px;
        text-indent: 20px;
        display: inline-block;
`;

const Text8 = styled.span`
    font-size: 20px;
    font-family: ProximaNovaCondensedRegular;
`;

const Points = styled.span`
        font-family: ProximaNovaCondensedSemibold;
`;

const CommentsBlock = styled.div`
        width: 100%;
        background: #000;
        color: #fff;
        text-align: center;
        height: 400px;
        margin: 20px 0 20px 0px;
        font-size: 100px;
`;

const articleName = {
    width: 300,
    position: 'absolute',
    textAlign: 'center',
    background: 'rgb(86, 116, 185)',
    top: 150,
    textTransform: 'uppercase',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#fff'
};

const colors = {
    backend: '#fbaf5d',
    software: '#5674b9',
    mobile: '#f26d7d',
    consulting: '#c69c6d',
    company: '#f06eaa',
    frontend: '#7cc576'
};

function getCategory (categories, id) {
    const category = categories.find(item => {
        return item.id === id;
    });

    return category ? category.slug : null;
}

function getColor (slug) {
    const style = Object.assign({}, articleName);
    style.background = colors[slug];
    // console.log(style, "ARTICLE NAME", slug);
    return style;
}

const Post = (props) => (
    <Layout>
        {props.shows &&
        <div>
            <ImgBlock>
                <Img src={props.shows.better_featured_image.source_url} />
                <div style={getColor(getCategory(props.categories, props.shows.categories[0]))} dangerouslySetInnerHTML={{__html: props.shows.excerpt.rendered}} />
                <div>
                    <PostName>{props.shows.title.rendered}</PostName>
                </div>
                <UserWidget />
            </ImgBlock>
            <Container>
                <SocialWrapper>
                    <SocialTextBlock>
                        <SocialText>The success of a project-based business largely depends on the visibility the company has over its projects</SocialText>
                    </SocialTextBlock>
                    <InfoSocialLinks />
                </SocialWrapper>
                <PostInfoBlock>
                    <PostInfoText>
                        <FirstP>
                            The current level of their performance and, of course, the factors influencing their health
                            and success.That is why the ability to have an extensive picture of the way these factors
                            interact with one another is totally essential.
                        </FirstP>
                        <MainList>
                            <li>
                                <span>
                                    Project managers put lots of effort into evaluating project succsess and making sure that each of their projects is on track.
                                </span>
                            </li>
                            <li>
                                <span>
                                    They need to analyze, predict, and prevent any possible factors that could adversely affect the project’s health in the future. Also,
                                </span>
                            </li>
                            <li>
                                <span>
                                    PMs need to be able to instantly provide relevant, up-to-date project data to leadership to support their decision making.
                                </span>
                            </li>
                        </MainList>
                        <Text1>
                                So, clearly demonstrating the state of the project through structured visualized data is a crucial task.<br /> Moreover, his data can serve as a foundation for the lessons learned that could be further applied to some future projects.
                        </Text1>
                        <Text2>
                            We at ELEKS decided to create a system powered by advanced data analytics to offer our
                            company’s managers a handy tool to support them in their daily work. Our aim was to design
                            a custom metric system that could assist in supervising every internal project on a daily
                            basis
                            and carrying out early risk analysis.
                        </Text2>
                        <Text3>
                            In this article, you’ll find a story of how we created a solution with a BI dashboard called
                            Project
                            Health, aggregating and visualizing project data in a simple and transparent way. This tool
                            not
                            only enables managers to monitor and track projects easier, but also allows the company’s
                            senior
                            management to view an extensive picture of project performance without having to deal with
                            lots
                            of project reports. The system’s dashboard allows one to control the project’s health level,
                            get
                            notifications — if it falls below the threshold, or drill down the details of the particular
                            project.
                            Below, you can see a screenshot from the system’s dashboard:measuring project success
                        </Text3>
                        <div>
                            <ImgInside src='/static/inside_03.jpg' />
                            <Text4>Fig. 1. BI Dashboard featuring data from actual projects at ELEKS</Text4>
                            <Text5>This system is quite easy to use</Text5>
                            <Text6>
                                Project’s success falls into three groups, each marked with a different colour (red, yellow or green). Later on in the article, we’ll dive into more details to show you how we built the in-house
                                BI system.How to get an extensive picture of the project’s overall performance
                            </Text6>
                            <Text7>
                                When it comes to measuring a project’s success, all criteria may be grouped five well-known categories:<br />
                                <Points>
                                    -  Scope – to characterize the specific project goals, functions, tasks, deadlines, requirements<br />
                                    -  Budget – to track the project’s costs usage<br />
                                    -  Time – to define if the project is on schedule<br />
                                </Points>
                            </Text7>
                            <Text8>
                                Quality – to assess the overall status of the project’s quality: process, testing procedures, issue identification, and resolution
                            </Text8>
                        </div>
                        <div>
                            <iframe width='800' height='600' src='http://www.youtube.com/embed/xFa2_PVMeDQ?rel=0' allowFullScreen='' frameBorder='0' />
                        </div>
                    </PostInfoText>
                    <div>
                        <PostWidget />
                    </div>
                </PostInfoBlock>
                <CommentsBlock>
                    SOME COMMENTS
                </CommentsBlock>
                <SocialLinksColored />
            </Container>
            <PostsSmall posts={props.randomPosts} categories={props.categories} />
            <UpButton />
        </div>
        }
    </Layout>
);

Post.getInitialProps = async function ({query}) {
    function getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const {id} = query;
    const res = await fetch(`http://localhost/wordpress/wp-json/wp/v2/posts/${id}`);
    const show = await res.json();

    const posts = await fetch('http://localhost/wordpress/wp-json/wp/v2/posts/');
    const resPosts = await posts.json();
    const randomPosts = [];
    const randomInt = [];
    for (let i = 1; i <= 3; i += 1) {
        const num = getRandomInt(0, resPosts.length - 1);

        function setPost (num) {
            if (!randomInt.includes(num)) {
                randomInt.push(num);
                randomPosts.push(resPosts[num]);
            } else {
                setPost(getRandomInt(0, resPosts.length - 1));
            }
        }
        setPost(num);
    }

    console.log(show);

    const resCat = await fetch('http://localhost/wordpress/wp-json/wp/v2/categories/');
    const category = await resCat.json();

    return {
        shows: show,
        categories: category,
        randomPosts: randomPosts
    };
};

export default Post;
