import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import motifCover from '../assets/images/motif_cover.png';
import sanarCover from '../assets/images/sanar_cover.png';
import ashleyCover from '../assets/images/ashley_cover.png';
import logoHg from '../assets/images/hg_logo.png';
import logoMos from '../assets/images/mos_logo.png';
import logoMotif from '../assets/images/motif_logo.png';
import logoPupil from '../assets/images/pupil_logo.png';
import logoRitma from '../assets/images/ritma_logo.png';
import logoSpeedy from '../assets/images/speedy_logo.svg';
import logoTetra from '../assets/images/tetra_logo.png';
import logoWillys from '../assets/images/willys_logo.png';
import logoCaleyx from '../assets/images/caleyx_logo.png';
import logoDirectly from '../assets/images/directly_logo.png';

const CaseStudies = () => {
    const logos = [
        logoHg, logoMos, logoMotif, logoPupil, logoRitma, logoSpeedy, logoTetra, logoWillys, logoCaleyx, logoDirectly
    ];

    const cases = [
        {
            title: "Motif used Ryze audits to win new retainers",
            description: "Turned audits into a repeatable sales asset—faster audits, clearer proof, and stronger sales conversations.",
            image: motifCover,
            link: "#"
        },
        {
            title: "Sanar AI increased Google Search ROAS to 4.3x in 8 weeks",
            description: "Turned category momentum into predictable growth—without adding headcount or slowing product velocity.",
            image: sanarCover,
            link: "#"
        },
        {
            title: "Ashley Furniture improved ROAS by running Google + Meta on autopilot",
            description: "E-commerce performance across Search, Shopping/PMax, and Meta with weekly automated optimization cycles.",
            image: ashleyCover,
            link: "#"
        },
    ];

    const insights = [
        {
            category: "LEARN",
            title: "AdGent — the first AI agent to manage paid ads",
            description: "Discover how AdGent transforms paid media management.",
            author: "Ryze Team",
            date: "Jan 15, 2025"
        },
        {
            category: "LEARN",
            title: "Account Structure in 2025: Simplify, Don't Complicate",
            description: "The traditional Alpha/Beta account structure is dead. Learn how to restructure for machine learning.",
            author: "Ryze Team",
            date: "Jan 20, 2025"
        },
        {
            category: "LEARN",
            title: "Ad Creative for AI Search: Earning Clicks When AI Answers First",
            description: "Your creative has to work harder when CTRs are down 40-60%.",
            author: "Ryze Team",
            date: "Jan 10, 2025"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-[#030014] text-white overflow-hidden">
            <Navbar />

            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-[#FF4801]/10 rounded-full blur-[120px]" />
                <div className="absolute top-[60%] right-[20%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
            </div>

            <main className="flex-grow pt-32 pb-20">

                {/* Header CTA Section */}
                <div className="max-w-4xl mx-auto px-6 text-center mb-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-black text-[#FF4801] mb-2 uppercase tracking-tight">
                            TOP BRANDS <span className="text-white">IMPROVE</span>
                        </h1>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
                            ROAS WITH <span className="text-[#FF4801]">RYZE</span>
                        </h1>
                        <p className="text-slate-400 text-sm mb-8 max-w-lg mx-auto">
                            Join thousands of brands simplifying ad management with AI
                        </p>
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-md flex items-center group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF4801] to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="relative w-full pl-4 pr-32 py-3 rounded-md bg-[#0F0A1F] border border-white/10 focus:outline-none focus:border-[#FF4801] placeholder:text-slate-600 text-sm text-white"
                                />
                                <button className="absolute right-1 top-1 bottom-1 bg-[#FF4801] text-white px-6 rounded text-xs font-bold hover:bg-[#e04001] transition-colors flex items-center gap-1 shadow-[0_0_15px_#FF4801_40]">
                                    Get started <span className="text-[10px]">&rsaquo;</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Logo Strip */}
                <div className="w-full border-y border-white/5 py-8 mb-20 overflow-hidden bg-black/20 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8 md:gap-12 opacity-50 overflow-x-auto no-scrollbar mask-image-b">
                        {logos.map((logo, i) => (
                            <img
                                key={i}
                                src={logo}
                                alt="Brand Logo"
                                className="h-6 md:h-8 w-auto object-contain flex-shrink-0 brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300"
                            />
                        ))}
                    </div>
                </div>

                {/* Case Studies Grid */}
                <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {cases.map((study, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="overflow-hidden rounded-xl mb-6 bg-[#0F0A1F] border border-white/5 aspect-[4/3] relative">
                                    <div className="absolute inset-0 bg-[#FF4801]/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-[#FF4801] transition-colors">
                                    {study.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {study.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Insights Section */}
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-3xl font-bold text-white">Insights</h2>
                        <div className="h-px flex-grow bg-gradient-to-r from-[#FF4801] to-transparent" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
                        {insights.map((insight, index) => (
                            <div key={index} className={`pt-8 md:pt-0 ${index > 0 ? 'md:pl-12' : ''}`}>
                                <span className="text-[10px] font-bold text-[#FF4801] uppercase tracking-wider mb-3 block">
                                    {insight.category}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-3 leading-tight hover:text-[#FF4801] cursor-pointer transition-colors">
                                    {insight.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    {insight.description}
                                </p>
                                <div className="flex items-center gap-3 text-[10px] text-slate-500 font-medium">
                                    <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10">
                                        <div className="w-1.5 h-1.5 bg-[#FF4801] rounded-full" />
                                    </div>
                                    <span>{insight.author}</span>
                                    <span>|</span>
                                    <span>{insight.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center md:text-left">
                        <button className="text-[#FF4801] text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                            See more <ArrowRight className="w-3 h-3" />
                        </button>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default CaseStudies;
