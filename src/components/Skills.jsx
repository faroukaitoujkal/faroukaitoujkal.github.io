import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import SectionContainer from './SectionContainer';
import './Skills.css';

const Skills = () => {
    const { t } = useLanguage();
    const [hoveredSkill, setHoveredSkill] = useState(null);

    return (
        <SectionContainer id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">{t.skills.title}</h2>

                <div className="skills-grid">
                    {t.skills.list.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className={`skill-card ${hoveredSkill === skill.name ? 'active' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                        >
                            <div className="skill-content">
                                <h3 className="skill-name">{skill.name}</h3>
                                <p className="skill-description">{skill.description}</p>
                            </div>
                            <div className="skill-glow" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
};

export default Skills;

