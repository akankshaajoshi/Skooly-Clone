import "@/styles/App.css"
import NavBar from "@/components/shared/Navbar"
import HeroContainer from "@/containers/HeroContainer"

function App() {
  return (
    <div className="App">
      <HeroContainer>
      <NavBar></NavBar>

      </HeroContainer>
    </div>
  );
}

export default App;
