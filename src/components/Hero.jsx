import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, Activity, Layout, Settings, Sun, Bell, ChevronDown } from 'lucide-react';

const DashboardPreview = () => {
    return (
        <div className="rounded-xl overflow-hidden bg-[#0F0A1F] border border-white/10 shadow-2xl relative select-none">
            {/* Top Bar */}
            <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#131126]">
                <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                    </div>
                </div>
                <div className="flex items-center gap-4 text-slate-400">
                    <div className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Live Updates
                    </div>
                </div>
            </div>

            <div className="flex h-[500px]">
                {/* Sidebar */}
                <div className="w-16 border-r border-white/5 flex flex-col items-center py-6 gap-6 bg-[#131126]">
                    <div className="p-2 rounded-lg bg-[#FF4801]/10 text-[#FF4801]">
                        <Layout size={20} />
                    </div>
                    <div className="p-2 rounded-lg text-slate-600 hover:text-slate-400 transition-colors">
                        <BarChart3 size={20} />
                    </div>
                    <div className="p-2 rounded-lg text-slate-600 hover:text-slate-400 transition-colors">
                        <Users size={20} />
                    </div>
                    <div className="p-2 rounded-lg text-slate-600 hover:text-slate-400 transition-colors">
                        <Settings size={20} />
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-8 bg-gradient-to-br from-[#0F0A1F] to-[#030014]">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h3 className="text-white font-semibold text-xl mb-1">Advertising Performance</h3>
                            <p className="text-slate-500 text-sm">Real-time cross-platform analytics</p>
                        </div>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 bg-white/5 rounded-lg text-xs text-slate-400 border border-white/5">Last 30 Days</span>
                            <span className="px-3 py-1 bg-[#FF4801] rounded-lg text-xs text-white font-medium shadow-[0_0_10px_#FF4801]">Export Report</span>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Total Spend', val: '$12,450', change: '+12%', icon: <Activity className="text-[#FF4801]" /> },
                            { label: 'ROAS', val: '4.2x', change: '+8.4%', icon: <TrendingUp className="text-green-500" /> },
                            { label: 'Conversions', val: '1,234', change: '+24%', icon: <Users className="text-blue-500" /> },
                            { label: 'CTR', val: '2.8%', change: '+1.1%', icon: <BarChart3 className="text-purple-500" /> },
                        ].map((stat, i) => (
                            <div key={i} className="bg-[#1A1A1A]/50 border border-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-slate-500 text-xs font-medium">{stat.label}</span>
                                    {stat.icon}
                                </div>
                                <div className="text-xl font-bold text-white mb-1">{stat.stat?.val || stat.val}</div>
                                <div className="text-xs text-green-400 font-medium bg-green-400/10 inline-block px-2 py-0.5 rounded-full">{stat.change}</div>
                            </div>
                        ))}
                    </div>

                    {/* Chart Area */}
                    <div className="h-48 bg-white/5 rounded-xl border border-white/5 p-6 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#FF4801]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Simulated Graph Lines */}
                        <div className="flex items-end justify-between h-full w-full gap-2 px-2">
                            {[40, 65, 45, 80, 55, 70, 40, 60, 75, 50, 85, 95, 70, 60, 75, 65, 85, 90, 70, 95].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 1, delay: i * 0.05 }}
                                    className="w-full bg-gradient-to-t from-[#FF4801] to-[#FF8001] rounded-t-sm opacity-60 hover:opacity-100 transition-all cursor-pointer relative group/bar"
                                >
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity">
                                        {h}%
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Elements */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute top-24 right-8 w-64 bg-[#1A1A1A] border border-white/10 rounded-xl p-4 shadow-2xl"
            >
                <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium text-slate-400">Creative Analysis</span>
                    <span className="text-xs font-bold text-green-400">Excellent</span>
                </div>
                <div className="space-y-3">
                    <div className="space-y-1">
                        <div className="flex justify-between text-[10px] text-slate-500">
                            <span>Visual Impact</span>
                            <span>92%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 w-[92%]" />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <div className="flex justify-between text-[10px] text-slate-500">
                            <span>Copy Relevance</span>
                            <span>88%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[88%]" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Hero = () => {
    return (
        <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden selection:bg-[#FF4801] selection:text-white">
            {/* Aurora Background Overlay */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-[10%] w-[400px] h-[400px] bg-[#FF4801] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob" />
                <div className="absolute top-[20%] right-[30%] w-[300px] h-[300px] bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-2000" />
                <div className="absolute bottom-[20%] left-[20%] w-[400px] h-[400px] bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-4000" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >

                    <h1 className="text-5xl lg:text-8xl font-bold tracking-tight text-white mb-8 max-w-5xl mx-auto leading-[1]">
                        Let AI Manage <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4801] via-[#FF8001] to-[#FF4801] bg-[length:200%_auto] animate-gradient-x drop-shadow-[0_0_15px_rgba(255,72,1,0.3)]">
                            Your Ads
                        </span>
                    </h1>

                    <p className="text-lg lg:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Ryze optimizes your campaigns across ChatGPT, Google, and Meta 24/7.
                        <span className="text-slate-300"> Stop wasting budget</span> and start scaling with autonomous AI agents.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <div className="relative w-full sm:w-auto group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF4801] to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                            <input
                                type="email"
                                placeholder="Enter your work email"
                                className="relative w-full sm:w-80 px-6 py-4 bg-[#030014] border border-white/10 rounded-full text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FF4801]/50 transition-all"
                            />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#FF4801] to-[#FF6B01] text-white font-bold rounded-full hover:shadow-[0_0_30px_#FF4801] transition-all duration-300"
                        >
                            Book a Demo
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Dashboard Preview  */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="mt-20 max-w-6xl mx-auto px-4"
            >
                <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-[#FF4801]/10 -z-10 transform scale-105" />
                    <DashboardPreview />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
