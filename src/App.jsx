import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Terminal, 
  Play, 
  ArrowRight, 
  Mail, 
  Cpu, 
  Database, 
  Layers, 
  Award, 
  BookOpen, 
  ArrowUpRight, 
  Code, 
  CheckCircle2, 
  X, 
  Send,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import profileImg from './assets/Profil.jpeg';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

// Typewriter component for animated developer taglines
function Typewriter({ words, speed = 80, delay = 1800 }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = words[currentWordIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(prev => prev.slice(0, -1));
      }, speed / 2);
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
      }, speed);
    }

    if (!isDeleting && currentText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex(prev => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, speed, delay]);

  return (
    <span className="typewriter-text">
      {currentText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
}

// ScrambleText component for high-tech text scramble effect on hover
function ScrambleText({ text, className = "", speed = 30 }) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);
  const chars = '!<>-_\\/[]{}—=+*^?#________';

  const scramble = () => {
    let iteration = 0;
    clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      
      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }
      
      iteration += 1 / 3;
    }, speed);
  };

  const handleMouseEnter = () => {
    scramble();
  };

  useEffect(() => {
    setDisplayText(text);
    return () => clearInterval(intervalRef.current);
  }, [text]);

  return (
    <span className={className} onMouseEnter={handleMouseEnter} style={{ display: 'inline-block' }}>
      {displayText}
    </span>
  );
}

