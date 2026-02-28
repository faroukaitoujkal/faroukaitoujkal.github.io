import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
    const { t } = useLanguage();
    const location = useLocation();
    const navigate = useNavigate();

    const handleContactClick = (e) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/#contact');
        } else {
            const element = document.querySelector('#contact');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <footer className="footer">
            <div className="container footer-content">

                <div className="footer-main">
                    <p className="footer-name">
                        © {new Date().getFullYear()} {t.footer.copyright}
                    </p>
                    <p className="footer-rights">
                        {t.footer.rights}
                    </p>
                </div>

                <div className="footer-links">
                    <a href="#contact" onClick={handleContactClick}>{t.footer.contact}</a>
                    <span> | </span>
                    <Link to="/mentions-legales">{t.footer.legal}</Link>
                    <span> | </span>
                    <Link to="/politique-confidentialite">{t.footer.privacy}</Link>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
