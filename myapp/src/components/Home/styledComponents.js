
import styled from 'styled-components' 

export const HomeContainer = styled.section`
  margin-top: 38px;
`

export const HomeInnerContainer = styled.section`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top: 50px;
`

export const RetryBtn  = styled.button`
  border:1px solid #000;
  margin-top: 10px;
`

export const Container  = styled.div`
  width:96%;
  @media screen and (min-width:768px){
  width:85%;
`

export const Heading = styled.h1`
  color: #8E3E63;
  font-size: 23px;
  margin-left:10px;
  @media screen and (min-width:768px){
    font-size: 30px;
  }
`

export const RecipesContainer = styled.div`
  min-height: 30vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-top: 10px;
`

export const ListContainer = styled.ul`
  width:100%;
  display:flex;
  flex-wrap:wrap;
`