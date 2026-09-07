import { useState, type ComponentType } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  Database,
  Download,
  FileSpreadsheet,
  GraduationCap,
  Hand,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  MousePointer2,
  ScanLine,
  Sparkles,
  Table2,
  X,
} from "lucide-react";

import portraitAsset from "@/assets/mahendra-portrait.jpeg.asset.json";
import resumeAsset from "@/assets/galla-mahendra-resume.pdf.asset.json";

const linkedInUrl = "https://www.linkedin.com/in/galla-mahendra-240997298/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Galla Mahendra | Data Analyst & Software Engineer" },
      { name: "description", content: "Portfolio of Galla Mahendra — Data Analyst and Software Engineer skilled in Python, SQL, Power BI, Excel, AI & DS, analytics projects, internships, and certifications." },
      { property: "og:title", content: "Galla Mahendra | Data Analyst & Software Engineer" },
      { property: "og:description", content: "Explore Galla Mahendra's data analytics and software engineering projects, skills, internships, education, and certifications." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type IconType = ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
type Accent = "primary" | "secondary" | "accent-green" | "accent-violet" | "accent-amber" | "accent-cyan";

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Certifications", "certifications"],
  ["Contact", "contact"],
] as const;

const skillGroups: { title: string; icon: IconType; accent: string; items: string[] }[] = [
  { title: "Programming", icon: Code2, accent: "text-primary", items: ["Python", "SQL"] },
  { title: "Data Analytics", icon: BarChart3, accent: "text-secondary", items: ["Advanced Excel", "Power BI", "Power Query", "Pivot Tables", "Pivot Charts", "ETL", "Data Cleaning", "Data Preprocessing", "EDA", "Data Visualization", "Dashboard Development", "KPI Reporting"] },
  { title: "SQL", icon: Database, accent: "text-accent-green", items: ["SELECT", "JOINs", "Subqueries", "GROUP BY", "HAVING", "ORDER BY", "Aggregate Functions"] },
  { title: "Machine Learning", icon: BrainCircuit, accent: "text-accent-violet", items: ["Machine Learning Fundamentals", "Supervised Learning", "Unsupervised Learning", "Classification", "Regression", "Feature Engineering", "Data Preprocessing", "EDA", "Model Training & Evaluation"] },
  { title: "Tools & Platforms", icon: Table2, accent: "text-accent-amber", items: ["Microsoft Excel", "Microsoft Office", "Power BI", "MySQL", "Jupyter Notebook", "VS Code"] },
  { title: "Core Strengths", icon: Sparkles, accent: "text-primary", items: ["Analytical Thinking", "Problem Solving", "Communication"] },
];

const projectAccentClasses: Record<Accent, { text: string; bg: string; border: string; soft: string }> = {
  primary: { text: "text-primary", bg: "bg-primary", border: "border-primary/25", soft: "bg-primary/10" },
  secondary: { text: "text-secondary", bg: "bg-secondary", border: "border-secondary/25", soft: "bg-secondary/10" },
  "accent-green": { text: "text-accent-green", bg: "bg-accent-green", border: "border-accent-green/25", soft: "bg-accent-green/10" },
  "accent-violet": { text: "text-accent-violet", bg: "bg-accent-violet", border: "border-accent-violet/25", soft: "bg-accent-violet/10" },
  "accent-amber": { text: "text-accent-amber", bg: "bg-accent-amber", border: "border-accent-amber/25", soft: "bg-accent-amber/10" },
  "accent-cyan": { text: "text-accent-cyan", bg: "bg-accent-cyan", border: "border-accent-cyan/25", soft: "bg-accent-cyan/10" },
};

