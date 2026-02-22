import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageSquare, 
  Rocket, 
  Compass, 
  BarChart3,
  Cpu,
  Monitor,
  Target,
  Layout,
  Briefcase
} from 'lucide-react';

const Features: React.FC = () => {
  const programPillars = [
    {
      icon: <Monitor className="text-blue-600" size={32} />,
      title: 'Instructor-Led Training',
      desc: 'Weekly structured sessions focused on practical, job-relevant competencies.',
    },
    {
      icon: <Users className="text-blue-600" size={32} />,
      title: 'One-on-One Mentorship',
      desc: 'Weekly personalized mentorship to clarify goals and overcome barriers.',
    },
    {
      icon: <Rocket className="text-blue-600" size={32} />,
      title: 'Project-Based Learning',
      desc: 'Apply skills through real assignments and a final capstone project.',
    },
    {
      icon: <Compass className="text-blue-600" size={32} />,
      title: 'Career Pathway Mapping',
      desc: 'Develop a personalized digital career roadmap for long-term growth.',
    },
    {
      icon: <BarChart3 className="text-blue-600" size={32} />,
      title: 'Measurable Assessments',
      desc: 'Baseline and endline evaluations track real skill growth and readiness.',
    },
  ];

  const curriculum = [
    {
      title: 'Digital Foundation & Productivity',
      items: ['Google Workspace tools', 'Professional communication', 'Digital organization', 'Online work readiness'],
      icon: <Layout className="text-white" />,
      color: 'bg-blue-600'
    },
    {
      title: 'Data Literacy & Analysis',
      items: ['Understanding data basics', 'Excel for data analysis', 'Interpreting data insights', 'Building dashboards'],
      icon: <BarChart3 className="text-white" />,
      color: 'bg-indigo-600'
    },
    {
      title: 'Digital Marketing & Visibility',
      items: ['Personal branding', 'LinkedIn optimization', 'Portfolio development', 'Social media growth'],
      icon: <Users className="text-white" />,
      color: 'bg-purple-600'
    },
    {
      title: 'AI & Automation',
      items: ['Intro to AI models', 'Responsible AI use', 'Writing & research tools', 'Workflow automation'],
      icon: <Cpu className="text-white" />,
      color: 'bg-pink-600'
    },
    {
      title: 'Career & Income Strategy',
      items: ['Digital career pathways', 'Remote work readiness', 'Freelancing foundations', 'Business digitization'],
      icon: <Briefcase className="text-white" />,
      color: 'bg-orange-600'
    },
  ];

  return (
    <section id="program" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Our Core Program</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">An 8-Week Digital Career Accelerator</h3>
          <p className="text-gray-600 text-lg">
            BeyondData Digital Intelligence Lab transforms digital exposure into economic readiness through a structured, multi-dimensional approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-24">
          {programPillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-6">{pillar.icon}</div>
              <h4 className="font-bold text-gray-900 mb-3">{pillar.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        <div id="curriculum">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Curriculum Pillars</h2>
            <p className="text-gray-600 text-lg">Comprehensive training modules designed to meet the demands of the modern digital economy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {curriculum.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
              >
                <div className={`${item.color} p-6 flex justify-between items-start`}>
                  <div className="p-2 bg-white/20 rounded-lg">{item.icon}</div>
                  <span className="text-white/40 font-black text-2xl">0{index + 1}</span>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-900 mb-4 h-12 flex items-center">{item.title}</h4>
                  <ul className="space-y-3">
                    {item.items.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;