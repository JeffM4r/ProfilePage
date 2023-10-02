import styled from "styled-components";

export const ImagesContainer = styled.div`
margin-top: 90px;
max-width: 1300px;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
`

export const PageContainer = styled.div`
margin-top: 60px;
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
`