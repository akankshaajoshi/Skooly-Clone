import "@/styles/App.css"
import Navbar from "@/components/shared/Navbar"
import HeroContainer from "@/containers/HeroContainer"
import DownloadContainer from "@/containers/DownloadContainer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroContainer>
      </HeroContainer>
      <DownloadContainer>

      </DownloadContainer>
    </div>
  );
}

export default App;
