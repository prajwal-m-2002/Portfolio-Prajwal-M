import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
    const { currentTheme, changeTheme, themes } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Theme Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg glass-card hover:bg-white/10 transition-colors relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Change Theme"
            >
                <Palette size={20} className="text-neon-blue" />
                <span className="absolute -top-1 -right-1 text-xs">
                    {themes[currentTheme].emoji}
                </span>
            </motion.button>

            {/* Theme Selector Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Theme Options */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute right-0 mt-2 w-48 glass-card backdrop-blur-xl p-2 rounded-lg shadow-xl z-50"
                        >
                            <div className="space-y-1">
                                {Object.entries(themes).map(([key, theme]) => (
                                    <motion.button
                                        key={key}
                                        onClick={() => {
                                            changeTheme(key);
                                            setIsOpen(false);
                                        }}
                                        className={`
                                            w-full text-left px-3 py-2 rounded-lg transition-all
                                            flex items-center gap-3
                                            ${currentTheme === key
                                                ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/30'
                                                : 'hover:bg-white/5 text-gray-300'
                                            }
                                        `}
                                        whileHover={{ x: 4 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className="text-xl">{theme.emoji}</span>
                                        <span className="font-medium">{theme.name}</span>
                                        {currentTheme === key && (
                                            <motion.span
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="ml-auto text-neon-blue"
                                            >
                                                ✓
                                            </motion.span>
                                        )}
                                    </motion.button>
                                ))}
                            </div>

                            <div className="mt-2 pt-2 border-t border-white/10">
                                <p className="text-xs text-gray-400 text-center">
                                    Choose your style
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ThemeSwitcher;
