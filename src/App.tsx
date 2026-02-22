import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Impact from './components/Impact';
import Segments from './components/Segments';
import Approach from './components/Approach';
import Footer from './components/Footer';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 font-sans text-gray-900">
      <Toaster position="top-center" richColors />
      <Header />
      <main>
        <Hero />
        
        {/* Why the Lab Exists / Problem Section */}
        <section id="about" className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-square rounded-[3rem] overflow-hidden">
                  <img 
                    src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/cf241127-0065-45c9-8874-4fb56b23a066/training-session-4143a8ac-1771145550752.webp" 
                    alt="Digital Training Session" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-10 rounded-[2.5rem] shadow-2xl max-w-xs hidden md:block">
                  <p className="text-3xl font-bold mb-2">Gap Filled.</p>
                  <p className="text-blue-100/80">Moving youth from consumers to digital producers.</p>
                </div>
              </div>
              
              <div>
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">The Mission</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">From Digital Consumers to Digital Producers</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Kenya has high smartphone penetration and growing internet access. Yet many young people remain digitally underprepared for employment and entrepreneurship.
                </p>
                
                <div className="space-y-6">
                  {[
                    "Lack of productivity & professional tools mastery",
                    "No professional online presence or portfolio",
                    "Limited exposure to AI and automation",
                    "Struggle to translate education into employable skills"
                  ].map((point, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs font-bold">{i + 1}</span>
                      </div>
                      <p className="text-gray-700 font-medium">{point}</p>
                    </div>
                  ))}
                </div>
                
                <p className="mt-10 text-gray-900 font-bold text-xl italic border-l-4 border-blue-600 pl-6">
                  "BeyondData Digital Intelligence Lab transforms digital exposure into economic readiness."
                </p>
              </div>
            </div>
          </div>
        </section>

        <Features />
        <Impact />
        <Segments />
        <Approach />

        {/* Sustainability & About */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">Sustainability & Scalability</h3>
                  <ul className="space-y-4">
                    {[
                      "Blended funding (Donor + CSR + Paid Cohorts)",
                      "Corporate internship partnerships",
                      "Alumni engagement ecosystem",
                      "Pipeline into advanced BeyondData programs"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">About BeyondData ICT</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    We deliver structured digital, data, and AI skills programs focusing on literacy, analysis, and career acceleration. We combine technical expertise with mentorship-driven transformation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Data Analysis', 'AI Literacy', 'Professional Productivity'].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase rounded-full tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;