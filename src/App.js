import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BestSeller from "./components/BestSeller";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <BestSeller />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
