import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Expertise from "./components/Expertise";
import Contact from "./components/Contact";
import "./app.css";
function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Expertise />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
