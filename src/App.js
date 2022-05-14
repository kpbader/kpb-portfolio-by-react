import './App.css'

// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
  
import Home from "./components/Home/home";
import Nav from "./components/Nav/nav";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import About from "./components/About/about"
import Projects from "./components/Projects/projects";
import Resume from "./components/Resume/resume";
import Contact from "./components/Contact/contact";

  
function App() {
  return (
    <>
      <Router>
        <Header/>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/Resume" element={<Resume/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
  
export default App;