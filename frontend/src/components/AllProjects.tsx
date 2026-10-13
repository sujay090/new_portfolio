import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Check,
  FolderOpen,
  Layers3,
  Sparkles,
} from "lucide-react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ProjectArt, Tags } from "./Projects";
import { projects } from "./data";

export function AllProjects() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#080b0b] bg-[url('/chalk-background.webp')] bg-cover bg-fixed bg-center bg-no-repeat font-sans text-[#f0f5f3]">
      <Header />
      <main className="relative mx-auto max-w-[1300px] px-4 pb-24 pt-16 sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#49a8ff12] blur-3xl" />
        <div className="pointer-events-none absolute left-1/3 top-[28rem] h-64 w-64 rounded-full bg-[#7c4dff0d] blur-3xl" />
        <a
          className="relative inline-flex items-center gap-2 rounded-full border border-[#ffffff16] bg-[#101818aa] px-4 py-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#a8b7b3] backdrop-blur transition hover:border-[#49a8ff66] hover:text-[#8bcaff]"
          href="/#projects"
        >
          <ArrowLeft size={15} />
          Back to portfolio
        </a>

        <section className="relative mt-10 grid gap-10 rounded-2xl border border-[#ffffff12] bg-[#0d1414aa] p-6 shadow-[0_25px_80px_rgba(0,0,0,.2)] backdrop-blur-sm sm:p-10 lg:grid-cols-[1fr_280px] lg:items-end lg:p-12" data-reveal="up">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#49a8ff33] bg-[#49a8ff12] px-3 py-1 font-mono text-[9px] uppercase tracking-[.14em] text-[#49a8ff]">
              <FolderOpen size={12} />
              Project archive / 2026
            </div>
            <h1 className="max-w-[780px] text-[clamp(46px,8vw,88px)] font-extrabold leading-[.9] tracking-[-.07em] text-[#f4f5f2]">
              Work that turns
              <br />
              <em className="not-italic text-[#49a8ff]">ideas into impact.</em>
            </h1>
            <p className="mt-7 max-w-[620px] text-[14px] leading-6 text-[#a4aaa9]">
              A closer look at the products, experiments, and tools I have built
              to make complex workflows feel simple and useful.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
            <div className="card-hover rounded-xl border border-[#ffffff12] bg-[#151e1e]/80 p-4">
              <p className="font-mono text-[9px] uppercase tracking-[.16em] text-[#83918e]">Projects</p>
              <p className="mt-2 text-3xl font-bold tracking-[-.06em] text-[#f0f5f3]">04</p>
            </div>
            <div className="card-hover rounded-xl border border-[#ffffff12] bg-[#151e1e]/80 p-4">
              <p className="font-mono text-[9px] uppercase tracking-[.16em] text-[#83918e]">Built with</p>
              <p className="mt-2 text-3xl font-bold tracking-[-.06em] text-[#49a8ff]">Intent</p>
            </div>
          </div>
        </section>

        <div className="mt-14 flex items-center justify-between" data-reveal="up">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[.15em] text-[#83918e]">
            <Layers3 size={14} className="text-[#49a8ff]" />
            Selected work
          </div>
          <div className="hidden items-center gap-2 text-[10px] text-[#83918e] sm:flex">
            <Sparkles size={13} className="text-[#5ce688]" />
            Always learning, always building
          </div>
        </div>

        <div className="relative mt-8" data-reveal="up">
          <div className="absolute bottom-8 left-[17px] top-8 w-px bg-gradient-to-b from-transparent via-[#49a8ff66] to-transparent md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-10 md:space-y-16">
            {projects.map((project, index) => (
              <div
                className="relative grid grid-cols-[36px_1fr] items-center gap-4 md:grid-cols-[1fr_72px_1fr] md:gap-0"
                key={project.title}
              >
                <div
                  className={`relative z-10 col-start-1 row-start-1 grid size-9 place-items-center rounded-full border border-[#49a8ff88] bg-[#0b1515] text-[#49a8ff] shadow-[0_0_0_7px_#080b0bcc,0_0_24px_#49a8ff33] md:col-start-2 md:row-start-1 ${
                    index % 2 === 0 ? "md:col-start-2" : "md:col-start-2"
                  }`}
                >
                  <span className="font-mono text-[10px] font-bold">0{index + 1}</span>
                </div>
                <article
                  className={`card-hover group col-start-2 row-start-1 overflow-hidden rounded-xl border border-[rgba(181,206,203,.16)] bg-[#101717]/90 shadow-[0_18px_50px_rgba(0,0,0,.16)] transition duration-500 ease-out hover:-translate-y-1 hover:translate-x-1 hover:border-[#49a8ff66] hover:shadow-[0_22px_55px_rgba(0,0,0,.24)] md:col-span-1 ${
                    index % 2 === 0 ? "md:col-start-1" : "md:col-start-3"
                  }`}
                >
                  <div className="relative min-h-[210px]">
                    <ProjectArt art={project.art} />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full border border-white/20 bg-[#0b1111aa] px-2 py-1 font-mono text-[8px] uppercase tracking-[.12em] text-[#d7e3df] backdrop-blur">
                      <Check size={10} className="text-[#5ce688]" />
                      Shipped
                    </span>
                  </div>
                  <div className="flex flex-col justify-between p-6 sm:p-8">
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-mono text-[9px] uppercase tracking-[.18em] text-[#49a8ff]">
                          Selected project
                        </p>
                        <CalendarDays size={14} className="text-[#526360]" />
                      </div>
                      <h2 className="mt-4 text-[25px] font-bold leading-[1.05] tracking-[-.04em] text-[#f0f5f3]">
                        {project.title}
                      </h2>
                      <p className="mt-4 text-[12px] leading-6 text-[#a4aaa9]">
                        {project.description}
                      </p>
                      <Tags tags={project.tags} />
                    </div>
                    <a
                      className="mt-8 inline-flex w-fit items-center gap-2 rounded border border-[rgba(181,206,203,.2)] px-4 py-3 text-[10px] font-bold text-[#d8e2df] transition hover:border-[#49a8ff] hover:text-[#49a8ff]"
                      href="https://github.com"
                    >
                      View details
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
