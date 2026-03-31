import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Menu, X, ChevronRight, BookOpen, UserCheck, Trophy, Target, 
  Phone, Mail, MapPin, Star, GraduationCap, CheckCircle2, Award, 
  ArrowRight, MessageCircle, Presentation, Zap
} from 'lucide-react';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Courses', href: '#courses' },
    { name: 'Founder', href: '#founder' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary-base/80 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 z-50">
          <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center font-sora font-bold text-xl shadow-[0_0_20px_rgba(79,70,229,0.5)]">J</div>
          <span className="font-sora font-bold text-xl tracking-tight hidden sm:block">Jai Shree Ram <span className="text-text-secondary">Classes</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-text-secondary hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-6 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/10 font-medium text-sm transition-all duration-300 backdrop-blur-md">
            Enroll Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden z-50 text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-primary-base/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden z-40"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-sora font-medium text-white/80 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="mt-4 px-8 py-3 rounded-full bg-gradient-primary text-white font-medium text-lg shadow-[0_0_30px_rgba(6,182,212,0.4)]"
              >
                Enroll Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-indigo/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-cyan/20 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-ping" />
            <span className="text-sm font-medium text-text-secondary">Where Success Becomes Your Identity</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-sora font-bold leading-tight mb-6"
          >
            Transforming Students into <br className="hidden md:block" />
            <span className="glow-text">Top Performers</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed font-inter"
          >
            From 1st to 12th, we don't just teach—we build confidence, communication, and academic excellence to shape future leaders.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a href="#contact" className="px-8 py-4 rounded-full bg-gradient-primary text-white font-medium text-lg flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all duration-300 hover:-translate-y-1">
              Enroll Now <ChevronRight size={20} />
            </a>
            <a href="#about" className="px-8 py-4 rounded-full glass-card hover:bg-white/10 text-white font-medium text-lg flex items-center justify-center transition-all duration-300">
              Discover More
            </a>
          </motion.div>
        </div>

        {/* Stats Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
        >
          {[
            { label: "Pass Rate", value: "100%", icon: <Target className="text-accent-cyan" /> },
            { label: "Highest Score", value: "98%", icon: <Trophy className="text-accent-purple" /> },
            { label: "Active Students", value: "500+", icon: <UserCheck className="text-accent-pink" /> }
          ].map((stat, i) => (
            <div key={i} className="glass-card p-6 flex items-center gap-4 hover:bg-white/[0.05] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-sora font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-sora font-bold mb-4">Beyond <span className="glow-text">Academics</span></h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">We teach students from 1st to 12th grade, focusing on holistic development that prepares them for real-world success.</p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            { title: "English Communication", desc: "Master fluent English speaking and writing to stand out in any environment.", icon: <MessageCircle size={28} className="text-accent-cyan" /> },
            { title: "Presentation Skills", desc: "Learn to articulate ideas clearly and confidently in front of any audience.", icon: <Presentation size={28} className="text-accent-purple" /> },
            { title: "Personality Development", desc: "Build unbreakable confidence and leadership qualities for future success.", icon: <Zap size={28} className="text-accent-pink" /> }
          ].map((feature, i) => (
            <motion.div key={i} variants={fadeIn} className="glass-card glass-card-hover p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-sora font-semibold mb-3">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const features = [
    { title: "100% Pass Result Record", icon: <CheckCircle2 /> },
    { title: "Highest Score: 98%", icon: <Trophy /> },
    { title: "Guaranteed Grade Improvement", icon: <Target /> },
    { title: "Strong English Speaking Skills", icon: <MessageCircle /> },
    { title: "Personality & Confidence", icon: <Zap /> },
    { title: "Personal Attention", icon: <UserCheck /> },
    { title: "Regular Tests & Tracking", icon: <Presentation /> }
  ];

  return (
    <section id="why-us" className="py-24 relative bg-primary-surface/30">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-sora font-bold mb-6">Why Choose <br/><span className="glow-text">Jai Shree Ram Classes</span></h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">We don't just focus on passing exams; we ensure our students excel academically while building the essential life skills needed for a successful career.</p>
            
            <div className="space-y-4">
              {features.slice(0, 4).map((f, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
                    {React.cloneElement(f.icon, { size: 16 })}
                  </div>
                  <span className="font-medium text-white/90">{f.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="md:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((f, i) => (
              <div key={i} className="glass-card p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform cursor-default">
                <div className="text-accent-indigo">
                  {React.cloneElement(f.icon, { size: 24 })}
                </div>
                <h4 className="font-sora font-medium text-sm">{f.title}</h4>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Founder = () => {
  return (
    <section id="founder" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="glass-card border-white/10 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-base to-transparent z-10 md:hidden" />
          <div className="grid md:grid-cols-5 gap-0">
            {/* Image Placeholder with Gradient */}
            <div className="md:col-span-2 h-[400px] md:h-auto relative bg-primary-surface">
              <div className="absolute inset-0 bg-gradient-to-t from-primary-base to-transparent z-10 md:hidden" />
              <div className="w-full h-full object-cover opacity-80" style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80")',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}/>
            </div>
            
            <div className="md:col-span-3 p-8 md:p-12 relative z-20">
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-accent-purple mb-4">Meet The Founder</div>
              <h2 className="text-3xl md:text-4xl font-sora font-bold mb-2">Prof. Abhishek Shukla</h2>
              <p className="text-text-secondary mb-8 text-sm md:text-base">Experienced educator with deep subject knowledge, dedicated to shaping future leaders.</p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {[
                  { label: "Education", items: ["B.Sc Computer Science", "M.Sc Data Analytics", "MBA"] },
                  { label: "Achievements", items: ["Ranked UPSC Aspirant", "State Champion 400m Running"] }
                ].map((section, i) => (
                  <div key={i}>
                    <h4 className="font-sora font-semibold text-white/90 mb-3 flex items-center gap-2">
                      {i === 0 ? <GraduationCap size={18} className="text-accent-cyan"/> : <Award size={18} className="text-accent-pink"/>}
                      {section.label}
                    </h4>
                    <ul className="space-y-2">
                      {section.items.map((item, j) => (
                        <li key={j} className="text-sm text-text-secondary flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 border-l-4 border-l-accent-indigo">
                <p className="italic text-sm text-text-secondary">"My focus is on discipline, confidence, and imparting real-world skills that transcend textbooks. We build individuals, not just students."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Courses = () => {
  const courses = [
    { name: "Foundation Level", grades: "Classes 1 - 5", desc: "Building strong fundamentals in core subjects with a focus on curiosity and basic communication.", color: "from-blue-500/20 to-cyan-500/20", borderColor: "group-hover:border-cyan-500/50" },
    { name: "Core Subjects", grades: "Classes 6 - 10", desc: "In-depth understanding of mathematics, science, and languages to prepare for board exams.", color: "from-indigo-500/20 to-purple-500/20", borderColor: "group-hover:border-indigo-500/50" },
    { name: "Advanced Studies", grades: "Classes 11 - 12", desc: "Specialized coaching for higher secondary education focusing on top scores and competitive prep.", color: "from-purple-500/20 to-pink-500/20", borderColor: "group-hover:border-pink-500/50" },
    { name: "Special Program", grades: "English & Personality", desc: "Dedicated sessions for communication skills, interview prep, and confidence building for all ages.", color: "from-emerald-500/20 to-teal-500/20", borderColor: "group-hover:border-teal-500/50" },
  ];

  return (
    <section id="courses" className="py-24 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-sora font-bold mb-4">Our <span className="glow-text">Programs</span></h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">Comprehensive learning tracks designed to maximize student potential at every stage.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-6 flex flex-col h-full relative group transition-all duration-500 ${course.borderColor}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${course.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10`} />
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                <BookOpen size={20} className="text-white/80" />
              </div>
              <div className="text-xs font-semibold tracking-wider text-text-secondary uppercase mb-2">{course.grades}</div>
              <h3 className="text-xl font-sora font-semibold mb-3">{course.name}</h3>
              <p className="text-sm text-text-secondary mb-6 flex-grow">{course.desc}</p>
              
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-white/80 group-hover:text-white mt-auto">
                Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 relative bg-primary-surface/30">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-sora font-bold mb-4">Student <span className="glow-text-alt">Success Stories</span></h2>
          <p className="text-text-secondary max-w-2xl mx-auto">Hear from our students who transformed their academic journey and confidence.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Rahul Sharma", grade: "Class 10", quote: "I went from scoring 65% to 92% in my boards. The personal attention and regular mock tests were a game changer for me." },
            { name: "Sneha Patel", grade: "Class 12", quote: "Not only did my grades improve, but the English speaking sessions completely removed my stage fear. I am much more confident now." },
            { name: "Aman Verma", grade: "Class 8", quote: "Abhishek sir's teaching style is unique. He focuses on concepts rather than mugging up. The best coaching institute!" }
          ].map((t, i) => (
            <div key={i} className="glass-card p-8">
              <div className="flex gap-1 mb-6 text-yellow-500">
                {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-white/10 to-white/5 flex items-center justify-center font-sora font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-sora font-medium text-sm">{t.name}</h5>
                  <div className="text-xs text-text-muted">{t.grade}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent-cyan/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="glass-card border-white/10 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">Start Your <span className="glow-text">Journey</span></h2>
              <p className="text-text-secondary mb-10">Have questions? Want to enroll? Reach out to us and we'll get back to you immediately.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent-cyan">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-text-muted mb-1">Call / WhatsApp</div>
                    <a href="tel:9021771140" className="font-sora font-medium hover:text-accent-cyan transition-colors">9021771140</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent-purple">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-text-muted mb-1">Email Us</div>
                    <a href="mailto:jaishreeeraminstitute@gmail.com" className="font-sora font-medium text-sm hover:text-accent-purple transition-colors break-all">jaishreeeraminstitute@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent-pink">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-text-muted mb-1">Visit Us</div>
                    <span className="font-sora font-medium text-sm">Main Campus, City Center</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-base/50 p-6 rounded-2xl border border-white/5">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs text-text-muted mb-2 font-medium uppercase tracking-wider">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent-cyan/50 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs text-text-muted mb-2 font-medium uppercase tracking-wider">Phone Number</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent-cyan/50 transition-colors" placeholder="+91 00000 00000" />
                </div>
                <div>
                  <label className="block text-xs text-text-muted mb-2 font-medium uppercase tracking-wider">Select Class</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent-cyan/50 transition-colors appearance-none text-white/80">
                    <option className="bg-primary-surface">Class 1 - 5</option>
                    <option className="bg-primary-surface">Class 6 - 10</option>
                    <option className="bg-primary-surface">Class 11 - 12</option>
                    <option className="bg-primary-surface">Spoken English</option>
                  </select>
                </div>
                <button type="submit" className="w-full py-4 rounded-xl bg-gradient-primary text-white font-medium shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 mt-2">
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-primary-base pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center font-sora font-bold text-sm">J</div>
              <span className="font-sora font-bold text-lg tracking-tight">Jai Shree Ram Classes</span>
            </div>
            <p className="text-sm text-text-secondary max-w-sm mb-6">Where Success Becomes Your Identity. Building top performers through academic excellence and personality development.</p>
          </div>
          
          <div>
            <h4 className="font-sora font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Programs</a></li>
              <li><a href="#founder" className="hover:text-white transition-colors">Founder</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sora font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-text-muted">
          <p>© {new Date().getFullYear()} Jai Shree Ram Classes. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Excellence</p>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/919021771140" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-110 transition-transform cursor-pointer"
    >
      <MessageCircle className="text-white" size={28} />
    </a>
  );
};

const MobileStickyCTA = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-primary-base/90 backdrop-blur-xl border-t border-white/10 z-40 pb-6">
      <a href="#contact" className="w-full flex items-center justify-center py-3.5 rounded-full bg-gradient-primary text-white font-medium shadow-[0_0_20px_rgba(6,182,212,0.3)]">
        Enroll Now
      </a>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-primary-base text-white font-inter selection:bg-accent-indigo/30">
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Founder />
      <Courses />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyCTA />
    </div>
  );
}
