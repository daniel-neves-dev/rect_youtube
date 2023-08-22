import {BrowserRouter as Router, Routes, Route, Link, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";

function App() {
  return (
    <Router>
        <ul>
            <li>Home</li>
            <li>Contato</li>
        </ul>
        <Routes>
            <Route extct path="/" element={<Home/>}/>
            <Route path="/company" element={<Company/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/newproject" element={<NewProject/>}/>
        </Routes>
        <h1>Footer</h1>
    </Router>
  )
}

export default App;
