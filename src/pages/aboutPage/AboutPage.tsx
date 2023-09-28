import NavigationBar from "../../components/navigationBar/NavigationBar";
import { About, PageContent, Picture } from "./AboutPAgeStyledComponents";

function AboutPage() {
  return (
    <>
      <NavigationBar />
      <About>
        <Picture src="https://e7.pngegg.com/pngimages/906/448/png-clipart-silhouette-person-person-with-helmut-animals-logo-thumbnail.png" />
        <PageContent>
          <p>
          Praesent molestie odio quam, non blandit magna vestibulum eu. Sed ultrices sit amet eros ac lobortis. Vestibulum eu eros placerat, aliquam lorem et, gravida risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pulvinar ornare diam, vitae ultrices magna fermentum sit amet. Etiam ac laoreet erat. Praesent accumsan finibus tortor in elementum. Quisque est nisl, faucibus ac lacus non, condimentum imperdiet massa. Etiam aliquam fermentum turpis scelerisque ornare. Suspendisse diam orci, tincidunt commodo felis a, egestas bibendum orci. Sed ac tempus ligula. Curabitur faucibus metus diam, quis condimentum enim varius et.
          </p>
        </PageContent>

      </About>
    </>
  )
}

export default AboutPage;