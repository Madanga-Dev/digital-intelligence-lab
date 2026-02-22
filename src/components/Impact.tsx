import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Users, Target, BookOpen } from 'lucide-react';

const Impact: React.FC = () => {
  const outputs = [
    "60 youth trained per cohort",
    "30+ women actively participating",
    "60 digital portfolios created",
    "60 career roadmaps developed",
    "60 capstone projects completed"
  ];

  const outcomes = [
    { label: "Digital Literacy Improvement", value: "70%" },
    { label: "Data Competency Growth", value: "60%" },
    { label: "Increased AI Awareness", value: "75%" },
    { label: "Clear Career Path Defined", value: "80%" },
    { label: "Transition to Employment", value: "50%" }
  ];

  return (
    <section id="impact" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Impact Model</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">Measurable Results Per Cohort</h2>
            <p className="text-gray-600 text-lg mb-10">
              Impact is not assumed — it is measured. We track every participant's journey from baseline to success using a structured monitoring framework.
            </p>

            <div className="space-y-4 mb-10">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Key Outputs</h3>
              {outputs.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2">How We Measure Success</h3>
              <p className="text-blue-700/80 mb-6 text-sm">We apply a structured monitoring framework across multiple touchpoints.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-blue-900 font-bold">Week 1</span>
                  <span className="text-blue-700 text-sm">Baseline Assessment</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-blue-900 font-bold">Week 8</span>
                  <span className="text-blue-700 text-sm">Endline Assessment</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-blue-900 font-bold">Continuous</span>
                  <span className="text-blue-700 text-sm">Practical Evaluations</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-blue-900 font-bold">6 Months</span>
                  <span className="text-blue-700 text-sm">Follow-up Tracking</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <TrendingUp className="text-blue-600" /> Expected Outcomes
              </h3>
              
              <div className="space-y-8">
                {outcomes.map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-semibold">{stat.label}</span>
                      <span className="text-blue-600 font-bold">{stat.value}</span>
                    </div>
                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: stat.value }}
                        transition={{ duration: 1.5, delay: i * 0.1 }}
                        className="h-full bg-blue-600 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-12 border-t border-gray-100 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">30%</div>
                  <p className="text-sm text-gray-500">Initiate income-generating digital activities</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">Min 50%</div>
                  <p className="text-sm text-gray-500">Female participation commitment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;