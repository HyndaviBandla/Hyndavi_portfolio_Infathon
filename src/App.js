import "./App.css";
import Nav from "./components/Nav";
import About from "./components/section/About";
import { Education } from "./components/section/Education";
import Home from "./components/section/Home";
import Talent from "./components/section/Talent";
import Contact from "./components/section/Contact";
import Footer from "./components/section/Footer";
function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Education />
      <Talent />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
