import HomePage from "./pages/homePage/HomePage.tsx";
import AboutPage from "./pages/aboutPage/AboutPage.tsx";
import SkillsPage from "./pages/skillsPage/SkillsPage.tsx";
import ProjectsPage from "./pages/projectsPage/ProjectsPage.tsx";
import GlobalStyle from "./globalStyle/GlobalStyle.tsx";


function App() {

  return (
    <>
      <GlobalStyle />
      <ProjectsPage />
    </>
  )
}

export default App