const resumeProjects: { number: string; title: string; tech: string[]; icon: IconType; accent: Accent; description: string; details: string[]; visual: string }[] = [
  {
    number: "01",
    title: "Diabetes Prediction Using Machine Learning",
    tech: ["Python", "Machine Learning"],
    icon: BrainCircuit,
    accent: "primary",
    description: "A machine learning-based decision support system to assess diabetes risk using structured healthcare data.",
    details: ["Missing value handling", "Feature normalization", "Input validation", "Non-linear patterns", "Probability-based risk categorization: low-risk, high-risk, borderline"],
    visual: "risk",
  },
  {
    number: "02",
    title: "Supermarket Sales and Performance Analysis",
    tech: ["SQL"],
    icon: Database,
    accent: "secondary",
    description: "In-depth analysis on 9,994+ supermarket sales records using advanced SQL to surface performance patterns.",
    details: ["SELECT, JOINs, Subqueries", "GROUP BY, HAVING, ORDER BY", "Aggregate functions", "Revenue trends and profit patterns", "Customer segment performance, top-performing cities, high-revenue categories, loss-incurring sub-categories"],
    visual: "bars",
  },
  {
    number: "03",
    title: "Retail Sales Dashboard",
    tech: ["Microsoft Excel"],
    icon: FileSpreadsheet,
    accent: "accent-green",
    description: "A Retail Sales Analytics Dashboard built to monitor performance from cleaned and transformed raw sales data.",
    details: ["Pivot Tables and Pivot Charts", "Slicers and Conditional Formatting", "Monthly trends and city-wise performance", "Top-selling products", "Revenue distribution and performance monitoring"],
    visual: "sheets",
  },
  {
    number: "04",
    title: "Power BI Sales Analytics Dashboard",
    tech: ["Power BI", "Power Query"],
    icon: BarChart3,
    accent: "accent-violet",
    description: "Interactive Amazon and Adidas sales dashboards with KPI cards, visual analysis, Power Query cleaning, and DAX.",
    details: ["Total Sales, Profit, Quantity, Units Sold", "Bar, line, donut, funnel, and gauge charts", "Slicers for Category, Region, Gender, Year", "Regional, category, quarterly, and monthly analysis"],
    visual: "dashboard",
  },
];

const additionalProjects: { number: string; title: string; tech: string[]; icon: IconType; accent: Accent; description: string; details: string[]; visual: string }[] = [
  {
    number: "05",
    title: "COVID-19 Data Analysis",
    tech: ["Python", "pandas", "matplotlib", "seaborn", "Jupyter Notebook"],
    icon: BarChart3,
    accent: "accent-amber",
    description: "A data analysis project exploring global COVID-19 trends using the Our World in Data dataset.",
    details: ["Cleans and processes case, death, and vaccination data", "Filters out non-country aggregate entries", "Visualizes individual-country case trends", "Compares total cases across countries", "Analyzes vaccination rollout progress globally"],
    visual: "covid",
  },
  {
    number: "06",
    title: "Gesture Control Presenter",
    tech: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
    icon: Hand,
    accent: "accent-cyan",
    description: "A computer vision and AI project that controls Google Slides presentations using hand gestures through a laptop camera.",
    details: ["Real-time hand tracking from a webcam", "Open Palm → Next Slide", "Three Fingers → Previous Slide", "Two Fingers → Start Slideshow", "Fist → Exit Slideshow"],
    visual: "gesture",
  },
];

