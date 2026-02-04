import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#how-i-think' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
                    ? 'glass-card backdrop-blur-xl bg-dark-bg/80 shadow-lg'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.a
                            href="#"
                            className="text-2xl font-display font-bold"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="gradient-text">Prajwal M</span>
                        </motion.a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-6">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    className="text-gray-300 hover:text-neon-blue transition-colors font-medium"
                                    whileHover={{ y: -2 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <ThemeSwitcher />
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-neon-blue"
                            whileTap={{ scale: 0.9 }}
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 right-0 bottom-0 w-64 glass-card backdrop-blur-xl bg-dark-bg/95 z-50 md:hidden"
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex items-center justify-between p-6 border-b border-white/10">
                                <span className="text-xl font-display font-bold gradient-text">
                                    Menu
                                </span>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 text-neon-blue"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="flex-1 p-6">
                                <div className="flex flex-col gap-4">
                                    {navLinks.map((link, index) => (
                                        <motion.a
                                            key={index}
                                            href={link.href}
                                            onClick={handleLinkClick}
                                            className="text-lg text-gray-300 hover:text-neon-blue transition-colors font-medium py-2"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                            whileHover={{ x: 10 }}
                                        >
                                            {link.name}
                                        </motion.a>
                                    ))}

                                    <div className="pt-4 mt-4 border-t border-white/10">
                                        <p className="text-sm text-gray-400 mb-3">Theme</p>
                                        <ThemeSwitcher />
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border-t border-white/10">
                                <a
                                    href="/resume.pdf"
                                    download
                                    onClick={handleLinkClick}
                                    className="btn-primary w-full text-center block"
                                >
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
