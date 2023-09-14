import "@/styles/App.css"
import NavBar from "@/components/shared/Navbar"
import HeroContainer from "@/containers/HeroContainer"

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HeroContainer>
        Another container inside
      </HeroContainer>
    </div>
  );
}

export default App;
