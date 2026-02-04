import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'PharmaCart: Distributed Advanced Online Medical Store',
            tagline: 'Scalable e-commerce platform for medical supplies',
            tech: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'REST API'],
            problem: 'Traditional medical stores lack online presence with real-time inventory tracking and secure order management.',
            solution: 'Built PharmaCart, a scalable online medical store using Java Spring Boot, MySQL, HTML, and CSS. Implemented secure authentication, real-time inventory management, and order tracking features. Enhanced database performance with optimized queries and indexing.',
            outcome: 'Delivered a responsive, user-friendly e-commerce platform across devices with secure payment integration, reducing order processing time and improving customer experience.',
            github: 'https://github.com/prajwal-m-2002/PharmaCart',
            live: null,
            color: 'from-green-500/20 to-teal-500/20',
        },
        {
            id: 2,
            title: 'Gold Price Analysis Using Python',
            tagline: 'Data-driven insights into gold price trends and forecasting',
            tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Time Series'],
            problem: 'Understanding gold price movements and their correlation with economic factors is challenging for investors and analysts.',
            solution: 'Analyzed historical gold price data using Python libraries (Pandas, Matplotlib, Seaborn). Applied moving averages and time series analysis to identify trends and forecast patterns. Performed correlation analysis with economic factors like inflation, dollar index, and crude oil prices.',
            outcome: 'Developed actionable insights through data visualization and statistical analysis, enabling informed investment decisions based on historical patterns and economic indicators.',
            github: 'http://colab.research.google.com/drive/1_WGusGSUFAoKz5h9_MXk_DptZlPZrUgE?usp=sharing',
            live: null,
            color: 'from-yellow-500/20 to-amber-500/20',
        },
        {
            id: 3,
            title: 'AutoTrust - Car Selling Platform',
            tagline: 'Streamlined car marketplace with admin approval workflow',
            tech: ['Spring Boot', 'React', 'MySQL', 'REST API'],
            problem: 'Traditional car selling platforms lack proper verification and admin oversight, leading to fraud and poor user trust.',
            solution: 'Built a three-tier system (Seller → Admin → Buyer) with approval workflows. Sellers post cars, admins verify authenticity, and only approved cars are visible to buyers.',
            outcome: 'Implemented complete CRUD operations with role-based access control, reducing fraudulent listings and improving buyer confidence.',
            github: 'https://github.com/prajwal-m-2002/Auto-Trust',
            live: null,
            color: 'from-blue-500/20 to-cyan-500/20',
        },
        {
            id: 4,
            title: 'MicroSaver - Lab Management Tool',
            tagline: 'Offline-first web app for microbiology students',
            tech: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
            problem: 'Microbiology students needed a quick, offline tool to calculate media concentrations and track experiment timers in the lab.',
            solution: 'Created a lightweight, offline-capable web app with two core features: LB Broth calculator based on bottle concentrations and an experiment timer with audio alerts.',
            outcome: 'Delivered a clean, professional lab tool that works without internet, with persistent data storage and export functionality.',
            github: 'https://github.com/prajwal-m-2002/MicroSaver',
            live: 'https://microsaver.netlify.app/',
            color: 'from-green-500/20 to-emerald-500/20',
        },
        {
            id: 5,
            title: 'Gold & Silver Investment Tracker',
            tagline: 'Desktop application for tracking precious metal investments',
            tech: ['JavaFX', 'SQLite', 'Java'],
            problem: 'Investors needed a simple way to track gold and silver purchases, calculate current values, and monitor profit/loss in real-time.',
            solution: 'Developed a JavaFX desktop app with SQLite persistence. Features include investment logging, automatic profit/loss calculation, and historical data visualization.',
            outcome: 'Created a 100% pixel-perfect desktop application migrated from web, with robust database persistence and real-time calculations.',
            github: 'https://github.com/prajwal-m-2002/gold-silver-tracker',
            live: null,
            color: 'from-yellow-500/20 to-orange-500/20',
        },
        {
            id: 6,
            title: 'Portfolio Website (This!)',
            tagline: 'Next-gen personal portfolio as a product demo',
            tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
            problem: 'Traditional portfolios look like resumes. Needed a way to showcase skills, thinking, and product sense all at once.',
            solution: 'Designed as a mini SaaS product with glassmorphism, micro-interactions, and case-study style project presentations. Focused on clarity and innovation.',
            outcome: 'Built a portfolio that demonstrates technical skill, design sense, and product thinking - making interviewers say "This is different."',
            github: 'https://github.com/prajwal/portfolio',
            live: 'https://prajwalm2002portfolio.netlify.app/',
            color: 'from-purple-500/20 to-pink-500/20',
        },
    ];

    return (
        <section id="projects" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                    Featured <span className="gradient-text">Projects</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Real problems solved with clean code and thoughtful design
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`glass-card p-6 cursor-pointer bg-gradient-to-br ${project.color}`}
                        onClick={() => setSelectedProject(project)}
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        <h3 className="text-2xl font-display font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                            {project.title}
                        </h3>
                        <p className="text-gray-400 mb-4 text-sm">
                            {project.tagline}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="px-2 py-1 bg-neon-blue/10 text-neon-blue text-xs rounded border border-neon-blue/30"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="text-xs text-gray-500 mt-4">Click to view case study →</p>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="glass-card p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <h2 className="text-3xl font-display font-bold mb-2 pr-12">
                                {selectedProject.title}
                            </h2>
                            <p className="text-gray-400 mb-6">{selectedProject.tagline}</p>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-neon-blue mb-2">💡 Problem</h3>
                                    <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{selectedProject.problem}</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-neon-blue mb-2">⚡ Solution</h3>
                                    <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{selectedProject.solution}</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-neon-blue mb-2">🎯 Outcome</h3>
                                    <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{selectedProject.outcome}</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-neon-blue mb-2">🛠️ Tech Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-neon-blue/10 text-neon-blue text-sm rounded border border-neon-blue/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary flex items-center gap-2 flex-1 justify-center"
                                    >
                                        <Github size={20} />
                                        View Code
                                    </a>
                                    {selectedProject.live && (
                                        <a
                                            href={selectedProject.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary flex items-center gap-2 flex-1 justify-center"
                                        >
                                            <ExternalLink size={20} />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
