import mobileMenu from "../../assets/icons8-cardápio.svg";
import { Top, Menu, MenuList, Line } from "./NavigationBarStyledComponents";
import { referencesType } from "../../vite-env";

function NavigationBar({ homeRef, aboutRef, skillRef, projectRef }: referencesType) {


  return (
    <>
      <Top>
        <Menu>
          <p>Jefferson Martins</p>
          <MenuList>
            <button onClick={() => { homeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' }); }}>início</button>
            <button onClick={() => { aboutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' }); }}>Sobre</button>
            <button onClick={() => { skillRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' }); }}>Habilidades</button>
            <button onClick={() => { projectRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' }); }}>Projetos</button>
          </MenuList>
          <img src={mobileMenu} alt="" />
        </Menu>
        <Line />
      </Top>
    </>
  )
}

export default NavigationBar;