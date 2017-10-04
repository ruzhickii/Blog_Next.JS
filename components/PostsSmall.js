import UserWidget from './UserWidget';
import styled from 'styled-components';

import Link from 'next/link';

const PostWrapperSmall = styled.div`
    display: flex;
    padding: 40px 100px 50px 100px;
`;

const SmallCard = styled.div`
    max-width: 33.3%;
    max-height: 300px;
    position: relative;
    background: #ccc;
    overflow: hidden;
`;

const SmallImg = styled.img`
    width: 100%;
`;

const PostName = styled.span`
    position: absolute;
    top: 135px;
    color: #fff;
    font-size: 35px;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 235px;
    text-align: center;
    border-left: 1px solid #fff;
    line-height: 30px;
    font-family: ProximaNovaSemibold;
`;

const colors = {
    backend: '#fbaf5d',
    software: '#5674b9',
    mobile: '#f26d7d',
    consulting: '#c69c6d',
    company: '#f06eaa',
    frontend: '#7cc576'
};

const articleName = {
    width: 150,
    position: 'absolute',
    textAlign: 'center',
    background: 'rgb(86, 116, 185)',
    top: 20,
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#fff'
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
    console.log(style, 'ARTICLE NAME', slug);
    return style;
}

const PostsSmall = (props) => (
    <PostWrapperSmall>
        {props.posts && props.posts.map((post) => (
            <SmallCard key={post.id}>
                <Link as={`/p/${post.id}`} href={`/post?id=${post.id}`}>
                    <span>
                        <SmallImg src={post.better_featured_image.source_url} />
                        <div style={getColor(getCategory(props.categories, post.categories[0]))}
                          dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
                        <div>
                            <PostName>{post.title.rendered}</PostName>
                        </div>
                        <UserWidget small={true} />
                    </span>
                </Link>
            </SmallCard>
        ))}
    </PostWrapperSmall>
);

export default PostsSmall;
