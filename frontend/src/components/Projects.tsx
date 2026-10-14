import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./shared";
import { projects } from "./data";

export function ProjectArt({ art }: { art: string }) {
  if (art === "vault") {
    return (
      <div className="relative h-full min-h-[210px] overflow-hidden bg-[radial-gradient(circle_at_70%_20%,#254b58,#172426_55%,#101919)] sm:min-h-[260px]">
        <div className="absolute left-[12%] top-[10%] h-[78%] w-[74%] rounded-lg border-[7px] border-[#202a2d] bg-[#f5f7f8] shadow-2xl">
          <div className="flex h-7 items-center gap-2 border-b border-[#dce2e5] bg-white px-3">
            <i className="size-2 rounded-full bg-[#ff8a80]" />
            <i className="size-2 rounded-full bg-[#ffd166]" />
            <i className="size-2 rounded-full bg-[#61d68b]" />
            <span className="ml-2 h-2 w-24 rounded bg-[#dce5ed]" />
          </div>
          <div className="flex gap-3 p-4">
            <div className="w-[23%] space-y-2">
              <i className="block h-3 rounded bg-[#b8d3e3]" />
              <i className="block h-3 rounded bg-[#e8edf1]" />
              <i className="block h-3 rounded bg-[#e8edf1]" />
              <i className="block h-3 rounded bg-[#e8edf1]" />
            </div>
            <div className="grid flex-1 grid-cols-4 gap-2">
              {Array.from({ length: 12 }, (_, index) => (
                <i key={index} className="h-8 rounded bg-[#e8edf1]" />
              ))}
            </div>
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

  if (art === "code-review") {
    return (
      <div className="relative h-full min-h-[125px] overflow-hidden bg-[#111b2b] p-3 sm:min-h-[155px] sm:p-4">
        <div className="mx-auto h-full max-w-[360px] overflow-hidden rounded-lg border border-[#344966] bg-[#17243a] shadow-xl">
          <div className="flex h-7 items-center justify-between border-b border-[#344966] px-3 font-mono text-[8px] text-[#89a5c7]">
            <span>pull_request.ts</span>
            <span className="text-[#5ce688]">● reviewed</span>
          </div>
          <div className="grid grid-cols-[28px_1fr] gap-2 p-3 font-mono text-[8px] leading-4">
            <div className="text-right text-[#617895]">12<br />13<br />14<br />15<br />16</div>
            <div>
              <p className="text-[#b7c8e0]">const result = await</p>
              <p className="rounded bg-[#4b3144] px-1 text-[#ff9eae]">query.users(filter);</p>
              <p className="mt-1 rounded bg-[#25483e] px-1 text-[#8ce8b0]">return sanitize(result);</p>
              <p className="text-[#7189a6]">{"// review complete"}</p>
            </div>
          </div>
          <div className="mx-3 mb-3 rounded border border-[#49a8ff55] bg-[#49a8ff12] px-2 py-1 text-[8px] text-[#9bcfff]">
            2 suggestions · 0 blockers
          </div>
        </div>
      </div>
    );
  }

  if (art === "image-processing") {
    return (
      <div className="relative h-full min-h-[125px] overflow-hidden bg-[linear-gradient(135deg,#222044,#513a72)] p-3 sm:min-h-[155px] sm:p-4">
        <div className="mx-auto flex h-full max-w-[360px] gap-3 rounded-lg border border-[#ffffff2b] bg-[#17152caa] p-3 shadow-xl">
          <div className="flex-1 overflow-hidden rounded bg-[radial-gradient(circle_at_65%_35%,#ffd27d,#e77b8b_34%,#3a326b_72%)]">
            <div className="mt-8 ml-8 h-16 w-16 rounded-full bg-[#ffd99555] blur-sm" />
            <div className="ml-5 mt-[-8px] h-16 w-28 rotate-[-18deg] rounded-[50%] border-4 border-[#f5c47799]" />
          </div>
          <div className="w-[27%] space-y-2">
            <span className="block text-[8px] uppercase tracking-[.12em] text-[#d9c8ff]">Adjust</span>
            <i className="block h-1 rounded-full bg-[#b99af8]" />
            <i className="block h-1 w-3/4 rounded-full bg-[#e69ab2]" />
            <i className="block h-1 w-1/2 rounded-full bg-[#f8d18a]" />
            <span className="mt-4 block rounded bg-[#ffffff18] px-2 py-1 text-center text-[7px] text-[#f4eaff]">Export</span>
          </div>
        </div>
      </div>
    );
  }

  if (art === "pdf-analyzer") {
    return (
      <div className="relative h-full min-h-[125px] overflow-hidden bg-[#20232d] p-3 sm:min-h-[155px] sm:p-4">
        <div className="mx-auto h-full max-w-[360px] rounded-lg border border-[#41495b] bg-[#f3f5f6] p-3 shadow-xl">
          <div className="flex h-full gap-3">
            <div className="w-[52%] space-y-2 border-r border-[#d5dadd] pr-3">
              <div className="h-3 w-2/3 rounded bg-[#8b98a1]" />
              <div className="h-2 rounded bg-[#d5dadd]" />
              <div className="h-2 rounded bg-[#d5dadd]" />
              <div className="h-2 w-4/5 rounded bg-[#d5dadd]" />
              <div className="mt-4 h-12 rounded bg-[#dce8ed]" />
            </div>
            <div className="flex-1">
              <span className="font-mono text-[8px] uppercase tracking-[.1em] text-[#62717b]">Key insights</span>
              <div className="mt-3 space-y-2">
                <div className="rounded bg-[#ccebdc] p-2 text-[8px] text-[#275641]">Summary generated</div>
                <div className="rounded bg-[#e5edf1] p-2 text-[8px] text-[#62717b]">8 entities found</div>
                <div className="rounded bg-[#e5edf1] p-2 text-[8px] text-[#62717b]">3 action items</div>
              </div>
            </div>
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
    <div className={`relative h-[clamp(140px,28vw,155px)] overflow-hidden ${artClass} p-3 sm:p-4`}>
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

export function Tags({ tags }: { tags: string[] }) {
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
      <div className="mx-auto max-w-[1300px] px-4 pt-16 sm:px-6 sm:pt-[90px] lg:px-2" data-reveal="up">
        <div className="flex items-end justify-between gap-6 max-sm:block">
          <div>
            <SectionLabel>Projects</SectionLabel>
            <h2 className="text-[clamp(36px,6vw,40px)] font-extrabold leading-none tracking-[-.05em] text-[#f4f5f2]">
              Selected Work
            </h2>
            <p className="mt-4 max-w-[500px] text-[13px] leading-5 text-[#a4aaa9]">
              A few projects I have worked on that I am proud of. Each one
              taught me something new.
            </p>
          </div>
          <a
            className="mt-6 inline-flex items-center gap-1 border-b border-[#49a8ff88] pb-2 text-[10px] font-bold text-[#49a8ff] sm:mt-0 sm:mb-1"
            href="/projects"
          >
            View All Projects <ArrowRight size={15} />
          </a>
        </div>

        <article className="card-hover relative mt-7 overflow-hidden rounded-lg border border-[#49a8ff55] bg-[#121919]/90">
          <div className="min-h-[220px] lg:min-h-[320px]">
            <ProjectArt art={featured.art} />
          </div>
          <div className="border-t border-[#ffffff10] bg-[#101717] p-5 sm:p-7">
            <span className="rounded-full border border-[#49a8ff33] bg-[#49a8ff12] px-3 py-1 font-mono text-[8px] text-[#49a8ff]">
              Featured Project
            </span>
            <h3 className="mt-4 max-w-[500px] text-[clamp(20px,4vw,26px)] font-bold leading-[1.05] tracking-[-.04em] text-[#f0f5f3]">
              IronCloude — Cloud
              <br />
              Cloud Storage Platform
            </h3>
            <p className="mt-3 max-w-[540px] text-[11px] leading-[1.5] text-[#aeb8b5]">
              A scalable cloud storage platform for uploading, organizing,
              syncing, and sharing files with role-based access control.
            </p>
            <Tags tags={["Next.js", "Node.js", "MongoDB", "Redis", "AWS", "CI/CD"]} />
            <div className="mt-4 flex flex-wrap gap-2">
              <a className="rounded bg-[#42adf4] px-4 py-3 text-[10px] font-bold text-[#071c2c]" href="https://github.com">
                Live Demo <ArrowRight className="ml-2 inline" size={13} />
              </a>
              <a className="rounded border border-[rgba(181,206,203,.18)] px-4 py-3 text-[10px] font-bold text-[#c5cecb]" href="https://github.com">
                View Code <ArrowUpRight className="ml-2 inline" size={13} />
              </a>
            </div>
          </div>
        </article>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {secondary.map((project) => (
            <article
              className="card-hover overflow-hidden rounded-lg border border-[rgba(181,206,203,.13)] bg-[#121919]/90"
              key={project.title}
            >
              <ProjectArt art={project.art} />
              <div className="relative min-h-[154px] border-t border-[#ffffff10] bg-[#101717] p-4 pb-12">
                <p className="font-mono text-[8px] uppercase tracking-[.16em] text-[#49a8ff]">Project summary</p>
                <h3 className="mt-2 text-[15px] font-bold leading-tight text-[#f0f5f3]">{project.title}</h3>
                <p className="mt-2 max-w-[30ch] text-[11px] leading-[1.5] text-[#aeb8b5]">{project.description}</p>
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
