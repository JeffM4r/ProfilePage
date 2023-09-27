import styled from "styled-components";

export const Home = styled.div`
margin-top: 170px;
display: flex;
justify-content: space-around;
align-items: center;
h1{
  margin-top: 30px;
}
`
export const TextRecolor = styled.span`
color: #6953e7;
font-weight: 700;
`

export const Title = styled.div`
display: flex;
flex-direction: column;
font-size: 40px;
color: white;
`

export const IconContainer = styled.div`
margin-top: 100px;
img{
  filter: invert(100%) sepia(2%) saturate(7488%) hue-rotate(265deg) brightness(110%) contrast(101%);
  height: 50px;
  margin-right: 20px;
}
`

export const ContactButton = styled.button`
background-color: #6953e7;
color: white;
font-size: 20px;
font-weight: 700;
font-family: 'Roboto Slab';
border: none;
width: 140px;
height: 40px;
border-radius: 10px;
margin-top: 60px;
&:hover{
  cursor: pointer;
}
`

export const Picture = styled.img`
margin-left: 20px;
`
