import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { GraduationCap, Gamepad2, Plane, Quote, Film } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import SectionContainer from './SectionContainer';
import './About.css';

// Custom Football icon since Lucide doesn't have a dedicated one that looks like a soccer ball perfectly
const Football = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="12 5 16 9 14.5 14 9.5 14 8 9"></polygon>
        <polyline points="12 5 12 2"></polyline>
        <polyline points="16 9 21 8"></polyline>
        <polyline points="14.5 14 17.5 18.5"></polyline>
        <polyline points="9.5 14 6.5 18.5"></polyline>
        <polyline points="8 9 3 8"></polyline>
    </svg>
);

const getHobbyIcon = (iconName) => {
    switch (iconName) {
        case 'gamepad': return <Gamepad2 size={28} />;
        case 'football': return <Football size={28} />;
        case 'plane': return <Plane size={28} />;
        case 'film': return <Film size={28} />;
        default: return <Gamepad2 size={28} />;
    }
};

const About = () => {
    const { t } = useLanguage();

    return (
        <SectionContainer id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">
                    {t.about.title}
                </h2>

                <div className="about-content glass-card">
                    <div className="about-layout">

                        {/* Main Description & Quote */}
                        <motion.div
                            className="about-left-col"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <p className="about-description-main">
                                {t.about.description}
                            </p>

                            <motion.div
                                className="about-quote-box"
                                whileHover={{ scale: 1.02 }}
                            >
                                <Quote className="quote-icon-bg" size={60} />
                                <p className="quote-text">{t.about.quote}</p>
                            </motion.div>
                        </motion.div>

                        {/* Image / Sticker */}
                        <motion.div
                            className="about-image-container"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="sticker-wrapper"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 4,
                                    ease: "easeInOut"
                                }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <img
                                    src="/assets/images/sticker.png"
                                    alt="About Me Sticker"
                                    className="about-sticker"
                                />
                                <div className="sticker-glow"></div>
                            </motion.div>
                        </motion.div>

                    </div>

                    {/* Timeline & Hobbies Grid */}
                    <div className="about-bottom-grid">

                        {/* Timeline */}
                        <motion.div
                            className="about-timeline"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <h3 className="sub-title"><GraduationCap size={24} /> {t.about.timeline.title}</h3>
                            <div className="timeline-container">
                                {t.about.timeline.items.map((item, index) => (
                                    <div key={index} className="timeline-item">
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-content">
                                            <span className="timeline-year">{item.year}</span>
                                            <h4>{item.title}</h4>
                                            <span className="timeline-institution">{item.institution}</span>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Hobbies */}
                        <motion.div
                            className="about-hobbies"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <h3 className="sub-title">{t.about.hobbies.title}</h3>
                            <div className="hobbies-grid">
                                {t.about.hobbies.items.map((hobby, index) => (
                                    <motion.div
                                        key={index}
                                        className="hobby-card"
                                        whileHover={{ y: -5, scale: 1.05 }}
                                    >
                                        <div className="hobby-icon">
                                            {getHobbyIcon(hobby.icon)}
                                        </div>
                                        <span>{hobby.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                    </div>

                </div>
            </div>
        </SectionContainer>
    );
};

export default About;
