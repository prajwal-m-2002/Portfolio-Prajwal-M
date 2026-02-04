import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Code, Database, Server, Wrench } from 'lucide-react';

const Skills = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const skillsData = [
        {
            category: 'Frontend',
            icon: <Code size={32} className="text-neon-blue" />,
            skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Responsive Design'],
            projects: ['Portfolio Website', 'MicroSaver Lab Tool', 'E-commerce UI'],
            usage: 'Building modern, responsive user interfaces with focus on performance and user experience',
        },
        {
            category: 'Backend',
            icon: <Server size={32} className="text-neon-blue" />,
            skills: ['Java', 'Spring Boot', 'REST APIs', 'Node.js', 'Express', 'Python', 'C++', 'JDBC'],
            projects: ['Car Selling App', 'AutoTrust Platform', 'Investment Tracker'],
            usage: 'Developing robust server-side applications with scalable architecture and secure authentication',
        },
        {
            category: 'Database',
            icon: <Database size={32} className="text-neon-blue" />,
            skills: ['MySQL', 'SQLite', 'MongoDB', 'Database Design', 'Query Optimization'],
            projects: ['Investment Tracker', 'Car Management System', 'Lab Data Storage'],
            usage: 'Designing efficient database schemas and writing optimized queries for data persistence',
        },
        {
            category: 'Tools',
            icon: <Wrench size={32} className="text-neon-blue" />,
            skills: ['Git', 'VS Code', 'Postman', 'Maven', 'npm'],
            projects: 'Used across all projects',
            usage: 'Version control, API testing, dependency management, and efficient development workflow',
        },
    ];

    return (
        <section id="skills" className="section-container bg-gradient-to-b from-transparent via-dark-card/20 to-transparent">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                    Tech <span className="gradient-text">Stack</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Technologies I work with and where I've applied them
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
                {skillsData.map((stack, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card p-6 cursor-pointer"
                        onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <motion.div
                                className="p-3 bg-neon-blue/10 rounded-lg"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                {stack.icon}
                            </motion.div>
                            <h3 className="text-2xl font-display font-semibold" style={{ color: 'var(--text-primary)' }}>
                                {stack.category}
                            </h3>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {stack.skills.map((skill, idx) => (
                                <motion.span
                                    key={idx}
                                    className="px-3 py-1 bg-neon-blue/10 text-neon-blue text-sm rounded-full border border-neon-blue/30"
                                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 255, 255, 0.2)' }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>

                        <AnimatePresence>
                            {expandedCard === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-4 border-t border-white/10">
                                        <div className="mb-3">
                                            <h4 className="text-sm font-semibold text-neon-blue mb-2">Where I've Used It:</h4>
                                            <p className="text-gray-400 text-sm">
                                                {Array.isArray(stack.projects) ? stack.projects.join(', ') : stack.projects}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-neon-blue mb-2">How I Apply It:</h4>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {stack.usage}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.p
                            className="text-xs text-gray-500 mt-4 text-center"
                            animate={{ opacity: expandedCard === index ? 0 : 1 }}
                        >
                            {expandedCard === index ? '' : 'Click to expand'}
                        </motion.p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
