import { SectionLabel } from "./shared";
export function Experience() { return (
        <section className="mx-auto w-[min(1100px,calc(100%-64px))] pt-[90px]" id="experience">
          <div className="flex items-end justify-between gap-[50px]">
            <div>
              <SectionLabel>Experience</SectionLabel>
              <h2>
                Experience <em>&amp; Impact</em>
              </h2>
              <p>
                Crafting lasting work, thoughtful systems, and the habits that
                help me turn ideas into dependable products.
              </p>
            </div>
            <div className="font-hand text-xs italic leading-snug text-[#a0aaa7]">
              Ideas
              <br />
              into reliable
              <br />
              products.<span>↘</span>
            </div>
          </div>
          <div className="mt-[45px] grid grid-cols-[1.5fr_.7fr] items-center gap-[50px]">
            <div className="grid min-h-[245px] grid-cols-[110px_1fr] overflow-hidden rounded-md border border-[rgba(181,206,203,.13)] bg-[#121919]/90">
              <div className="bg-gradient-to-br from-[#074d91] to-[#0b233a] p-[17px] font-mono text-[10px] text-[#72baff]">
                01 /<br />
                <span>2023—PRESENT</span>
              </div>
              <div className="p-[18px_22px]">
                <div className="inline-block rounded bg-[#5ce688]/10 px-2 py-1 font-mono text-[8px] text-[#5ce688]">Working</div>
                <h3>Full Stack Developer</h3>
                <p className="text-[10px] text-[#83918e]">Independent · Pune, India</p>
                <p>
                  Building responsive applications and APIs with a focus on
                  clear communication, reliable delivery, and maintainable code.
                </p>
                <ul>
                  <li>
                    Delivered reusable frontend systems used across multiple
                    products.
                  </li>
                  <li>
                    Collaborated directly with clients to define scope and plan
                    practical solutions.
                  </li>
                  <li>
                    Set up repeatable engineering workflows and deployment
                    environments.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-[5px]">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Postgres</span>
                  <span>AWS</span>
                </div>
              </div>
            </div>
            <div className="text-[#83918e]">
              <span>01</span>
              <strong>
                Making the complex
                <br />
                <em>feel simple.</em>
              </strong>
              <p>
                Good software is invisible. It gets out of the way and lets
                people do their best work.
              </p>
            </div>
          </div>
        </section>
); }
