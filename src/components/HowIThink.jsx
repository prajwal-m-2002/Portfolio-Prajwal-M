import { motion } from 'framer-motion';
import { Target, Blocks, Users } from 'lucide-react';

const HowIThink = () => {
    const principles = [
        {
            icon: <Target size={40} className="text-neon-blue" />,
            title: 'Problem First',
            description: 'Start with the problem, not the technology. Understanding the "why" before the "how" leads to better solutions.',
        },
        {
            icon: <Blocks size={40} className="text-neon-blue" />,
            title: 'Clean Architecture',
            description: 'Write code that is maintainable, scalable, and easy to understand. Quality over quick fixes.',
        },
        {
            icon: <Users size={40} className="text-neon-blue" />,
            title: 'User-Centric Design',
            description: 'Beautiful interfaces mean nothing if they don\'t solve real problems for real people.',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section id="how-i-think" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                    How I <span className="gradient-text">Think</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    My approach to solving problems and building products
                </p>
            </motion.div>

            <motion.div
                className="grid md:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
            >
                {principles.map((principle, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{
                            y: -10,
                            transition: { duration: 0.3 },
                        }}
                        className="glass-card p-8 group cursor-pointer"
                    >
                        <motion.div
                            className="mb-6 flex justify-center"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="p-4 bg-neon-blue/10 rounded-lg group-hover:bg-neon-blue/20 transition-colors duration-300">
                                {principle.icon}
                            </div>
                        </motion.div>

                        <h3 className="text-2xl font-display font-semibold mb-4 group-hover:text-neon-blue transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                            {principle.title}
                        </h3>

                        <p className="text-gray-400 leading-relaxed">
                            {principle.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default HowIThink;
