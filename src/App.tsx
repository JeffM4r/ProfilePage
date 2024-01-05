import HomePage from "./pages/homePage/HomePage.tsx";
import AboutPage from "./pages/aboutPage/AboutPage.tsx";
import SkillsPage from "./pages/skillsPage/SkillsPage.tsx";
import ProjectsPage from "./pages/projectsPage/ProjectsPage.tsx";
import GlobalStyle from "./globalStyle/GlobalStyle.tsx";
import NavigationBar from "./components/navigationBar/NavigationBar.tsx";
import Footer from "./components/footer/Footer.tsx";
import { useRef } from "react";


function App() {
  const homeRef: React.MutableRefObject<null | HTMLDivElement> = useRef(null);
  const aboutRef: React.MutableRefObject<null | HTMLDivElement> = useRef(null);
  const skillRef: React.MutableRefObject<null | HTMLDivElement> = useRef(null);
  const projectRef: React.MutableRefObject<null | HTMLDivElement> = useRef(null);

  return (
    <>
      <GlobalStyle />
      <NavigationBar homeRef={homeRef} aboutRef={aboutRef} skillRef={skillRef} projectRef={projectRef} />
      <HomePage homeRef={homeRef} />
      <AboutPage aboutRef={aboutRef} />
      <SkillsPage skillRef={skillRef}/>
      <ProjectsPage projectRef={projectRef}/>
      <Footer/>
    </>
  )
}

export default App
