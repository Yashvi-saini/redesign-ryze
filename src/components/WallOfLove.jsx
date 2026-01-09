import { motion } from 'framer-motion';
import { Twitter, Star, Linkedin, Trophy, TrendingUp } from 'lucide-react';

import wall3 from '../assets/images/wall-3.jpg';
import ashleyCover from '../assets/images/ashley_cover.png';
import motifCover from '../assets/images/motif_cover.png';

import face1 from '../assets/images/man_face1.png';
import face2 from '../assets/images/man-face2.png';
import face3 from '../assets/images/woman_face3.jpg';
import face4 from '../assets/images/face4_man.png';
import face5 from '../assets/images/face5_woman.png';

const TweetCard = ({ name, handle, content, date, platform = "twitter", avatar }) => (
    <div className="bg-[#0F0A1F] border border-white/10 p-6 rounded-2xl mb-6 hover:border-[#FF4801]/30 transition-colors">
        <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
                    {avatar ? (
                        <img src={avatar} alt={name} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-tr from-purple-500 to-orange-500" />
                    )}
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm">{name}</h4>
                    <p className="text-slate-500 text-xs">@{handle}</p>
                </div>
            </div>
            {platform === "twitter" ? (
                <Twitter className="w-5 h-5 text-slate-500" />
            ) : (
                <Linkedin className="w-5 h-5 text-slate-500" />
            )}
        </div>
        <p className="text-slate-300 text-sm leading-relaxed mb-3">{content}</p>
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 text-[#FF4801] fill-[#FF4801]" />)}
        </div>
    </div>
);

const ImageCard = ({ height = "h-64", overlayText, src }) => (
    <div className={`relative ${height} rounded-2xl overflow-hidden mb-6 group`}>
        <div className="absolute inset-0 bg-slate-800 animate-pulse" />
        {src && <img src={src} alt={overlayText || "Wall of love"} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
        <div className="absolute bottom-0 left-0 p-6 z-20">
            {overlayText && <p className="text-white font-bold">{overlayText}</p>}
        </div>
    </div>
);

const StatCard = () => (
    <div className="bg-white text-black p-6 rounded-2xl mb-6 flex flex-col justify-between">
        <div>
            <h3 className="text-4xl font-bold text-[#FF4801] mb-1">+63%</h3>
            <p className="font-medium">better ROAS after switching to AI agents</p>
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm font-bold text-slate-800">
            <TrendingUp className="w-4 h-4" />
            <span>Verified Result</span>
        </div>
    </div>
);

const QuoteCard = () => (
    <div className="bg-[#FF4801] p-8 rounded-2xl mb-6 flex items-center justify-center text-center relative overflow-hidden">
        <div className="relative z-10">
            <h3 className="text-white font-black text-xl italic uppercase leading-tight mb-4">
                "Ryze's AI-driven ads outperform human optimization by a huge margin."
            </h3>
            <p className="text-white/80 text-xs font-bold tracking-widest uppercase">Mathilde Riggs, CEO Motif Digital</p>
        </div>
    </div>
);

const WallOfLove = () => {
    return (
        <section className="py-24 relative bg-[#030014]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Wall of <span className="text-[#FF4801]">Love</span> <span className="text-3xl aligned-top">❤️</span>
                    </h2>
                    <p className="text-slate-400">Join the thousands of marketers scaling with Ryze.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Column 1 */}
                    <div className="flex flex-col">
                        <ImageCard height="h-80" src={wall3} overlayText="Scaling at the summit 🚀" />
                        <TweetCard
                            name="Roger Dunn"
                            handle="roger_growth"
                            avatar={face1}
                            content="We were drowning with 7 people. Got back so many hours each week from reporting. Finally have bandwidth to focus on actual strategy."
                        />
                        <TweetCard
                            name="Gabriela K."
                            handle="gabriela_agency"
                            avatar={face3}
                            content="Our agency does audits for potential clients 5x faster now. Used to take days, now it's like an hour. Way easier to win new business."
                            platform="twitter"
                        />
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col">
                        <QuoteCard />
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-[#1A1528] rounded-2xl p-4 border border-white/5">
                                <div className="text-[#FF4801] font-bold text-lg mb-1">Speedy</div>
                                <p className="text-xs text-slate-400">Got the whole team up and running in a day.</p>
                            </div>
                            <div className="bg-[#1A1528] rounded-2xl p-4 border border-white/5 flex flex-col justify-center items-center text-center">
                                <Trophy className="w-6 h-6 text-yellow-500 mb-2" />
                                <p className="text-xs text-slate-400">#1 Ad Tool on ProductHunt</p>
                            </div>
                        </div>
                        <TweetCard
                            name="Daniel Amezquita"
                            handle="daniel_adz"
                            avatar={face2}
                            content="Broke down performance by asset—thumbnails, headlines, everything. Suggested swaps based on real data. Our CTR basically doubled."
                            platform="linkedin"
                        />
                        <StatCard />
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col">
                        <ImageCard height="h-64" src={ashleyCover} overlayText="Partner Summit 2025" />
                        <div className="bg-[#0F0A1F] border border-white/10 p-6 rounded-2xl mb-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold">
                                        TP
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">Trustpilot</h4>
                                        <div className="flex text-green-500 text-xs">★★★★★</div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-slate-300 text-sm mb-2">Found wasted spend in search terms we'd never have caught manually. Cut those, reallocated budget. ROAS up 45%.</p>
                            <p className="text-slate-500 text-xs font-bold">- Daniel Roser</p>
                        </div>
                        <div className="bg-[#0F0A1F] border border-white/10 p-6 rounded-2xl mb-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold">
                                        CL
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">Clutch</h4>
                                        <div className="flex text-red-500 text-xs">4.9/5</div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-slate-300 text-sm mb-2">Caught that our conversion tracking was double-counting. We had no idea for like 3 months. Fixed it and everything made way more sense.</p>
                            <p className="text-slate-500 text-xs font-bold">- Elena M.</p>
                        </div>
                        <ImageCard height="h-48" src={motifCover} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WallOfLove;
