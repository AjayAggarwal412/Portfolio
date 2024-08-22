import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/NavBar";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollButton from "./components/ScrollToTop/ScrollButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <NavBar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Project />
      <Contact />
      <Footer />
      <ScrollButton />
    </>
  );
}

export default App;
