import { SectionLabel } from "./shared";
import { skills } from "./data";
export function TechStack() { return (
        <section className="mx-auto w-[min(1100px,calc(100%-64px))] pt-[145px]" id="tech-stack">
          <div className="flex items-end justify-between gap-[50px]">
            <div>
              <SectionLabel>Tech stack</SectionLabel>
              <h2>Technologies I Work With</h2>
              <p>
                Tools and technologies I use to turn ideas into useful things.
              </p>
            </div>
            <div className="font-hand text-xs italic leading-snug text-[#a0aaa7]">
              Use the right tool
              <br />
              for the right
              <br />
              problem.
            </div>
          </div>
          <div className="mt-9 grid grid-cols-3 gap-2">
            {skills.map(([label, ...items]) => (
              <div className="flex items-center justify-between p-[13px_15px] rounded-md border border-[rgba(181,206,203,.13)] bg-[#121919]/90" key={label}>
                <span>{label}</span>
                <div>
                  {items.map((item, index) => (
                    <b key={item} className={`grid size-[22px] place-items-center rounded text-[8px] font-bold text-[#15201b] ${index === 0 ? "bg-[#e6d32e]" : index === 1 ? "bg-[#79b8e9]" : "bg-[#a9d3bc]"}`}>
                      {item.slice(0, 2)}
                    </b>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
); }
