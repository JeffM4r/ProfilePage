import mobileMenu from "../../assets/icons8-cardápio.svg";
import { Top, Menu, MenuList, Line, MobileMenuList } from "./NavigationBarStyledComponents";
import { referencesType } from "../../vite-env";
import { useState } from "react";

function NavigationBar({ homeRef, aboutRef, skillRef, projectRef }: referencesType) {
  const [menuIsHidden, setMenuIsHidden] = useState<boolean>(true)

  function changeMobileMenuVisibility() {
    setMenuIsHidden(!menuIsHidden)
  }


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
          <img src={mobileMenu} onClick={() => changeMobileMenuVisibility()} alt="" />
          <MobileMenuList menuIsHidden={menuIsHidden} >
            <button onClick={() => { homeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' }); }}>início</button>
            <button onClick={() => { aboutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' }); }}>Sobre</button>
            <button onClick={() => { skillRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' }); }}>Habilidades</button>
            <button onClick={() => { projectRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' }); }}>Projetos</button>
          </MobileMenuList>
        </Menu>
        <Line />
      </Top>
    </>
  )
}

export default NavigationBar;