import { motion } from 'framer-motion';

const LogoWall = () => {
    const logos = [
        { name: 'Google Ads', src: '/src/assets/images/Google_Ads.svg' },
        { name: 'Meta', src: '/src/assets/images/meta-logo.png' },
        { name: 'ChatGPT', src: '/src/assets/images/chatgpt-logo.png' },
        { name: 'Speedy', src: '/src/assets/images/speedy-logo.svg' },
        { name: 'Motif', src: '/src/assets/images/motif_digital.png' },
        { name: 'Caleyx', src: '/src/assets/images/caleyx-logo.png' },
        { name: 'X', src: '/src/assets/images/X-Logo1.png' },
        { name: 'Amazon', src: '/src/assets/images/amazon-logo.png' },
        { name: 'HG', src: '/src/assets/images/hg_logo.png' },
        { name: 'MOS', src: '/src/assets/images/mos_logo.png' },
        { name: 'Pupil', src: '/src/assets/images/pupil_logo.png' },
        { name: 'Ritma', src: '/src/assets/images/ritma_logo.png' },
        { name: 'Tetra', src: '/src/assets/images/tetra_logo.png' },
        { name: 'Willys', src: '/src/assets/images/willys_logo.png' },
        { name: 'Directly', src: '/src/assets/images/directly_logo.png' },
    ];
    const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <section className="py-12 border-y border-white/5 overflow-hidden bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 text-center">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">
                    Trusted by Innovative Agencies & Brands
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group no-scrollbar">
                <motion.div
                    className="flex gap-16 items-center whitespace-nowrap"
                    animate={{ x: [0, -2000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 50,
                            ease: "linear",
                        }
                    }}
                >
                    {repeatedLogos.map((logo, index) => (
                        <div key={index} className="flex-shrink-0 w-32 flex justify-center opacity-50 hover:opacity-100 transition-all duration-300">
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="h-8 lg:h-10 w-auto object-contain brightness-0 invert hover:brightness-100 hover:invert-0 transition-all"
                                onError={(e) => e.target.style.display = 'none'}
                            />
                        </div>
                    ))}
                </motion.div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#030014] to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#030014] to-transparent z-10" />
            </div>
        </section>
    );
};

export default LogoWall;
