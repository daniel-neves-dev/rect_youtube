import {BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";

import Container from "./layouts/Container";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <Router>
        <Navbar/>
        <Container customClass = 'min-height'>
            <Routes>
                <Route extct path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/company" element={<Company/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/newproject" element={<NewProject/>}/>
            </Routes>
        </Container>
        <Footer/>
    </Router>
  )
}

export default App;
