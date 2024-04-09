import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Showcase from './components/Showcase';
import projects from './projectsData';
import {useEffect} from "react";
import {useDarkMode} from "./context/DarkModeContext.jsx";

function App() {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    // Apply the theme class to the body element
    document.body.className = darkMode ? "body-dark" : "body-light";
  }, [darkMode]); // Re-apply when darkMode changes

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/portfolio" element={<Portfolio projects={projects}/>}>
            {projects.map(project => (
              <Route 
                key={project.name}
                path={project.route}
                element={<Showcase project={project} />}
              />  
            ))}
          </Route>
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