const certifications = [
  ["Data Analytics with Tableau", "Andhra Pradesh State Council of Higher Education, SmartBridge"],
  ["Data Analytics Job Simulation", "Deloitte"],
  ["Data Analytics and Visualization Job Simulation", "Accenture"],
  ["Python Programming Intern Certification", "Vault of Codes (AICTE)"],
  ["TCS iON Career Edge - Young Professional Course", "TCS iON"],
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handlePortraitMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTilt({ x: (event.clientY - rect.top) / rect.height - 0.5, y: (event.clientX - rect.left) / rect.width - 0.5 });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="font-mono text-sm font-bold tracking-[0.18em] text-foreground">MAHENDRA<span className="text-primary">.</span></a>
          <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
            {navItems.map(([label, id]) => <a key={id} href={`#${id}`} className="text-xs font-medium text-muted-foreground transition-colors hover:text-primary">{label}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-flex">Let&apos;s connect</a>
            <button type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="grid size-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-accent xl:hidden">
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-4 xl:hidden" aria-label="Mobile navigation">
          <div className="grid gap-1 sm:grid-cols-4">
            {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm text-muted-foreground hover:bg-accent hover:text-foreground">{label}</a>)}
          </div>
        </nav>}
      </header>

      <main>
        <section id="home" className="hero-wash data-grid relative overflow-hidden pt-32 sm:pt-40">
          <div className="absolute inset-0 bg-background/75" />
          <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pb-28">
            <div className="animate-reveal-up">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                <span className="size-1.5 animate-pulse rounded-full bg-primary" /> Computer Science (AI &amp; DS)
              </div>
              <h1 className="max-w-4xl text-balance text-5xl font-extrabold leading-[0.92] tracking-[-0.055em] text-foreground sm:text-7xl lg:text-8xl">GALLA<br /><span className="bg-linear-to-r from-primary via-accent-cyan to-secondary bg-clip-text text-transparent">MAHENDRA</span></h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">Data Analyst &amp; Software Engineer <span className="text-primary">|</span> Python <span className="text-primary">|</span> SQL <span className="text-primary">|</span> Machine Learning <span className="text-primary">|</span> Power BI <span className="text-primary">|</span> Excel <span className="text-primary">|</span> AI &amp; DS</p>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">A Computer Science (AI &amp; DS) graduate who combines data analytics with software engineering thinking. I write clean Python and SQL, build interactive Power BI and Excel dashboards, and apply machine learning fundamentals to turn raw, messy data into reliable insights and intelligent solutions.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5">View My Projects <ArrowUpRight size={16} /></a>
                <a href={resumeAsset.url} download="Galla-Mahendra-Resume.pdf" className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/70 px-5 py-3.5 text-sm font-bold text-foreground transition-colors hover:bg-accent"><Download size={16} /> Download Resume</a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3.5 text-sm font-bold text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"><MessageCircle size={16} /> Contact Me</a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <a href="tel:+916302777658" className="inline-flex items-center gap-2 hover:text-primary"><span className="text-primary">+91</span> 6302777658</a>
                <a href="mailto:mahendramahe689@gmail.com" className="inline-flex items-center gap-2 hover:text-primary"><Mail size={15} className="text-primary" /> mahendramahe689@gmail.com</a>
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary"><Linkedin size={15} className="text-primary" /> LinkedIn</a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[400px] animate-float-card lg:justify-self-end" onMouseMove={handlePortraitMove} onMouseLeave={() => setTilt({ x: 0, y: 0 })}>
              <div className="absolute -inset-10 rounded-full bg-primary/12 blur-3xl" />
              <div className="relative transition-transform duration-300" style={{ transform: `perspective(1000px) rotateX(${tilt.x * -5}deg) rotateY(${tilt.y * 5}deg)` }}>
                <div className="glass relative rounded-[2rem] p-3 ring-1 ring-foreground/10">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-card">
                    <img src={portraitAsset.url} alt="Galla Mahendra professional portrait" className="h-full w-full object-cover object-center" />
                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-background/90 via-background/15 to-transparent p-5 pt-24">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Data / AI / DS</p>
                      <p className="mt-1 text-sm font-semibold text-foreground">Galla Mahendra</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-5 -right-5 glass rounded-2xl p-3.5">
                    <div className="flex items-center gap-3"><div className="grid size-11 place-items-center rounded-full bg-primary/15 text-lg font-extrabold text-primary">8.9</div><div><p className="text-[10px] uppercase tracking-widest text-muted-foreground">Academic</p><p className="text-sm font-bold text-foreground">CGPA Score</p></div></div>
                  </div>
                  <div className="absolute -left-7 top-10 hidden glass rounded-xl p-3 sm:block"><div className="flex items-center gap-2 text-xs text-muted-foreground"><ScanLine size={15} className="text-accent-cyan" /> Insight-ready</div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative border-y border-border bg-background/45"><div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 text-xs text-muted-foreground sm:grid-cols-3 sm:px-8"><p className="font-mono"><span className="mr-3 text-primary">01</span> Python / SQL</p><p className="font-mono"><span className="mr-3 text-secondary">02</span> Power BI / Excel</p><p className="font-mono"><span className="mr-3 text-accent-green">03</span> Analytics / ML</p></div></div>
        </section>

        <section id="about" className="section-rule bg-background py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionIntro eyebrow="01 / PROFILE" title="Professional summary" icon={Sparkles} />
            <div>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">Computer Science (AI &amp; DS) undergraduate with a blend of data analytics and software engineering skills. Hands-on experience in Python, SQL, Power BI, and Advanced Excel through a six-month data analytics internship and a portfolio of projects spanning healthcare, retail, sales intelligence, and computer vision. Skilled in data cleaning, exploratory data analysis, dashboard development, and machine learning fundamentals, with practical exposure to complex SQL queries and interactive Power BI/Excel dashboards. Certified in data analytics and visualization through Deloitte, Accenture, and SmartBridge.</p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">What sets me apart is the ability to work at the intersection of analytics and engineering: I can query a 9,994-row database with advanced SQL, preprocess and model data in Python, and then present the results as a polished, interactive dashboard a manager can act on. I&apos;m looking for Data Analyst or Software Engineer roles where analytical thinking, clean code, attention to detail, and clear communication turn everyday business data into better decisions.</p>
              <div className="mt-10 flex flex-wrap gap-2">{["Python", "SQL", "Power BI", "Advanced Excel", "Data Cleaning", "EDA", "Dashboard Development", "Machine Learning Fundamentals"].map((item) => <span key={item} className="rounded-full border border-border bg-card/50 px-3.5 py-2 text-sm text-foreground transition-colors hover:border-primary/45 hover:text-primary">{item}</span>)}</div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-rule bg-surface-deep py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionIntro eyebrow="02 / CAPABILITIES" title="Technical skills" icon={Code2} /><p className="mt-5 max-w-2xl text-muted-foreground">A practical, end-to-end toolkit that spans both data analytics and software engineering: Python and SQL for building data pipelines and writing robust queries, Power BI and Excel for reporting, and machine learning fundamentals for prediction — every skill below has been applied in internships or real projects.</p><div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{skillGroups.map(({ title, icon: Icon, accent, items }) => <div key={title} className="group rounded-2xl border border-border bg-card/35 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-card/70"><div className="mb-6 flex items-center justify-between"><div className={`grid size-10 place-items-center rounded-xl bg-accent ${accent}`}><Icon size={19} /></div><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{String(skillGroups.findIndex((group) => group.title === title) + 1).padStart(2, "0")}</span></div><h3 className="text-lg font-bold text-foreground">{title}</h3><div className="mt-5 flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-md border border-border bg-background/45 px-2.5 py-1.5 text-xs text-muted-foreground transition-colors group-hover:text-foreground">{item}</span>)}</div></div>)}</div></div>
        </section>

        <section id="experience" className="section-rule bg-background py-24 sm:py-32"><div className="mx-auto max-w-5xl px-5 sm:px-8"><SectionIntro eyebrow="03 / EXPERIENCE" title="Learning through applied work" icon={BriefcaseBusiness} /><div className="relative mt-14 space-y-10 pl-7 before:absolute before:bottom-4 before:left-[7px] before:top-3 before:w-px before:bg-linear-to-b before:from-primary before:to-secondary">{[
          {role: "Data Analytics Intern", company: "Besant Technologies", label: "6-month offline Data Analytics internship", bullets: ["Trained hands-on across the core analytics stack: SQL, Python, Advanced Excel, Power BI, and machine learning fundamentals", "Performed the complete data lifecycle — extraction, cleaning, transformation, validation, and analysis — to turn raw data into actionable business insights", "Built interactive dashboards and reports combining SQL analysis, Python preprocessing, and basic machine learning tasks, mirroring the day-to-day work of a professional data analyst"], color: "primary" as Accent},
          {role: "Python Programming Intern", company: "Vault of Codes (AICTE)", label: "AICTE-recognized Python programming internship", bullets: ["Strengthened foundational Python programming through structured, AICTE-recognized training", "Developed problem-solving skills by working through programming challenges and applied exercises"], color: "secondary" as Accent},
        ].map(({ role, company, label, bullets, color }) => <article key={role} className="relative rounded-2xl border border-border bg-card/35 p-6 sm:p-8"><span className={`absolute -left-[33px] top-8 grid size-3.5 place-items-center rounded-full ${projectAccentClasses[color].bg} ring-8 ring-background`} /><div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start"><div><p className={`font-mono text-[10px] uppercase tracking-[0.18em] ${projectAccentClasses[color].text}`}>{label}</p><h3 className="mt-3 text-2xl font-bold text-foreground">{role}</h3><p className="mt-1 font-semibold text-muted-foreground">{company}</p></div><span className="rounded-full border border-border bg-background/45 px-3 py-1.5 text-xs text-muted-foreground">Internship</span></div><ul className="mt-7 grid gap-3 text-sm leading-6 text-muted-foreground">{bullets.map((bullet) => <li key={bullet} className="flex gap-3"><Check size={16} className={`mt-1 shrink-0 ${projectAccentClasses[color].text}`} />{bullet}</li>)}</ul></article>)}</div></div></section>

        <section id="projects" className="section-rule bg-surface-deep py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionIntro eyebrow="04 / SELECTED WORK" title="Projects built for clarity" icon={BarChart3} /><p className="mt-5 max-w-2xl text-muted-foreground">Six projects across machine learning, SQL analysis, Excel and Power BI dashboards, Python data analysis, and computer vision — from healthcare risk assessment to sales intelligence, each one follows the same path: structured data in, a clearer decision surface out.</p><div className="mt-14 grid gap-5 lg:grid-cols-2">{[...resumeProjects, ...additionalProjects].map((project) => <ProjectCard key={project.title} project={project} />)}</div></div></section>

        <section id="education" className="section-rule bg-background py-24 sm:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"><SectionIntro eyebrow="05 / EDUCATION" title="Building the foundation" icon={GraduationCap} /><div className="glass relative overflow-hidden rounded-3xl p-7 sm:p-10"><div className="absolute right-6 top-4 font-mono text-7xl font-extrabold text-primary/10 sm:text-9xl">8.9</div><p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">2022 — 2026</p><h3 className="mt-5 max-w-xl text-2xl font-bold text-foreground sm:text-3xl">B.Tech in Computer Science and Engineering (AI &amp; DS)</h3><p className="mt-4 text-lg text-muted-foreground">Siddartha Institute of Science and Technology</p><p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">A specialized AI &amp; Data Science program covering programming, statistics, machine learning, and data analysis — the academic foundation behind every project and internship on this page, maintained at a strong 8.9 CGPA.</p><div className="mt-9 flex items-end gap-3 border-t border-border pt-6"><span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">CGPA</span><span className="text-4xl font-extrabold text-primary">8.9</span></div></div></div></section>

        <section id="certifications" className="section-rule bg-surface-deep py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionIntro eyebrow="06 / CREDENTIALS" title="Certifications" icon={Check} /><p className="mt-5 max-w-2xl text-muted-foreground">Industry-recognized training from Deloitte, Accenture, TCS iON, and SmartBridge — including job simulations that replicate real data analyst work inside global firms.</p><div className="mt-12 grid gap-3 md:grid-cols-2">{certifications.map(([title, issuer], index) => <article key={title} className="group flex gap-4 rounded-2xl border border-border bg-card/35 p-5 transition-colors hover:border-primary/40 hover:bg-card/70"><div className={`grid size-10 shrink-0 place-items-center rounded-xl bg-${["primary", "secondary", "green", "amber", "cyan"][index]}/12 text-${["primary", "secondary", "green", "amber", "cyan"][index]}`}><Check size={17} /></div><div><h3 className="font-bold text-foreground">{title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{issuer}</p></div></article>)}</div></div></section>

        <AnalyticsMindset />

        <section id="contact" className="section-rule bg-background py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="glass overflow-hidden rounded-[2rem] p-7 sm:p-12 lg:p-16"><div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">07 / CONTACT</p><h2 className="mt-5 max-w-2xl text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">Let&apos;s turn data into meaningful insights.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">I&apos;m actively looking for Data Analyst and Software Engineer opportunities where I can contribute from day one — SQL/MySQL analysis, Python programming, Power BI and Excel dashboards, data-driven problem solving, and clean engineering practices. Whether it&apos;s a full-time role, an internship, or a conversation about data and code, I&apos;d love to hear from you.</p></div><a href="mailto:mahendramahe689@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">Email Me <ArrowUpRight size={17} /></a></div><div className="mt-12 grid gap-4 border-t border-border pt-8 sm:grid-cols-3"><a href="mailto:mahendramahe689@gmail.com" className="group"><p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Email</p><p className="mt-2 break-all text-sm font-semibold text-foreground group-hover:text-primary">mahendramahe689@gmail.com</p></a><a href="tel:+916302777658" className="group"><p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Phone</p><p className="mt-2 text-sm font-semibold text-foreground group-hover:text-primary">6302777658</p></a><a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="group"><p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Professional profile</p><p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary"><Linkedin size={16} className="text-primary" /> LinkedIn</p></a></div></div></div></section>
      </main>

      <footer className="border-t border-border bg-surface-deep"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8"><p className="font-mono uppercase tracking-[0.14em]">Galla Mahendra / Data Analyst &amp; Software Engineer</p><a href="#home" className="inline-flex items-center gap-2 hover:text-primary">Back to top <ChevronRight size={14} className="-rotate-90" /></a></div></footer>
    </div>
  );
}

function SectionIntro({ eyebrow, title, icon: Icon }: { eyebrow: string; title: string; icon: IconType }) {
  return <div><div className="flex items-center gap-3 text-primary"><Icon size={17} /><span className="font-mono text-xs uppercase tracking-[0.2em]">{eyebrow}</span></div><h2 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">{title}</h2></div>;
}

function ProjectCard({ project }: { project: (typeof resumeProjects)[number] | (typeof additionalProjects)[number] }) {
  const Icon = project.icon;
  const classes = projectAccentClasses[project.accent];
  return <article className="group relative overflow-hidden rounded-3xl border border-border bg-card/35 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/70 sm:p-8"><div className="flex items-start justify-between gap-4"><div className={`grid size-11 place-items-center rounded-xl ${classes.soft} ${classes.text}`}><Icon size={20} /></div><span className="font-mono text-xs text-muted-foreground">{project.number}</span></div><div className="mt-6 flex flex-wrap gap-2">{project.tech.map((tag) => <span key={tag} className={`rounded-full border ${classes.border} ${classes.soft} px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${classes.text}`}>{tag}</span>)}</div><h3 className="mt-5 max-w-lg text-2xl font-bold leading-tight text-foreground">{project.title}</h3><p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">{project.description}</p><ul className="mt-6 grid gap-2.5 text-sm leading-6 text-muted-foreground">{project.details.map((detail) => <li key={detail} className="flex gap-2.5"><span className={`mt-2 size-1.5 shrink-0 rounded-full ${classes.bg}`} />{detail}</li>)}</ul><ProjectVisual type={project.visual} accent={project.accent} /></article>;
}

function ProjectVisual({ type, accent }: { type: string; accent: Accent }) {
  const classes = projectAccentClasses[accent];
  if (type === "risk") return <div className="relative mt-8 h-32 overflow-hidden rounded-2xl border border-border bg-background/55 p-4"><div className="flex h-full items-center justify-center gap-6"><div className="relative grid size-20 place-items-center rounded-full border-4 border-primary/25"><div className="absolute inset-1 rounded-full border-4 border-primary border-r-transparent border-b-transparent rotate-[-35deg]" /><span className="font-mono text-lg font-bold text-primary">ML</span></div><div className="space-y-2"><p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Risk categories</p><div className="flex gap-1.5"><span className="h-2 w-10 rounded-full bg-accent-green" /><span className="h-2 w-14 rounded-full bg-accent-amber" /><span className="h-2 w-8 rounded-full bg-destructive" /></div><p className="text-xs text-muted-foreground">low · borderline · high</p></div></div></div>;
  if (type === "bars") return <div className="mt-8 flex h-32 items-end gap-2 rounded-2xl border border-border bg-background/55 p-5">{[34, 58, 44, 79, 65, 92, 72, 52, 84, 68].map((height, index) => <span key={index} className={`w-full rounded-t-sm ${classes.bg} ${index % 3 === 0 ? "opacity-50" : "opacity-75"}`} style={{ height: `${height}%` }} />)}</div>;
  if (type === "sheets") return <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-background/55 p-4"><div className="grid grid-cols-7 gap-1">{Array.from({ length: 42 }, (_, index) => <span key={index} className={`h-3 rounded-sm ${index % 7 === 2 ? `bg-${accent}/75` : index % 5 === 0 ? "bg-primary/30" : "bg-muted/40"}`} />)}</div><div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground"><span>Pivot view</span><span>Monthly trends</span></div></div>;
  if (type === "gesture") return <div className="mt-8 flex h-32 items-center justify-center gap-5 rounded-2xl border border-border bg-background/55 p-5"><div className="grid size-16 place-items-center rounded-2xl border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan"><Hand size={30} /></div><div className="space-y-2"><div className="flex items-center gap-2 text-xs text-muted-foreground"><MousePointer2 size={14} className="text-accent-cyan" /> Webcam → gesture</div><div className="flex gap-1"><span className="h-1.5 w-8 rounded-full bg-accent-cyan" /><span className="h-1.5 w-12 rounded-full bg-accent-cyan/60" /><span className="h-1.5 w-6 rounded-full bg-accent-cyan/30" /></div></div></div>;
  if (type === "covid") return <div className="mt-8 rounded-2xl border border-border bg-background/55 p-4"><div className="flex h-24 items-end gap-1">{[24, 35, 31, 47, 42, 70, 52, 82, 64, 92, 58, 76, 48, 62].map((height, index) => <span key={index} className={`w-full rounded-t-sm ${index % 3 === 0 ? "bg-accent-amber/40" : "bg-accent-amber/75"}`} style={{ height: `${height}%` }} />)}</div><p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Global trend exploration</p></div>;
  return <div className="mt-8 rounded-2xl border border-border bg-background/55 p-4"><div className="grid grid-cols-4 gap-2"><div className="col-span-1 rounded-lg border border-primary/25 bg-primary/10 p-3"><p className="font-mono text-[9px] text-primary">SALES</p><p className="mt-2 text-sm font-bold text-foreground">KPI</p></div><div className="col-span-3 rounded-lg border border-border p-3"><div className="flex h-11 items-end gap-1">{[35, 55, 45, 72, 60, 88, 74, 94].map((height, index) => <span key={index} className={`w-full rounded-t-sm ${index === 7 ? "bg-secondary" : "bg-primary/45"}`} style={{ height: `${height}%` }} />)}</div></div></div><div className="mt-2 grid grid-cols-3 gap-2"><span className="h-2 rounded-full bg-primary/50" /><span className="h-2 rounded-full bg-secondary/50" /><span className="h-2 rounded-full bg-accent-green/50" /></div></div>;
}

function AnalyticsMindset() {
  const flow: { icon: IconType; label: string; classes: string }[] = [
    { icon: Database, label: "Extract", classes: "border-primary/30 bg-primary/10 text-primary" },
    { icon: ScanLine, label: "Clean", classes: "border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan" },
    { icon: BarChart3, label: "Explore", classes: "border-accent-green/30 bg-accent-green/10 text-accent-green" },
    { icon: BrainCircuit, label: "Model", classes: "border-accent-violet/30 bg-accent-violet/10 text-accent-violet" },
    { icon: MessageCircle, label: "Communicate", classes: "border-accent-amber/30 bg-accent-amber/10 text-accent-amber" },
  ];
  return <section className="section-rule relative overflow-hidden bg-background py-24 sm:py-32"><div className="absolute inset-0 data-grid opacity-20" /><div className="relative mx-auto max-w-7xl px-5 sm:px-8"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-secondary">ANALYTICS MINDSET</p><h2 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Make the signal easier to see.</h2><p className="mt-5 max-w-lg leading-7 text-muted-foreground">A visual language for the work: extract, clean, explore, model, and communicate.</p></div><div className="glass rounded-3xl p-5 sm:p-8"><div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">{flow.map(({ icon: Icon, label, classes }, index) => <div key={label} className="flex items-center gap-3"><div className={`grid size-12 place-items-center rounded-2xl border ${classes}`}><Icon size={19} /></div><span className="text-xs font-bold text-foreground">{label}</span>{index < flow.length - 1 && <ChevronRight size={15} className="hidden text-muted-foreground sm:block" />}</div>)}</div><div className="mt-8 flex h-24 items-end gap-2 rounded-2xl border border-border bg-background/50 px-5 pb-4 pt-5">{[28, 43, 37, 62, 54, 76, 68, 91, 82, 96].map((height, index) => <span key={index} className={`animate-pulse-line w-full rounded-t-sm ${index > 6 ? "bg-secondary/70" : "bg-primary/55"}`} style={{ height: `${height}%`, animationDelay: `${index * 70}ms` }} />)}</div></div></div></div></section>;
}