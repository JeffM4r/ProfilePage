import styled from "styled-components";
import { mobileMenuListProps } from "../../vite-env";

export const Top = styled.header`
z-index: 1;
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
img{
  display: none;
}

@media (max-width: 1060px) {
  img{
    display: initial;
    height: 30px;
  }
  img:hover{
    cursor: pointer;
  }
}
`

export const Line = styled.div`
position: absolute;
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
  margin-left: 40px;
  font-family: 'Roboto Slab';
}
button:hover{
  cursor: pointer;
}

@media (max-width: 1060px) {
  button{
    display: none;
  }
}
`

export const MobileMenuList = styled.div<mobileMenuListProps>`
position: absolute;
margin-top: 61px;
visibility: hidden;
top: 0;
z-index: -1;
height: 100vh;
background-color: #202020;
width: 400px;
display: flex;
flex-direction: column;
align-items: flex-end;

button{
  margin-top: 20px;
  color: white;
  font-size: 25px;
  border: none;
  background-color: #202020;
  font-family: 'Roboto Slab';
  margin-right: 100px;
}
button:hover{
  cursor: pointer;
}

@media (max-width: 1060px) {
  transition: all .3s ease-in-out;
  right:${(props) => (props.menuIsHidden ? "-400px" : "0")};
  visibility: ${(props) => (props.menuIsHidden ? "hidden" : "visible")};
}

@media (max-width: 440px) {
  width: 150px;
  right:${(props) => (props.menuIsHidden ? "-150px" : "0")};
  button{
    font-size: 20px;
    margin-right: 20px;
  }
}
`