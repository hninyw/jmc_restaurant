import logo from "./logo.svg";
import "./App.css";
import HeaderNav from "./components/HeaderNav";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSlider";
import BestSeller from "./components/BestSeller";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <HeaderNav />
      {/* <Navbar /> */}
      <Hero />
      <BestSeller />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
