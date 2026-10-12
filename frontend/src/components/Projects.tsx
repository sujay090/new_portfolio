import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./shared";
import { projects } from "./data";

function ProjectArt({ art }: { art: string }) {
  if (art === "vault") {
    return (
      <div className="relative h-full min-h-[260px] overflow-hidden bg-[#172426]">
        <div className="absolute left-[15%] top-[10%] h-[78%] w-[70%] rounded-lg border-[7px] border-[#202a2d] bg-[#f5f7f8] shadow-2xl">
          <div className="h-7 border-b border-[#dce2e5] bg-white" />
          <div className="grid grid-cols-4 gap-2 p-4">
            {Array.from({ length: 12 }, (_, index) => (
              <i key={index} className="h-8 rounded bg-[#e8edf1]" />
            ))}
          </div>
        </div>
        <div className="absolute bottom-[4%] left-[8%] z-10 h-[72%] w-[23%] rounded-[14px] border-[5px] border-[#273338] bg-[#f8fafb] p-2 shadow-xl">
          <div className="h-4 rounded bg-[#dce5ed]" />
          <div className="mt-2 grid gap-2">
            {Array.from({ length: 7 }, (_, index) => (
              <i key={index} className="h-5 rounded bg-[#edf1f4]" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const artClass = {
    map: "bg-[#b4c9a7]",
    recipe: "bg-[#f5eac1]",
    landing: "bg-[#dbe5f5]",
  }[art] ?? "bg-[#172426]";

  return (
    <div className={`relative h-[155px] overflow-hidden ${artClass} p-4`}>
      {art === "map" && (
        <div className="h-full rounded bg-[#9ed5d3] p-3 text-[#2d7e79]">
          <div className="h-full rounded bg-[radial-gradient(circle_at_35%_40%,#f4e6a8_0_3px,transparent_4px),linear-gradient(35deg,#9ed5d3,#d9e6bd)]" />
        </div>
      )}
      {art === "recipe" && (
        <div className="mx-auto h-full max-w-[230px] rounded bg-[#fff7db] p-3 text-[#b98b00] shadow">
          <strong className="text-[11px]">YUM — RECIPES</strong>
          <div className="mt-3 grid gap-2">
            {Array.from({ length: 4 }, (_, index) => (
              <i key={index} className="h-4 rounded bg-[#f2d27a]" />
            ))}
          </div>
        </div>
      )}
      {art === "landing" && (
        <div className="h-full rounded bg-white p-4 text-center text-[#5378b8]">
          <strong className="text-[12px]">Choose Your Perfect Plan</strong>
          <div className="mx-auto mt-4 h-8 w-24 rounded-full bg-[#75a6ed]" />
        </div>
      )}
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-1">
      {tags.map((tag) => (
        <span
          className="rounded border border-[rgba(181,206,203,.16)] px-2 py-1 text-[8px] text-[#83918e]"
          key={tag}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export function Projects() {
  const [featured, ...secondary] = projects;

  return (
    <section className="mt-[120px] w-full border-t border-[#ffffff12]" id="projects">
      <div className="mx-auto max-w-[1300px] px-2 pt-[90px]" data-reveal="up">
        <div className="flex items-end justify-between gap-8">
          <div>
            <SectionLabel>Projects</SectionLabel>
            <h2 className="text-[40px] font-extrabold leading-none tracking-[-.05em] text-[#f4f5f2]">
              Selected Work
            </h2>
            <p className="mt-4 text-[13px] text-[#a4aaa9]">
              A few projects I have worked on that I am proud of. Each one
              taught me something new.
            </p>
          </div>
          <a
            className="mb-1 inline-flex items-center gap-1 border-b border-[#49a8ff88] pb-2 text-[10px] font-bold text-[#49a8ff]"
            href="https://github.com"
          >
            View All Projects <ArrowRight size={15} />
          </a>
        </div>

        <article className="relative mt-7 grid min-h-[320px] overflow-hidden rounded-lg border border-[#49a8ff55] bg-[#121919]/90 lg:grid-cols-[.9fr_1.1fr]">
          <div className="z-10 p-7">
            <span className="rounded-full border border-[#49a8ff33] bg-[#49a8ff12] px-3 py-1 font-mono text-[8px] text-[#49a8ff]">
              Featured Project
            </span>
            <h3 className="mt-6 max-w-[390px] text-[28px] font-bold leading-[1.05] tracking-[-.04em] text-[#f0f5f3]">
              MeghVault — Cloud
              <br />
              Storage SaaS Platform
            </h3>
            <p className="mt-4 max-w-[390px] text-[11px] leading-[1.5] text-[#a4aaa9]">
              A scalable cloud storage platform for uploading, organizing, and
              sharing files with role-based access control and reliable
              delivery.
            </p>
            <Tags tags={["Next.js", "Node.js", "MongoDB", "Redis", "AWS", "CI/CD"]} />
            <div className="mt-4 flex gap-2">
              <a className="rounded bg-[#42adf4] px-4 py-3 text-[10px] font-bold text-[#071c2c]" href="https://github.com">
                Live Demo <ArrowRight className="ml-2 inline" size={13} />
              </a>
              <a className="rounded border border-[rgba(181,206,203,.18)] px-4 py-3 text-[10px] font-bold text-[#c5cecb]" href="https://github.com">
                View Code <ArrowUpRight className="ml-2 inline" size={13} />
              </a>
            </div>
          </div>
          <ProjectArt art={featured.art} />
          <div className="pointer-events-none absolute right-[15px] top-12 hidden font-hand text-[27px] leading-[.9] text-[#d7dcd9] lg:block">
            From
            <br />
            Idea
            <br />
            to
            <br />
            Impact...
          </div>
        </article>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {secondary.map((project) => (
            <article
              className="overflow-hidden rounded-lg border border-[rgba(181,206,203,.13)] bg-[#121919]/90"
              key={project.title}
            >
              <ProjectArt art={project.art} />
              <div className="relative p-4">
                <h3 className="text-[16px] font-bold text-[#f0f5f3]">{project.title}</h3>
                <p className="mt-2 text-[10px] leading-[1.45] text-[#a4aaa9]">{project.description}</p>
                <Tags tags={project.tags} />
                <a
                  className="absolute bottom-4 right-4 text-[#49a8ff]"
                  href="https://github.com"
                  aria-label={`View ${project.title}`}
                >
                  <ArrowRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
