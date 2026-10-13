import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { SectionLabel } from "./shared";
export function Experience() {
  const experienceScrollRef = useRef<HTMLDivElement>(null);

  const scrollExperience = (direction: "left" | "right") => {
    experienceScrollRef.current?.scrollBy({
      left: direction === "right" ? 650 : -650,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full border-t border-[#ffffff12]" id="experience">
      <div className="mx-auto max-w-[1300px] px-4 pt-12 sm:px-6 sm:pt-[50px] lg:px-2" data-reveal="up">
        <div className="flex items-end justify-between gap-8 max-md:block">
          <div>
            <SectionLabel>Experience</SectionLabel>
            <h2 className="font-sans text-[clamp(38px,5vw,56px)] font-extrabold leading-[.9] tracking-[-.035em] text-[#f4f5f2]">
              Experience{" "}
              <em className="not-italic text-[#49a8ff]">&amp; Impact</em>
            </h2>
            <p className="mt-4 text-[13px] leading-5 text-[#a4aaa9]">
              Client-facing work, thoughtful systems, and the habits that help
              me turn ideas{" "}
              into dependable products.
            </p>
          </div>
          <div className="mt-6 font-hand text-[27px] italic leading-[0.9] text-[#a0aaa7] md:mt-0">
            <div className="inline-block">
              Ideas
              <br />
              into <br />
              reliable
              <br />
              products...
              <svg
                aria-hidden="true"
                className="mt-1 h-[18px] w-[110px] text-[#49a8ff]"
                viewBox="0 0 110 18"
                fill="none"
              >
                <path
                  d="M4 12Q50 2 106 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M30 15Q69 8 96 10"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity=".55"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-7 flex items-center justify-end gap-3 sm:mt-[28px]">
          <span className="mr-auto text-[10px] text-[#83918e]">Scroll to explore</span>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(181,206,203,.13)] text-[#83918e] transition hover:border-[#49a8ff] hover:text-[#49a8ff]"
            type="button"
            aria-label="Scroll experience cards left"
            onClick={() => scrollExperience("left")}
          >
            <ArrowLeft size={15} strokeWidth={1.5} />
          </button>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(181,206,203,.25)] text-[#f0f5f3] transition hover:border-[#49a8ff] hover:text-[#49a8ff]"
            type="button"
            aria-label="Scroll experience cards right"
            onClick={() => scrollExperience("right")}
          >
            <ArrowRight size={15} strokeWidth={1.5} />
          </button>
        </div>
        <div
          ref={experienceScrollRef}
          className="mt-3 w-full overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex w-max gap-4 sm:gap-[50px]">
            <div className="card-hover grid min-h-[312px] w-[calc(100vw-32px)] max-w-[600px] shrink-0 grid-cols-[.24fr_.76fr] overflow-hidden rounded-md border border-[rgba(181,206,203,.13)] bg-[#121919]/90 sm:w-[600px] sm:grid-cols-[.2fr_.8fr]">
              <div className="relative overflow-hidden bg-gradient-to-br from-[#4a1d5f] via-[#24305f] to-[#0b233a] p-[14px] font-mono text-[9px] text-[#bca6ff]">
                <div className="relative z-10">
                  01 /<br />
                  <span className="tracking-[.15em]">EXPERIENCE</span>
                </div>
                <div className="absolute -left-8 top-[58px] h-[105px] w-[170px] rounded-[50%] border border-[#72baff55]" />
                <div className="absolute -left-1 bottom-[25px] h-[100px] w-[100px] rounded-full border border-[#72baff55]" />
                <div className="absolute left-[35px] bottom-[32px] h-[74px] w-[74px] rounded-full border border-[#72baff55]" />
                <div className="absolute left-[78px] bottom-[90px] h-2 w-2 rounded-full bg-[#72baff] shadow-[0_0_10px_#72baff]" />
                <span className="absolute bottom-2 left-3 z-10 font-hand text-[20px] leading-[.85] text-[#f0f5f3]">
                  Build
                  <br />
                  with
                  <br />
                  purpose.
                </span>
              </div>
              <div className="min-w-0 p-4 sm:p-[18px_22px]">
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-block rounded-full border border-[#49a8ff33] bg-[#49a8ff12] px-3 py-1 font-mono text-[8px] text-[#49a8ff]">
                    Featured Experience
                  </div>
                  <div className="inline-block rounded-full border border-[#5ce68855] bg-[#5ce68812] px-2 py-1 font-mono text-[8px] text-[#5ce688]">
                    <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-[#5ce688] shadow-[0_0_7px_#5ce688]" />
                    Working
                  </div>
                </div>
                <h3 className="mt-4 text-[clamp(19px,3vw,24px)] font-bold leading-none tracking-[-.03em] text-[#f0f5f3]">
                  Full Stack Developer
                </h3>
                <p className="mt-2 text-[10px] leading-none text-[#83918e]">
                  <span className="font-semibold text-[#49a8ff]">
                    Freelance
                  </span>
                  <span className="mx-2">·</span>2022 — Present
                </p>
                <p className="mt-4 text-[12px] leading-[1.45] text-[#a4aaa9]">
                  Building responsive web applications with a focus on clear
                  communication, reliable delivery, and maintainable code.
                </p>
                <ul className="mt-4 grid gap-2 text-[10px] leading-[1.35] text-[#9aa5a3]">
                  <li className="relative pl-3 before:absolute before:left-0 before:top-[.45em] before:h-1 before:w-1 before:rounded-full before:bg-[#49a8ff] before:shadow-[0_0_6px_#49a8ff]">
                    Developed responsive client-facing applications using React
                    and Node.js.
                  </li>
                  <li className="relative pl-3 before:absolute before:left-0 before:top-[.45em] before:h-1 before:w-1 before:rounded-full before:bg-[#49a8ff] before:shadow-[0_0_6px_#49a8ff]">
                    Collaborated directly with clients to define scope and
                    deliver practical solutions.
                  </li>
                  <li className="relative pl-3 before:absolute before:left-0 before:top-[.45em] before:h-1 before:w-1 before:rounded-full before:bg-[#49a8ff] before:shadow-[0_0_6px_#49a8ff]">
                    Debugged existing applications and improved overall
                    performance and reliability.
                  </li>
                  <li className="relative pl-3 before:absolute before:left-0 before:top-[.45em] before:h-1 before:w-1 before:rounded-full before:bg-[#49a8ff] before:shadow-[0_0_6px_#49a8ff]">
                    Maintained clean, well-documented codebases with Git for
                    smooth handoffs.
                  </li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-[5px]">
                  <span className="rounded-full border border-[rgba(181,206,203,.18)] px-2 py-1 text-[8px] text-[#83918e]">
                    React
                  </span>
                  <span className="rounded-full border border-[rgba(181,206,203,.18)] px-2 py-1 text-[8px] text-[#83918e]">
                    Node.js
                  </span>
                  <span className="rounded-full border border-[rgba(181,206,203,.18)] px-2 py-1 text-[8px] text-[#83918e]">
                    Git
                  </span>
                </div>
              </div>
            </div>
            <div className="card-hover min-h-[312px] w-[calc(100vw-32px)] max-w-[600px] shrink-0 rounded-md border border-dashed border-[rgba(181,206,203,.13)] bg-[#0c1111]/70 p-5 text-[#83918e] sm:h-[312px] sm:w-[600px]">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-dashed border-[rgba(181,206,203,.2)] text-2xl font-light text-[#5b6664]">
                +
              </div>
              <strong className="mt-4 block text-[13px]">
                Experience slot
              </strong>
              <p className="mt-3 max-w-[230px] text-[11px] leading-4">
                The next role or client project when it is ready.
              </p>
            </div>
            <div className="card-hover min-h-[312px] w-[calc(100vw-32px)] max-w-[600px] shrink-0 rounded-md border border-dashed border-[rgba(181,206,203,.13)] bg-[#0c1111]/70 p-5 text-[#83918e] sm:h-[312px] sm:w-[600px]">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-dashed border-[rgba(181,206,203,.2)] text-2xl font-light text-[#5b6664]">
                +
              </div>
              <strong className="mt-4 block text-[13px]">
                More experience
              </strong>
              <p className="mt-3 max-w-[230px] text-[11px] leading-4">
                New work and collaborations will appear here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
