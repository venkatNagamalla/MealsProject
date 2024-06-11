import styled from "styled-components";

export const SingleMealContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const InnerContainer = styled.div`
  width: 96%;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 3px #0002;
  @media screen and (min-width: 768px) {
    width: 88%;
  }
`;

export const NameCategoryContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StepsContainer = styled.div`
  margin-top: 23px;
`

export const ImageContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    width: 40%;
    height: 280px;
  }
  @media screen and (min-width: 992px) {
    height: 350px;
  }
`;

export const Name = styled.h2`
  color: #000;
  font-size: 25px;
  font-family: "Roboto";
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`;

export const Category = styled.h3`
  color: #000;
  font-family: "Roboto";
  margin-left: 10px;
  font-size: 15px;
  margin-top: 2px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const CategoryContainer = styled.div`
  margin-top: 10px;
`;

export const Area = styled.h3`
  color: #000;
  font-family: "Roboto";
  font-size: 18px;
  @media screen and (min-width: 768px) {
    font-size: 21px;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  width: 100%;
`;

export const NameAreaContainer = styled.div`
  width: 100%;
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 59%;
  }
`;

export const Description = styled.p`
  font-family: "Roboto";
  font-size: 14px;
  line-height: 1.4;
  margin-top: 13px;
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
`;

export const ReadMoreBtn = styled.button`
  border: none;
  background-color: transparent;
  color: blue;
  cursor: pointer;
`;

export const FavBtn = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  font-size: 20px;
  display: flex;
  transition: all 0.8s ease;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    margin-right: 15px;
  }
  &:active {
    transform: scale(1.19);
  }
`;

export const Container = styled.div`
`;

export const Heading = styled.h2`
  color: #000;
  font-family: "Roboto";
  text-decoration: underline;
`;

export const List = styled.ol`
  font-family: "Roboto";
  margin-top: 8px;
  padding-left: 2px;
`;
export const ListItem = styled.li`
  font-size: 15px;
  list-style-type: decimal;
  font-weight: 450;
  display:flex;
  align-items:center;
  padding: 5px 0px 5px 0px;
`;

export const BottomContainer = styled.div`
  padding: 20px;
`;

export const ButtonsContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  margin-top: 18px;
  @media screen and (min-width:768px){
    flex-direction:row;
    align-items:center;
    jusfity-content:center;
  }

`

export const Video = styled.button`
  border: 1px solid #000;
  width: 100%;
  height: 35px;
  transition: all 0.3s ease;
  background-color: transparent;
  font-size: 15px;
  font-weight: 450;
  cursor: pointer;
  font-family: "Roboto";
  border-radius: 2px;
  &:hover {
    color: red;
}
`;

export const Anchor = styled.a`
  text-decoration: none;
  color: #000;
  @media screen and (min-width:768px){
    width: 40%;
  }
`;


export const Button = styled.button`
  width: 100%;
  height: 35px;
  margin-top: 10px;
  font-family:"Roboto";
  font-size: 17px;
  font-weight:450;
  @media screen and (min-width:768px){
  width: 100px;
  }
`

export const Ingredient = styled.p`
  color: #000;
  width: 200px;
`

export const Measure = styled.p`
  color: #000;
`