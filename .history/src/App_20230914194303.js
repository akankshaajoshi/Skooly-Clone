import "@/styles/App.css"
//import Navbar from "@/components/shared/Navbar"
import {Container} from "@/components/custom/Container"
import HeroContainer from "@/containers/HeroContainer"
import DownloadContainer from "@/containers/DownloadContainer"
import ForSchoolContainer from "@/containers/ForSchoolContainer"

function App() {

  return (
    <Container>
      <HeroContainer/>
      <DownloadContainer/>
      <ForSchoolContainer/>
    </Container>

    
  );
}

export default App;
