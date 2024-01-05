import styled from "styled-components";

export const ImagesContainer = styled.div`
max-width: 1300px;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
`

export const PageContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
  
export const Image = styled.img`
border-radius: 5px;
height: 270px;
width: 400px;
margin-bottom: 30px;
&:hover{
  cursor: pointer;
}

@media (max-width: 400px) {
width: 100vw;
height: auto;
}
`