import { useState, useEffect } from "react";
import katherineImg from "../imports/Katherine.jpg";
import tracyImg from "../imports/Tracy.jpg";
import zainImg from "../imports/Zain.jpg";
import liamImg from "../imports/Liam.jpg";
import annaImg from "../imports/Anna.jpg";
import danielImg from "../imports/Daniel.jpg";
import girl3Img from "../imports/Girl_3.jpg";
import aliceImg from "../imports/Girl_2-1.jpg";
import lilianImg from "../imports/Lilian-1.jpg";
import katelynImg from "../imports/Girl_1.jpg";
import davinImg from "../imports/Davin-2.jpg";
import mbgLogoImg from "../imports/MBG-logo-transparent.png";

type Page = "about" | "practice" | "team" | "join";

const PAGES: { id: Page; label: string }[] = [
  { id: "about", label: "about" },
  { id: "practice", label: "practice areas" },
  { id: "team", label: "team" },
  { id: "join", label: "join us" },
];

const PRACTICES = [
  {
    tag: "[ strategy ]",
    title: "Strategy",
    subtitle: "Market landscape, competitive positioning, commercialization pathways",
    desc: "We help life-science organizations think through where they are and where they want to go. That might mean a market landscape, a competitive review, or working through a commercialization pathway. We try to be useful, not exhaustive.",
    price: "Starting at $1000",
  },
  {
    tag: "[ operations ]",
    title: "Operations",
    subtitle: "Process mapping, organizational design, execution planning",
    desc: "Helping teams get organized. We work through operational bottlenecks, map out processes, and help with execution planning for groups that are growing faster than their systems.",
    price: "Starting at $1000",
  },
  {
    tag: "[ digital presence ]",
    title: "Digital Presence",
    subtitle: "Website, branding, and external communications strategy",
    desc: "Website strategy, brand positioning, and external communications for labs, startups, and research groups that need to present themselves clearly to outside audiences.",
    price: "Starting at $750",
  },
  {
    tag: "[ marketing ]",
    title: "Marketing",
    subtitle: "Customer discovery, messaging, go-to-market strategy",
    desc: "Customer discovery, messaging, and go-to-market planning for early-stage life-science companies. We are not a marketing agency — we help you figure out the strategy before you build anything.",
    price: "Starting at $750",
  },
];

const ADDITIONAL_SERVICES = [
  { name: "Resume Book Access", price: "$100" },
  { name: "Startup Consulting", price: "Scope-based" },
  { name: "Event Hosting", price: "Scope-based" },
];

const CORE_CONSULTANTS = [
  {
    name: "Liam Aranda-Michel",
    focus: "[ bioengineering · regenerative medicine ]",
    bio: "Studies bioengineering with a focus in regenerative medicine. Research in 3D bioprinting.",
    photo: liamImg,
  },
  {
    name: "Tracy Nguyen",
    focus: "[ drug delivery · mechanical engineering ]",
    bio: "Studies mechanical engineering and finance with a focus on drug delivery systems.",
    photo: tracyImg,
  },
  {
    name: "Zain Arfoosh",
    focus: "[ pharmaceutical devices · intrathecal delivery ]",
    bio: "Studies bioengineering and focuses on pharmaceutical devices with research in drug delivery and cell therapy systems.",
    photo: zainImg,
  },
  {
    name: "Katherine Wang",
    focus: "[ computational oncology ]",
    bio: "Backend engineering background applied to computational biology and oncology data analysis.",
    photo: katherineImg,
  },
];

