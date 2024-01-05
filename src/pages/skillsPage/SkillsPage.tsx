import { Picture } from "../homePage/HomePageStyledComponents";
import { About, PageContent } from "../aboutPage/AboutPAgeStyledComponents";
import { Title } from "../../components/title/TitleStyledComponents";

function SkillsPage({skillRef}: {skillRef: React.MutableRefObject<null | HTMLDivElement>}) {
  return (
    <>
      <Title ref={skillRef}>
        Habilidades
      </Title>
      <About>
        <PageContent>
          <p>
            Praesent molestie odio quam, non blandit magna
            vestibulum eu. Sed ultrices sit amet eros ac lobortis.
            Vestibulum eu eros placerat, aliquam lorem et, gravida risus.
            nterdum et malesuada fames ac ante ipsum primis in faucibus.
            Pellentesque pulvinar ornare diam, vitae ultrices magna fermentum
            sit amet. Etiam ac laoreet erat. Praesent accumsan finibus tortor in
            elementum. Quisque est nisl, faucibus ac lacus non,
            condimentum imperdiet massa. Etiam aliquam fermentum turpis
            scelerisque ornare. Suspendisse diam orci, tincidunt commodo felis a,
            egestas bibendum orci. Sed ac tempus ligula. Curabitur faucibus metus diam,
            quis condimentum enim varius et.
          </p>
        </PageContent>
        <Picture src="https://1.bp.blogspot.com/-IsumS85QRSo/YN2oMoLZUlI/AAAAAAAAAFA/4kfegi2QFRAW3hktPmdRHo86DgiF1NKgQCPcBGAYYCw/s640/work3.jpg" />

      </About>
    </>
  )
}

export default SkillsPage;