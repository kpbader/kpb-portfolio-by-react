import './App.css'

// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
  
// import Home component
import Home from "./components/Home/home";
import Nav from "./components/Nav/nav";
import Projects from "./components/Projects/projects";
import Resume from "./components/Resume/resume";
import Contact from "./components/Contact/contact";

  
function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
     
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/Resume" element={<Resume/>} />
          <Route path="/Contact" element={<Contact/>} />


        </Routes>
      </Router>
    </>
  );
}
  
export default App;