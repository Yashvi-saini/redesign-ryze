import { motion } from 'framer-motion';
import { Check, MessageSquare } from 'lucide-react';

const ComparisonSection = () => {
    return (
        <section className="py-24 bg-[#030014] relative overflow-hidden">
            {/* Divider Line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Side - Autonomous AI */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl lg:text-5xl font-bold text-[#FF4801] mb-2">
                                Autonomous AI
                            </h2>
                            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                                marketer
                            </h3>

                            <ul className="space-y-6 mb-12">
                                {["24/7 performance audits", "AI creative generation", "Suggests tweaks to improve ROAS"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-lg text-slate-300">
                                        <div className="w-6 h-6 rounded-full bg-[#FF4801]/20 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-[#FF4801]" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Dashboard Mockup */}
                            <div className="bg-[#0F0A1F] border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden group hover:border-[#FF4801]/30 transition-colors">
                                <div className="space-y-4">
                                    {[
                                        { text: "Pause 27 queries burning $1.8k with 0 conversions", gain: "+$2.5k/mo" },
                                        { text: "Split Brand (ROAS 8.2) from Non-Brand", gain: "+$3.7k/mo" },
                                        { text: "Isolate 'project management software' ($3.4k ROAS)", gain: "+$5.8k/mo" },
                                        { text: "Raise cap on Brand US (Lost IS Budget 62%)", gain: "+$1.2k/mo" },
                                    ].map((action, i) => (
                                        <div key={i} className="flex items-center justify-between gap-4 p-3 rounded-lg bg-white/5 border border-white/5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-4 h-4 rounded-full border border-[#FF4801] flex items-center justify-center">
                                                    <div className="w-2 h-2 rounded-full bg-[#FF4801] opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </div>
                                                <span className="text-xs md:text-sm text-slate-300 truncate max-w-[180px] md:max-w-xs">{action.text}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-xs text-green-400 font-mono">{action.gain}</span>
                                                <button className="bg-[#FF4801] text-white text-[10px] px-3 py-1 rounded-full font-bold hover:bg-[#ff6a33]">
                                                    Apply
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Shine effect */}
                                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-40 h-40 bg-[#FF4801]/20 blur-[50px] pointer-events-none" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side - ChatGPT */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                                ChatGPT for
                            </h2>
                            <h3 className="text-3xl lg:text-4xl font-bold text-slate-500 mb-8">
                                paid ads
                            </h3>

                            <ul className="space-y-6 mb-12">
                                {["How can I improve ROAS?", "What are my best-performing assets?", "Which campaigns are wasting spend?"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-lg text-slate-400">
                                        <MessageSquare className="w-5 h-5 text-slate-600" />
                                        "{item}"
                                    </li>
                                ))}
                            </ul>

                            {/* Chat Mockup */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl relative min-h-[300px] hover:bg-white/[0.07] transition-colors">
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0" />
                                        <div className="bg-slate-800 rounded-2xl rounded-tl-none p-4 text-xs text-slate-300 leading-relaxed max-w-[80%]">
                                            Here is an analysis of your recent campaigns based on general benchmarks...
                                        </div>
                                    </div>

                                    <div className="flex gap-4 flex-row-reverse">
                                        <div className="w-8 h-8 rounded-full bg-[#FF4801] flex-shrink-0" />
                                        <div className="bg-[#FF4801] rounded-2xl rounded-tr-none p-4 text-xs text-white font-medium">
                                            What should we pause?
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0" />
                                        <div className="bg-slate-800 rounded-2xl rounded-tl-none p-4 text-xs text-slate-300 leading-relaxed max-w-[80%]">
                                            Based on the data uploaded, you might consider pausing ad sets with high CPA...
                                        </div>
                                    </div>

                                    <div className="bg-white/5 rounded-full p-3 flex items-center gap-3 text-xs text-slate-500">
                                        <div className="w-full">Ask AI Analyst...</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;
