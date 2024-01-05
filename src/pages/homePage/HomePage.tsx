import linkedinIcon from "../../assets/icons8-linkedin.svg";
import githubIcon from "../../assets/icons8-github.svg";
import { Home, Title, Picture, TextRecolor, ContactButton, IconContainer } from "./HomePageStyledComponents";

function HomePage() {
  return (
    <>
      <Home>
        <Title>
          <h1>Olá!</h1>
          <h1>Meu nome é <TextRecolor>Jefferson</TextRecolor>,</h1>
          <h1>Engenheiro de Software</h1>
          <ContactButton>Contato</ContactButton>
          <IconContainer>
            <img src={linkedinIcon} alt="Linkedin Icon" />
            <img src={githubIcon} alt="Github Icon" />
          </IconContainer>
        </Title>
        <Picture src="https://e7.pngegg.com/pngimages/906/448/png-clipart-silhouette-person-person-with-helmut-animals-logo-thumbnail.png" />
      </Home>
    </>
  )
}

export default HomePage;