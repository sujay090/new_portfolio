export type Project = {
  title: string;
  description: string;
  tags: string[];
  className?: string;
  art: string;
};

type FormState = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

type Status = {
  type: "" | "loading" | "success" | "error";
  text: string;
};

export const projects: Project[] = [
  {
    title: "MeghVault — Cloud storage",
    description:
      "A secure, beautifully simple workspace for uploading, organizing, and sharing files.",
    tags: ["React", "Node.js", "Postgres"],
    className: "col-span-3 grid grid-cols-2",
    art: "vault",
  },
  {
    title: "WordWise — Travel map",
    description:
      "A playful way to collect places, notes, and memories as you explore.",
    tags: ["Next.js", "Maps"],
    art: "map",
  },
  {
    title: "Yum — Recipe planner",
    description: "A calm, smart kitchen companion for planning better meals.",
    tags: ["React Native", "API"],
    art: "recipe",
  },
  {
    title: "MeghVault landing page",
    description:
      "A conversion-focused marketing site for a cloud storage product.",
    tags: ["Design", "Frontend"],
    art: "landing",
  },
];

export const skills = [
  ["Languages", "JavaScript", "TypeScript", "Python", "Go"],
  ["Frontend", "React", "Next.js", "Tailwind"],
  ["Backend", "Node.js", "Express", "FastAPI"],
  ["Database", "Postgres", "MongoDB", "Redis"],
  ["Cloud & DevOps", "AWS", "Cloudflare", "Firebase"],
  ["Mobile", "Android", "Kotlin"],
];
