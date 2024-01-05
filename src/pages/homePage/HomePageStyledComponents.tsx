import styled from "styled-components";

export const Home = styled.div`
margin-top: 170px;
display: flex;
justify-content: space-evenly;
align-items: center;
h1{
  margin-top: 30px;
}

@media (max-width: 1060px) {
  margin-top: 130px;
  flex-direction: column-reverse;
}
`
export const TextRecolor = styled.span`
color: #6953e7;
font-weight: 700;
`

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
font-size: 40px;
color: white;

@media (max-width: 1060px) {
  font-size: 25px;
}
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
width: 500px;
border-radius: 5px;

@media (max-width: 1060px) {
  margin-left: 0px;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 400px;
}

@media (max-width: 400px) {
  margin-left: 0px;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 70vw;
}
`
