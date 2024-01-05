import { ImagesContainer, Image, PageContainer } from "./ProjectsPageStyledComponents"
import { Title } from "../../components/title/TitleStyledComponents"

function ProjectsPage({projectRef}: {projectRef: React.MutableRefObject<null | HTMLDivElement>}) {
  return (
    <>
      <Title ref={projectRef}>
        Projetos
      </Title>
      <PageContainer>
        <ImagesContainer>
          <Image src="https://1.bp.blogspot.com/-44KzF-u8qLQ/YN2oLtKSfCI/AAAAAAAAAFA/dXqfJUeevy0T11c8vwJsBK1gGoVGqWfuACPcBGAYYCw/s0/work1.jpg" />
          <Image src="https://1.bp.blogspot.com/-44KzF-u8qLQ/YN2oLtKSfCI/AAAAAAAAAFA/dXqfJUeevy0T11c8vwJsBK1gGoVGqWfuACPcBGAYYCw/s0/work1.jpg" />
          <Image src="https://1.bp.blogspot.com/-44KzF-u8qLQ/YN2oLtKSfCI/AAAAAAAAAFA/dXqfJUeevy0T11c8vwJsBK1gGoVGqWfuACPcBGAYYCw/s0/work1.jpg" />
          <Image src="https://1.bp.blogspot.com/-44KzF-u8qLQ/YN2oLtKSfCI/AAAAAAAAAFA/dXqfJUeevy0T11c8vwJsBK1gGoVGqWfuACPcBGAYYCw/s0/work1.jpg" />
          <Image src="https://1.bp.blogspot.com/-44KzF-u8qLQ/YN2oLtKSfCI/AAAAAAAAAFA/dXqfJUeevy0T11c8vwJsBK1gGoVGqWfuACPcBGAYYCw/s0/work1.jpg" />
          <Image src="https://1.bp.blogspot.com/-44KzF-u8qLQ/YN2oLtKSfCI/AAAAAAAAAFA/dXqfJUeevy0T11c8vwJsBK1gGoVGqWfuACPcBGAYYCw/s0/work1.jpg" />
        </ImagesContainer>
      </PageContainer>
    </>
  )
}

export default ProjectsPage