import styled from "styled-components";

function NavigationBar (){
  return (
    <>
     <BarSettings>Hello World</BarSettings>
    </>
  )
}

const BarSettings = styled.div`
	font-size: 100px;
	font-family: 'Roboto Slab';
	color: white;
`

export default NavigationBar;