import styled from "styled-components";

export const About = styled.div`
margin-top: 170px;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 1060px) {
  margin-top: 130px;
  flex-direction: column;
}
`

export const PageContent = styled.div`
display: flex;
flex-direction: column;
color: white;
p{
  font-size: 25px;
  max-width: 500px;
  line-height: 30px;
  margin-left: 25px;
}

@media (max-width: 1060px) {
  p{
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    margin-left: 0px;
  }
}
`
