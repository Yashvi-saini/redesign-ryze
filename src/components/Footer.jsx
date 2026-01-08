import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="border-t border-white/5 bg-[#030014] text-slate-300 py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                            RYZE <div className="w-2 h-2 rounded-full bg-[#FF4801] shadow-[0_0_10px_#FF4801]" />
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400">
                            The AI copilot that helps performance marketers scale efficiently across all major ad platforms.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6">Product</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="#" className="hover:text-white transition">Features</Link></li>
                            <li><Link to="#" className="hover:text-white transition">Integrations</Link></li>
                            <li><Link to="#" className="hover:text-white transition">Pricing</Link></li>
                            <li><Link to="#" className="hover:text-white transition">Case Studies</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6">Company</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="#" className="hover:text-white transition">About Us</Link></li>
                            <li><Link to="#" className="hover:text-white transition">Careers</Link></li>
                            <li><Link to="#" className="hover:text-white transition">Blog</Link></li>
                            <li><Link to="#" className="hover:text-white transition">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6">Stay Updated</h4>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#FF4801] w-full"
                            />
                            <button className="bg-[#FF4801] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#e04001] transition shadow-lg shadow-orange-900/20">
                                &rarr;
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} Ryze AI. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="#" className="hover:text-slate-300">Privacy Policy</Link>
                        <Link to="#" className="hover:text-slate-300">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
