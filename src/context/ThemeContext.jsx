import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
    dark: {
        name: 'Dark',
        emoji: '🌙',
        colors: {
            '--bg-primary': '#0a0e1a',
            '--bg-secondary': '#0b0f14',
            '--bg-card': 'rgba(15, 23, 42, 0.6)',
            '--bg-card-hover': 'rgba(0, 255, 204, 0.05)',
            '--text-primary': '#ffffff',
            '--text-secondary': '#94a3b8',
            '--accent-primary': '#00ffcc',
            '--accent-secondary': '#a855f7',
            '--accent-gradient': 'linear-gradient(135deg, #00ffcc 0%, #a855f7 100%)',
            '--border-color': 'rgba(0, 255, 204, 0.2)',
            '--neon-glow': '0 0 20px rgba(0, 255, 204, 0.3)',
        }
    },
    light: {
        name: 'Light',
        emoji: '☀️',
        colors: {
            '--bg-primary': '#ffffff',
            '--bg-secondary': '#f8fafc',
            '--bg-card': 'rgba(248, 250, 252, 0.8)',
            '--bg-card-hover': 'rgba(14, 165, 233, 0.05)',
            '--text-primary': '#0f172a',
            '--text-secondary': '#475569',
            '--accent-primary': '#0ea5e9',
            '--accent-secondary': '#8b5cf6',
            '--accent-gradient': 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%)',
            '--border-color': 'rgba(14, 165, 233, 0.2)',
            '--neon-glow': '0 0 20px rgba(14, 165, 233, 0.2)',
        }
    },
    cyberpunk: {
        name: 'Cyberpunk',
        emoji: '🌆',
        colors: {
            '--bg-primary': '#0d0221',
            '--bg-secondary': '#120136',
            '--bg-card': 'rgba(18, 1, 54, 0.7)',
            '--bg-card-hover': 'rgba(255, 0, 255, 0.08)',
            '--text-primary': '#ff00ff',
            '--text-secondary': '#bd00ff',
            '--accent-primary': '#ff00ff',
            '--accent-secondary': '#00ffff',
            '--accent-gradient': 'linear-gradient(135deg, #ff00ff 0%, #00ffff 100%)',
            '--border-color': 'rgba(255, 0, 255, 0.3)',
            '--neon-glow': '0 0 30px rgba(255, 0, 255, 0.5)',
        }
    },
    retro: {
        name: 'Retro',
        emoji: '🎮',
        colors: {
            '--bg-primary': '#1a1a2e',
            '--bg-secondary': '#16213e',
            '--bg-card': 'rgba(22, 33, 62, 0.7)',
            '--bg-card-hover': 'rgba(255, 107, 107, 0.06)',
            '--text-primary': '#eee',
            '--text-secondary': '#c5c6c7',
            '--accent-primary': '#ff6b6b',
            '--accent-secondary': '#feca57',
            '--accent-gradient': 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)',
            '--border-color': 'rgba(255, 107, 107, 0.3)',
            '--neon-glow': '0 0 20px rgba(255, 107, 107, 0.3)',
        }
    }
};

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(() => {
        // Get theme from localStorage or default to 'dark'
        return localStorage.getItem('portfolio-theme') || 'dark';
    });

    useEffect(() => {
        // Apply theme colors to CSS variables
        const theme = themes[currentTheme];
        const root = document.documentElement;

        Object.entries(theme.colors).forEach(([property, value]) => {
            root.style.setProperty(property, value);
        });

        // Save to localStorage
        localStorage.setItem('portfolio-theme', currentTheme);
    }, [currentTheme]);

    const changeTheme = (themeName) => {
        setCurrentTheme(themeName);
    };

    return (
        <ThemeContext.Provider value={{ currentTheme, changeTheme, themes }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};
