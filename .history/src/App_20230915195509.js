import "@/styles/App.css"
import AppRouter from "@/routes/AppRouter"
import Navbar from "@/components/shared/Navbar"
function App() {

  return (
    <>
    <Navbar></Navbar>
    <AppRouter></AppRouter>
    </>
  );
}

export default App;
