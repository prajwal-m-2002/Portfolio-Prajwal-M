import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';

const Experiments = () => {
    const certifications = [
        {
            icon: <GraduationCap size={28} className="text-neon-blue" />,
            title: 'Full Stack Web Development',
            institution: 'Tap Academy',
            year: '2025',
            description: 'Mastered Core Java, Advanced Java (JDBC, J2EE, Servlets), Spring, Hibernate, MySQL, and Frontend Development. Gained hands-on experience in OOPs, Collections, Multithreading, Exception Handling, and Java 8 features such as Lambda Expressions and Stream API. Applied skills through multiple projects, including a capstone Online Food Delivery Application, demonstrating full-stack development from database integration to responsive UI design.',
            tags: ['Java', 'Spring', 'Hibernate', 'MySQL', 'J2EE', 'Servlets', 'Full-Stack'],
        },
        {
            icon: <Award size={28} className="text-neon-blue" />,
            title: 'Java Programming Internship',
            institution: 'Codtech IT Solutions',
            year: '2025',
            description: 'Successfully completed a Java Programming internship at Codtech IT Solutions from November 25, 2024, to January 10, 2025. Gained hands-on experience and practical skills in Java development, demonstrating strong problem-solving abilities, attention to detail, and consistent dedication throughout the program.',
            tags: ['Java', 'Problem-Solving', 'Professional Development'],
        },
    ];

    return (
        <section id="experiments" className="section-container bg-gradient-to-b from-transparent via-dark-card/20 to-transparent">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                    <span className="gradient-text">Certifications</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Professional certifications and training programs completed
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10, scale: 1.03 }}
                        className="glass-card p-6 group"
                    >
                        <motion.div
                            className="p-4 bg-neon-blue/10 rounded-lg inline-block mb-4 group-hover:bg-neon-blue/20 transition-colors"
                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                        >
                            {cert.icon}
                        </motion.div>

                        <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-neon-blue transition-colors" style={{ color: 'var(--text-primary)' }}>
                            {cert.title}
                        </h3>

                        <p className="text-neon-blue/80 font-medium mb-1">
                            {cert.institution} ({cert.year})
                        </p>

                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            {cert.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {cert.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="px-2 py-1 bg-neon-blue/5 text-neon-blue/80 text-xs rounded border border-neon-blue/20"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-12 text-center"
            >
                <p className="text-gray-400 italic">
                    "Continuous learning and professional growth through structured training."
                </p>
            </motion.div>
        </section>
    );
};

export default Experiments;
