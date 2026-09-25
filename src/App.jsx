import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Layers3, Link2, Sparkles, TerminalSquare } from "lucide-react";
import "./App.css";

const LTA_URL = "https://api-production-0383e.up.railway.app/";
const GITHUB_URL = "https://github.com/eason11133";
const LEGACY_URL = "https://github.com/eason11133/eason-systems-legacy";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

function ArrowLink({ href, children, subtle = false }) {
  return (
    <a className={subtle ? "text-link subtle" : "text-link"} href={href} target="_blank" rel="noreferrer">
      <span>{children}</span>
      <ArrowUpRight size={16} />
    </a>
  );
}

function Pill({ children, tone = "neutral" }) {
  return <span className={"pill " + tone}>{children}</span>;
}

export default function App() {
  useEffect(() => {
    document.title = "Eason Systems ??Building useful AI products";
  }, []);

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav">
          <a className="brand" href="#top">
            <span className="brand-mark">ES</span>
            <span>Eason Systems</span>
          </a>
          <div className="nav-links">
            <a href="#products">Products</a>
            <a href="#principles">Principles</a>
            <a href="#story">Story</a>
            <a className="nav-github" href={GITHUB_URL} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp}><Pill tone="blue">Independent product studio</Pill></motion.div>
            <motion.h1 variants={fadeUp}>Building useful<br /><span>AI products.</span></motion.h1>
            <motion.p className="hero-lede" variants={fadeUp}>
              Eason Systems builds focused tools around real workflows ??starting with the parts AI products still make people handle manually.
            </motion.p>
            <motion.div className="hero-actions" variants={fadeUp}>
              <a className="button primary" href="#products">Explore products <ArrowUpRight size={18} /></a>
              <a className="button secondary" href="#story">See the story</a>
            </motion.div>
          </motion.div>

          <motion.aside className="hero-panel" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }}>
            <div className="panel-top"><span className="status-dot" />Currently building</div>
            <div className="panel-product">
              <div className="panel-icon"><Link2 size={24} /></div>
              <div>
                <p className="eyebrow">LTA</p>
                <h2>Your AI got the link. LTA brings the source.</h2>
              </div>
            </div>
            <div className="source-line">
              <span>YouTube</span><span>Instagram</span><span>X</span><span>GitHub</span><span>Web</span><span>PDF</span>
            </div>
            <ArrowLink href={LTA_URL}>Visit LTA</ArrowLink>
          </motion.aside>
        </section>

        <section className="section product-section" id="products">
          <div className="section-heading">
            <div><p className="eyebrow">Products</p><h2>Small products. Real workflows.</h2></div>
            <p>We start narrow, ship early, and expand only when real usage shows the problem is worth solving again.</p>
          </div>

          <div className="product-grid">
            <article className="product-card featured">
              <div className="product-card-top">
                <div className="product-logo lta-logo"><Link2 size={26} /></div>
                <Pill tone="green">Live</Pill>
              </div>
              <div className="product-copy">
                <p className="eyebrow">LTA</p>
                <h3>Your AI got the link. LTA brings the source.</h3>
                <p>A managed source layer for public URLs your user already chose. LTA turns supported links into usable source context so the AI workflow can keep moving.</p>
              </div>
              <div className="product-tags"><span>Claude / MCP</span><span>REST API</span><span>Source reuse</span><span>Completeness</span></div>
              <div className="product-footer"><ArrowLink href={LTA_URL}>Explore LTA</ArrowLink></div>
            </article>

            <article className="product-card">
              <div className="product-card-top">
                <div className="product-logo"><Sparkles size={24} /></div>
                <Pill>In development</Pill>
              </div>
              <div className="product-copy">
                <p className="eyebrow">EOT</p>
                <h3>English Output Trainer</h3>
                <p>A practice product focused on the part language learners usually avoid: producing English, getting useful feedback, and trying again.</p>
              </div>
              <div className="product-tags"><span>Learning workflow</span><span>Practice loops</span><span>Feedback</span></div>
              <div className="product-footer muted-footer">Building now</div>
            </article>
          </div>
        </section>

        <section className="section principles" id="principles">
          <div className="section-heading compact"><div><p className="eyebrow">How we build</p><h2>Evidence before expansion.</h2></div></div>
          <div className="principle-grid">
            <article><span>01</span><h3>Start from friction.</h3><p>Find the annoying step people are already working around before designing the product around it.</p></article>
            <article><span>02</span><h3>Validate the smallest useful thing.</h3><p>A polished launch is not proof. Real usage, a second use, and repeated demand are.</p></article>
            <article><span>03</span><h3>Build the layer that disappears.</h3><p>The best infrastructure removes work from the workflow instead of asking users to learn another workflow.</p></article>
          </div>
        </section>

        <section className="section story" id="story">
          <div className="section-heading">
            <div><p className="eyebrow">Story</p><h2>Not a reset. An evolution.</h2></div>
            <p>Eason Systems started by building real systems for real users. The direction changed as the evidence changed.</p>
          </div>

          <div className="timeline">
            <article>
              <div className="timeline-meta">01 繚 Public utility</div>
              <div><h3>Toilet Bot</h3><p>A LINE-based public toilet finder grew past 35,000 users and became the first lesson in distribution, data quality, and real-world product maintenance.</p><ArrowLink href="https://github.com/eason11133/toilet-bot" subtle>View project</ArrowLink></div>
            </article>
            <article>
              <div className="timeline-meta">02 繚 Service phase</div>
              <div><h3>LINE / Web systems</h3><p>Eason Systems then tested custom workflow tools for organizations and learned where service work repeated ??and where it did not.</p><ArrowLink href={LEGACY_URL} subtle>View legacy website</ArrowLink></div>
            </article>
            <article>
              <div className="timeline-meta">03 繚 Product phase</div>
              <div><h3>Independent AI products</h3><p>The focus shifted from broad custom development to narrower products that can solve the same recurring problem for many users.</p></div>
            </article>
            <article className="active">
              <div className="timeline-meta">Now</div>
              <div><h3>LTA + what comes next</h3><p>LTA is the first public product in this phase. EOT is being developed next, while internal tools help find and validate the next problem.</p></div>
            </article>
          </div>
        </section>

        <section className="section about">
          <div className="about-card">
            <div className="about-symbol"><Layers3 size={28} /></div>
            <div className="about-copy">
              <p className="eyebrow">Eason Systems</p>
              <h2>Build. Ship. Learn from reality.</h2>
              <p>Eason Systems is an independent product studio founded by Eason Huang. We build focused software, put it in front of real users, and let repeated behavior decide what deserves to become bigger.</p>
              <div className="about-links"><ArrowLink href={GITHUB_URL}>GitHub</ArrowLink><ArrowLink href={LEGACY_URL} subtle>Legacy</ArrowLink></div>
            </div>
            <div className="about-terminal">
              <div className="terminal-top"><TerminalSquare size={16} />eason-systems</div>
              <code><span>$</span> build the smallest useful thing<br /><span>$</span> ship to real users<br /><span>$</span> measure what comes back<br /><span>$</span> expand only when it repeats</code>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div><strong>Eason Systems</strong><span>Building useful AI products.</span></div>
        <div><span>穢 2026</span><a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a></div>
      </footer>
    </div>
  );
}

