import { useState } from "react";
import { Link } from "react-router-dom";
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
  Button,
  Ingredient,
  Measure,
  StepsContainer
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
    ing11,
    ing12,
    ing13,
    ing14,
    ing15,
    ing16,
    ing17,
    ing18,
    ing19,
    ing20,
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
    measure11,
    measure12,
    measure13,
    measure14,
    measure15,
    measure16,
    measure17,
    measure18,
    measure19,
    measure20,
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

  const checkListItem = (item1, item2) => {
    if (item1 !== "") {
      return (
        <ListItem>
          <Ingredient>{item1}</Ingredient>
          <Measure>- {item2}</Measure>
        </ListItem>
      );
    }
    return null;
  };

  const renderIngMeasure = () => (
    <Container>
      <Heading>Ingredients</Heading>
      <List>
        {checkListItem(ing1, measure1)}
        {checkListItem(ing2, measure2)}
        {checkListItem(ing3, measure3)}
        {checkListItem(ing4, measure4)}
        {checkListItem(ing5, measure5)}
        {checkListItem(ing6, measure6)}
        {checkListItem(ing7, measure7)}
        {checkListItem(ing8, measure8)}
        {checkListItem(ing9, measure9)}
        {checkListItem(ing10, measure10)}
        {checkListItem(ing11, measure11)}
        {checkListItem(ing12, measure12)}
        {checkListItem(ing13, measure13)}
        {checkListItem(ing14, measure14)}
        {checkListItem(ing15, measure15)}
        {checkListItem(ing16, measure16)}
        {checkListItem(ing17, measure17)}
        {checkListItem(ing18, measure18)}
        {checkListItem(ing19, measure19)}
        {checkListItem(ing20, measure20)}
      </List>
    </Container>
  );

  const renderSteps = () => (
    <StepsContainer>
      <Heading>Steps</Heading>
      {readMore ? renderReadLess() : renderReadMore()}
    </StepsContainer>
  )

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
          {renderIngMeasure()}
          {renderSteps()}
          <ButtonsContainer>
            <Anchor href={video} target="_main">
              <Video type="button">View Video</Video>
            </Anchor>
            <Link to="/">
              <Button>Back</Button>
            </Link>
          </ButtonsContainer>
        </BottomContainer>
      </InnerContainer>
    </SingleMealContainer>
  );
};

export default SingleMeal;
