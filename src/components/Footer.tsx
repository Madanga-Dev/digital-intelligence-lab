import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="partners" className="bg-gray-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-blue-600 rounded-[3rem] p-8 md:p-16 mb-24 relative overflow-hidden group">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Partner With Us</h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              By supporting the Digital Intelligence Lab, you contribute to youth employability, gender inclusion in tech, and responsible AI readiness in Kenya.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl">
                Become a Mentor
              </button>
              <button className="bg-blue-700 hover:bg-blue-800 text-white border border-blue-500/30 px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl">
                Request Brochure
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none">BeyondData</span>
                <span className="text-[10px] tracking-widest uppercase font-medium text-blue-400">Intelligence Lab</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Empowering the next generation of digital leaders in Kenya through structured skills, mentorship, and direction.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-blue-600 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-blue-600 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-blue-600 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['About Lab', 'Our Curriculum', 'Impact Model', 'Apply for Cohort', 'Alumni Network'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-400 text-sm">BeyondData ICT Headquarters<br />Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-500 flex-shrink-0" size={20} />
                <span className="text-gray-400 text-sm">info@beyonddata.ict</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-500 flex-shrink-0" size={20} />
                <span className="text-gray-400 text-sm">+254 (0) 700 000 000</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Stay updated on new cohorts and digital insights.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter email address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest font-medium">
          <p>© 2024 BeyondData ICT. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;