const CONSULTING_PARTNERS = [
  {
    name: "Erika Ruiz",
    focus: "[ biomedical economics · neural signal processing ]",
    bio: "Studies biomedical economics with experience in neural signal processing and frequency analysis.",
    photo: null,
  },
  {
    name: "Daniel Patterson",
    focus: "[ molecular biology · protein expression ]",
    bio: "Studies molecular biology and computer science with a research focus in protein expression.",
    photo: danielImg,
  },
  {
    name: "Emma Fang",
    focus: "[ infectious disease · mRNA vaccines ]",
    bio: "Studies biology with a background in infectious disease and mRNA vaccine research.",
    photo: girl3Img,
  },
  {
    name: "Anna Mohanty",
    focus: "[ immunology · neuroinflammation ]",
    bio: "Studies translational immunology with a focus on brain infection and neuroinflammation.",
    photo: annaImg,
  },
  {
    name: "Davin Huynh",
    focus: "[ drug delivery systems ]",
    bio: "Research background in nanoparticle-based and targeted drug delivery systems.",
    photo: davinImg,
  },
  {
    name: "Alice Situ",
    focus: "[ microfluidics · antibody profiling ]",
    bio: "Immunology and microfluidics background with experience in antibody profiling and PCR analysis.",
    photo: aliceImg,
  },
  {
    name: "Lilian Gan",
    focus: "[ lung cancer · translational oncology ]",
    bio: "Studies lung cancer biology with a background in translational oncology and tumor tracing.",
    photo: lilianImg,
  },
  {
    name: "Katelyn Lee",
    focus: "[ protein signaling · chemical engineering ]",
    bio: "Chemical engineering background with a focus on protein signaling and translational science.",
    photo: katelynImg,
  },
];

const TESTIMONIALS = [
  {
    quote: "The MIT-BCG team impressed us with their ability to navigate a highly complex and ever-changing regulatory landscape and identify the most appropriate and accelerated path forward for our product. Their work reflects the kind of rigorous, creative thinking that makes a real difference.",
    name: "Julie",
    org: "OpenBiome",
    tag: "[ regulatory strategy ]",
  },
  {
    quote: "Your suggested path forward truly captures the vision we have for the organization, and it was energizing to see it reflected so clearly in your recommendations. Thank you for the thoughtful insights, feedback, and thorough analysis.",
    name: "Wendy",
    org: "BOSLab",
    tag: "[ strategic analysis ]",
  },
];

