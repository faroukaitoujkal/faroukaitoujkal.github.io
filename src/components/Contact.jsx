import React, { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SectionContainer from './SectionContainer';
import './Contact.css';

const Contact = () => {
    const { t } = useLanguage();
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        const SERVICE_ID = 'service_skvpcol';
        const TEMPLATE_ID = 'template_fcgiooq';
        const PUBLIC_KEY = 'vpEpCsMKoOP9UMxjo';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            });
    };

    return (
        <SectionContainer id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">{t.contact.title}</h2>
                <div className="contact-container glass-card">
                    <div className="contact-info">
                        <h3>{t.contact.message}</h3>
                        <p>
                            {t.contact.infoDescription}
                        </p>
                        <div className="social-links">
                            <a href="mailto:faroukaitoujkal@gmail.com" className="social-btn" title="Email">
                                <Mail size={24} />
                            </a>
                            <a href="https://github.com/FaroukAkl2003" target="_blank" rel="noopener noreferrer" className="social-btn" title="GitHub">
                                <Github size={24} />
                            </a>
                            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="social-btn" title="LinkedIn">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form ref={form} onSubmit={sendEmail} className="contact-form">
                            <div className="form-group">
                                <label>{t.contact.form.name}</label>
                                <input type="text" name="user_name" required placeholder={t.contact.form.name} />
                            </div>
                            <div className="form-group">
                                <label>{t.contact.form.email}</label>
                                <input type="email" name="user_email" required placeholder={t.contact.form.email} />
                            </div>
                            <div className="form-group">
                                <label>{t.contact.form.subject}</label>
                                <input type="text" name="subject" required placeholder={t.contact.form.subject} />
                            </div>
                            <div className="form-group">
                                <label>{t.contact.form.message}</label>
                                <textarea name="message" rows="4" required placeholder={t.contact.form.message}></textarea>
                            </div>

                            <button type="submit" className={`submit-btn ${status}`} disabled={status === 'sending'}>
                                {status === 'sending' ? (
                                    t.contact.form.sending
                                ) : status === 'success' ? (
                                    t.contact.form.success
                                ) : (
                                    <>
                                        {t.contact.form.send} <Send size={18} />
                                    </>
                                )}
                            </button>

                            {status === 'error' && <p className="error-msg">{t.contact.form.error}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};

export default Contact;
