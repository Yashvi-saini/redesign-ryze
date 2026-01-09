import { motion } from 'framer-motion';
import creativeVideo from '../assets/images/creative_generation.mp4';
import creativeImage from '../assets/images/creative_analysis.webp';

const FeatureCard = ({ title, children, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group ${className}`}
    >
        <div className="bg-[#1A1A1A] py-3 px-6 text-center">
            <h3 className="text-white font-bold text-lg">{title}</h3>
        </div>
        <div className="p-0 h-full relative bg-white text-slate-900">
            {children}
        </div>
    </motion.div>
);

const KeywordOptimization = () => {
    const keywords = [
        { term: "bmw x5 lease special", count: 12, cost: "$43", type: "KEYWORD", color: "bg-green-100 text-green-700" },
        { term: "cheap bmw parts", count: 0, cost: "$150", type: "NEGATIVE", color: "bg-red-100 text-red-700" },
        { term: "2025 bmw i4 price", count: 8, cost: "$35", type: "KEYWORD", color: "bg-green-100 text-green-700" },
        { term: "audi q7 vs bmw x5", count: 1, cost: "$85", type: "NEGATIVE", color: "bg-red-100 text-red-700" },
        { term: "bmw service near me", count: 15, cost: "$28", type: "KEYWORD", color: "bg-green-100 text-green-700" },
        { term: "free bmw wallpapers", count: 0, cost: "$0", type: "NEGATIVE", color: "bg-red-100 text-red-700" },
        { term: "bmw m3 test drive", count: 5, cost: "$55", type: "KEYWORD", color: "bg-green-100 text-green-700" },
        { term: "how to fix bmw engine", count: 0, cost: "$0", type: "NEGATIVE", color: "bg-red-100 text-red-700" },
    ];

    return (
        <div className="p-6 text-sm">
            <div className="flex justify-between text-xs text-slate-400 mb-4 px-2">
                <span>Search Term</span>
                <div className="flex gap-4">
                    <span>Conv</span>
                    <span>CPA</span>
                    <span>Action</span>
                </div>
            </div>
            <div className="space-y-3">
                {keywords.map((k, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0 hover:bg-slate-50 px-2 rounded-lg transition-colors">
                        <span className="font-medium text-slate-700 truncate max-w-[120px]">{k.term}</span>
                        <div className="flex items-center gap-4">
                            <span className="text-slate-500 w-4 text-center">{k.count}</span>
                            <span className="text-slate-500 w-8 text-right">{k.cost}</span>
                            <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${k.color}`}>{k.type}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const CreativeGeneration = () => {
    return (
        <div className="h-full w-full relative group">
            {/* Simple phone frame mock */}
            <div className="absolute inset-0 bg-slate-900">
                <video
                    src={creativeVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
            </div>
            <div className="absolute bottom-8 left-0 right-0 text-center z-10">
                <div className="inline-block bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                    <span className="text-white font-mono text-xs">GenAI Video Creation</span>
                </div>
            </div>
        </div>
    );
};

const CreativeAnalysis = () => {
    return (
        <div className="h-[500px] relative overflow-hidden">
            <img src={creativeImage} alt="Creative Analysis" className="w-full h-full object-cover" />

            {/* Floating analysis cards */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 left-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/50 max-w-[160px]"
            >
                <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-900 text-sm">Visual</span>
                    <span className="font-bold text-green-600 text-sm">88%</span>
                </div>
                <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[88%]" />
                </div>
                <p className="text-[10px] text-slate-500 mt-2 leading-tight">Eye-catching and on-brand. Text contrast could be better.</p>
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-32 right-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/50 max-w-[160px]"
            >
                <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-900 text-sm">CTA</span>
                    <span className="font-bold text-red-500 text-sm">46%</span>
                </div>
                <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 w-[46%]" />
                </div>
                <p className="text-[10px] text-slate-500 mt-2 leading-tight">Too generic—offers no benefit or reason to click.</p>
            </motion.div>

            <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-12 right-12 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/50 max-w-[160px]"
            >
                <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-900 text-sm">Copy</span>
                    <span className="font-bold text-orange-500 text-sm">67%</span>
                </div>
                <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 w-[67%]" />
                </div>
                <p className="text-[10px] text-slate-500 mt-2 leading-tight">Lacks benefit-first phrasing. Generic.</p>
            </motion.div>
        </div>
    );
};

const AccountAudits = () => {
    const audits = [
        { label: "Schedule", score: "63%", color: "text-red-500", desc: "Ads run 24/7 despite zero leads generated overnight." },
        { label: "Placement", score: "55%", color: "text-red-500", desc: "Display ads are appearing on low-quality mobile game apps." },
        { label: "Creatives", score: "89%", color: "text-green-500", desc: "Video assets are optimized for vertical mobile screens." },
        { label: "Attribution", score: "91%", color: "text-green-500", desc: "Data-driven model correctly values upper-funnel clicks." },
        { label: "Negatives", score: "68%", color: "text-orange-500", desc: "Broad match modifiers are capturing irrelevant queries." },
    ];

    return (
        <div className="p-4 flex flex-col justify-center h-full">
            <div className="space-y-4">
                {audits.map((item, i) => (
                    <div key={i} className="group cursor-default">
                        <div className="flex items-baseline justify-between mb-0.5">
                            <h4 className="font-bold text-slate-900 text-xs">{item.label}</h4>
                            <span className={`font-black text-sm ${item.color}`}>{item.score}</span>
                        </div>
                        <p className="text-[10px] text-slate-500 leading-tight group-hover:text-slate-700 transition-colors line-clamp-2">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const BudgetReallocation = () => {
    const platforms = [
        { name: "LinkedIn", logo: "https://www.get-ryze.ai/_next/image?url=%2Fimages%2Fplatforms%2Flinkedin.png&w=48&q=75", spend: "$502", progress: "w-[30%]" },
        { name: "ChatGPT", logo: "https://firebasestorage.googleapis.com/v0/b/dotted-music-473906-n7.firebasestorage.app/o/chatgpt-logo.png?alt=media", spend: "$879", progress: "w-[60%]" },
        { name: "Meta", logo: "https://firebasestorage.googleapis.com/v0/b/dotted-music-473906-n7.firebasestorage.app/o/meta-logo.png?alt=media", spend: "$1,883", progress: "w-[80%] bg-green-500" },
        { name: "Google", logo: "https://firebasestorage.googleapis.com/v0/b/dotted-music-473906-n7.firebasestorage.app/o/Google_Ads.svg?alt=media", spend: "$2,176", progress: "w-[40%]" },
        { name: "Reddit", logo: "https://firebasestorage.googleapis.com/v0/b/dotted-music-473906-n7.firebasestorage.app/o/reddit-logo.png?alt=media", spend: "$335", progress: "w-[70%]" },
        { name: "Perplexity", logo: "https://firebasestorage.googleapis.com/v0/b/dotted-music-473906-n7.firebasestorage.app/o/perplexity-color.png?alt=media", spend: "$2,008", progress: "w-[90%] bg-green-500" },
        { name: "Amazon", logo: "https://firebasestorage.googleapis.com/v0/b/dotted-music-473906-n7.firebasestorage.app/o/amazon-logo.png?alt=media", spend: "$1,757", progress: "w-[50%]" },
        { name: "X", logo: "https://firebasestorage.googleapis.com/v0/b/dotted-music-473906-n7.firebasestorage.app/o/X-Logo.png?alt=media", spend: "$460", progress: "w-[25%]" },
    ];

    return (
        <div className="p-4 h-full">
            <div className="space-y-3">
                {platforms.map((p, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                            <img src={p.logo} alt={p.name} className="w-5 h-5 object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                        </div>
                        <div className="flex-grow h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full ${p.progress.includes('bg-') ? '' : 'bg-slate-300'} ${p.progress}`} />
                        </div>
                        <div className="font-mono text-[10px] font-bold text-slate-700 w-10 text-right">{p.spend}</div>
                    </div>
                ))}
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-2 text-slate-400 text-[10px] uppercase tracking-widest font-bold">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-pulse" />
                Reallocating Budget...
            </div>
        </div>
    );
};

const Features = () => {
    return (
        <section className="py-24 bg-[#030014] relative overflow-hidden">
            {/* Divider */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Everything you need to <span className="text-[#FF4801]">scale</span>
                    </motion.h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Ryze replaces hours of manual ad management with intelligent automated actions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    <FeatureCard title="Keyword optimization">
                        <KeywordOptimization />
                    </FeatureCard>

                    <FeatureCard title="Creative generation">
                        <CreativeGeneration />
                    </FeatureCard>

                    <FeatureCard title="Creative analysis">
                        <CreativeAnalysis />
                    </FeatureCard>

                    <FeatureCard title="Account audits">
                        <AccountAudits />
                    </FeatureCard>

                    <FeatureCard title="Budget reallocation">
                        <BudgetReallocation />
                    </FeatureCard>
                </div>
            </div>
        </section>
    );
};

export default Features;
