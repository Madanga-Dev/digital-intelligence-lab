import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Zap, UserPlus, Heart } from 'lucide-react';

const Segments: React.FC = () => {
  const targets = [
    {
      title: "Digital Beginners",
      desc: "Youth with limited structured digital exposure seeking a solid foundation.",
      icon: <Zap className="text-blue-500" />
    },
    {
      title: "Transitioning Graduates",
      desc: "Unemployed or underemployed graduates seeking market-relevant skills.",
      icon: <GraduationCap className="text-blue-500" />
    },
    {
      title: "Young Entrepreneurs",
      desc: "Informal or early-stage business owners needing digital systems.",
      icon: <Briefcase className="text-blue-500" />
    },
    {
      title: "Career Switchers",
      desc: "Young professionals transitioning into tech-enabled sectors.",
      icon: <UserPlus className="text-blue-500" />
    }
  ];

  return (
    <section id="who-we-serve" className="py-24 bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="md:w-1/2">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Target Groups</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Who We Serve</h3>
            <p className="text-blue-100/80 text-lg leading-relaxed">
              We focus on four key youth segments in Kenya, ensuring no one is left behind in the digital transformation of our economy.
            </p>
          </div>
          <div className="md:w-1/2 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl flex items-center gap-6">
            <div className="p-4 bg-pink-500 rounded-2xl">
              <Heart className="text-white" size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-pink-300">Gender Inclusion Commitment</h4>
              <p className="text-blue-100/70">Each cohort maintains a <span className="text-white font-bold">minimum of 50% female participation</span>, strengthening women's access to digital opportunity.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {targets.map((target, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                {target.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{target.title}</h4>
              <p className="text-blue-200/60 leading-relaxed text-sm">{target.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Segments;