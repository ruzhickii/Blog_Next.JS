import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const img_block = {
    position: "relative"
};

const img = {
  width: "100%"
};

const category = {
    position: "absolute",
    top: 150,
    width: 200,
    maxHeight: 60,
    textAlign: "center",
    background: "rgb(86, 116, 185)",
    padding: "15px 55px 15px 55px",
    fontSize: 35,
    color: "#fff"
};

const title_name = {

};

const style = {
    position: "absolute",
    top: 330,
    color: "#fff",
    fontSize: 100,
    left: 0,
    right: 0,
    margin: "0 auto",
    maxWidth: 670,
    textAlign: "center",
    borderLeft: "3px solid #fff",
    lineHeight: "70px"
};

const container = {
    maxWidth: 1280,
    margin: "0 auto"
};

const social_wrapper ={
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
};

const social_text_block = {
    borderLeft: "1px solid black",
    background: "#ccc",
    maxWidth: 780
};

const social_text = {
    margin: 0,
    fontSize: 35,
    padding: "0 0 0 40px"
};

const social_links_block = {
    background: "antiquewhite",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
};

const social_links = {
    marginLeft: 15,
    marginRight: 15,
    width: 50,
    height: 50,
    background: "aquamarine",
    textAlign: "center"
};


const Post = (props) => (
    <Layout>
        {props.shows &&
        <div>
            <div style={img_block}>
                <img style={img} src={props.shows.better_featured_image.source_url}/>
                <div style={category} dangerouslySetInnerHTML={{ __html: props.shows.excerpt.rendered }}/>
                <div style={title_name}>
                    <span style={style}>{props.shows.title.rendered}</span>
                </div>
            </div>
            <div style={container}>
                <div style={social_wrapper}>
                    <div style={social_text_block}>
                        <p style={social_text}>The success of a project-based business largely  depends on the visibility the company has over its projects</p>
                    </div>
                    <div style={social_links_block}>
                        <div style={social_links}>some link</div>
                        <div style={social_links}>some link</div>
                        <div style={social_links}>some link</div>
                        <div style={social_links}>some link</div>
                    </div>
                </div>
                <div>
                    <div>
                        <p>
                            The current level of their performance and, of course, the factors influencing their health and success.That is why the ability to have an extensive picture of the way these factors interact with one another is totally essential.
                        </p>
                        <ul>
                            <li>
                                Projects managers put lots of effort into evaluating project succsess and making sure that each of their projects is on track.
                            </li>
                            <li>
                                They need to analyze,predict,and prevent any possible
                            </li>
                            <li>

                            </li>
                        </ul>
                    </div>
                    <div>

                    </div>
                </div>





                <div dangerouslySetInnerHTML={{ __html: props.shows.content.rendered }}/>
            </div>
        </div>
        }
    </Layout>
);

Post.getInitialProps = async function({query}) {
    const {id} = query;
    const res = await fetch(`http://localhost/wordpress/wp-json/wp/v2/posts/${id}`);
    const show = await res.json();


    return {
        shows: show
    }
};

export default Post