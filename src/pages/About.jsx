import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Target, Users, Zap, Shield } from 'lucide-react';

const About = () => {
    const stats = [
        { value: "2000+", label: "Clients Served" },
        { value: "$500M+", label: "Ad Spend Managed" },
        { value: "700+", label: "Agencies Onboarded" },
        { value: "24/7", label: "AI Optimization" },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-32">
                {/* Header */}
                <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                            We're building the <span className="text-[#FF4801] drop-shadow-[0_0_15px_rgba(255,72,1,0.5)]">autonomous future</span> of marketing.
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Ryze was born from a simple observation: performance marketers spend too much time on manual tasks that machines can do better. Our mission is to empower teams with AI agents that handle the grunt work, so humans can focus on creativity and strategy.
                        </p>
                    </motion.div>
                </div>

                {/* Stats */}
                <div className="border-y border-white/5 bg-[#0F0A1F]/50 backdrop-blur-sm py-16 relative overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF4801]/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                                    <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-2xl bg-[#0F0A1F] border border-white/10 shadow-lg shadow-blue-900/10 flex gap-4 hover:border-blue-500/30 transition-colors">
                            <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg h-fit border border-blue-500/20"><Target /></div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Performance First</h3>
                                <p className="text-slate-400">We don't just build cool tech. We build tools that drive measurable ROI for our customers.</p>
                            </div>
                        </div>
                        <div className="p-8 rounded-2xl bg-[#0F0A1F] border border-white/10 shadow-lg shadow-orange-900/10 flex gap-4 hover:border-[#FF4801]/30 transition-colors">
                            <div className="p-3 bg-[#FF4801]/10 text-[#FF4801] rounded-lg h-fit border border-[#FF4801]/20"><Zap /></div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Speed & Efficiency</h3>
                                <p className="text-slate-400">Time is money. Our AI acts instantly to capitalize on market trends 24/7.</p>
                            </div>
                        </div>
                        <div className="p-8 rounded-2xl bg-[#0F0A1F] border border-white/10 shadow-lg shadow-green-900/10 flex gap-4 hover:border-green-500/30 transition-colors">
                            <div className="p-3 bg-green-500/10 text-green-400 rounded-lg h-fit border border-green-500/20"><Users /></div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Human-Centric AI</h3>
                                <p className="text-slate-400">AI shouldn't replace humans; it should give them superpowers. We design for the human-in-the-loop.</p>
                            </div>
                        </div>
                        <div className="p-8 rounded-2xl bg-[#0F0A1F] border border-white/10 shadow-lg shadow-purple-900/10 flex gap-4 hover:border-purple-500/30 transition-colors">
                            <div className="p-3 bg-purple-500/10 text-purple-400 rounded-lg h-fit border border-purple-500/20"><Shield /></div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Trust & Transparency</h3>
                                <p className="text-slate-400">We believe in white-box AI. You should always know why decisions are being made.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default About;
