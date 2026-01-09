import googleAds from '../assets/images/Google_Ads.svg';
import meta from '../assets/images/meta-logo.png';
import chatgpt from '../assets/images/chatgpt-logo.png';
import speedy from '../assets/images/speedy-logo.svg';
import motif from '../assets/images/motif_digital.png';
import caleyx from '../assets/images/caleyx-logo.png';
import xLogo from '../assets/images/X-Logo1.png';
import amazon from '../assets/images/amazon-logo.png';
import hg from '../assets/images/hg_logo.png';
import mos from '../assets/images/mos_logo.png';
import pupil from '../assets/images/pupil_logo.png';
import ritma from '../assets/images/ritma_logo.png';
import tetra from '../assets/images/tetra_logo.png';
import willys from '../assets/images/willys_logo.png';
import directly from '../assets/images/directly_logo.png';

const LogoWall = () => {
    const logos = [
        { name: 'Google Ads', src: googleAds },
        { name: 'Meta', src: meta },
        { name: 'ChatGPT', src: chatgpt },
        { name: 'Speedy', src: speedy },
        { name: 'Motif', src: motif },
        { name: 'Caleyx', src: caleyx },
        { name: 'X', src: xLogo },
        { name: 'Amazon', src: amazon },
        { name: 'HG', src: hg },
        { name: 'MOS', src: mos },
        { name: 'Pupil', src: pupil },
        { name: 'Ritma', src: ritma },
        { name: 'Tetra', src: tetra },
        { name: 'Willys', src: willys },
        { name: 'Directly', src: directly },
    ];
    const repeatedLogos = [...logos, ...logos];

    return (
        <section className="py-12 border-y border-white/5 overflow-hidden bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 text-center">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">
                    Trusted by Innovative Agencies & Brands
                </p>
            </div>

            <div className="relative flex overflow-hidden group no-scrollbar">
                <div className="flex gap-16 items-center animate-infinite-scroll hover:pause">
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
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#030014] to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#030014] to-transparent z-10" />
            </div>
        </section>
    );
};

export default LogoWall;
