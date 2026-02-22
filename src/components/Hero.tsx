import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/cf241127-0065-45c9-8874-4fb56b23a066/hero-background-10757977-1771145550984.webp"
          alt="Digital Lab Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/75 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-100 text-sm font-semibold mb-6">
              A Program by BeyondData ICT
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Bridging the Digital Divide for Youth <span className="text-blue-400">Employability</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 mb-8 leading-relaxed max-w-2xl">
              BeyondData Digital Intelligence Lab is an 8-week mentorship-driven digital accelerator equipping young people (18–35 years) with practical digital, data, and AI skills to thrive in the modern economy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-blue-500/20 flex items-center gap-2 group">
              Apply Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-8 py-4 rounded-xl font-bold transition-all">
              Partner With Us
            </button>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/10 rounded-lg">
                <Users className="text-blue-400" size={24} />
              </div>
              <div>
                <p className="text-white font-bold text-xl leading-none">60 Youth</p>
                <p className="text-blue-200/70 text-sm">Min 50% Women</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/10 rounded-lg">
                <Calendar className="text-blue-400" size={24} />
              </div>
              <div>
                <p className="text-white font-bold text-xl leading-none">8 Weeks</p>
                <p className="text-blue-200/70 text-sm">Intensive Training</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/10 rounded-lg">
                <MapPin className="text-blue-400" size={24} />
              </div>
              <div>
                <p className="text-white font-bold text-xl leading-none">Kenya</p>
                <p className="text-blue-200/70 text-sm">Hybrid/In-Person</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;