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
                <ComparisonSection />
                <Features />
                <WallOfLove />

                {/* CTA Section */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#FF4801]/10 blur-[100px] pointer-events-none" />
                    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                            Ready to automate your <br />
                            <span className="text-[#FF4801]">ad success?</span>
                        </h2>
                        <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto">
                            Join thousands of marketers who are saving time and boosting ROAS with Ryze's autonomous agents.
                        </p>
                        <button className="px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-slate-200 transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                            Start Free Trial
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
