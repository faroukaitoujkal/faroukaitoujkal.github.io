import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Layout, Smartphone, Database } from 'lucide-react';
import { Tilt } from 'react-tilt';
import { fadeInUp, staggerContainer } from '../utils/animations';
import SectionContainer from './SectionContainer';
import './Projects.css';

const Projects = () => {
    const { t } = useLanguage();

    const projects = [
        {
            id: 'helbHotel',
            image: '/assets/images/helb_hotel.png',
            link: '#',
            ...t.projects.helbHotel
        },
        {
            id: 'basketBall',
            image: '/assets/images/basketball.png',
            link: '#',
            ...t.projects.basketBall
        },
        {
            id: 'helbTower',
            image: '/assets/images/helb_tower.png',
            link: '#',
            ...t.projects.helbTower
        },
    ];

    const defaultTiltOptions = {
        reverse: false,
        max: 10,
        perspective: 1000,
        scale: 1.02,
        speed: 1000,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
    }

    return (
        <SectionContainer id="projects">
            <div className="container">
                <h2 className="section-title">{t.projects.title}</h2>
                <motion.div
                    className="projects-grid"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {projects.map((project, index) => (
                        <Tilt key={project.id} options={defaultTiltOptions}>
                            <motion.div
                                className="project-card glass-card"
                                variants={fadeInUp}
                                custom={index}
                            >
                                <div className="card-image-placeholder">
                                    {project.image ? (
                                        <img src={project.image} alt={project.title} className="project-image" />
                                    ) : (
                                        <div className="project-icon-wrapper">
                                            <Code size={40} />
                                        </div>
                                    )}
                                </div>
                                <div className="card-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.desc}</p>
                                    <div className="tags">
                                        {project.tech.map((tech) => (
                                            <span key={tech}>{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </Tilt>
                    ))}
                </motion.div>
            </div>
        </SectionContainer>
    );
};

export default Projects;
