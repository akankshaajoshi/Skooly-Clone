import "@/styles/App.css"
import Navbar from "@/components/shared/Navbar"
import HeroContainer from "@/containers/HeroContainer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroContainer>
      </HeroContainer>
    </div>
  );
}

export default App;
