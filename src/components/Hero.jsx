import { motion } from 'framer-motion';

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
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-orange-300 text-xs font-medium tracking-wide mb-8 backdrop-blur-sm"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF4801] animate-pulse" />
                        Ryze is live! Book a demo to see it in action.
                    </motion.div>

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
                initial={{ opacity: 0, y: 100, rotateX: 20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                style={{ perspective: '1000px' }}
                className="mt-20 max-w-6xl mx-auto px-4"
            >
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative rounded-2xl p-2 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm border border-white/5 shadow-2xl shadow-orange-900/20"
                >
                    <div className="absolute inset-0 rounded-2xl bg-[#FF4801]/5 blur-3xl -z-10" />

                    <div className="rounded-xl overflow-hidden bg-[#0F0A1F] border border-white/10 aspect-[16/9] relative group">
                        <img
                            src="/src/assets/images/opengraph-image.png"
                            alt="Ryze Dashboard"
                            className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                            onError={(e) => e.target.style.display = 'none'}
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#030014]/80 via-transparent to-transparent opacity-60" />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
