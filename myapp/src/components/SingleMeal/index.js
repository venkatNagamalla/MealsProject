import { useState } from "react";
import {Link} from 'react-router-dom'
import { FaRegHeart, FaHeart } from "react-icons/fa";

import {
  SingleMealContainer,
  ReadMoreBtn,
  Description,
  CategoryContainer,
  Category,
  Area,
  NameContainer,
  Name,
  InnerContainer,
  ImageContainer,
  Thumbnail,
  NameAreaContainer,
  NameCategoryContainer,
  FavBtn,
  Container,
  BottomContainer,
  Heading,
  List,
  ListItem,
  Video,
  Anchor,
  ButtonsContainer,
  Button
} from "./styledComponents";

const SingleMeal = (props) => {
  const [readMore, setReadMore] = useState(false);
  const [fav, setFav] = useState(false);

  const { details } = props;

  const {
    area,
    instructions,
    category,
    id,
    ing1,
    ing2,
    ing3,
    ing4,
    ing5,
    ing6,
    ing7,
    ing8,
    ing9,
    ing10,
    measure1,
    measure2,
    measure3,
    measure4,
    measure5,
    measure6,
    measure7,
    measure8,
    measure9,
    measure10,
    thumbnail,
    video,
    name,
  } = details;

  const inst = instructions.slice(0, 100);

  const toggleBtn = () => setReadMore(!readMore);

  const renderReadMore = () => (
    <>
      <Description>
        {inst}...<ReadMoreBtn onClick={toggleBtn}>Read More</ReadMoreBtn>
      </Description>
    </>
  );

  const renderReadLess = () => (
    <>
      <Description onClick={toggleBtn}>
        {instructions}
        <ReadMoreBtn>Read Less</ReadMoreBtn>
      </Description>
    </>
  );

  const updateFav = () => {
    // check in favList with id and update fav state
    setFav((prev) => !prev);
  };

  const renderIngMeasure = () => (
      <Container>
        <Heading>Ingredients</Heading>
        <List>
          <ListItem>{ing1} -{measure1}</ListItem>
          <ListItem>{ing2} -{measure2}</ListItem>
          <ListItem>{ing3} - {measure3}</ListItem>
          <ListItem>{ing4} - {measure4}</ListItem>
          <ListItem>{ing5} - {measure5}</ListItem>
          </List>
      </Container>
  );

  return (
    <SingleMealContainer>
      <InnerContainer>
        <ImageContainer>
          <Thumbnail src={thumbnail} alt={name} />
          <NameAreaContainer>
            <NameContainer>
              <NameCategoryContainer>
                <Name>{name}</Name>
                <Category>({category})</Category>
              </NameCategoryContainer>
              <FavBtn onClick={updateFav}>
                {fav ? <FaHeart color="red" /> : <FaRegHeart />}
              </FavBtn>
            </NameContainer>
            <CategoryContainer>
              <Area>{area}</Area>
            </CategoryContainer>
          </NameAreaContainer>
        </ImageContainer>
        <BottomContainer>
          {readMore ? renderReadLess() : renderReadMore()}
          {renderIngMeasure()}
          <ButtonsContainer>
          <Anchor href={video} target="_main"><Video type="button">View Video</Video></Anchor>
          <Link to="/"><Button>Back</Button></Link>
          </ButtonsContainer>
          
        </BottomContainer>
      </InnerContainer>
    </SingleMealContainer>
  );
};

export default SingleMeal;
