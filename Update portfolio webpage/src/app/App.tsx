import { useState, useEffect } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import emailjs from '@emailjs/browser';
import rentVerifyThumbnail from 'figma:asset/a5f99000439d057fa9eb3fb1acd517994121ecf1.png';
import monthEndThumbnail from 'figma:asset/31137e81e88079f4849420b44c71c20af6b57cbe.png';
import unitConverterThumbnail from 'figma:asset/351dadb03868f677838989d82a628876c92a12df.png';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark-mode');
    const theme = !isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setFormStatus('config_error');
      return;
    }

    setIsSubmitting(true);
    setFormStatus('');

    emailjs.send(serviceId, templateId, formData, publicKey)
      .then((result) => {
        console.log(result.text);
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, (error) => {
        console.log(error.text);
        setFormStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const projects = [
    {
      title: "Rent Verify Bot",
      tag: "AI & AUTOMATION",
      description: "An automated communication tool built to verify rental history and streamline landlord-tenant verification using SMS integration.",
      image: rentVerifyThumbnail,
      tools: "Python, Flask, Twilio",
      feature: "Automated SMS Verification",
      link: "https://rentverify-app-fbbbazaagbd8e0hn.canadacentral-01.azurewebsites.net"
    },
    {
      title: "Month-End Automator",
      tag: "FINANCIAL TECHNOLOGY",
      description: "A specialized tool designed to automate repetitive month-end closing tasks, ensuring GAAP compliance and reducing manual entry errors.",
      image: monthEndThumbnail,
      tools: "Python, AI Agents",
      feature: "GAAP Compliance & Accuracy",
      link: "https://month-end-automator-a7gpcmeucqacgzch.canadacentral-01.azurewebsites.net"
    },
    {
      title: "Technical Unit Converter",
      tag: "SOFTWARE DEVELOPMENT",
      description: "A precision-focused utility built during my Pursuit Fellowship to handle complex unit conversions for technical and financial data sets.",
      image: unitConverterThumbnail,
      tools: "JavaScript, HTML5, CSS3",
      feature: "GitHub Pages",
      link: "https://aminahamdani.github.io/Converter/"
    }
  ];

  const skills = [
    { title: "Advanced Excel", desc: "Financial Modeling & Data Analysis" },
    { title: "AI Agents", desc: "Automation & Intelligent Integration" },
    { title: "Financial Analytics", desc: "SQL, Python & Data Visualization" },
    { title: "GAAP Compliance", desc: "Financial Reporting & Regulatory Standards" },
    { title: "Backend Development", desc: "Flask, SQLite & API Integration" },
    { title: "Strategic Cost Control", desc: "Budgeting & Operational Efficiency" }
  ];

  const achievements = [
    {
      icon: "🎓",
      title: "MS in Accounting",
      org: "Brooklyn College, CUNY",
      date: "Expected Spring 2026"
    },
    {
      icon: "💻",
      title: "AI & Software Development",
      org: "Pursuit.org - Builder Track",
      date: "Dec 2025 - Present"
    },
    {
      icon: "📚",
      title: "MBA in Finance",
      org: "University of Sargodha, Pakistan",
      date: "Evaluated as US Bachelor's Equivalent"
    }
  ];

  const testimonials = [
    {
      text: "Amina's financial analysis is meticulous and insightful. Her ability to translate complex financial data into actionable strategies is exceptional.",
      name: "Dr. Asad Abbas",
      title: "University of Sargodha (UOS)"
    },
    {
      text: "Amina's dedication to continuous learning while managing multiple responsibilities is truly inspiring. A rare combination of diligence and innovation.",
      name: "Hamdani Brother",
      title: "Former Employer"
    },
    {
      text: "Working with Amina on projects has been transformative. She combines technical skills with deep domain expertise and problem-solving abilities.",
      name: "Hasnain Sayyid",
      title: "The Builder, Pursuit"
    }
  ];

  const insights = [
    {
      date: "Jan 15, 2026",
      category: "Automation",
      title: "Automating Month-End Close: Lessons Learned",
      desc: "How I reduced month-end closing time by 40% using Python automation while maintaining GAAP compliance and audit trails."
    },
    {
      date: "Jan 8, 2026",
      category: "Financial Analysis",
      title: "Excel to Python: Why I Made the Switch",
      desc: "Comparing traditional Excel financial models with Python-based solutions for scalability, accuracy, and real-time reporting."
    },
    {
      date: "Dec 28, 2025",
      category: "Technology",
      title: "Building a Rent Verification System",
      desc: "A technical breakdown of integrating Twilio SMS API with Flask to create an automated tenant verification workflow."
    }
  ];

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold">Amina Hamdani</div>
          <div className="flex items-center gap-4">
            <a href="#contact" className="px-4 py-2 text-sm font-semibold border-2 border-black hover:bg-black hover:text-white transition-all rounded-lg">
              Contact
            </a>
            <a href="/Resume For Portfolio.pdf" download className="px-4 py-2 text-sm font-semibold bg-black text-white hover:bg-gray-800 transition-all rounded-lg">
              Download Resume
            </a>
            <button 
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 rounded-lg transition-all"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 max-w-2xl">
              <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
                Amina Rubab Hamdani
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                MS Accounting student in Brooklyn, NY — blending financial expertise with modern AI‑powered digital skills.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-all font-semibold">
                  View My Work
                </a>
                <a href="/Resume For Portfolio.pdf" download className="px-8 py-4 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all font-semibold">
                  Download Resume
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-gray-100 shadow-2xl hover:scale-105 transition-transform">
                <ImageWithFallback
                  src="https://raw.githubusercontent.com/aminahamdani/amina-portfolio/c208426ee976b9a7880c34af745f504c52681037/public/profile.jpg"
                  alt="Amina Rubab Hamdani"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">My Story</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              As an <strong>MS in Accounting student at Brooklyn College</strong>, I am dedicated to bridging the gap between traditional financial management and modern technological innovation. With an MBA in Finance and over a decade of experience in operational accounting at Hamdani Brothers, I have established a deep expertise in GAAP compliance, financial reporting, and strategic cost control.
            </p>
            <p>
              My professional journey is currently focused on the strategic integration of emerging technologies into the financial sector. Through my intensive training as a Builder at Pursuit, I am gaining the technical skills required to transform legacy financial workflows into automated, high-precision systems. I am committed to leveraging AI and data analytics to provide the strategic insights necessary for modern, efficient financial decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all text-center"
              >
                <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Professional Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative overflow-hidden h-56">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-black uppercase tracking-wider mb-3">
                    {project.tag}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.tools}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {project.feature}
                    </div>
                  </div>
                  <div className="mt-6 flex items-center text-black font-semibold group-hover:gap-2 transition-all">
                    View Live Site 
                    <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Professional Foundation</h2>
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-black">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold">Accountant</h3>
              <span className="text-lg font-bold">Hamdani Brothers</span>
            </div>
            <p className="text-gray-600 mb-6">Core Tenure | Sargodha, Pakistan</p>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-black mt-1">•</span>
                <span>Directed the full accounting cycle, including high-precision management of accounts payable, receivable, and complex bank reconciliations.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-black mt-1">•</span>
                <span>Strategic preparation of monthly and quarterly financial statements to support executive decision-making.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-black mt-1">•</span>
                <span>Identified and implemented cost-control opportunities that streamlined bookkeeping processes and enhanced overall operational efficiency.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-black mt-1">•</span>
                <span>Ensured strict compliance with GAAP standards and local regulatory requirements for all financial reporting.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-black mt-1">•</span>
                <span>Collaborated on cross-functional budgeting projects to optimize resource allocation and financial health.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Certifications & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all border-t-4 border-black"
              >
                <div className="text-5xl mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-600 mb-3">{achievement.org}</p>
                <span className="text-sm text-black font-semibold">{achievement.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">What Colleagues Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-black"
              >
                <p className="text-lg italic text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t-2 border-gray-100 pt-4">
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Financial Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <article 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="flex gap-4 mb-4 text-sm">
                  <span className="text-gray-500">{insight.date}</span>
                  <span className="bg-gray-100 text-black px-3 py-1 rounded-full font-semibold">
                    {insight.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{insight.title}</h3>
                <p className="text-gray-600 mb-4">{insight.desc}</p>
                <a href="#" className="text-black font-semibold hover:gap-2 inline-flex items-center group">
                  Read More 
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Let's discuss how we can collaborate on finance and technology projects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <a href="mailto:rubbab.hamdani@gmail.com" className="text-gray-600 hover:text-black transition-colors">
                        rubbab.hamdani@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">LinkedIn</h4>
                      <a href="https://linkedin.com/in/amina-hamdani-192589380/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
                        linkedin.com/in/amina-hamdani-192589380
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Location</h4>
                      <p className="text-gray-600">Brooklyn, New York</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-black">
                <h4 className="font-bold mb-2">Open to Opportunities</h4>
                <p className="text-gray-600">
                  I'm currently seeking opportunities in financial analysis, accounting automation, and fintech development.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-green-800 font-semibold">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              {formStatus === 'config_error' && (
                <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-center gap-3">
                  <svg className="w-6 h-6 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-amber-800 font-semibold">Email is not configured. Add VITE_EMAILJS_* variables to your .env file (see .env.example).</p>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-red-800 font-semibold">Oops! Something went wrong. Please try again.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Collaboration"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                    rows={5}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-all font-semibold text-lg flex items-center justify-center gap-2 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.928l3-2.647z"></path>
                    </svg>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col gap-4 mb-6">
            <a href="mailto:rubbab.hamdani@gmail.com" className="hover:text-gray-300 transition-colors">
              rubbab.hamdani@gmail.com
            </a>
            <a href="https://linkedin.com/in/amina-hamdani-192589380/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              linkedin.com/in/amina-hamdani-192589380
            </a>
            <a href="/Resume For Portfolio.pdf" download className="hover:text-gray-300 transition-colors">
              Download Resume (PDF)
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; 2026 Amina Rubab Hamdani. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}