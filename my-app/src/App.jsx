import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import StarBattleXShowcase from './pages/StarBattleXShowcase';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/StarBattleX" element={<StarBattleXShowcase />} /> 
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
