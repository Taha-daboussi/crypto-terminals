import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Companies from "./pages/Companies";
import CompanyDetail from "./pages/CompanyDetail";
import Compare from "./pages/Compare";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Router basename="/crypto-terminals/">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Features" element={<Features />} />
            <Route path="/Companies" element={<Companies />} />
            <Route path="/Companies/:id" element={<CompanyDetail />} />
            <Route path="/Compare" element={<Compare />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
