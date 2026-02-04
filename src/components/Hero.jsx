import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Download, ArrowDown } from 'lucide-react';

const TerminalWindow = ({ side, delay = 0 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, side === 'left' ? 100 : -100]);

  // Abstract code symbols for animation
  const codeSymbols = [
    '{ function() {',
    '  const data = [];',
    '  return [...arr];',
    '}',
    '// Processing...',
    'if (condition) {',
    '  execute();',
    '}',
    'async () => {',
    '  await fetch();',
    '}',
    '[...array].map()',
    '=> { return x; }',
    'class Component {',
    '  constructor() {}',
    '}',
    '<!-- markup -->',
    '<div className="">',
    '</div>',
    'SELECT * FROM db;',
    'git commit -m ""',
  ];

  const [lines, setLines] = useState([]);

  useEffect(() => {
    // Initialize with random lines
    const initialLines = Array.from({ length: 12 }, () => ({
      text: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
      opacity: Math.random() * 0.4 + 0.2,
      key: Math.random(),
    }));
    setLines(initialLines);

    // Animate lines scrolling up
    const interval = setInterval(() => {
      setLines(prev => {
        const newLines = [...prev];
        newLines.shift();
        newLines.push({
          text: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
          opacity: Math.random() * 0.4 + 0.2,
          key: Math.random(),
        });
        return newLines;
      });
    }, 2000 + delay);

    return () => clearInterval(interval);
  }, [delay]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: delay / 1000 }}
      className={`terminal-window ${side === 'left' ? 'terminal-left' : 'terminal-right'}`}
    >
      {/* MacOS-style title bar */}
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
      </div>

      {/* Terminal content */}
      <div className="terminal-content">
        {lines.map((line, index) => (
          <motion.div
            key={line.key}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: line.opacity, x: 0 }}
            transition={{ duration: 0.3 }}
            className="terminal-line"
            style={{ opacity: line.opacity }}
          >
            <span className="terminal-prompt">$</span>
            <span className="terminal-text">{line.text}</span>
            {index === lines.length - 1 && (
              <span className="terminal-cursor"></span>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['MCA Student', 'Full-Stack Developer', 'Java Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-purple-500/5"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite',
        }}></div>
      </div>

      {/* Left Terminal */}
      <TerminalWindow side="left" delay={500} />

      {/* Right Terminal */}
      <TerminalWindow side="right" delay={800} />

      <motion.div
        className="section-container z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <motion.h2
            className="text-neon-blue text-lg md:text-xl font-medium mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm
          </motion.h2>
          <motion.h1
            className="text-6xl md:text-8xl font-display font-bold neon-glow mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Prajwal M
          </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <motion.p
            key={roleIndex}
            className="text-2xl md:text-4xl font-semibold gradient-text h-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {roles[roleIndex]}
          </motion.p>
        </motion.div>

        <motion.h3
          variants={itemVariants}
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          I build clean, scalable web experiences.
        </motion.h3>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            className="btn-primary flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.a>
          <motion.a
            href="/prajwal_resume.pdf"
            download
            className="btn-secondary flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-20"
        >
          <motion.a
            href="#how-i-think"
            className="inline-block text-neon-blue"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ArrowDown size={32} />
          </motion.a>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes gridMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }

        @keyframes cursorBlink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .terminal-window {
          position: absolute;
          width: 320px;
          height: 450px;
          background: rgba(11, 15, 20, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          border: 1px solid rgba(0, 255, 255, 0.1);
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.5),
            0 0 30px rgba(0, 255, 255, 0.05);
          overflow: hidden;
          z-index: 5;
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }

        .terminal-window:hover {
          opacity: 0.7;
        }

        .terminal-left {
          left: 5%;
          top: 30%;
          transform: translateY(-50%);
        }

        .terminal-right {
          right: 5%;
          top: 30%;
          transform: translateY(-50%);
        }

        .terminal-header {
          height: 32px;
          background: rgba(20, 25, 30, 0.9);
          border-bottom: 1px solid rgba(0, 255, 255, 0.1);
          display: flex;
          align-items: center;
          padding: 0 12px;
        }

        .terminal-dots {
          display: flex;
          gap: 8px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .dot-red {
          background: #ff5f56;
          box-shadow: 0 0 8px rgba(255, 95, 86, 0.5);
        }

        .dot-yellow {
          background: #ffbd2e;
          box-shadow: 0 0 8px rgba(255, 189, 46, 0.5);
        }

        .dot-green {
          background: #27c93f;
          box-shadow: 0 0 8px rgba(39, 201, 63, 0.5);
        }

        .terminal-content {
          padding: 16px;
          font-family: 'Courier New', monospace;
          font-size: 13px;
          line-height: 1.6;
          color: rgba(0, 255, 200, 0.8);
          height: calc(100% - 32px);
          overflow: hidden;
        }

        .terminal-line {
          display: flex;
          gap: 8px;
          margin-bottom: 8px;
          white-space: nowrap;
          overflow: hidden;
        }

        .terminal-prompt {
          color: rgba(0, 255, 255, 0.7);
          font-weight: bold;
        }

        .terminal-text {
          color: rgba(100, 255, 200, 0.6);
          font-size: 12px;
        }

        .terminal-cursor {
          display: inline-block;
          width: 8px;
          height: 16px;
          background: rgba(0, 255, 200, 0.8);
          margin-left: 4px;
          animation: cursorBlink 1s infinite;
        }

        /* Responsive behavior */
        @media (max-width: 1200px) {
          .terminal-window {
            width: 280px;
            height: 400px;
          }
          
          .terminal-left {
            left: 2%;
          }
          
          .terminal-right {
            right: 2%;
          }
        }

        @media (max-width: 1024px) {
          .terminal-window {
            opacity: 0.3;
            width: 240px;
            height: 350px;
          }
          
          .terminal-content {
            font-size: 11px;
          }
        }

        @media (max-width: 768px) {
          .terminal-window {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

