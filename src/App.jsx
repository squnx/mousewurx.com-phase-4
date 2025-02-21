import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss'
import Header from './components/Header'
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services'
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

const TRACKING_ID = "G-DLL1BX3ZJY"; // Replace with your actual Measurement ID
ReactGA.initialize(TRACKING_ID);

function Layout({ children }) {
  return (
    <div id="top" className="App app-container">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}

// Track page views when the route changes
function Analytics() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Analytics /> {/* Ensures analytics runs on every page change */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