export default function App() {
  const [page, setPage] = useState<Page>("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const nav = (p: Page) => {
    setPage(p);
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400;1,9..40,500&family=DM+Mono:wght@400;500&display=swap');
        * { scrollbar-width: none; }
        *::-webkit-scrollbar { display: none; }
        body { font-family: 'DM Sans', sans-serif; }
        .font-mono-dm { font-family: 'DM Mono', monospace; }
        .tracked { letter-spacing: 0.18em; }
        .tracked-wide { letter-spacing: 0.35em; }
        .ul-link {
          position: relative;
          display: inline-block;
        }
        .ul-link::after {
          content: '';
          position: absolute;
          left: 0; bottom: -1px;
          width: 0; height: 1px;
          background: currentColor;
          transition: width 0.25s ease;
        }
        .ul-link:hover::after { width: 100%; }
      `}</style>

      {/* NAV */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-border bg-background/90 backdrop-blur-sm" : ""}`}>
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <button onClick={() => nav("about")} className="flex items-center shrink-0">
            <img
              src={mbgLogoImg}
              alt="MIT Biotech Group"
              className="h-7 w-auto"
              style={{ filter: "grayscale(100%) brightness(0.25)" }}
            />
          </button>

          <nav className="hidden md:flex items-center gap-7">
            {PAGES.map((p) => (
              <button
                key={p.id}
                onClick={() => nav(p.id)}
                className={`font-mono-dm text-[11px] tracked transition-colors duration-150 ${
                  page === p.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {page === p.id ? `[ ${p.label} ]` : p.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden font-mono-dm text-[11px] tracked text-muted-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "[ close ]" : "[ menu ]"}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background px-6 py-7 flex flex-col gap-5">
            {PAGES.map((p) => (
              <button
                key={p.id}
                onClick={() => nav(p.id)}
                className="font-mono-dm text-[11px] tracked text-left text-foreground"
              >
                [ {p.label} ]
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="pt-14">
        {page === "about" && <AboutPage nav={nav} />}
        {page === "practice" && <PracticePage />}
        {page === "team" && <TeamPage />}
        {page === "join" && <JoinPage />}
      </main>

      <footer className="border-t border-border mt-20">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <img
            src={mbgLogoImg}
            alt="MIT Biotech Group"
            className="h-6 w-auto"
            style={{ filter: "grayscale(100%) brightness(0.5)" }}
          />
          <span className="font-mono-dm text-[11px] text-muted-foreground/50">
            © 2025 MIT Biotech Consulting Group
          </span>
          <div className="flex gap-6">
            {(["about", "practice areas", "team", "join us"] as const).map((l, i) => (
              <button
                key={l}
                onClick={() => nav(PAGES[i].id)}
                className="font-mono-dm text-[11px] tracked text-muted-foreground hover:text-foreground transition-colors ul-link"
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ─── TICKER ─────────────────────────────────────────────────── */

const TICKER_WORDS = [
  "strategy", "operations", "digital presence", "marketing",
  "oncology", "immunology", "rare disease", "CNS",
  "gene therapy", "synthetic biology", "drug delivery",
  "market access", "clinical development", "commercialization",
];

function Ticker() {
  const doubled = [...TICKER_WORDS, ...TICKER_WORDS];
  return (
    <div className="border-t border-border overflow-hidden py-7 select-none"
      style={{ WebkitMaskImage: "linear-gradient(90deg,transparent,black 6%,black 94%,transparent)" }}>
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ticker-inner {
          display: flex;
          width: max-content;
          animation: ticker 28s linear infinite;
        }
        .ticker-inner:hover { animation-play-state: paused; cursor: default; }
      `}</style>
      <div className="ticker-inner">
        {doubled.map((w, i) => (
          <span key={i} className="inline-flex items-center gap-5 px-5">
            <span className="text-[1.6rem] font-bold text-foreground whitespace-nowrap">{w}</span>
            <span className="text-muted-foreground/30 text-xl">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── ABOUT PAGE ─────────────────────────────────────────────── */

function AboutPage({ nav }: { nav: (p: Page) => void }) {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 pt-20 pb-24">
        <div className="mb-10">
          <img
            src={mbgLogoImg}
            alt="MIT Biotech Group"
            className="h-12 md:h-16 w-auto"
            style={{ filter: "grayscale(100%) brightness(0.2)" }}
          />
        </div>
        <div className="mb-8">
          <span className="font-mono-dm text-[11px] tracked text-muted-foreground">[ established 2025 ]</span>
        </div>
        <h1 className="text-[clamp(2.8rem,7vw,7.5rem)] font-bold leading-[0.92] tracking-tight text-foreground max-w-4xl mb-10">Strategy for<br />biotech that<br /><span className="italic font-normal">actually works.</span></h1>
        <div className="max-w-2xl">
          <p className="text-lg font-medium text-foreground/80 leading-relaxed mb-5">MIT Biotech Consulting Group is a student-led strategy firm based at MIT. We work with early and growth-stage biotech companies on the problems they care about.</p>
          <p className="text-base text-muted-foreground leading-relaxed">We started the group because we kept seeing the same frustrations. Consultants good at strategy weren't good at the the science, and scientists understood the biology but not what investors or partners actually needed to hear. We try to be neither of those things.</p>
        </div>
        <div className="mt-12 flex gap-4">
          <button
            onClick={() => nav("practice")}
            className="font-mono-dm text-[11px] tracked border border-foreground/25 px-6 py-3 text-foreground hover:border-foreground transition-all duration-200"
          >
            [ what we do ]
          </button>
          <button
            onClick={() => nav("join")}
            className="font-mono-dm text-[11px] tracked text-muted-foreground hover:text-foreground transition-colors ul-link"
          >
            get in touch
          </button>
        </div>
        </div>
      </section>

      {/* How we work */}
      <section className="max-w-[1320px] mx-auto px-6 md:px-10 py-24 border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <div>
            <span className="font-mono-dm text-[11px] tracked text-muted-foreground block mb-4">[ how we work ]</span>
            <h2 className="text-4xl font-bold leading-tight">A few things we care about.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {[
              { label: "[ read the paper ]", body: "We do primary diligence. If a company's story rests on a paper, we actually read it. We try not to be generalist consultants." },
              { label: "[ short engagements ]", body: "Most of our work runs four to ten weeks. We aim to be useful and efficient. If a problem needs more time, we say so." },
              { label: "[ no recycled slides ]", body: "We do not maintain a library of prior deliverables to repurpose. Every engagement gets built from scratch because the situation is usually different." },
              { label: "[ small teams ]", body: "Four or five people from our side per engagement. The people who plan the work are the people who do it. No bait-and-switch." },
            ].map((item) => (
              <div key={item.label}>
                <div className="font-mono-dm text-[11px] tracked text-muted-foreground mb-3">{item.label}</div>
                <p className="text-[15px] font-medium leading-relaxed text-foreground/80">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1320px] mx-auto px-6 md:px-10 py-24 border-b border-border">
        <div className="mb-14">
          <span className="font-mono-dm text-[11px] tracked text-muted-foreground block mb-4">[ clients ]</span>
          <h2 className="text-4xl font-bold leading-tight">What people say.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-border">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-card p-10 flex flex-col justify-between gap-10">
              <p className="text-[17px] font-medium leading-relaxed text-foreground/85">
                "{t.quote}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[14px] font-bold text-foreground">{t.name}</div>
                  <div className="font-mono-dm text-[11px] text-muted-foreground">{t.org}</div>
                </div>
                <div className="font-mono-dm text-[11px] tracked text-muted-foreground">{t.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scrolling ticker */}
      <Ticker />
    </div>
  );
}

/* ─── PRACTICE AREAS PAGE ────────────────────────────────────── */

function PracticeRow({ p, i }: { p: typeof PRACTICES[0]; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b border-border -mx-6 md:-mx-10 px-6 md:px-10"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="grid grid-cols-[40px_1fr_auto] md:grid-cols-[80px_1fr_auto] items-center gap-6 py-8 cursor-default">
        <div className="font-mono-dm text-[11px] text-muted-foreground/30">{String(i + 1).padStart(2, "0")}</div>
        <div>
          <div className="font-mono-dm text-[10px] tracked text-muted-foreground mb-1">{p.tag}</div>
          <h3 className="text-2xl md:text-3xl font-bold leading-none">{p.title}</h3>
          <p className="text-[13px] font-medium text-muted-foreground mt-1">{p.subtitle}</p>
        </div>
        <div className="text-right">
          <div className="font-mono-dm text-[11px] text-muted-foreground">{p.price}</div>
          <div className={`font-mono-dm text-[11px] text-muted-foreground/40 mt-1 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>↓</div>
        </div>
      </div>

      {/* Dropdown */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "120px" : "0px", opacity: open ? 1 : 0 }}
      >
        <p className="text-[14px] font-medium text-muted-foreground leading-relaxed pb-8 max-w-2xl">
          {p.desc}
        </p>
      </div>
    </div>
  );
}

function PracticePage() {
  return (
    <div className="max-w-[1320px] mx-auto px-6 md:px-10">
      <div className="pt-20 pb-16 border-b border-border">
        <span className="font-mono-dm text-[11px] tracked text-muted-foreground block mb-5">[ what we do ]</span>
        <h1 className="text-[clamp(2.8rem,6vw,6rem)] font-bold leading-[0.93] tracking-tight max-w-2xl">
          What we<br />
          <span className="italic font-normal">can help with.</span>
        </h1>
        <p className="mt-8 max-w-xl text-base font-medium text-muted-foreground leading-relaxed">MBG Consulting partners with life-science organizations to deliver rigorous analysis across strategy, operations, and commercialization. We work with startups, labs, and investors on a project or ongoing basis.</p>
      </div>

      {/* Main four areas */}
      <div className="border-t border-border mt-0">
        {PRACTICES.map((p, i) => <PracticeRow key={p.title} p={p} i={i} />)}
      </div>

      {/* Why partner with us — above additional services */}
      <div className="py-16 border-t border-border">
        <div className="font-mono-dm text-[11px] tracked text-muted-foreground mb-8">[ why partner with us ]</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-border">
          {[
            { heading: "Flexible engagements", body: "Project-based and ongoing partnerships with startups, labs, and investors." },
            { heading: "Mutual benefit", body: "Sponsored collaborations support MBG programming and consultant training." },
            { heading: "Long-term access", body: "Long-term partners receive enhanced visibility and recruiting access to the MIT community." },
          ].map((item) => (
            <div key={item.heading} className="bg-card px-8 py-8">
              <div className="text-[16px] font-bold mb-2">{item.heading}</div>
              <p className="text-[13px] font-medium text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional services */}
      <div className="pb-20">
        <div className="font-mono-dm text-[11px] tracked text-muted-foreground mb-8">[ additional services ]</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px border border-border">
          {ADDITIONAL_SERVICES.map((s) => (
            <div key={s.name} className="bg-card px-8 py-7">
              <div className="text-[15px] font-bold mb-2">{s.name}</div>
              <div className="font-mono-dm text-[11px] text-muted-foreground">{s.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── TEAM PAGE ──────────────────────────────────────────────── */

function MemberCard({ m }: { m: { name: string; focus: string; bio: string; photo: string | null } }) {
  const focusClean = m.focus.replace(/^\[|\]$/g, "").trim();
  return (
    <div className="group bg-card hover:bg-secondary/40 transition-colors duration-200 flex flex-col">
      <div className="w-full aspect-[3/4] bg-muted overflow-hidden">
        {m.photo ? (
          <img src={m.photo} alt={m.name} className="w-full h-full object-cover object-top grayscale" />
        ) : (
          <div className="w-full h-full bg-secondary" />
        )}
      </div>
      <div className="p-5 flex flex-col gap-1.5 flex-1">
        <div className="font-mono-dm text-[10px] text-muted-foreground leading-snug">[ {focusClean} ]</div>
        <h3 className="text-[14px] font-bold leading-tight">{m.name}</h3>
        <p className="text-[11px] font-medium text-muted-foreground leading-relaxed">{m.bio}</p>
      </div>
    </div>
  );
}

function TeamPage() {
  return (
    <div>
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 pt-20 pb-16 border-b border-border">
        <span className="font-mono-dm text-[11px] tracked text-muted-foreground block mb-5">[ team ]</span>
        <h1 className="text-[clamp(2.8rem,6vw,6rem)] font-bold leading-[0.93] tracking-tight">
          The people<br />
          <span className="italic font-normal">doing the work.</span>
        </h1>
        <p className="mt-8 max-w-lg text-base font-medium text-muted-foreground leading-relaxed">We recruit from the MIT community. Our team includes people with backgrounds across life sciences, engineering, and quantitative methods who are interested in the business side of biotech.</p>
      </div>

      {/* Core Consultants — 4 columns, full bleed */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 pt-10 pb-3">
        <span className="font-mono-dm text-[11px] tracked text-muted-foreground">[ core consultants ]</span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px border-y border-border">
        {CORE_CONSULTANTS.map((m) => <MemberCard key={m.name} m={m} />)}
      </div>

      {/* Consulting Partners — 4 columns, full bleed */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 pt-10 pb-3">
        <span className="font-mono-dm text-[11px] tracked text-muted-foreground">[ consulting partners ]</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px border-b border-border">
        {CONSULTING_PARTNERS.map((m) => <MemberCard key={m.name} m={m} />)}
      </div>
    </div>
  );
}

/* ─── JOIN US / CONTACT PAGE ─────────────────────────────────── */

function JoinPage() {
  const [tab, setTab] = useState<"contact" | "recruit">("contact");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-[1320px] mx-auto px-6 md:px-10">
      <div className="pt-20 pb-16 border-b border-border">
        <span className="font-mono-dm text-[11px] tracked text-muted-foreground block mb-5">[ join us ]</span>
        <h1 className="text-[clamp(2.8rem,6vw,6rem)] font-bold leading-[0.93] tracking-tight">
          Work with us<br />
          <span className="italic font-normal">or join us.</span>
        </h1>
      </div>

      {/* Tab toggle */}
      <div className="flex border-b border-border">
        {(["contact", "recruit"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`font-mono-dm text-[11px] tracked px-8 py-4 transition-colors duration-150 border-b-2 ${
              tab === t ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {t === "contact" ? "[ client inquiry ]" : "[ join the team ]"}
          </button>
        ))}
      </div>

      {tab === "contact" && (
        <div className="py-16 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20">
          <div>
            <p className="text-[15px] font-medium text-foreground/80 leading-relaxed mb-8">
              We work with a limited number of clients at a time. If you have a specific problem and want to talk through whether we are a good fit, reach out below.
            </p>
            <div className="space-y-4">
              <div>
                <span className="font-mono-dm text-[11px] tracked text-muted-foreground">[ email ]</span>
                <div className="text-[15px] font-bold mt-1">laranda@mit.edu</div>
              </div>
              <div>
                <span className="font-mono-dm text-[11px] tracked text-muted-foreground">[ location ]</span>
                <div className="text-[15px] font-bold mt-1">Cambridge, MA</div>
              </div>
            </div>
          </div>

          {sent ? (
            <div className="flex flex-col justify-center">
              <span className="font-mono-dm text-[11px] tracked text-muted-foreground mb-3">[ received ]</span>
              <p className="text-2xl font-bold mb-3">We got your note.</p>
              <p className="text-[15px] font-medium text-muted-foreground">We will be back to you within two business days.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              {[
                { id: "name", label: "[ name ]", ph: "Your name" },
                { id: "company", label: "[ company ]", ph: "Company or institution" },
                { id: "email", label: "[ email ]", ph: "you@company.com" },
              ].map((f) => (
                <div key={f.id}>
                  <label className="font-mono-dm text-[11px] tracked text-muted-foreground block mb-2">{f.label}</label>
                  <input
                    type={f.id === "email" ? "email" : "text"}
                    placeholder={f.ph}
                    required
                    value={form[f.id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                    className="w-full bg-secondary border border-border px-4 py-3 text-[15px] font-medium text-foreground placeholder-muted-foreground/40 focus:outline-none focus:border-foreground/30 transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="font-mono-dm text-[11px] tracked text-muted-foreground block mb-2">[ message ]</label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you are working on and what kind of help you need."
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 text-[15px] font-medium text-foreground placeholder-muted-foreground/40 focus:outline-none focus:border-foreground/30 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="font-mono-dm text-[11px] tracked border border-foreground/30 px-7 py-3 text-foreground hover:border-foreground transition-all duration-200"
              >
                [ send ]
              </button>
            </form>
          )}
        </div>
      )}

      {tab === "recruit" && (
        <div className="py-16 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20">
          <div>
            <p className="text-[15px] font-medium text-foreground/80 leading-relaxed mb-8">We recruit from the MIT community. If you are an undergrad, grad student, or researcher who wants to do real consulting for the life sciences, we would love to hear from you!</p>
            <div className="space-y-5">
              {[
                { label: "[ commitment ]", val: "2-5 hrs/week during engagements" },
                { label: "[ compensation ]", val: "Varies by role and engagement." },
                { label: "[ timing ]", val: "Rolling applications, no set cycle" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="font-mono-dm text-[11px] tracked text-muted-foreground mb-1">{item.label}</div>
                  <div className="text-[15px] font-bold">{item.val}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <span className="font-mono-dm text-[11px] tracked text-muted-foreground block mb-3">[ what we look for ]</span>
              <ul className="space-y-3">
                {[
                  "Student in the MIT life sciences community",
                  "Some exposure to the commercial or clinical side of biotech, even informally",
                  "Comfortable working on ambiguous problems without a lot of hand-holding",
                  "Able to write clearly and talk to non-scientists without dumbing things down",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] font-medium text-foreground/80 leading-relaxed">
                    <span className="text-muted-foreground mt-1 shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border pt-8">
              <p className="text-[15px] font-medium text-muted-foreground mb-5">
                Send a CV and a short note on what you are working on and why you are interested to:
              </p>
              <div className="font-mono-dm text-[11px] tracked text-muted-foreground mb-1">[ email ]</div>
              <div className="text-xl font-bold">laranda@mit.edu</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
