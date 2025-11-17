import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Features from './pages/Features'
import Team from './pages/Team'
import HowItWorks from './pages/HowItWorks'
import Support from './pages/Support'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/features" element={<Features />} />
            <Route path="/team" element={<Team />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/support" element={<Support />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

