import styled from "styled-components";

export const About = styled.div`
margin-top: 170px;
display: flex;
justify-content: space-evenly;
align-items: center;
h1{
  margin-top: 30px;
}

@media (max-width: 1060px) {
  margin-top: 130px;
  flex-direction: column;
}
`

export const PageContent = styled.div`
display: flex;
flex-direction: column;
font-size: 25px;
color: white;
p{
  max-width: 500px;
}

@media (max-width: 1060px) {
  font-size: 15px;
  line-height: 20px;
  text-align: center;
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
height: 5000;

@media (max-width: 1060px) {
  margin-left: 0px;
  margin-bottom: 20px;
  height: 200px;
}
`
