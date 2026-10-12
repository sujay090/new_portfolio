import { ChevronLeft, ChevronRight, CircleArrowRight } from "lucide-react";
import { SectionLabel } from "./shared";

const certifications = [
  {
    title: "The Complete JavaScript Course 2025",
    provider: "Jonas Schmedtmann · Udemy",
    date: "March 2025",
  },
  {
    title: "The Ultimate React Course 2025",
    provider: "Jonas Schmedtmann · Udemy",
    date: "October 2025",
  },
  {
    title: "TypeScript Masterclass 2025",
    provider: "Manik (CloudAffaire) · Udemy",
    date: "March 2026",
  },
  {
    title: "Backend Domination",
    provider: "Sheryians Coding School",
    date: "August 2025",
  },
];

export function Education() {
  return (
    <section
      className="mt-[120px] w-full border-t border-[#ffffff12]"
      id="education"
    >
      <div className="mx-auto max-w-[1300px] px-2 pt-[90px]" data-reveal="up">
        <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <SectionLabel>Education</SectionLabel>
            <h2 className="mt-3 font-sans text-[clamp(44px,5vw,64px)] font-extrabold leading-[.9] tracking-[-.065em] text-[#f4f5f2]">
              Academic Journey
            </h2>
            <p className="mt-5 text-[13px] text-[#9aa5a1]">
              A journey of continuous learning, growth and curiosity.
            </p>

            <div className="mt-8 border-l border-[#263836] pl-6 sm:pl-8">
              <article className="relative">
                <span className="absolute -left-[31px] top-1 size-[13px] rounded-full border-2 border-[#07100b] bg-[#5ce688] shadow-[0_0_0_2px_#1eae65,0_0_12px_#39e77f] sm:-left-[39px]" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[20px] font-bold leading-tight tracking-[-.03em] text-[#e9efec]">
                      Bachelor of Computer Applications (BCA)
                    </h3>
                    <p className="mt-2 text-[12px] font-semibold text-[#42a9ff]">
                      Maulana Abul Kalam Azad University
                    </p>
                  </div>
                  <span className="hidden shrink-0 rounded-full border border-[#164d2e] px-3 py-1 text-[9px] font-bold uppercase tracking-[.12em] text-[#54dd83] sm:block">
                    Current
                  </span>
                </div>
                <p className="mt-2 text-[11px] text-[#8d9995]">
                  Currently pursuing&nbsp; | &nbsp;West Bengal, India
                </p>
                <p className="mt-3 text-[12px] leading-5 text-[#8d9995]">
                  Building a strong foundation in programming, web development
                  and problem solving.
                </p>
              </article>
            </div>
          </div>

          <div className="relative min-h-[300px] lg:min-h-[430px]">
            <div className="absolute right-0 top-0 font-hand text-[27px] leading-[.9] italic text-[#a0aaa7]">
              Still
              <br />
              learning...
              <br />
              Always
              <span className="ml-1 text-[17px] not-italic">◦</span>
            </div>
            <img
              src="/education-mountain-chalk-v1.avif"
              alt="Chalk mountain monument illustration"
              className="absolute bottom-0 right-0 w-full max-w-[570px] opacity-80 mix-blend-screen"
            />
            <span className="absolute bottom-[18%] right-[12%] text-[20px] text-[#9aa5a1]">
              ◦
            </span>
          </div>
        </div>

        <div className="mt-10 border-t border-[#1d2a28] pt-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <SectionLabel>Certifications</SectionLabel>
              <h3 className="mt-2 text-[16px] font-semibold tracking-[-.02em] text-[#dce4e1]">
                Learning beyond the classroom.
              </h3>
            </div>
            <div className="hidden items-center gap-3 text-[10px] text-[#7f8985] sm:flex">
              Tap a card to view
              <button aria-label="Previous certification" className="grid size-7 place-items-center rounded-full border border-[#26312f]">
                <ChevronLeft size={13} />
              </button>
              <button aria-label="Next certification" className="grid size-7 place-items-center rounded-full border border-[#26312f]">
                <ChevronRight size={13} />
              </button>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <article
                className="overflow-hidden rounded-md border border-[rgba(181,206,203,.13)] bg-[#101716]"
                key={cert.title}
              >
                <div className="flex h-[112px] flex-col justify-between bg-[#f1f3f2] p-3 text-[#111615]">
                  <span className="text-[8px] font-bold">Udemy</span>
                  <strong className="max-w-[180px] text-[13px] leading-[1.05] tracking-[-.03em]">
                    {index === 3 ? "BACK-END DOMINATION" : cert.title}
                  </strong>
                  <span className="text-[8px] font-semibold">Kunal Rathore</span>
                </div>
                <div className="flex min-h-[58px] items-center justify-between gap-2 p-3">
                  <div className="min-w-0">
                    <h4 className="truncate text-[10px] font-semibold text-[#dce4e1]">
                      {cert.title}
                    </h4>
                    <p className="mt-1 truncate text-[8px] text-[#76817d]">
                      {cert.provider}
                    </p>
                    <p className="mt-1 text-[8px] text-[#76817d]">{cert.date}</p>
                  </div>
                  <CircleArrowRight className="shrink-0 text-[#77827e]" size={15} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
