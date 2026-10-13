import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CircleArrowRight,
  Download,
  X,
} from "lucide-react";
import { SectionLabel } from "./shared";

const certifications = [
  {
    title: "JavaScript Developer Certification",
    provider: "freeCodeCamp",
    date: "April 13, 2026",
    preview: "/javascript.png",
    type: "image" as const,
  },
  {
    title: "Python Developer Certification",
    provider: "freeCodeCamp",
    date: "April 13, 2026",
    preview: "/python.png",
    type: "image" as const,
  },
  {
    title: "AWS Certified Generative AI Developer",
    provider: "AWS Training & Certification",
    date: "July 23, 2026",
    preview: "/550489e9-6a27-4932-8351-c09bdbafbf6f.pdf",
    type: "pdf" as const,
  },
];

export function Education() {
  const [selectedCertification, setSelectedCertification] = useState<
    (typeof certifications)[number] | null
  >(null);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeModal = () => {
    if (!selectedCertification || isClosing) return;
    setIsClosing(true);
    closeTimer.current = setTimeout(() => {
      setSelectedCertification(null);
      setIsClosing(false);
    }, 360);
  };

  useEffect(() => {
    if (!selectedCertification) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [selectedCertification]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <section className="mt-[120px] w-full border-t border-[#ffffff12]" id="education">
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
              Always<span className="ml-1 text-[17px] not-italic">◦</span>
            </div>
            <img
              src="/education-mountain-chalk-v1.avif"
              alt="Chalk mountain monument illustration"
              className="absolute bottom-0 right-0 w-full max-w-[570px] opacity-80 mix-blend-screen"
            />
            <span className="absolute bottom-[18%] right-[12%] text-[20px] text-[#9aa5a1]">◦</span>
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
              Click a card to view
              <button aria-label="Previous certification" className="grid size-7 place-items-center rounded-full border border-[#26312f]">
                <ChevronLeft size={13} />
              </button>
              <button aria-label="Next certification" className="grid size-7 place-items-center rounded-full border border-[#26312f]">
                <ChevronRight size={13} />
              </button>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
            {certifications.map((cert) => (
              <button
                className="group overflow-hidden rounded-md border border-[rgba(181,206,203,.13)] bg-[#101716] text-left transition hover:-translate-y-1 hover:border-[#49a8ff77] hover:shadow-[0_12px_28px_rgba(0,0,0,.24)]"
                key={cert.title}
                type="button"
                onClick={() => setSelectedCertification(cert)}
              >
                <div className="relative flex h-[142px] items-center justify-center overflow-hidden bg-[#e9edef] p-3">
                  {cert.type === "image" ? (
                    <img
                      src={cert.preview}
                      alt={`${cert.title} certificate`}
                      className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center border border-[#c8d0d4] bg-white text-center text-[#182126]">
                      <span className="font-mono text-[9px] font-bold uppercase tracking-[.12em] text-[#6d7a80]">
                        AWS Training &amp; Certification
                      </span>
                      <strong className="mt-3 max-w-[180px] text-[14px] leading-tight">
                        Generative AI Developer
                      </strong>
                      <span className="mt-2 text-[9px] text-[#6d7a80]">
                        Completion Certificate
                      </span>
                    </div>
                  )}
                  <span className="absolute right-2 top-2 rounded-full bg-[#07100dcc] px-2 py-1 text-[8px] font-bold uppercase tracking-[.1em] text-[#f0f5f3] opacity-0 transition group-hover:opacity-100">
                    View
                  </span>
                </div>
                <div className="flex min-h-[76px] items-center justify-between gap-2 p-3">
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
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedCertification && (
        <div
          className={`certificate-modal-backdrop fixed inset-0 z-50 grid place-items-center bg-[#020505dd] p-4 backdrop-blur-md sm:p-8 ${
            isClosing ? "certificate-modal-backdrop--closing" : ""
          }`}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCertification.title} preview`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <div
            className={`certificate-modal-panel relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-[#ffffff24] bg-[#101818] shadow-[0_24px_100px_rgba(0,0,0,.55)] ${
              isClosing ? "certificate-modal-panel--closing" : ""
            }`}
          >
            <div className="flex items-center justify-between gap-4 border-b border-[#ffffff12] px-4 py-3 sm:px-6">
              <div className="min-w-0">
                <p className="font-mono text-[8px] uppercase tracking-[.16em] text-[#49a8ff]">
                  Certificate preview
                </p>
                <h3 className="mt-1 truncate text-[14px] font-semibold text-[#f0f5f3]">
                  {selectedCertification.title}
                </h3>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  className="grid size-8 place-items-center rounded-full border border-[#ffffff1c] text-[#a4aaa9] transition hover:border-[#49a8ff] hover:text-[#49a8ff]"
                  href={selectedCertification.preview}
                  download
                  aria-label="Download certificate"
                >
                  <Download size={14} />
                </a>
                <button
                  className="grid size-8 place-items-center rounded-full border border-[#ffffff1c] text-[#a4aaa9] transition hover:border-[#ff7d7d] hover:text-[#ff9d9d]"
                  type="button"
                  aria-label="Close certificate preview"
                  onClick={closeModal}
                >
                  <X size={16} />
                </button>
              </div>
            </div>
            <div className="min-h-0 overflow-auto bg-[#080b0b] p-3 sm:p-6">
              {selectedCertification.type === "image" ? (
                <img
                  src={selectedCertification.preview}
                  alt={`${selectedCertification.title} certificate`}
                  className="mx-auto max-h-[74vh] w-auto max-w-full object-contain"
                />
              ) : (
                <iframe
                  className="h-[72vh] min-h-[420px] w-full bg-white"
                  src={selectedCertification.preview}
                  title={selectedCertification.title}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
