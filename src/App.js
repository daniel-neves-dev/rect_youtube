import {BrowserRouter as Router, Routes, Route, Link, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";

function App() {
  return (
    <Router>
        <div>
            <Link to="/">Home</Link>
            <Link to="/contact">Contato</Link>
            <Link to="/company">Empresa</Link>
            <Link to="/newproject">Novo Projeto</Link>
        </div>
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
