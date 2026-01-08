import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Import images
import motifCover from '../assets/images/motif_cover.png';
import sanarCover from '../assets/images/sanar_cover.png';
import ashleyCover from '../assets/images/ashley_cover.png';

// Import logos
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
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <main className="flex-grow pt-32 pb-20">

                {/* Header CTA Section */}
                <div className="max-w-4xl mx-auto px-6 text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black text-[#FF4801] mb-2 uppercase tracking-tight">
                        TOP BRANDS <span className="text-black">IMPROVE</span>
                    </h1>
                    <h1 className="text-4xl md:text-6xl font-black text-black mb-6 uppercase tracking-tight">
                        ROAS WITH <span className="text-[#FF4801]">RYZE</span>
                    </h1>
                    <p className="text-slate-500 text-sm mb-8">
                        Join thousands of brands simplifying ad management with AI
                    </p>
                    <div className="flex justify-center">
                        <div className="relative w-full max-w-md flex items-center">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full pl-4 pr-32 py-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#FF4801] placeholder:text-slate-400 text-sm"
                            />
                            <button className="absolute right-1 top-1 bottom-1 bg-black text-white px-6 rounded text-xs font-bold hover:bg-slate-800 transition-colors flex items-center gap-1">
                                Get started <span className="text-[10px]">&rsaquo;</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Logo Strip */}
                <div className="w-full border-y border-slate-100 py-8 mb-20 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 overflow-x-auto no-scrollbar">
                        {logos.map((logo, i) => (
                            <img key={i} src={logo} alt="Brand Logo" className="h-6 md:h-8 w-auto object-contain flex-shrink-0" />
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
                                <div className="overflow-hidden rounded-lg mb-6 bg-slate-100 aspect-[4/3]">
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-[#FF4801] transition-colors">
                                    {study.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {study.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-12">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF4801]" />
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                    </div>
                </div>

                {/* Insights Section */}
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-black pb-4 inline-block">Insights</h2>
                    <div className="w-full h-px bg-[#FF4801] mb-12" /> {/* Orange line visual */}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                        {insights.map((insight, index) => (
                            <div key={index} className={`pt-8 md:pt-0 ${index > 0 ? 'md:pl-12' : ''}`}>
                                <span className="text-[10px] font-bold text-[#FF4801] uppercase tracking-wider mb-3 block">
                                    {insight.category}
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight hover:text-[#FF4801] cursor-pointer transition-colors">
                                    {insight.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                    {insight.description}
                                </p>
                                <div className="flex items-center gap-3 text-[10px] text-slate-400 font-medium">
                                    <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center text-white">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full" /> {/* Abstract avatar */}
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
