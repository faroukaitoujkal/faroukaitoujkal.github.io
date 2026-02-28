import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { slideInLeft } from '../utils/animations';
import SectionContainer from './SectionContainer';
import './Hero.css';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <SectionContainer id="home" className="hero-section">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    variants={slideInLeft}
                    initial="hidden"
                    animate="visible"
                >
                    <span className="greeting">{t.hero.greeting}</span>
                    <h1 className="name">Ait Oujkal Farouk</h1>
                    <h2 className="role">{t.hero.role}</h2>
                    <p className="description">{t.hero.description}</p>
                    <div className="cta-group">
                        <motion.a
                            href="#contact"
                            className="cta-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t.hero.cta}
                        </motion.a>
                        <motion.a
                            href="/assets/documents/CV_Ait-Oujkal_Farouk.pdf"
                            download="CV_Ait-Oujkal_Farouk.pdf"
                            className="cta-button download-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download size={20} />
                            {t.hero.downloadCV}
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="image-wrapper">
                        <img src="/assets/images/avatar.jpeg" alt="Ait Oujkal Farouk" />
                    </div>
                    <motion.div
                        className="glow-orb orb-1"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.div
                        className="glow-orb orb-2"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    />
                </motion.div>
            </div>
            <div className="hero-bg-grid"></div>
        </SectionContainer>
    );
};

export default Hero;
