import { ChevronRight } from "lucide-react";
import { SectionLabel } from "./shared";
export function Education() { return (
        <section className="mx-auto max-w-[1300px] px-2 pt-[150px]" id="education">
          <div className="flex items-end justify-between gap-[50px]">
            <div>
              <SectionLabel>Education</SectionLabel>
              <h2>Academic Journey</h2>
              <p>A journey of curiosity, rigorous learning, and growth.</p>
            </div>
            <div className="font-hand text-xs italic leading-snug text-[#a0aaa7]">
              Still
              <br />
              learning.
              <br />
              Always.<span>◦</span>
            </div>
          </div>
          <div className="mt-[42px] grid grid-cols-[1.2fr_.8fr] gap-20">
            <div className="border-l border-[#2a3c39] pl-7">
              <div className="relative mb-10">
                <span className="absolute -left-[34px] top-1 size-[9px] rounded-full border-2 border-[#080b0b] green" />
                <div>
                  <p className="text-[10px] text-[#83918e]">2023 — 2025 · Completed</p>
                  <h3>Master of Computer Applications (MCA)</h3>
                  <strong>University Institute of Technology, RGPV</strong>
                  <p>
                    Focused on systems, software development, modern design
                    patterns, and cloud technologies.
                  </p>
                </div>
              </div>
              <div className="relative mb-10">
                <span className="absolute -left-[34px] top-1 size-[9px] rounded-full border-2 border-[#080b0b] blue" />
                <div>
                  <p className="text-[10px] text-[#83918e]">2020 — 2023 · Completed</p>
                  <h3>Bachelor of Computer Applications (BCA)</h3>
                  <strong>Jagran University</strong>
                  <p>
                    Built a solid foundation in programming, web development,
                    and problem solving.
                  </p>
                </div>
              </div>
            </div>
            <div className="self-center text-center text-[90px] leading-[.5] text-[#2a3f3d]">
              ⌁<br />△ △ △
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <SectionLabel>Certifications</SectionLabel>
              <span>
                So much to learn <ChevronRight size={14} />
              </span>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {[
                "The Complete JavaScript Course 2025",
                "The Ultimate React Course",
                "TypeScript Masterclass 2025",
                "BACK-END NOMINATION",
              ].map((cert) => (
                <div className="flex min-h-[100px] flex-col justify-between p-[15px] rounded-md border border-[rgba(181,206,203,.13)] bg-[#121919]/90" key={cert}>
                  <small>Completed</small>
                  <strong>{cert}</strong>
                  <span>Kunal Rathore</span>
                </div>
              ))}
            </div>
          </div>
        </section>
); }
