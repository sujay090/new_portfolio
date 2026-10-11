import { SectionLabel } from "./shared";
export function GithubActivity() { return (
        <section className="mx-auto w-[min(1100px,calc(100%-64px))] pt-[145px]">
          <div className="flex items-end justify-between gap-[50px]">
            <div>
              <SectionLabel>GitHub</SectionLabel>
              <h2>
                Code. Commit. <em>Repeat.</em>
              </h2>
              <p>Consistent commits, exploring ideas, lifelong learning.</p>
            </div>
            <div className="flex gap-[30px] font-mono text-[8px] text-[#83918e]">
              <span>
                <b>96</b> repos
              </span>
              <span>
                <b>10</b> years coding
              </span>
              <span>
                <b>7</b> languages
              </span>
            </div>
          </div>
          <div className="mt-7 p-5 rounded-md border border-[rgba(181,206,203,.13)] bg-[#121919]/90">
            <div className="flex justify-between font-mono text-[8px] text-[#83918e]">
              <span>102 contributions in 2026</span>
              <span>Current streak: 6 days</span>
            </div>
            <div className="my-5 grid grid-cols-[repeat(28,1fr)] grid-rows-[repeat(7,11px)] gap-[5px]">
              {Array.from({ length: 112 }, (_, i) => {
                const levels = ["bg-[#172525]", "bg-[#155c45]", "bg-[#1e8e58]", "bg-[#3acb72]", "bg-[#8affae]"];
                return <i key={i} className={`rounded-sm ${levels[(i * 7 + i * i) % 5]}`} />;
              })}
            </div>
            <div className="flex items-center justify-end gap-1 font-mono text-[7px] text-[#83918e]">
              Less <span className="bg-[#172525]" />
              <span className="bg-[#155c45]" />
              <span className="bg-[#1e8e58]" />
              <span className="bg-[#3acb72]" />
              <span className="bg-[#8affae]" /> More
            </div>
          </div>
        </section>
); }
