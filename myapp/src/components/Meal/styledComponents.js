import styled from "styled-components";

export const Item = styled.li`
  border: 1px solid #0003;
  box-shadow: 4px 4px 15px 5px #eeeeee;
  flex: 0 0 calc(50% - 21px);
  margin: 10px;
  margin-bottom:20px;
  height: 180px;
  list-style: none;
  border-radius:5px;
  overflow:hidden;
  @media screen and (min-width: 576px) {
    flex: 0 0 calc(33% - 19px);
  height: 200px;

  }
  @media screen and (min-width: 992px) {
    flex: 0 0 calc(21% - 32px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 84%;
  object-fit: cover;
`;

export const Name = styled.h3`
  font-size: 15px;
  margin-left: 5px;
  margin-top: 1px;
  font-family:"Roboto";
`;
