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
    title: "IronCloude — Cloud storage",
    description:
      "A secure cloud storage workspace for uploading, organizing, syncing, and sharing files.",
    tags: ["React", "Node.js", "Postgres"],
    className: "col-span-3 grid grid-cols-2",
    art: "vault",
  },
  {
    title: "Code Reviewer",
    description:
      "A practical tool for reviewing code, spotting issues, and improving maintainability.",
    tags: ["React", "Node.js", "AI"],
    art: "code-review",
  },
  {
    title: "Image Processing",
    description:
      "A reliable workspace for transforming, enhancing, and analyzing images.",
    tags: ["Python", "OpenCV", "API"],
    art: "image-processing",
  },
  {
    title: "PDF Analyzer",
    description:
      "A focused tool for extracting insights, summarizing content, and analyzing PDF documents.",
    tags: ["Python", "FastAPI", "NLP"],
    art: "pdf-analyzer",
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