export default function App() {
  // Personal Details from Environment Variables (keeps GitHub code clean of personal info)
  const userName = import.meta.env.VITE_USER_NAME || "Developer Name";
  const userEmail = import.meta.env.VITE_USER_EMAIL || "developer@example.com";
  const userLinkedin = import.meta.env.VITE_USER_LINKEDIN || "https://linkedin.com/in/username";
  const userGithub = import.meta.env.VITE_USER_GITHUB || "https://github.com/username";

  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'system', content: 'SYSTEM DIAGNOSTICS DEPLOYED [v1.0.4]' },
    { type: 'system', content: "Type 'help' to view available API endpoints, or click the query nodes below." }
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const [consoleStatus, setConsoleStatus] = useState('200 OK');
  const [consoleLatency, setConsoleLatency] = useState('4ms');
  
  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Navigation active state
  const [activeSection, setActiveSection] = useState('diagnostics');
  const [isScrolled, setIsScrolled] = useState(false);
  const [avatarShape, setAvatarShape] = useState('circle');

  // Refs for Animations
  const mainRef = useRef(null);
  const cursorRef = useRef(null);
  const profileCardRef = useRef(null);
  const terminalBodyRef = useRef(null);
  const bentoGridRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Navigation Links - Aesthetic Developer Terms
  const navItems = [
    { label: 'telemetry', id: 'diagnostics' },
    { label: 'blueprints', id: 'architecture' },
    { label: 'sandbox', id: 'terminal' },
    { label: 'handshake', id: 'contact' }
  ];

  // API Console Mock Database (CGPA & Percentages Removed)
  const apiDatabase = {
    projects: [
      {
        id: "proj_01",
        name: "Blog Service REST API",
        language: "Java",
        framework: "Spring Boot",
        database: "MySQL",
        architecture: "4-Layered MVC (Controller-Service-Repository-DTO)",
        endpoints: 8,
        features: [
          "Supported full blog lifecycle with draft-publish workflow",
          "Input integrity validation via DTO constraints (@NotBlank, @Size)",
          "ElementCollection JPA mapping avoiding manual N+1 query patterns",
          "Centralized exception handling using @RestControllerAdvice"
        ],
        repo: `${userGithub.replace("https://", "")}/ZBlog`
      },
      {
        id: "proj_02",
        name: "Contact Submission System",
        stack: "MERN (MongoDB, Express.js, React, Node.js)",
        endpoints: 5,
        features: [
          "Full CRUD system with 4-field contact forms",
          "Data integrity with Mongoose validations & unique constraints",
          "Structured frontend across 3 components with Flowbite UI"
        ],
        repo: `${userGithub.replace("https://", "")}/User-Enquiry-Form-MERNStack`
      }
    ],
    skills: {
      languages: ["Java (Spring Boot)", "JavaScript (Node/React)"],
      backend: ["Spring Boot", "Node.js", "Express.js", "REST API Design", "JPA/Hibernate"],
      frontend: ["React.js", "HTML5", "CSS3", "Vite", "Redux Toolkit"],
      databases: ["MySQL", "MongoDB", "Mongoose ODM"],
      architecture: ["Layered MVC", "DTO Pattern", "Global Exception Handling", "Schema Validation"],
      tools: ["Git", "GitHub", "Postman", "VS Code"]
    },
    education: [
      {
        institution: "Galgotias University",
        degree: "Bachelor of Technology - Computer Science Engineering",
        duration: "2022 – 2026",
        score: "Active Engineering Registry Node"
      },
      {
        institution: "St. Dominic Savio’s High School, Patna",
        degree: "Senior Secondary Credentials (PCM)",
        duration: "2020 – 2021",
        score: "Class XII Node"
      },
      {
        institution: "St. Dominic Savio’s High School, Patna",
        degree: "Secondary School Certificate",
        duration: "2018 – 2019",
        score: "Class X Node"
      }
    ],
    certifications: [
      { name: "NPTEL - Software Engineering", detail: "Silver Medal, Top 2%" },
      { name: "Palo Alto Networks", detail: "Cybersecurity Virtual Internship" },
      { name: "Oracle Academy", detail: "Java Foundation Course" }
    ]
  };

  // Scroll monitoring
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = ['diagnostics', 'architecture', 'terminal', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom Cursor and Mouse Hover Listener
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let posX = mouseX;
    let posY = mouseY;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Lerped follower loop
    const tick = () => {
      posX += (mouseX - posX) * 0.15;
      posY += (mouseY - posY) * 0.15;
      if (cursor) {
        cursor.style.transform = `translate3d(calc(${posX}px - 50%), calc(${posY}px - 50%), 0)`;
      }
      requestAnimationFrame(tick);
    };
    const animId = requestAnimationFrame(tick);

    // Hover elements setup
    const handleMouseEnter = () => cursor.classList.add('hovered');
    const handleMouseLeave = () => cursor.classList.remove('hovered');

    const updateHoverListeners = () => {
      const hoverables = document.querySelectorAll('a, button, .hoverable, input, textarea, .console-opt-btn, .shape-toggle-btn');
      hoverables.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    updateHoverListeners();
    // Observe DOM changes to attach listeners to dynamic elements (like console commands)
    const observer = new MutationObserver(updateHoverListeners);
    if (mainRef.current) {
      observer.observe(mainRef.current, { childList: true, subtree: true });
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  // GSAP Entrance & Scroll-Driven Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll Progress Bar
      gsap.to(".scroll-progress", {
        width: "100%",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3
        }
      });

      // Shift and scale spotlights based on scroll position (Dynamic Background Shift)
      gsap.to(".glowing-emerald", {
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1
        },
        xPercent: 35,
        yPercent: 25,
        scale: 1.3,
        opacity: 0.28
      });

      gsap.to(".glowing-cyan", {
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1
        },
        xPercent: -35,
        yPercent: -25,
        scale: 1.2,
        opacity: 0.28
      });

      // Hero Entrance
      const heroTl = gsap.timeline();
      heroTl.fromTo(".hero-pretitle", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
            .fromTo(".hero-title", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" }, "-=0.4")
            .fromTo(".hero-desc", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.5")
            .fromTo(".hero-actions", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
            .fromTo(".profile-card-container", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.2)" }, "-=0.6");

      // Bento Grid Scroll Animation
      if (bentoGridRef.current) {
        gsap.fromTo(".bento-card", 
          { opacity: 0, y: 40 },
          {
            scrollTrigger: {
              trigger: bentoGridRef.current,
              start: "top 80%",
              toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out"
          }
        );
      }

      // 3D MVC Stack Layer Splitting Scroll Animation
      gsap.fromTo(".mvc-layer", 
        { transform: "translateZ(0px)", opacity: 0.3 },
        {
          scrollTrigger: {
            trigger: ".mvc-visual-container",
            start: "top 85%",
            end: "bottom 30%",
            scrub: 0.5
          },
          transform: (index) => {
            const Zs = [120, 40, -40, -120];
            return `translateZ(${Zs[index]}px)`;
          },
          opacity: 1,
          stagger: 0.05,
          ease: "power2.out"
        }
      );

      // Architecture Projects Scroll Animations
      const projectBlocks = gsap.utils.toArray(".project-item");
      projectBlocks.forEach((block) => {
        gsap.fromTo(block.querySelectorAll(".project-details, .mvc-visual-container, .mern-visual-container"), 
          { opacity: 0, y: 50 },
          {
            scrollTrigger: {
              trigger: block,
              start: "top 75%",
              toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"
          }
        );
      });

      // Console Playground Reveal
      gsap.fromTo(".console-panel", 
        { opacity: 0, y: 60 },
        {
          scrollTrigger: {
            trigger: "#terminal",
            start: "top 75%"
          },
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out"
        }
      );

      // Contact Panel Reveal
      if (contactRef.current) {
        gsap.fromTo(".contact-grid", 
          { opacity: 0, y: 40 },
          {
            scrollTrigger: {
              trigger: "#contact",
              start: "top 75%"
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
          }
        );
      }
    }, mainRef);

    return () => ctx.revert();
  }, []);

  // 3D Profil Card Rotation Effect
  const handleCardMouseMove = (e) => {
    const card = profileCardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(card, {
      rotateY: x * 0.12,
      rotateX: -y * 0.12,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleCardMouseLeave = () => {
    const card = profileCardRef.current;
    if (!card) return;
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.3)'
    });
  };

  // Bento Card Glow Border Effect
  const handleGlowCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  // Execute terminal console command
  const executeCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let responseContent = '';
    let status = '200 OK';
    let latency = `${Math.floor(Math.random() * 20) + 5}ms`;

    if (cleanCmd === 'clear') {
      setTerminalHistory([]);
      return;
    }

    if (cleanCmd === 'help') {
      responseContent = `Available API Gateway Commands:
  - GET /api/v1/projects        : Fetch detailed developer architected projects
  - GET /api/v1/skills          : Fetch comprehensive technical system skills
  - GET /api/v1/education       : Fetch academic profile & credentials
  - GET /api/v1/certifications  : Fetch system-level certifications
  - POST /api/v1/ping           : Ping the system server node
  - CLEAR                       : Reset console outputs`;
    } else if (cleanCmd === 'get /api/v1/projects' || cleanCmd === 'get projects' || cleanCmd === 'projects') {
      responseContent = JSON.stringify(apiDatabase.projects, null, 2);
    } else if (cleanCmd === 'get /api/v1/skills' || cleanCmd === 'get skills' || cleanCmd === 'skills') {
      responseContent = JSON.stringify(apiDatabase.skills, null, 2);
    } else if (cleanCmd === 'get /api/v1/education' || cleanCmd === 'get education' || cleanCmd === 'education') {
      responseContent = JSON.stringify(apiDatabase.education, null, 2);
    } else if (cleanCmd === 'get /api/v1/certifications' || cleanCmd === 'get certifications' || cleanCmd === 'certifications') {
      responseContent = JSON.stringify(apiDatabase.certifications, null, 2);
    } else if (cleanCmd === 'post /api/v1/ping' || cleanCmd === 'ping' || cleanCmd === 'post ping') {
      status = '200 OK';
      responseContent = JSON.stringify({
        status: "ONLINE",
        message: "PONG",
        clientHost: window.location.host || "localhost",
        timestamp: new Date().toISOString()
      }, null, 2);
    } else {
      status = '404 NOT FOUND';
      responseContent = `Error: Route not registered. Code [404]
Query: "${cmd}"
Action: Enter "help" to list valid API gateway endpoints.`;
    }

    setConsoleStatus(status);
    setConsoleLatency(latency);

    setTerminalHistory(prev => [
      ...prev,
      { type: 'input', content: cmd },
      { type: 'output', content: responseContent, status, latency }
    ]);

    // Scroll to bottom of terminal
    setTimeout(() => {
      if (terminalBodyRef.current) {
        terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
      }
    }, 50);
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;
    executeCommand(terminalInput);
    setTerminalInput('');
  };

  // Submit Contact Form (routes to API console & submits to Netlify Forms)
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitSuccess(false);

    // Scroll to terminal to show route logs
    const termSection = document.getElementById('terminal');
    if (termSection) {
      termSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Simulate logs in console
    setTimeout(() => {
      setTerminalHistory(prev => [
        ...prev,
        { type: 'input', content: `POST /api/v1/contact --data '{ name: "${formData.name}", email: "${formData.email}" }'` }
      ]);
    }, 600);

    setTimeout(() => {
      setTerminalHistory(prev => [
        ...prev,
        { type: 'system', content: '>>> PINGING SMTP MAIL GATEWAY SERVICE...' }
      ]);
    }, 1200);

    // Submit to Netlify forms
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contact",
        ...formData
      }).toString()
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        
        setTimeout(() => {
          const responseText = JSON.stringify({
            success: true,
            message: "Message received successfully via Netlify Forms.",
            recordId: `msg_${Math.random().toString(36).substr(2, 9)}`,
            timestamp: new Date().toISOString()
          }, null, 2);

          setConsoleStatus('201 CREATED');
          setConsoleLatency('185ms');

          setTerminalHistory(prev => [
            ...prev,
            { type: 'output', content: responseText, status: '201 CREATED', latency: '185ms' },
            { type: 'system', content: `[SYSTEM] Email payload routed to Netlify Forms & ${userEmail} successfully.` }
          ]);

          setIsSubmitting(false);
          setSubmitSuccess(true);
          setFormData({ name: '', email: '', message: '' });

          if (terminalBodyRef.current) {
            terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
          }
        }, 1300);
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        
        setTimeout(() => {
          setConsoleStatus('500 ERROR');
          setConsoleLatency('140ms');

          setTerminalHistory(prev => [
            ...prev,
            { 
              type: 'output', 
              content: JSON.stringify({
                success: false,
                error: error.message || "Failed to submit message to Netlify Forms"
              }, null, 2), 
              status: '500 ERROR', 
              latency: '140ms' 
            },
            { type: 'system', content: `[SYSTEM] [ERROR] Failed to route email payload. Routing failed.` }
          ]);

          setIsSubmitting(false);
        }, 1300);
      });
  };

  return (
    <div ref={mainRef} className="app-container">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress"></div>

      {/* Film Grain & Spotlights */}
      <div className="film-grain"></div>
      <div className="spotlight-wrapper">
        <div className="spotlight glowing-emerald"></div>
        <div className="spotlight glowing-cyan"></div>
      </div>

      {/* Custom follower cursor */}
      <div ref={cursorRef} className="custom-cursor"></div>

      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="logo-text">
            <ScrambleText text="RAHUL" />
            <span className="logo-accent">
              <ScrambleText text=".RAJ()" />
            </span>
          </a>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  <ScrambleText text={item.label} />
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-social">
            <a href={userGithub} target="_blank" rel="noreferrer" className="contact-icon-box hoverable" style={{ width: '40px', height: '40px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
            </a>
            <a href={userLinkedin} target="_blank" rel="noreferrer" className="contact-icon-box hoverable" style={{ width: '40px', height: '40px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href={`mailto:${userEmail}`} className="contact-icon-box hoverable" style={{ width: '40px', height: '40px' }}>
              <Mail size={18} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-wrapper" id="intro">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="status-tag">
              <span className="status-dot"></span>
              SYSTEM STATUS: <span className="flicker-text-slow glow-text-emerald" style={{ fontWeight: 'bold' }}>ONLINE</span>
            </div>
            <span className="hero-pretitle">
              INITIALIZING: <Typewriter words={['Backend & Systems Engineer', 'Spring Boot Architect', 'REST API Designer', 'Scalable System Builder']} />
            </span>
            <h1 className="hero-title">
              BUILDING CODE <br />
              <span className="animated-gradient-text glow-text-emerald">THAT LASTS.</span>
            </h1>
            <p className="hero-desc">
              Backend-focused Computer Science engineer specializing in production-pattern REST APIs using 
              <span style={{ color: 'var(--text-light)', fontWeight: 600 }}> Spring Boot </span> and 
              <span style={{ color: 'var(--text-light)', fontWeight: 600 }}> Java</span>. Layered architectures, DTO patterns, and system resilience.
            </p>
            <div className="hero-actions">
              <a href="#terminal" className="btn-premium hoverable">
                <Terminal size={18} /> Run Diagnostics
              </a>
              <a href="#architecture" className="btn-premium-outline hoverable">
                View Blueprints <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="profile-card-container">
            <div 
              className="profile-card"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              ref={profileCardRef}
            >
              <div className="profile-card-glow"></div>
              <div className="profile-card-inner">
                <button 
                  className="shape-toggle-btn hoverable"
                  onClick={(e) => {
                    e.stopPropagation();
                    const shapes = ['circle', 'rounded-rect', 'squircle', 'hexagon'];
                    const nextIdx = (shapes.indexOf(avatarShape) + 1) % shapes.length;
                    setAvatarShape(shapes[nextIdx]);
                  }}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'var(--text)',
                    borderRadius: '8px',
                    padding: '0.25rem 0.5rem',
                    fontSize: '0.65rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    transition: 'all 0.3s ease'
                  }}
                  title="Change Avatar Shape"
                >
                  <span style={{ 
                    display: 'inline-block', 
                    width: '8px', 
                    height: '8px', 
                    border: '1px solid var(--accent-cyan)', 
                    borderRadius: avatarShape === 'circle' ? '50%' : avatarShape === 'rounded-rect' ? '2px' : avatarShape === 'squircle' ? '40% 60%' : '0px',
                    transform: avatarShape === 'hexagon' ? 'rotate(45deg)' : 'none',
                    background: 'transparent',
                    transition: 'all 0.3s ease'
                  }}></span>
                  {avatarShape === 'rounded-rect' ? 'SQUARE' : avatarShape.toUpperCase()}
                </button>
                <div className={`profile-image-wrap shape-${avatarShape}`}>
                  <img src={profileImg} alt={userName} className="profile-image" />
                  <div className="profile-scanline"></div>
                </div>
                <div className="profile-info">
                  <h3 className="profile-name">{userName}</h3>
                  <p className="profile-title">System.Architect.init()</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostics Bento Grid */}
      <section id="diagnostics">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-num">01 / TELEMETRY</span>
            <h2 className="section-title">
              <ScrambleText text="System Telemetry" />
            </h2>
          </div>

          <div ref={bentoGridRef} className="bento-grid">
            {/* Bio Summary Card (Core Processor Unit) */}
            <div className="bento-card bento-col-2 glass-panel glow-card" onMouseMove={handleGlowCardMouseMove}>
              <div className="glow-card-content">
                <div className="bento-card-title-wrap">
                  <Cpu className="bento-card-icon" size={20} />
                  <h3 className="bento-card-title">
                    <ScrambleText text="Core Processing Unit (CPU)" />
                  </h3>
                </div>
                <p className="bio-p">
                  I construct layered, maintainable software architectures. I focus on separating concerns cleanly, 
                  implementing strong data validations, and standardizing global exceptions. Looking to tackle hard 
                  problems at scale with a focus on code stability and long-term maintainability.
                </p>
                <div className="bio-metrics">
                  <div className="bio-metric-card">
                    <div className="bio-metric-num">15+</div>
                    <div className="bio-metric-label">Designed APIs</div>
                  </div>
                  <div className="bio-metric-card">
                    <div className="bio-metric-num">99.9%</div>
                    <div className="bio-metric-label">Uptime Target</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Skills Card */}
            <div className="bento-card bento-row-2 glass-panel glow-card" onMouseMove={handleGlowCardMouseMove}>
              <div className="glow-card-content">
                <div className="bento-card-title-wrap">
                  <Code className="bento-card-icon" size={20} />
                  <h3 className="bento-card-title">
                    <ScrambleText text="Stack Inventory" />
                  </h3>
                </div>
                <div className="skills-sec">
                  <h4 className="skills-sec-title">Languages</h4>
                  <div className="skills-badges">
                    <span className="badge">Java</span>
                    <span className="badge">JavaScript</span>
                    <span className="badge">SQL</span>
                    <span className="badge">HTML5/CSS3</span>
                  </div>
                </div>
                <div className="skills-sec">
                  <h4 className="skills-sec-title">Backend Architecture</h4>
                  <div className="skills-badges">
                    <span className="badge">Spring Boot</span>
                    <span className="badge">Node.js</span>
                    <span className="badge">Express.js</span>
                    <span className="badge">REST API Design</span>
                    <span className="badge">JPA/Hibernate</span>
                  </div>
                </div>
                <div className="skills-sec">
                  <h4 className="skills-sec-title">Databases & State</h4>
                  <div className="skills-badges">
                    <span className="badge">MySQL</span>
                    <span className="badge">MongoDB</span>
                    <span className="badge">Mongoose ODM</span>
                    <span className="badge">Redux Toolkit</span>
                  </div>
                </div>
                <div className="skills-sec">
                  <h4 className="skills-sec-title">Frameworks & Tools</h4>
                  <div className="skills-badges">
                    <span className="badge">React.js</span>
                    <span className="badge">Vite</span>
                    <span className="badge">Git / GitHub</span>
                    <span className="badge">Postman</span>
                    <span className="badge">VS Code</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Credentials Card (Percentages Removed) */}
            <div className="bento-card glass-panel glow-card" onMouseMove={handleGlowCardMouseMove}>
              <div className="glow-card-content">
                <div className="bento-card-title-wrap">
                  <BookOpen className="bento-card-icon" size={20} />
                  <h3 className="bento-card-title">
                    <ScrambleText text="Academic Registry" />
                  </h3>
                </div>
                <div className="edu-list">
                  <div className="edu-item">
                    <span className="edu-dot"></span>
                    <div className="edu-header">
                      <span className="edu-school">Galgotias University</span>
                      <span className="edu-date">2022 – 2026</span>
                    </div>
                    <p className="edu-degree">Bachelor of Technology - Computer Science</p>
                  </div>
                  <div className="edu-item">
                    <span className="edu-dot"></span>
                    <div className="edu-header">
                      <span className="edu-school">St. Dominic Savio's</span>
                      <span className="edu-date">2020 – 2021</span>
                    </div>
                    <p className="edu-degree">Senior Secondary Credentials (PCM)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="bento-card bento-col-2 glass-panel glow-card" onMouseMove={handleGlowCardMouseMove}>
              <div className="glow-card-content">
                <div className="bento-card-title-wrap">
                  <Award className="bento-card-icon" size={20} />
                  <h3 className="bento-card-title">
                    <ScrambleText text="Verified Credentials" />
                  </h3>
                </div>
                <div className="cert-list">
                  <div className="cert-item">
                    <div className="cert-info">
                      <span className="cert-name">NPTEL – Software Engineering</span>
                      <span className="cert-issuer">National Programme on Technology Enhanced Learning</span>
                    </div>
                    <span className="cert-badge">Silver Medal, Top 2%</span>
                  </div>
                  <div className="cert-item">
                    <div className="cert-info">
                      <span className="cert-name">Cybersecurity Virtual Internship</span>
                      <span className="cert-issuer">Palo Alto Networks</span>
                    </div>
                    <span className="cert-badge">Verified Internship</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="architecture" ref={projectsRef}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-num">02 / BLUEPRINTS</span>
            <h2 className="section-title">
              <ScrambleText text="Architectural Blueprints" />
            </h2>
          </div>

          <div className="projects-layout">
            {/* Project 1 - Spring Boot */}
            <div className="project-item">
              <div className="project-details">
                <span className="project-tagline">High Performance Spring Boot MVC</span>
                <h3 className="project-name">
                  <ScrambleText text="Blog Service REST API" />
                </h3>
                <div className="project-desc-panel">
                  <p>
                    A fully-featured backend REST API architected with Spring Boot. Organizes code layers cleanly to guarantee maintainability, database normalization, request verification, and centralized fault diagnostics.
                  </p>
                </div>
                <ul className="project-features">
                  <li className="project-feature-item">
                    <CheckCircle2 size={16} className="project-feature-icon" />
                    <span>Clean 4-Layer System: Controller, Service, Repository, DTO.</span>
                  </li>
                  <li className="project-feature-item">
                    <CheckCircle2 size={16} className="project-feature-icon" />
                    <span>Spring DTO request checking utilizing @NotBlank and @Size parameters.</span>
                  </li>
                  <li className="project-feature-item">
                    <CheckCircle2 size={16} className="project-feature-icon" />
                    <span>Centralized RestControllerAdvice standardizing global JSON error structures.</span>
                  </li>
                  <li className="project-feature-item">
                    <CheckCircle2 size={16} className="project-feature-icon" />
                    <span>JPA ElementCollection preventing database query jank (N+1 query issue).</span>
                  </li>
                </ul>
                <div className="project-tech">
                  <span className="badge">Spring Boot</span>
                  <span className="badge">Java</span>
                  <span className="badge">MySQL</span>
                  <span className="badge">JPA / Hibernate</span>
                  <span className="badge">Postman</span>
                </div>
                <div className="project-links">
                  <a href={`${userGithub}/ZBlog`} target="_blank" rel="noreferrer" className="btn-premium hoverable">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg> Source Code <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* 3D layer visualizer */}
              <div className="mvc-visual-container">
                <div className="mvc-stack">
                  <div className="mvc-layer mvc-layer-1">
                    CONTROLLER LAYER
                    <span className="mvc-layer-desc">8 REST Endpoints / DTO Mapping</span>
                  </div>
                  <div className="mvc-layer mvc-layer-2">
                    SERVICE LAYER
                    <span className="mvc-layer-desc">Blog Lifecycle / Business Flow</span>
                  </div>
                  <div className="mvc-layer mvc-layer-3">
                    REPOSITORY LAYER
                    <span className="mvc-layer-desc">JPA / ElementCollection</span>
                  </div>
                  <div className="mvc-layer mvc-layer-4">
                    DATABASE LAYER
                    <span className="mvc-layer-desc">MySQL / 2-Table Schema</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 - MERN */}
            <div className="project-item reverse">
              <div className="project-details">
                <span className="project-tagline">Full-Stack MERN Node Pipeline</span>
                <h3 className="project-name">
                  <ScrambleText text="Contact Submission System" />
                </h3>
                <div className="project-desc-panel">
                  <p>
                    A full-stack CRUD pipeline designed to manage web submissions. Implements reactive data streams between React UI components, Node middleware, and Mongo database schemas.
                  </p>
                </div>
                <ul className="project-features">
                  <li className="project-feature-item">
                    <CheckCircle2 size={16} className="project-feature-icon" />
                    <span>Robust Express.js routing supporting 5 REST API gateway endpoints.</span>
                  </li>
                  <li className="project-feature-item">
                    <CheckCircle2 size={16} className="project-feature-icon" />
                    <span>Mongoose schema validation ensuring required constraints and email uniqueness.</span>
                  </li>
                  <li className="project-feature-item">
                    <CheckCircle2 size={16} className="project-feature-icon" />
                    <span>Reactive state flow across 3 custom modules built with Flowbite UI.</span>
                  </li>
                </ul>
                <div className="project-tech">
                  <span className="badge">React.js</span>
                  <span className="badge">Node.js</span>
                  <span className="badge">Express.js</span>
                  <span className="badge">MongoDB</span>
                  <span className="badge">Mongoose ODM</span>
                </div>
                <div className="project-links">
                  <a href={`${userGithub}/User-Enquiry-Form-MERNStack`} target="_blank" rel="noreferrer" className="btn-premium hoverable">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg> Source Code <ExternalLink size={14} />
                  </a>
                  <a href="#terminal" onClick={() => executeCommand('get /api/v1/projects')} className="btn-premium-outline hoverable">
                    <Terminal size={18} /> Run Diagnostics API
                  </a>
                </div>
              </div>

              {/* MERN circular node visualizer */}
              <div className="mern-visual-container">
                <div className="mern-circle-wrap">
                  <svg className="mern-svg-line">
                    <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="5" />
                    <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="5" />
                    <circle cx="50%" cy="50%" r="90" fill="none" stroke="rgba(16, 185, 129, 0.1)" strokeWidth="1" strokeDasharray="8" />
                  </svg>
                  <div className="mern-center">MERN CORE</div>
                  <div className="mern-node mern-node-m">
                    MongoDb
                    <span className="mern-node-desc">Database</span>
                  </div>
                  <div className="mern-node mern-node-e">
                    Express
                    <span className="mern-node-desc">Routing</span>
                  </div>
                  <div className="mern-node mern-node-r">
                    React
                    <span className="mern-node-desc">Client UI</span>
                  </div>
                  <div className="mern-node mern-node-n">
                    Node
                    <span className="mern-node-desc">Server</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section id="terminal">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-num">03 / CORE SANDBOX</span>
            <h2 className="section-title">
              <ScrambleText text="Core API Sandbox" />
            </h2>
          </div>

          <div className="console-panel">
            <div className="console-header">
              <div className="console-buttons">
                <span className="console-btn-dot console-btn-close"></span>
                <span className="console-btn-dot console-btn-minimize"></span>
                <span className="console-btn-dot console-btn-maximize"></span>
              </div>
              <div className="console-title">
                <Terminal size={14} className="logo-accent" />
                <span>api-gateway-v1.0.4.sh</span>
              </div>
              <div className="console-tab">HTTP Status: {consoleStatus}</div>
            </div>

            <div ref={terminalBodyRef} className="console-body">
              <div className="console-welcome">
                <div className="console-welcome-title">Welcome to Rahul's API Gateway Console</div>
                <div className="console-welcome-desc">
                  Select one of the shortcuts below to query the database, or type an endpoint manually.
                </div>
              </div>

              {/* Console Option Shortcuts */}
              <div className="console-options-panel">
                <button 
                  className="console-opt-btn hoverable" 
                  onClick={() => executeCommand('get /api/v1/projects')}
                >
                  <Play size={12} style={{ color: 'var(--accent-cyan)' }} /> GET /projects
                </button>
                <button 
                  className="console-opt-btn hoverable" 
                  onClick={() => executeCommand('get /api/v1/skills')}
                >
                  <Play size={12} style={{ color: 'var(--accent-cyan)' }} /> GET /skills
                </button>
                <button 
                  className="console-opt-btn hoverable" 
                  onClick={() => executeCommand('get /api/v1/education')}
                >
                  <Play size={12} style={{ color: 'var(--accent-cyan)' }} /> GET /education
                </button>
                <button 
                  className="console-opt-btn hoverable" 
                  onClick={() => executeCommand('get /api/v1/certifications')}
                >
                  <Play size={12} style={{ color: 'var(--accent-cyan)' }} /> GET /certifications
                </button>
                <button 
                  className="console-opt-btn hoverable" 
                  onClick={() => executeCommand('post /api/v1/ping')}
                >
                  <Play size={12} style={{ color: 'var(--accent-cyan)' }} /> POST /ping
                </button>
                <button 
                  className="console-opt-btn hoverable" 
                  onClick={() => executeCommand('clear')}
                  style={{ borderColor: 'rgba(239, 68, 68, 0.2)' }}
                >
                  <X size={12} style={{ color: '#ef4444' }} /> CLEAR
                </button>
              </div>

              {/* Terminal Logs History */}
              {terminalHistory.map((line, idx) => (
                <div key={idx} className="console-history-item">
                  {line.type === 'input' && (
                    <div className="console-line-input">
                      <span className="console-prompt-user">guest@rahulraj.api</span>
                      <span className="console-prompt-dir">:~$</span>
                      <span>{line.content}</span>
                    </div>
                  )}

                  {line.type === 'output' && (
                    <>
                      <div className="console-output-meta">
                        <span>STATUS: <span className={`meta-status ${line.status.includes('20') ? 'status-200' : 'status-404'}`}>{line.status}</span></span>
                        <span>LATENCY: <span style={{ color: 'var(--accent-cyan)' }}>{line.latency}</span></span>
                        <span>TYPE: application/json</span>
                      </div>
                      <pre className="console-json-output">{line.content}</pre>
                    </>
                  )}

                  {line.type === 'system' && (
                    <div style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                      {line.content}
                    </div>
                  )}
                </div>
              ))}

              {/* Command input prompt */}
              <form onSubmit={handleTerminalSubmit} className="console-line-input" style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                <span className="console-prompt-user">guest@rahulraj.api</span>
                <span className="console-prompt-dir">:~$</span>
                <input 
                  type="text" 
                  className="console-input-field" 
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="Enter command, e.g. GET /api/v1/skills..."
                />
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-num">04 / HANDSHAKE</span>
            <h2 className="section-title">
              <ScrambleText text="Inbound Connection Handshake" />
            </h2>
          </div>

          <div className="contact-grid">
            <div className="contact-info-panel">
              <div className="contact-card-item">
                <div className="contact-icon-box">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="contact-card-label">SMTP Gateway</div>
                  <a href={`mailto:${userEmail}`} className="contact-card-value hoverable">
                    {userEmail}
                  </a>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <div>
                  <div className="contact-card-label">LinkedIn Connection</div>
                  <a href={userLinkedin} target="_blank" rel="noreferrer" className="contact-card-value hoverable">
                    {userLinkedin.replace("https://", "").replace("www.", "")}
                  </a>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
                </div>
                <div>
                  <div className="contact-card-label">Git Inventory</div>
                  <a href={userGithub} target="_blank" rel="noreferrer" className="contact-card-value hoverable">
                    {userGithub.replace("https://", "").replace("www.", "")}
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-panel">
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                data-netlify-honeypot="bot-field"
                onSubmit={handleContactSubmit}
              >
                {/* Netlify form identifiers */}
                <input type="hidden" name="form-name" value="contact" />
                <div style={{ display: 'none' }}>
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </div>

                <div className="form-group-grid">
                  <div className="form-group">
                    <label className="form-label">Packet Origin</label>
                    <input 
                      type="text" 
                      name="name"
                      className="form-input" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Aarav Sharma"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Routing Mailbox</label>
                    <input 
                      type="email" 
                      name="email"
                      className="form-input" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. aarav.sharma@company.in"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Payload Body</label>
                  <textarea 
                    name="message"
                    className="form-input" 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter your system request details..."
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-premium hoverable" 
                  style={{ width: '100%', justifyContent: 'center' }}
                  disabled={isSubmitting}
                >
                  <Send size={18} /> {isSubmitting ? 'Routing Payload...' : 'Transmit Packet'}
                </button>

                {submitSuccess && (
                  <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                    <CheckCircle2 size={16} /> Connection request queued. Scroll up to API Gateway to view dispatch logs!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-text">
            © {new Date().getFullYear()} {userName}. Code built to last.
          </div>
          <div className="footer-tech-note">
            Built with <span className="footer-heart">React</span> + <span style={{ color: 'var(--accent-cyan)' }}>Vite</span> + <span style={{ color: '#818cf8' }}>GSAP</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
