import { useRef, useEffect, useMemo } from 'react';
import { ExternalLink, MapPin, Mail, Briefcase, Code, Star, Globe, Palette, Layers, Smartphone, GitFork, Calendar, Award, Building, Users, ChartBarIncreasing, Database, Brain, Server, Sparkles } from 'lucide-react';
import Button from '../../lib/components/Button';
import Badge from '../../lib/components/Badge';
import GlassCard from '../../lib/components/GlassCard';
import MetricCard from '../../lib/components/MetricCard';
import InteractiveCard from '../../lib/components/InteractiveCard';
import { SectionTitle, NoteBlock } from '../DocComponents';

const TiltWrapper = ({ children, className }) => {
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    let frameId = null;

    const onMove = (e) => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const rect = outer.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        inner.style.transform = `rotateX(${y * -12}deg) rotateY(${x * 12}deg)`;
      });
    };

    const onLeave = () => {
      if (frameId) cancelAnimationFrame(frameId);
      inner.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
      inner.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    const onEnter = () => {
      inner.style.transition = 'transform 0.08s ease-out';
    };

    outer.addEventListener('pointermove', onMove, { passive: true });
    outer.addEventListener('pointerleave', onLeave, { passive: true });
    outer.addEventListener('pointerenter', onEnter, { passive: true });

    return () => {
      outer.removeEventListener('pointermove', onMove);
      outer.removeEventListener('pointerleave', onLeave);
      outer.removeEventListener('pointerenter', onEnter);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div ref={outerRef} className={className} style={{ perspective: '1200px' }}>
      <div ref={innerRef} className="relative" style={{ transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </div>
  );
};

const FloatingOrbs = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#E31B23]/5 blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
    <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[100px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '4s' }} />
  </div>
);

