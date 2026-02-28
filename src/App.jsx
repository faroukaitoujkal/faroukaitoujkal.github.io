import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';

const MainContent = () => (
    <>
        <Navbar />
        <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
        <Footer />
    </>
);

function App() {
    return (
        <LanguageProvider>
            <ThemeProvider>
                <div className="app-container">
                    <Router>
                        <Routes>
                            <Route path="/" element={<MainContent />} />
                            <Route path="/mentions-legales" element={<MentionsLegales />} />
                            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
                        </Routes>
                    </Router>
                </div>
            </ThemeProvider>
        </LanguageProvider>
    );
}

export default App;
