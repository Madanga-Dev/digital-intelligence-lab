import React from 'react';
import { Calendar, Clock, MapPin, CheckCircle } from 'lucide-react';

const Approach: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <div className="sticky top-24">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4 block">Our Approach</h2>
              <h3 className="text-4xl font-bold text-gray-900 mb-8">Mentorship-Driven Transformation</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Unlike short-term workshops, the Digital Intelligence Lab integrates structured learning with personalized accountability systems.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {['Structured learning', 'Personalized mentorship', 'Practical application', 'Accountability systems', 'Post-program tracking'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="text-blue-600 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-blue-600 rounded-[2.5rem] text-white">
                <h4 className="text-xl font-bold mb-6">Implementation Model</h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Calendar className="mt-1 text-blue-200" />
                    <div>
                      <p className="font-bold">Weekly Structure</p>
                      <p className="text-blue-100 text-sm">Tuesdays: 2h Training Sessions</p>
                      <p className="text-blue-100 text-sm">Thursdays: 1-on-1 Mentorship</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="mt-1 text-blue-200" />
                    <div>
                      <p className="font-bold">Duration</p>
                      <p className="text-blue-100 text-sm">8 Intensive Weeks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 text-blue-200" />
                    <div>
                      <p className="font-bold">Location</p>
                      <p className="text-blue-100 text-sm">Kenya (Hybrid or In-Person)</p>
                      <p className="text-blue-100 text-sm">Scalable across counties</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div className="group relative overflow-hidden rounded-[2.5rem]">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/cf241127-0065-45c9-8874-4fb56b23a066/mentorship-session-81306ca6-1771145552001.webp" 
                alt="Mentorship Session" 
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white font-bold text-2xl">Personalized Guidance</p>
                <p className="text-blue-100/80 text-sm">Weekly sessions to clarify career roadmaps and overcome technical hurdles.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-6">What You Leave With</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Technical Skills", val: "Market-ready digital competencies" },
                  { label: "Confidence", val: "The self-assurance to compete in tech" },
                  { label: "Career Direction", val: "A clear pathway to employment" },
                  { label: "Portfolio", val: "Proof of work with real projects" },
                  { label: "Presence", val: "Professional digital footprint" },
                  { label: "Network", val: "Connections to industry mentors" }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100">
                    <p className="text-blue-600 font-bold text-sm mb-1">{item.label}</p>
                    <p className="text-gray-600 text-xs leading-relaxed">{item.val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;