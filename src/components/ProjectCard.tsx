import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  index: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const ProjectCard = ({ index, title, description, tags, link = "#" }: ProjectCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
       rel="noopener noreferrer"
      className="group relative block rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-glow animate-fade-up"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 transition-opacity duration-500 group-hover:opacity-[0.04]" />
      <div className="relative flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <span className="font-display text-sm text-muted-foreground">0{index + 1}</span>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
        </div>
        <h3 className="font-display text-2xl font-medium text-foreground transition-colors group-hover:text-primary">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground border-2">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
