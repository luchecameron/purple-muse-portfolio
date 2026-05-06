import { useState } from "react";
import { Mail, MapPin, Linkedin, Github, Download, Send } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import ProjectCard from "@/components/ProjectCard";
import portrait from "@/assets/new-portrait.jpg";

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
    title: "Retail Sales Analysis",
    description:
      "This project explores the shopping habits of customers across major malls in Istanbul. Using a synthetic dataset (istanbul_sales_data.csv), I performed data cleaning, exploratory data analysis (EDA), visualization, and basic insights to understand retail trends and customer behavior.",
    tags: ["Word", "Python\n", "Bayesian"],
  },
];

const skillGroups = [
  {
    label: "Languages",
    items: ["Python"],
  },
  {
    label: "Libraries",
    items: ["scikit-learn", "TensorFlow", "Numpy", "Pandas"],
  },
  {
    label: "Data & Analytics",
    items: ["SQL", "Python for Data Science", "Power BI"],
  },
  {
    label: "Tools & Technologies",
    items: ["Spyder IDE / Jupyter Notebook", "Microsoft Office", "Salesforce CRM", "Jira"],
  },
  {
    label: "Business & Digital Skills",
    items: ["Customer Service", "Sales", "Canva", "WordPress"],
  },
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Index = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast({
        title: "Please check your input",
        description: result.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }
    const subject = encodeURIComponent(`Portfolio inquiry from ${result.data.name}`);
    const body = encodeURIComponent(`${result.data.message}\n\n— ${result.data.name} (${result.data.email})`);
    window.location.href = `mailto:hello@yourname.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email client…" });
  };

  return (
    <main className="min-h-screen bg-gradient-subtle">
      <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
        <header className="animate-fade-in grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 animate-float rounded-full bg-primary" />
              Available for new opportunities
            </div>
            <h1 className="font-display text-5xl font-light leading-[1.05] tracking-tight text-foreground md:text-7xl">
              Luche Louw<span className="text-gradient">.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Entry-level data and analytics trainee currently completing a Data Science Practitioner learnership, combining study with real-world application. Skilled in data handling, basic analysis, and reporting, with experience in admin, customer service, and CRM systems. Building practical skills in Python, statistics, and data visualisation.

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
          </div>

          <div className="relative mx-auto md:mx-0">
            <div className="absolute -inset-3 rounded-full bg-gradient-primary opacity-30 blur-2xl" />
            <img
              src={portrait}
              alt="Portrait of the data scientist"
              width={768}
              height={768}
              className="relative h-44 w-44 rounded-full border-4 border-card object-cover shadow-glow md:h-56 md:w-56"
            />
          </div>
        </header>

        <section id="skills" className="mt-32">
          <div className="mb-12">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">Toolkit</p>
            <h2 className="font-display text-3xl font-light text-foreground md:text-4xl">Skills</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map((group, i) => (
              <div
                key={group.label}
                className="rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground border-2"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

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

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Full Name"
                  maxLength={100}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@company.com"
                  maxLength={255}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the opportunity…"
                  rows={5}
                  maxLength={1000}
                />
              </div>
              <Button
                type="submit"
                className="group h-11 w-full rounded-full bg-gradient-primary text-primary-foreground shadow-glow transition-transform hover:scale-[1.01]"
              >
                <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                Send message
              </Button>
            </form>

            <div className="grid gap-4 content-start">
              <a href="mailto:luchecameron17@gmail.com" className="group flex items-center gap-4 rounded-xl border border-border bg-background p-5 transition-all hover:border-primary/40 hover:shadow-card">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary transition-transform group-hover:scale-110">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium text-foreground">luchecameron17@gmail.com</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/luchelouw/" className="group flex items-center gap-4 rounded-xl border border-border bg-background p-5 transition-all hover:border-primary/40 hover:shadow-card">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary transition-transform group-hover:scale-110">
                  <Linkedin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="text-sm font-medium text-foreground">Luchè Cameron Louw</p>
                </div>
              </a>
              <a href="https://github.com/luchecameron/luchecameron" className="group flex items-center gap-4 rounded-xl border border-border bg-background p-5 transition-all hover:border-primary/40 hover:shadow-card">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary transition-transform group-hover:scale-110">
                  <Github className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">GitHub</p>
                  <p className="text-sm font-medium text-foreground">luchecameron</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-xl border border-border bg-background p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Based in</p>
                  <p className="text-sm font-medium text-foreground">Remote · South Africa</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-20 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} L.Louw.
        </footer>
      </div>
    </main>
  );
};

export default Index;
