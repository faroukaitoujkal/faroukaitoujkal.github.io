import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PolitiqueConfidentialite = () => {
    const { t } = useLanguage();

    return (
        <div className="legal-page">
            <Navbar />
            <div className="container" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
                <h1>{t.privacyPage.title}</h1>
                <div className="legal-content">
                    {t.privacyPage.sections.map((section, index) => (
                        <React.Fragment key={index}>
                            <h2>{section.title}</h2>
                            <p>{section.content}</p>
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PolitiqueConfidentialite;
