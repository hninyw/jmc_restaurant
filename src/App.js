import logo from "./logo.svg";
import "./App.css";
import HeaderNav from "./components/HeaderNav";
import Reservation from "./components/Reservation";
import HeroSlider from "./components/HeroSlider";
import SpecialMenu from "./components/SpecialMenu";
import ParallaxSection from "./components/ParallaxSection";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <HeroSlider />
      <About />
      <SpecialMenu />
      <Reservation />
      {/* <ParallaxSection /> */}
      <Footer />
    </div>
  );
}

export default App;
