import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    const education = [
        {
            degree: 'Master of Computer Applications (MCA)',
            institution: 'Shree Devi Institute of Technology, Mangalore',
            year: '2023 - 2025',
            description: 'Specializing in Software Development and Web Technologies',
        },
        {
            degree: 'Bachelor of Science (BSC)',
            institution: 'Canara College, Mangalore',
            year: '2020 - 2023',
            description: 'Focus on Programming Fundamentals and Database Management',
        },
        {
            degree: 'Pre-University Course (PUC)',
            institution: 'Canara PU College, Mangalore',
            year: '2018 - 2020',
            description: 'Focus on Physics, Chemistry, Mathematics',
        },
        {
            degree: 'SSLC',
            institution: 'Little lilli Senior Secondary School, Kumbla',
            year: '2017 - 2018',
            description: 'Focus on Physics, Chemistry, Mathematics',
        },
    ];

    return (
        <section id="education" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                    <span className="gradient-text">Education</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Academic foundation building technical expertise
                </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-blue/50 to-transparent"></div>

                    <div className="space-y-12">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="relative pl-20"
                            >
                                {/* Timeline Dot */}
                                <motion.div
                                    className="absolute left-5 top-2 w-6 h-6 bg-neon-blue rounded-full border-4 border-dark-bg"
                                    whileInView={{ scale: [0, 1.2, 1] }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="absolute inset-0 bg-neon-blue rounded-full animate-ping opacity-20"></div>
                                </motion.div>

                                <motion.div
                                    className="glass-card p-6"
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-neon-blue/10 rounded-lg">
                                            <GraduationCap size={28} className="text-neon-blue" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                                <h3 className="text-xl font-display font-semibold" style={{ color: 'var(--text-primary)' }}>
                                                    {edu.degree}
                                                </h3>
                                                <span className="text-neon-blue text-sm font-medium">
                                                    {edu.year}
                                                </span>
                                            </div>
                                            <p className="font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                                                {edu.institution}
                                            </p>
                                            <p className="text-gray-400 text-sm">
                                                {edu.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
