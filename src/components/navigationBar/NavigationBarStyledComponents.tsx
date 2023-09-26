import styled from "styled-components";

export const Top = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #202020;
position: fixed;
top: 0;
left: 0;
right: 0;
height: 60px;
`
export const Menu = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 80vw;
height: 59px;
max-width: 1600px;
p{
  font-size: 20px;
  color: white;
}
`

export const Line = styled.div`
position: fixed;
top: 60px;
left: 0;
right: 0;
height: 1px;
background-color: #272727;
`


export const MenuList = styled.div`
display: flex;
align-items: center;
button{
  color: white;
  font-size: 20px;
  border: none;
  background-color: #202020;
  margin-left: 44px;
}
button:hover{
  cursor: pointer;
}
`