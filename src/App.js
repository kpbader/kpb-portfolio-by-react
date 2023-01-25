
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./components/Home/home";
import Nav from "./components/Nav/nav";
import Footer from "./components/Footer/footer";
import About from "./components/About/about"
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";


function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;