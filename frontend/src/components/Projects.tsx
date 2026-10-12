import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./shared";
import { projects } from "./data";
export function Projects() { return (
        <section className="mx-auto max-w-[1300px] px-2 pt-[150px]" id="projects">
          <div className="flex items-end justify-between gap-[50px] items-end">
            <div>
              <SectionLabel>Projects</SectionLabel>
              <h2>Selected Work</h2>
              <p>
                A few projects I’m proud of that I am proud of. Each one taught
                me something new.
              </p>
            </div>
            <a className="inline-flex items-center gap-1 text-[10px] font-bold text-[#c5cecb] hover:text-[#5ce688]" href="https://github.com">
              View all projects <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="mt-9 grid grid-cols-3 gap-3">
            {projects.map((project) => (
              <article
                className={`overflow-hidden rounded-md border border-[rgba(181,206,203,.13)] bg-[#121919]/90 ${project.className || ""}`}
                key={project.title}
              >
                <div className="relative min-h-[155px] overflow-hidden bg-[#172426]">
                  {project.art === "vault" && (
                    <>
                      <div className="absolute left-[13%] top-[15%] h-3/4 w-[63%] bg-[#d8e0e2] p-3">
                        <div className="h-2 border-b border-[#b1babc]" />
                        <div className="absolute bottom-2 top-6 w-[21%] border-r border-[#b1babc]" />
                        <div className="ml-[31%] mt-[22px] grid gap-2">
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                      </div>
                      <div className="absolute bottom-0 right-[17%] z-10 h-[72%] w-[22%] rounded-t-xl border-[3px] border-[#52676a] bg-[#dce6e7] p-1.5">
                        <div />
                        <div />
                        <div />
                      </div>
                    </>
                  )}
                  {project.art === "map" && (
                    <div className="h-4/5 w-3/5 bg-[#b4c9a7] p-5 text-[#4bb7ab]">
                      ✦<span>Explore</span>
                    </div>
                  )}
                  {project.art === "recipe" && (
                    <div className="h-3/4 w-[47%] bg-[#f5eac1] p-3 text-[#30341f]">
                      <span>YUM</span>
                      <b>
                        Discover
                        <br />
                        something
                        <br />
                        delicious
                      </b>
                    </div>
                  )}
                  {project.art === "landing" && (
                    <div className="w-3/4 bg-[#dbe5f5] p-3">
                      <div />
                      <div />
                      <div />
                    </div>
                  )}
                </div>
                <div className="flex justify-between gap-4 p-[17px]">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="flex flex-wrap gap-[5px]">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="https://github.com"
                    className="grid size-[25px] shrink-0 place-items-center rounded-full border border-[rgba(181,206,203,.13)] text-[#5ce688]"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
); }
