import Layout from '../components/MyLayout.js';
import InfoSocialLinks from '../components/InfoSocialLinks';
import SocialLinksColored from '../components/SocialLinksColored';
import PostWidget from '../components/PostWidget';
import UserWidget from '../components/UserWidget';
import PostsSmall from '../components/PostsSmall';
import UpButton from '../components/UpButton';

import fetch from 'isomorphic-unfetch';

const imgBlock = {
    position: 'relative'
};

const img = {
    width: '100%'
};

const postName = {
    position: 'absolute',
    top: 330,
    color: '#fff',
    fontSize: 100,
    left: 0,
    right: 0,
    margin: '0 auto',
    maxWidth: 670,
    textAlign: 'center',
    borderLeft: '3px solid #fff',
    lineHeight: '70px',
    fontFamily: 'ProximaNovaSemibold'
};

const container = {
    maxWidth: 1320,
    margin: '0 auto'
};

const socialWrapper = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25
};

const socialTextBlock = {
    borderLeft: '1px solid black',
    maxWidth: 860,
    fontSize: 35,
    fontWeight: 600
};

const socialText = {
    margin: 0,
    fontSize: 36,
    padding: '0 0 0 40px',
    color: '#292a2c',
    fontFamily: 'ProximaNovaSemibold'
};

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

const postInfoBlock = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
};

const postInfoText = {
    maxWidth: 820
};

const firstP = {
    fontSize: 22,
    color: '#292a2c',
    textIndent: 20,
    fontFamily: 'ProximaNovaCondensedRegular'
};

const mainList = {
    fontSize: 21,
    padding: '0 0 0 20px',
    margin: 0,
    fontFamily: 'ProximaNovaCondensedRegular'
};

const colors = {
    backend: '#fbaf5d',
    software: '#5674b9',
    mobile: '#f26d7d',
    consulting: '#c69c6d',
    company: '#f06eaa',
    frontend: '#7cc576'
};

const imgInside = {
    width: '100%'
};

const text1 = {
    fontSize: 21,
    fontFamily: 'ProximaNovaCondensedRegular'
};

const text2 = {
    fontSize: 21,
    textIndent: 20,
    fontFamily: 'ProximaNovaSemibold',
    color: '#292a2c'
};

const text3 = {
    fontSize: 20,
    textIndent: 20,
    fontFamily: 'ProximaNovaCondensedRegular'
};

const text4 = {
    fontSize: 20,
    fontFamily: 'ProximaNovaRegularItalic'
};

const text5 = {
    fontSize: 30,
    fontFamily: 'ProximaNovaSemibold'
};

const text6 = {
    fontSize: 20,
    display: 'inline-block',
    textIndent: 20,
    fontFamily: 'ProximaNovaCondensedRegular'
};

const text7 = {
    fontSize: 20,
    textIndent: 20,
    display: 'inline-block'
};

const text8 = {
    fontSize: 20,
    fontFamily: 'ProximaNovaCondensedRegular'
};

const points = {
    fontFamily: 'ProximaNovaCondensedSemibold'
};

const commentsBlock = {
    width: '100%',
    background: '#000',
    color: '#fff',
    textAlign: 'center',
    height: 400,
    margin: '20px 0 20px 0px',
    fontSize: 100
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
            <div style={imgBlock}>
                <img style={img} src={props.shows.better_featured_image.source_url} />
                <div style={getColor(getCategory(props.categories, props.shows.categories[0]))} dangerouslySetInnerHTML={{__html: props.shows.excerpt.rendered}} />
                <div>
                    <span style={postName}>{props.shows.title.rendered}</span>
                </div>
                <UserWidget />
            </div>
            <div style={container}>
                <div style={socialWrapper}>
                    <div style={socialTextBlock}>
                        <p style={socialText}>The success of a project-based business largely depends on the visibility the company has over its projects</p>
                    </div>
                    <InfoSocialLinks />
                </div>
                <div style={postInfoBlock}>
                    <div style={postInfoText}>
                        <p style={firstP}>
                            The current level of their performance and, of course, the factors influencing their health
                            and success.That is why the ability to have an extensive picture of the way these factors
                            interact with one another is totally essential.
                        </p>
                        <ul style={mainList}>
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
                        </ul>
                        <span style={text1}>
                                So, clearly demonstrating the state of the project through structured visualized data is a crucial task.<br /> Moreover, his data can serve as a foundation for the lessons learned that could be further applied to some future projects.
                        </span>
                        <p style={text2}>
                            We at ELEKS decided to create a system powered by advanced data analytics to offer our
                            company’s managers a handy tool to support them in their daily work. Our aim was to design
                            a custom metric system that could assist in supervising every internal project on a daily
                            basis
                            and carrying out early risk analysis.
                        </p>
                        <p style={text3}>
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
                        </p>
                        <div>
                            <img style={imgInside} src='/static/inside_03.jpg' />
                            <span style={text4}>Fig. 1. BI Dashboard featuring data from actual projects at ELEKS</span>
                            <p style={text5}>This system is quite easy to use</p>
                            <span style={text6}>
                                Project’s success falls into three groups, each marked with a different colour (red, yellow or green). Later on in the article, we’ll dive into more details to show you how we built the in-house
                                BI system.How to get an extensive picture of the project’s overall performance
                            </span>
                            <span style={text7}>
                                When it comes to measuring a project’s success, all criteria may be grouped five well-known categories:<br />
                                <span style={points}>
                                    -  Scope – to characterize the specific project goals, functions, tasks, deadlines, requirements<br />
                                    -  Budget – to track the project’s costs usage<br />
                                    -  Time – to define if the project is on schedule<br />
                                </span>
                            </span>
                            <span style={text8}>
                                Quality – to assess the overall status of the project’s quality: process, testing procedures, issue identification, and resolution
                            </span>
                        </div>
                        <div>
                            <iframe width='800' height='600' src='http://www.youtube.com/embed/xFa2_PVMeDQ?rel=0' allowFullScreen='' frameBorder='0' />
                        </div>
                    </div>
                    <div>
                        <PostWidget />
                    </div>
                </div>
                <div style={commentsBlock}>
                    SOME COMMENTS
                </div>
                <SocialLinksColored />
            </div>
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
