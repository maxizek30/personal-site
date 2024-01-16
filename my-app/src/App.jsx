import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Showcase from './components/Showcase';
import projects from './projectsData';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/portfolio" element={<Portfolio projects={projects}/>}>
            {projects.map(project => (
              <Route 
                key={project.name}
                path={project.name}
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
