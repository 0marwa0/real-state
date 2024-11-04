import Navbar from "./SharedComponent/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/hero";
import OurMission from "./components/ourMission";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurMission />
    </div>
  );
}

export default App;
