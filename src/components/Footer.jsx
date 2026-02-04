import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-dark-bg/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-gray-400 flex items-center justify-center gap-2 mb-2">
                        Built with{' '}
                        <motion.span
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatType: 'reverse',
                            }}
                        >
                            <Heart size={16} className="text-neon-blue fill-neon-blue inline" />
                        </motion.span>{' '}
                        using React, Vite, Tailwind CSS & Framer Motion
                    </p>
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Prajwal. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
