import { ArrowLeft, ArrowUpRight, FolderOpen } from "lucide-react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ProjectArt, Tags } from "./Projects";
import { projects } from "./data";

export function AllProjects() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#080b0b] bg-[url('/chalk-background.webp')] bg-cover bg-fixed bg-center bg-no-repeat font-sans text-[#f0f5f3]">
      <Header />
      <main className="mx-auto max-w-[1300px] px-4 pb-24 pt-24 sm:px-8 lg:px-12">
        <a
          className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.16em] text-[#49a8ff] transition hover:text-[#8bcaff]"
          href="/#projects"
        >
          <ArrowLeft size={15} />
          Back to portfolio
        </a>

        <section className="mt-10 max-w-[760px]" data-reveal="up">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#49a8ff33] bg-[#49a8ff12] px-3 py-1 font-mono text-[9px] uppercase tracking-[.14em] text-[#49a8ff]">
            <FolderOpen size={12} />
            Project archive
          </div>
          <h1 className="text-[clamp(46px,8vw,88px)] font-extrabold leading-[.9] tracking-[-.07em] text-[#f4f5f2]">
            Work that turns
            <br />
            <em className="not-italic text-[#49a8ff]">ideas into impact.</em>
          </h1>
          <p className="mt-7 max-w-[620px] text-[14px] leading-6 text-[#a4aaa9]">
            A closer look at the products, experiments, and tools I have built
            to make complex workflows feel simple and useful.
          </p>
        </section>

        <div className="mt-16 grid gap-5 md:grid-cols-2" data-reveal="up">
          {projects.map((project, index) => (
            <article
              className={`group overflow-hidden rounded-xl border border-[rgba(181,206,203,.16)] bg-[#101717]/90 shadow-[0_18px_50px_rgba(0,0,0,.16)] transition duration-300 hover:-translate-y-1 hover:border-[#49a8ff66] ${
                index === 0 ? "md:col-span-2 md:grid md:grid-cols-[1.1fr_.9fr]" : ""
              }`}
              key={project.title}
            >
              <div className={index === 0 ? "min-h-[280px]" : "min-h-[220px]"}>
                <ProjectArt art={project.art} />
              </div>
              <div className="flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[.18em] text-[#49a8ff]">
                    0{index + 1} / Selected project
                  </p>
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
                  Explore project
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
