import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles/App.css'
import Layout from './components/Layout';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
