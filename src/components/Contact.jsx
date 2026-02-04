import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Linkedin, Github, Send, Instagram, Twitter, MessageCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        try {
            const response = await fetch('https://formspree.io/f/mbdkneww', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setTimeout(() => setStatus(''), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const socials = [
        {
            icon: <Mail size={24} />,
            name: 'Email',
            link: 'mailto:prajwalkumble2002@gmail.com',
            color: 'hover:text-red-400',
        },
        {
            icon: <Linkedin size={24} />,
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/prajwalm2002/',
            color: 'hover:text-blue-400',
        },
        {
            icon: <Github size={24} />,
            name: 'GitHub',
            link: 'https://github.com/prajwal-m-2002',
            color: 'hover:text-purple-400',
        },
        {
            icon: <Instagram size={24} />,
            name: 'Instagram',
            link: 'https://www.instagram.com/praj.wallll_/',
            color: 'hover:text-pink-400',
        },
        {
            icon: <Twitter size={24} />,
            name: 'X',
            link: 'https://x.com/Kl14Prajwal',
            color: 'hover:text-slate-400',
        },
        {
            icon: <MessageCircle size={24} />,
            name: 'Threads',
            link: 'https://www.threads.com/@praj.wallll_',
            color: 'hover:text-gray-400',
        },
    ];

    return (
        <section id="contact" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                    Let's <span className="gradient-text">Connect</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Let's build something meaningful together
                </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-8">
                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="glass-card p-8"
                >
                    <h3 className="text-2xl font-display font-semibold mb-6">Send a Message</h3>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-dark-bg border border-white/10 rounded-lg focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-dark-bg border border-white/10 rounded-lg focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full px-4 py-3 bg-dark-bg border border-white/10 rounded-lg focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all resize-none"
                                placeholder="Tell me about your project or opportunity..."
                            ></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                        >
                            <Send size={20} />
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </motion.button>

                        {status && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`text-sm text-center ${status === 'success' ? 'text-green-400' : 'text-red-400'
                                    }`}
                            >
                                {status === 'success'
                                    ? '✅ Message sent successfully! I\'ll get back to you soon.'
                                    : '❌ Failed to send message. Please try again or email me directly.'}
                            </motion.p>
                        )}
                    </form>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-display font-semibold mb-6 text-center">Connect With Me</h3>

                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                        {socials.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`glass-card p-4 flex flex-col items-center justify-center gap-3 group ${social.color} transition-colors text-center`}
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="p-3 bg-neon-blue/10 rounded-lg group-hover:bg-neon-blue/20 transition-colors">
                                    {social.icon}
                                </div>
                                <span className="font-medium">{social.name}</span>
                            </motion.a>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="p-6 glass-card text-center"
                    >
                        <p className="text-gray-400 text-sm leading-relaxed">
                            📍 Currently looking for <span className="text-neon-blue font-semibold">internship opportunities</span> and
                            <span className="text-neon-blue font-semibold"> full-time roles</span> where I can contribute and grow.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
