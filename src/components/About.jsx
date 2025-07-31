import React, { useMemo, useRef } from "react";

const certifications = [
  { name: "Google Cybersecurity Certificate", date: "June 2025", img: "/certs/google.jpg", link: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/0VSH61JTP9V7" },
  { name: "AWS Cloud Practitioner Essentials", date: "Completed 2023", img: "/certs/aws.jpg", link: "/certs/aws_certificate.pdf" },
  { name: "Harvard CS50 & CS50 AI", date: "June 2021 and April 2024", img: "/certs/harvard.png", link: "https://courses.edx.org/certificates/da60aca3c1074a7d88731154737c5bf8" },
  { name: "Jira Fundamentals Badge", date: "May 2024", img: "/certs/Jira.png", link: "https://university.atlassian.com/student/award/sxnL92PkREM3QrC5WpqGgHeF" },
];

// Reduced-motion helper
const useReducedMotion = () =>
  useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

const About = () => {
  const scrollerRef = useRef(null);
  const reduced = useReducedMotion();

  const scrollByCard = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector(".cert-card");
    const w = card ? card.getBoundingClientRect().width : 260;
    el.scrollBy({ left: dir * (w + 12), top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <section id="about" className="about2">
      <div className="spotlight" aria-hidden />
      {/* Hero: left = about, right = timeline */}
      <div className="about2__hero">
        <div className="hero__main">
          <div className="hero__title">
            <h2>About Me</h2>
            <p className="hero__tag">CS @ Cal Poly • Full-Stack • Security • AI</p>
          </div>

          <p className="hero__body">
            I’m a Computer Science student at Cal Poly, San Luis Obispo, passionate about building tech that’s useful, scalable, and fun to use. From revamping a chess app and creating AI-driven feedback systems to designing a Unity-based Capture The Flag game for a national cybersecurity event, I love taking on projects that blend creativity with real-world impact. Outside of CS, I enjoy playing basketball and cricket, and I’m a big fan of Formula 1. I'm always up for solving tough problems that matter.
          </p>

            <div className="strip" role="listitem"><span className="k">Now</span> Working on fileless-malware detection and a RAG-powered chess tool that gives move-by-move feedback.</div>
            <div className="strip" role="listitem"><span className="k k--alt">Next</span> Looking for software engineering roles where I can grow, contribute, and build meaningful products.</div>
            <div className="strip" role="listitem"><span className="k k--ghost">Ask</span> “What’s a project you worked on that changed how you think?”</div>

          <div className="hero__cta">
            <a className="btn btn-primary" href="/Srikar,Amirneni-Resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
            <a className="btn btn-secondary" href="mailto:samirnen@calpoly.edu">Contact</a>
          </div>

          <div className="hero__facts" aria-label="Quick facts">
            <span className="chip">React</span>
            <span className="chip">Python</span>
            <span className="chip">SQL</span>
            <span className="chip">Security</span>
            <span className="chip">Langchain</span>
          </div>
        </div>

        {/* Timeline occupies the right column */}
        <section className="panel timeline" aria-labelledby="tl-h">
          <h3 id="tl-h">Recent Timeline</h3>
          <ul>
            <li>
              <div className="dot" aria-hidden />
              <div className="event">
                <h4>Harrow Services</h4>
                <p>Designed and architected a full-stack website and mobile app for a baseball coaching company to enhance player tracking and attract new clients through better marketing tools.</p>
               <span className="when">2025</span>
              </div>
            </li>
            <li>
              <div className="dot" aria-hidden />
              <div className="event">
                <h4>SmallEco</h4>
                <p>Revamped SmallEco’s chess app, improving both the user experience and overall interface design.</p> 
                <span className="when">2025</span>
              </div>
            </li>
            <li>
              <div className="dot" aria-hidden />
              <div className="event">
                <h4>Space Grand Challenge</h4>
                  <p>Developed and launched a Unity-based game for the Space Grand Challenge CTF event, and provided ongoing support to participants as they worked through the challenges.</p>
                <span className="when">2025</span>
              </div>
            </li>
          </ul>
        </section>
      </div>

      {/* Full-width certifications rail under hero */}
      <section className="panel certs certs--full" aria-labelledby="cert-h">
        <div className="certs__head">
          <h3 id="cert-h">Certifications</h3>
        </div>

        <div
          className="certs__rail"
          ref={scrollerRef}
          tabIndex={0}
          role="listbox"
          aria-label="Certificates"
        >
          {certifications.map((c) => (
            <a
              key={c.name}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
              role="option"
              aria-label={`${c.name} — ${c.date}`}
            >
              <img src={c.img} alt={c.name} loading="lazy" />
              <div className="meta">
                <div className="name">{c.name}</div>
                <div className="date">{c.date}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </section>
  );
};

export default About;
