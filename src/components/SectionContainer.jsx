import React from 'react';
import { motion } from 'framer-motion';

const SectionContainer = ({ children, id, className = '', delay = 0 }) => {
    return (
        <motion.section
            id={id}
            className={`section ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        ease: "easeOut",
                        delay: delay
                    }
                }
            }}
        >
            {children}
        </motion.section>
    );
};

export default SectionContainer;
