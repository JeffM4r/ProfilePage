import mobileMenu from "../../assets/icons8-cardápio.svg";
import { Top, Menu, MenuList, Line } from "./NavigationBarStyledComponents";

function NavigationBar() {
  return (
    <>
      <Top>
        <Menu>
          <p>Jefferson Martins</p>
          <MenuList>
            <button>início</button>
            <button>Sobre</button>
            <button>Habilidades</button>
            <button>Projetos</button>
          </MenuList>
          <img src={mobileMenu} alt="" />
        </Menu>
        <Line />
      </Top>
    </>
  )
}

export default NavigationBar;