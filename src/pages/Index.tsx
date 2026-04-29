import { Mail, MapPin, Linkedin, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Customer Churn Prediction",
    description:
      "Gradient boosting model identifying at-risk customers with 92% recall, deployed as a real-time API serving 50k requests/day.",
    tags: ["XGBoost", "Python", "FastAPI"],
  },
  {
    title: "NLP Topic Discovery",
    description:
      "Unsupervised pipeline using BERTopic over 1M support tickets — surfaced 30+ actionable themes for product teams.",
    tags: ["BERTopic", "Transformers", "PyTorch"],
  },
  {
    title: "Forecasting Demand at Scale",
    description:
      "Hierarchical time-series forecasting across 5,000 SKUs reducing inventory costs by 18% in production.",
    tags: ["Prophet", "Spark", "MLflow"],
  },
  {
    title: "Causal Uplift Modeling",
    description:
      "A/B-tested uplift trees to personalize marketing spend, lifting campaign ROI by 24% over baseline.",
    tags: ["CausalML", "R", "Bayesian"],
  },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-subtle">
      <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
        <header className="animate-fade-in">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 animate-float rounded-full bg-primary" />
            Available for new opportunities
          </div>
          <h1 className="font-display text-5xl font-light leading-[1.05] tracking-tight text-foreground md:text-7xl">
            Your Name<span className="text-gradient">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Data scientist building reliable machine learning systems — from messy data to models that ship and stay healthy in production.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="group h-12 rounded-full bg-gradient-primary px-7 text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]">
              <a href="/cv.pdf" download>
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                Download CV
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="h-12 rounded-full px-6 text-foreground hover:bg-accent">
              <a href="#projects">View projects →</a>
            </Button>
          </div>
        </header>

        <section id="projects" className="mt-32">
          <div className="mb-12">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">Selected Work</p>
            <h2 className="font-display text-3xl font-light text-foreground md:text-4xl">Recent projects</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} index={i} {...project} />
            ))}
          </div>
        </section>

        <section id="contact" className="mt-32 rounded-3xl border border-border bg-card p-10 shadow-card md:p-14">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">Get in touch</p>
          <h2 className="font-display text-3xl font-light text-foreground md:text-4xl">Let's build something with data.</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <a href="mailto:hello@yourname.com" className="group flex items-center gap-4 rounded-xl border border-border bg-background p-5 transition-all hover:border-primary/40 hover:shadow-card">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary transition-transform group-hover:scale-110">
                <Mail className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium text-foreground">hello@yourname.com</p>
              </div>
            </a>
            <a href="https://linkedin.com" className="group flex items-center gap-4 rounded-xl border border-border bg-background p-5 transition-all hover:border-primary/40 hover:shadow-card">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary transition-transform group-hover:scale-110">
                <Linkedin className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <p className="text-sm font-medium text-foreground">/in/yourname</p>
              </div>
            </a>
            <a href="https://github.com" className="group flex items-center gap-4 rounded-xl border border-border bg-background p-5 transition-all hover:border-primary/40 hover:shadow-card">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary transition-transform group-hover:scale-110">
                <Github className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">GitHub</p>
                <p className="text-sm font-medium text-foreground">@yourname</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-xl border border-border bg-background p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Based in</p>
                <p className="text-sm font-medium text-foreground">Remote · Worldwide</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-20 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Your Name — Crafted with intent.
        </footer>
      </div>
    </main>
  );
};

export default Index;
