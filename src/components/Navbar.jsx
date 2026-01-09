import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'About Us', path: '/about' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`w-full max-w-5xl rounded-full transition-all duration-300 ${scrolled
                    ? 'bg-[#030014]/60 backdrop-blur-xl border border-white/10 shadow-lg shadow-purple-900/10'
                    : 'bg-transparent border border-transparent'
                    }`}
            >
                <div className="px-6 md:px-8 py-3 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="text-xl font-bold tracking-tighter flex items-center gap-2 text-white">
                        RYZE
                        <div className="w-2 h-2 rounded-full bg-[#FF4801] shadow-[0_0_10px_#FF4801]" />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF4801] transition-all group-hover:w-full" />
                            </Link>
                        ))}
                        <Link
                            to="/get-started"
                            className="px-5 py-2 bg-gradient-to-r from-[#FF4801] to-[#FF6B01] text-white text-sm font-semibold rounded-full hover:opacity-90 transition-all shadow-[0_0_20px_rgba(255,72,1,0.3)] hover:shadow-[0_0_30px_rgba(255,72,1,0.5)]"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-300"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="absolute top-24 left-4 right-4 bg-[#0F0A1F] border border-white/10 rounded-2xl p-6 md:hidden shadow-2xl"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-slate-200 hover:text-[#FF4801]"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/get-started"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center py-3 bg-[#FF4801] text-white font-semibold rounded-xl"
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
