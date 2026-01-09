import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LogoWall from '../components/LogoWall';
import Features from '../components/Features';
import WallOfLove from '../components/WallOfLove';
import ComparisonSection from '../components/ComparisonSection';

const LandingPage = () => {
    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <LogoWall />
                <Features />
                <WallOfLove />
                <ComparisonSection />

                {/* Orange CTA Section */}
                <section className="py-24 relative bg-[#FF4801] overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] border-[50px] border-white rounded-full translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] border-[30px] border-white rounded-full -translate-x-1/2 translate-y-1/2" />
                    </div>

                    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                            Audit your <span className="text-black">ad account</span> instantly.
                        </h2>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
                            <input
                                type="email"
                                placeholder="work@email.com"
                                className="w-full px-8 py-5 rounded-full bg-white text-black font-medium placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-black/20 text-lg shadow-2xl"
                            />
                            <button className="w-full sm:w-auto px-10 py-5 bg-black text-white text-lg font-bold rounded-full hover:bg-slate-900 transition-all hover:scale-105 shadow-xl">
                                Audit Account
                            </button>
                        </div>

                        <div className="mt-12 flex items-center justify-center gap-8 opacity-80 mix-blend-overlay">
                            {/* Decorative platforms */}
                            <div className="w-16 h-2 bg-white rounded-full" />
                            <div className="w-8 h-2 bg-white rounded-full" />
                            <div className="w-24 h-2 bg-white rounded-full" />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
