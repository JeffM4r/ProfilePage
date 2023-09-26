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
            <button>Contato</button>
          </MenuList>
        </Menu>
        <Line />
      </Top>
    </>
  )
}

export default NavigationBar;