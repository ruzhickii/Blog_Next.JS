import Link from 'next/link';
import Masonry from 'react-masonry-component';
import styled from 'styled-components';

const Img = styled.img`
    width: 100%;
    display: block;
`;

const Card = styled.div`
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.31);
    margin-bottom: 30px;
    width: 685px;

        @media (max-width: 960px) {
            width: 100%;
        }
  
`;

const CardImg = styled.div`
    position: relative;
    cursor: pointer;
`;

const Description = styled.span`
    margin: 0;
    padding: 5px 0 5px 0;
    color: #fff;
    text-transform: uppercase;
    font-size: 25px;
    font-weight: bold;
    font-family: Roboto;
`;

const TitleName = styled.div`
    color: #000;
    padding: 10px 0px 55px 20px;
    font-size: 35px;
    text-transform: uppercase;
    font-family: Roboto;
    font-weight: 300;
`;

const Msnry = styled.div`
    margin-top: 200px;

      @media (max-width: 960px) {
        margin-top: 100px;
        }

      @media (max-width: 920px) and (min-width: 786px) {
          margin-top: 100px;
        }

      @media (max-width: 780px) and (min-width: 640px) {
            margin-top: 100px;
        }

      @media (max-width: 635px) and (min-width: 320px) {
          margin-top: 50px;
      }
`;

const Div = styled.div`
    > p {
      margin: 5px;
  }
`;

const articleName = {
    width: 200,
    marginLeft: 35,
    position: 'absolute',
    bottom: 0,
    textAlign: 'center'
};

const colors = {
    backend: '#fbaf5d',
    software: '#5674b9',
    mobile: '#f26d7d',
    consulting: '#c69c6d',
    company: '#f06eaa',
    frontend: '#7cc576'
};

const masonryOptions = {
    transitionDuration: 0,
    gutter: 30
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

const PostsBig = (props) => (
    <Msnry>
        <Masonry id='masonry' options={masonryOptions}>
            {props.shows && props.shows.map((show) => (
                <Card key={show.id}>
                    <CardImg>
                        <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                            <Description>
                                <Img src={show.better_featured_image.source_url} />
                                <Div style={getColor(getCategory(props.categories, show.categories[0]))} dangerouslySetInnerHTML={{__html: show.excerpt.rendered}} />
                            </Description>
                        </Link>
                    </CardImg>
                    <TitleName>
                        <span>{show.title.rendered}</span>
                    </TitleName>
                </Card>
            ))}
        </Masonry>
    </Msnry>
);

export default PostsBig;
