import styled from "styled-components";


export const Header = styled.header`
  height: 38px;
  background-color: #000;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center;
  box-shadow: 2px 2px 10px 2px #0005;
  padding: 5px 25px 5px 25px;
  position:fixed;
  right:0;
  left:0;
  top:0;
  @media screen and (min-width:768px){
    height: 40px;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  @media screen and (min-width:768px){
    width: 87%;
  }
`;

export const Logo = styled.h1`
  color: #ffffff;
`;


export const IconsContainer = styled.div`
  width: 250px;
  position:fixed;
  top:38px;
  height:100%;
  transition: all 0.2s ease 0.1s;
  left: ${props => props.bar};
  background-color: #000;
  @media screen and (min-width:768px){
    position:static;
    width: 350px;
    height: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
  }
`

export const Icons = styled.ul`
  display:flex;
  flex-direction:column;
  width:100%;
  justify-content:space-between;
  list-style:none;
  @media screen and (min-width:768px){
   flex-direction:row

  }
`

export const Icon = styled.li`
    color: #fff;
    font-family:"Roboto";
    height:100%;
    width:100%;
    display:flex;
    align-items:center;
    padding-left: 13px;
    @media screen and (min-width:768px){
    text-align:center;
    padding:0px;
    justify-content:center;
    }
`

export const Menu = styled.button`
  background-color:transparent;
  border:none;
  font-size: 22px;
  display:flex;
  justify-content:center;
  align-items:center;
  @media screen and (min-width:768px){
  display:none;
  }
`