const Particles = () => {
  const particles = useMemo(() =>
    Array.from({ length: 30 }).map(() => ({
      w: Math.random() * 3 + 1,
      h: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      o: Math.random() * 0.4 + 0.1,
      c: Math.floor(Math.random() * 3),
      dur: Math.random() * 20 + 15,
      delay: Math.random() * -20,
    })),
  []);
  const colors = ['#E31B23', '#6366f1', '#8b5cf6'];
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${p.w}px`, height: `${p.h}px`,
            left: `${p.x}%`, top: `${p.y}%`,
            opacity: p.o, background: colors[p.c],
            animation: `float-particle ${p.dur}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-30px) translateX(15px); }
          50% { transform: translateY(-10px) translateX(-20px); }
          75% { transform: translateY(-40px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-glow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

const DeveloperDoc = () => {
  const glowRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const glow = glowRef.current;
    if (!hero || !glow) return;

    let frameId = null;

    const onMove = (e) => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        glow.style.left = `${x}%`;
        glow.style.top = `${y}%`;
      });
    };

    hero.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      hero.removeEventListener('pointermove', onMove);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <FloatingOrbs />
      <Particles />
      <div className="space-y-10 relative">

        {/* Hero */}
        <div ref={heroRef} style={{ perspective: '1200px' }}>
          <div style={{ transformStyle: 'preserve-3d' }}>
            <GlassCard variant="crystal" className="p-8 lg:p-12 relative">
              <div
                ref={glowRef}
                className="absolute w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none transition-[left,top] duration-75"
                style={{
                  background: 'radial-gradient(circle, rgba(227,27,35,0.15) 0%, transparent 70%)',
                  transform: 'translate(-50%, -50%)',
                  left: '50%',
                  top: '50%',
                }}
              />
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="shrink-0" style={{ transform: 'translateZ(40px)', transformStyle: 'preserve-3d' }}>
                  <div style={{ animation: 'float-slow 6s ease-in-out infinite' }}>
                    <div className="absolute inset-0 rounded-full bg-[#E31B23]/20 blur-xl scale-110" style={{ animation: 'float-glow 4s ease-in-out infinite' }} />
                    <img
                      src="https://avatars.githubusercontent.com/u/99582894?v=4"
                      alt="Danesh Naik"
                      className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-white/20 shadow-2xl ring-2 ring-white/10 relative"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-[#E31B23] to-red-700 items-center justify-center text-white text-3xl md:text-5xl font-black shadow-2xl hidden">
                      DN
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-left flex-1" style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
                  <h1 className="text-3xl md:text-5xl font-black theme-text mb-2 tracking-tight" style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}>
                    Danesh <span className="text-[#E31B23]">Naik</span>
                  </h1>
                  <p className="text-base md:text-lg theme-text-secondary font-medium mb-3" style={{ transform: 'translateZ(15px)', transformStyle: 'preserve-3d' }}>
                    Full Stack Developer | SAP Consultant | AI/ML Engineer | Open Source Creator
                  </p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
                    <span className="flex items-center gap-1.5 text-sm theme-text-tertiary">
                      <MapPin size={14} /> Bengaluru, India
                    </span>
                    <span className="w-1 h-1 rounded-full theme-bg-tertiary" />
                    <span className="flex items-center gap-1.5 text-sm theme-text-tertiary">
                      <Briefcase size={14} /> Incture Technologies
                    </span>
                    <span className="w-1 h-1 rounded-full theme-bg-tertiary" />
                    <span className="flex items-center gap-1.5 text-sm theme-text-tertiary">
                      <Mail size={14} /> naikdanesh2@gmail.com
                    </span>
                  </div>
                  <p className="theme-text-secondary text-sm leading-relaxed max-w-3xl">
                    I am a <strong>Full Stack Developer</strong>, <strong>SAP Consultant</strong>, and <strong>AI/ML Engineer</strong> based in Bengaluru,
                    currently working as an <strong>Associate Software Engineer</strong> at <strong>Incture Technologies</strong>.
                    I specialize in building enterprise-grade SAP Fiori applications, SAP CAP backend services, Spring Boot microservices,
                    modern React dashboards, and end-to-end mobile solutions. I also work on <strong>AI/ML and RAG models</strong>,
                    building intelligent assistants and retrieval-augmented generation pipelines. I'm the creator of <strong>Danesh'UI</strong>
                    and <strong>DaneshIcons</strong> — open source libraries crafted for the developer community.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                    <Badge variant="primary" size="sm"><Briefcase size={11} /> Associate SE @ Incture</Badge>
                    <Badge variant="info" size="sm"><Code size={11} /> SAP UI5 / Fiori</Badge>
                    <Badge variant="success" size="sm"><Server size={11} /> SAP CAP / Spring Boot</Badge>
                    <Badge variant="warning" size="sm"><Brain size={11} /> AI / ML / RAG</Badge>
                    <Badge variant="info" size="sm"><Smartphone size={11} /> Android Developer</Badge>
                    <Badge variant="warning" size="sm"><Globe size={11} /> Open Source</Badge>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <MetricCard title="Repositories" value="89+" icon={Code} variant="primary" size="sm" />
          <MetricCard title="GitHub Stars" value="81" icon={Star} variant="warning" size="sm" />
          <MetricCard title="Icons" value="200+" icon={Palette} variant="info" size="sm" />
          <MetricCard title="Components" value="25+" icon={Layers} variant="success" size="sm" />
          <MetricCard title="Client Projects" value="5+" icon={Award} variant="primary" size="sm" />
        </div>

        {/* About Me */}
        <section>
          <SectionTitle>About Me</SectionTitle>
          <div className="space-y-4 theme-text-secondary text-sm leading-relaxed">
            <p>
              Hey there! I'm <strong>Danesh Naik</strong> — a <strong>Full Stack Developer</strong> and <strong>UI/UX Designer</strong>
              currently working as an <strong>Associate Software Engineer</strong> at <strong>Incture Technologies</strong>
              in Bengaluru. I build enterprise applications using <strong>SAP UI5, Fiori, SAP CAP, Spring Boot,
              React, Node.js, and Android</strong>, and I also develop <strong>AI/ML and RAG models</strong>
              for intelligent document retrieval and chatbot systems.
            </p>
            <p>
              At Incture, I architected and developed the <strong>Inchara Green Hands</strong> application — a full-stack
              platform built from the ground up. I also built the <strong>Price Card Generation</strong> app as both an
              Android and Node.js developer. My work spans the entire stack: from designing database schemas and REST APIs
              to crafting pixel-perfect SAP Fiori UIs and deploying production-grade mobile applications.
            </p>
            <p>
              On the AI/ML side, I build <strong>RAG (Retrieval-Augmented Generation)</strong> pipelines using
              <strong>LangChain, OpenAI, and vector databases</strong> to create intelligent document Q&A systems and
              AI assistants. I also work on <strong>Spring Boot microservices</strong> and <strong>SAP CAP</strong>
              backend services for enterprise integrations.
            </p>
            <p>
              Outside of work, I'm the creator of <strong>Danesh'UI</strong> — a modern React component library with
              glassmorphism, vault effects, and SAP Fiori enterprise variants — and <strong>DaneshIcons</strong>, an
              expanding open-source SVG icon library. I also built the <strong>NSS GIT App</strong> (live on Google Play
              Store) with 500+ downloads, featuring real-time updates, chat, event registration, and push notifications.
            </p>
            <p>
              When I'm not coding, you'll find me gaming, watching anime, exploring geopolitics, or diving into music.
              I'm fluent in English, Hindi, and Kannada, and I'm always excited to collaborate on interesting projects.
              Let's build something amazing together!
            </p>
          </div>
        </section>

        {/* Work Experience */}
        <section>
          <SectionTitle>Work Experience</SectionTitle>
          <div className="space-y-6">
            <TiltWrapper>
              <GlassCard variant="frost" className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#E31B23]/10 flex items-center justify-center shrink-0">
                      <Building size={24} className="text-[#E31B23]" />
                    </div>
                    <div>
                      <h3 className="font-bold theme-text text-base">Associate Software Engineer</h3>
                      <p className="text-sm theme-text-secondary">Incture Technologies · Full-time</p>
                    </div>
                  </div>
                  <Badge variant="primary" size="sm">
                    <Calendar size={11} /> Oct 2024 - Present
                  </Badge>
                </div>
                <ul className="space-y-2 text-sm theme-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    Architected and developed <strong>Inchara Green Hands</strong> — a full-stack enterprise application from scratch
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    Built <strong>Price Card Generation</strong> app as Android (Java) + Node.js developer
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    Developed <strong>SAP CAP</strong> backend services and <strong>Spring Boot</strong> microservices for enterprise integrations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    Built <strong>AI/ML RAG pipelines</strong> using LangChain, OpenAI, and vector databases for intelligent document retrieval
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    Designed complete application architecture including database, API, and frontend layers
                  </li>
                </ul>
              </GlassCard>
            </TiltWrapper>

            <TiltWrapper>
              <GlassCard variant="frost" className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                      <Award size={24} className="text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-bold theme-text text-base">Associate Software Engineer - Trainee</h3>
                      <p className="text-sm theme-text-secondary">Incture Technologies · Internship</p>
                    </div>
                  </div>
                  <Badge variant="info" size="sm">
                    <Calendar size={11} /> Aug 2024 - Oct 2024
                  </Badge>
                </div>
                <ul className="space-y-2 text-sm theme-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    Trained in SAP UI5, Fiori design principles, and enterprise development workflows
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    Contributed to internal tools and learned full-stack development best practices
                  </li>
                </ul>
              </GlassCard>
            </TiltWrapper>
          </div>
        </section>

        {/* Projects */}
        <section>
          <SectionTitle>Projects I've Worked On</SectionTitle>
          <p className="theme-text-secondary text-sm mb-6">
            I have worked on <strong>5+ SAP client projects</strong> as a Full Stack Developer, alongside
            <strong> AI/ML and backend projects</strong>:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Inchara Green Hands", desc: "Full-stack SAP Fiori application for managing green initiatives. Complete architecture design, SAP UI5 frontend, and Node.js backend with real-time analytics.", tech: "SAP UI5, Node.js, MongoDB", icon: Globe },
              { title: "Price Card Generator", desc: "Android application integrated with SAP backend for dynamic price card generation. Real-time data sync and PDF report generation.", tech: "Android (Java), Node.js, SAP", icon: Smartphone },
              { title: "SAP Fiori Dashboard", desc: "Enterprise dashboard for KPI monitoring with live SAP data feeds. Role-based access control and responsive Fiori design.", tech: "SAP Fiori, UI5, OData", icon: ChartBarIncreasing },
              { title: "Employee Portal App", desc: "SAP-integrated employee self-service portal for leave management, attendance tracking, and HR workflows.", tech: "SAP UI5, Fiori Elements", icon: Users },
              { title: "Inventory Management", desc: "Real-time inventory tracking system with SAP MM integration. Barcode scanning and automated stock alerts.", tech: "SAP Fiori, OData, Node.js", icon: Database },
              { title: "AI Document RAG System", desc: "Intelligent document Q&A system using Retrieval-Augmented Generation. LangChain, vector embeddings, and OpenAI for accurate document retrieval and natural language chat.", tech: "LangChain, OpenAI, Python, Vector DB", icon: Brain },
              { title: "Spring Boot Microservices", desc: "RESTful microservices with Spring Boot, JPA, and PostgreSQL for enterprise backend operations. Secure APIs with JWT authentication and role-based access.", tech: "Spring Boot, JPA, PostgreSQL, JWT", icon: Server },
            ].map((project, i) => {
              const Icon = project.icon;
              return (
                <InteractiveCard key={i} effect="border" className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#E31B23]/10 flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-[#E31B23]" />
                    </div>
                    <h3 className="font-bold theme-text text-sm">{project.title}</h3>
                  </div>
                  <p className="text-xs theme-text-secondary mb-3 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.split(', ').map((t, j) => (
                      <span key={j} className="text-[10px] font-semibold theme-bg-tertiary theme-text-tertiary px-2 py-0.5 rounded-md">{t}</span>
                    ))}
                  </div>
                </InteractiveCard>
              );
            })}
          </div>
        </section>

        {/* Featured Projects */}
        <section>
          <SectionTitle>My Projects</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <InteractiveCard effect="glow" className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#E31B23]/10 flex items-center justify-center shrink-0">
                  <Code size={20} className="text-[#E31B23]" />
                </div>
                <h3 className="font-bold theme-text text-lg">Danesh'UI</h3>
              </div>
              <p className="text-sm theme-text-secondary mb-4 leading-relaxed">
                Modern React UI component library with glassmorphism, vault variants, SAP Fiori enterprise components,
                and 25+ production-ready components. Built with Tailwind CSS v4 and React 19.
              </p>
              <a href="https://github.com/danu20002/danesh-components" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E31B23] hover:underline">
                <GitFork size={14} /> View on GitHub <ExternalLink size={12} />
              </a>
            </InteractiveCard>

            <InteractiveCard effect="glow" className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                  <Palette size={20} className="text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="font-bold theme-text text-lg">DaneshIcons</h3>
              </div>
              <p className="text-sm theme-text-secondary mb-4 leading-relaxed">
                200+ open-source SVG icons designed for modern web apps. Fully customizable with the same API as
                lucide-react. Built for speed and consistency.
              </p>
              <a href="https://daneshicons.vercel.app/" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E31B23] hover:underline">
                <Globe size={14} /> daneshicons.vercel.app <ExternalLink size={12} />
              </a>
            </InteractiveCard>

            <InteractiveCard effect="glow" className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                  <Smartphone size={20} className="text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-bold theme-text text-lg">NSS GIT App</h3>
              </div>
              <p className="text-sm theme-text-secondary mb-4 leading-relaxed">
                Android app for NSS unit of KLS Gogte Institute of Technology. 500+ downloads. News updates, event
                registration, profile management, credit tracking, chat, and push notifications.
              </p>
              <a href="https://play.google.com/store/apps/details?id=com.danunaik.nssgit" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E31B23] hover:underline">
                <ExternalLink size={14} /> Google Play Store
              </a>
            </InteractiveCard>

            <InteractiveCard effect="glow" className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                  <Briefcase size={20} className="text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-bold theme-text text-lg">Inchara Green Hands</h3>
              </div>
              <p className="text-sm theme-text-secondary mb-4 leading-relaxed">
                Full-stack enterprise application at Incture. I architected the complete system — from database design
                and REST API development to SAP Fiori frontend and deployment.
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold theme-text-tertiary">
                <Building size={14} /> Incture Technologies
              </span>
            </InteractiveCard>

            <InteractiveCard effect="glow" className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center shrink-0">
                  <Brain size={20} className="text-rose-600 dark:text-rose-400" />
                </div>
                <h3 className="font-bold theme-text text-lg">AI RAG Assistant</h3>
              </div>
              <p className="text-sm theme-text-secondary mb-4 leading-relaxed">
                RAG pipeline for intelligent document Q&A. Uses LangChain for orchestration, OpenAI embeddings for
                semantic search, and a vector database for fast retrieval. Supports PDF, DOCX, and TXT uploads with
                natural language chat interface.
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold theme-text-tertiary">
                <Sparkles size={14} /> LangChain · OpenAI · Vector DB
              </span>
            </InteractiveCard>

          </div>
        </section>

        {/* Connect */}
        <section>
          <SectionTitle>Connect With Me</SectionTitle>
          <div className="flex flex-wrap gap-3">
            <a href="https://github.com/danu20002" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" icon={GitFork}>GitHub</Button>
            </a>
            <a href="https://linkedin.com/in/danesh-naik-74852a1b4" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" icon={Globe}>LinkedIn</Button>
            </a>
            <a href="mailto:naikdanesh2@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" icon={Mail}>Email</Button>
            </a>
            <a href="https://dev.to/danu20002" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" icon={Code}>Dev.to</Button>
            </a>
            <a href="https://linktr.ee/danunaik" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" icon={ExternalLink}>Linktree</Button>
            </a>
          </div>
          <div className="mt-6 p-4 rounded-2xl theme-bg-secondary border theme-border-secondary flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Mail size={16} className="theme-text-tertiary" />
              <span className="text-sm theme-text-secondary">naikdanesh2@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="theme-text-tertiary" />
              <span className="text-sm theme-text-secondary">Bengaluru, Karnataka, India</span>
            </div>
          </div>
        </section>

        {/* Fun Fact */}
        <section>
          <SectionTitle>Fun Fact</SectionTitle>
          <NoteBlock type="info">
            I joke that <strong>"Developers don't use Stack Overflow"</strong> — it's a playful inside joke in the dev
            community. When I'm not building apps, you'll find me gaming, watching anime, exploring geopolitics, or
            lost in music. I'm also "addicted to music" and love discovering new tracks while coding.
          </NoteBlock>
        </section>

      </div>
    </>
  );
};

export default DeveloperDoc;