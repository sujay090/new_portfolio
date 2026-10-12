import { Code2, GitBranch, Github } from "lucide-react";
import { SectionLabel } from "./shared";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const weekdays = ["Mon", "", "Wed", "", "Fri", "", ""];
const levels = [
  "bg-[#172525]",
  "bg-[#155c45]/65",
  "bg-[#1e8e58]/75",
  "bg-[#3acb72]/85",
  "bg-[#5ce688]",
];

export function GithubActivity() {
  return (
    <section className="mt-[120px] w-full border-t border-[#ffffff12]">
      <div className="mx-auto max-w-[1300px] px-2 pt-[80px]">
        <div className="flex items-end justify-between gap-8">
          <div>
            <SectionLabel>GitHub</SectionLabel>
            <h2 className="font-sans text-[clamp(48px,5vw,68px)] font-extrabold leading-[.9] tracking-[-.06em] text-[#f4f5f2]">
              Code. Commit.{" "}
              <em className="not-italic text-[#5ce688]">Repeat.</em>
            </h2>
            <p className="mt-5 text-[13px] text-[#a4aaa9]">
              Consistent commits, steady progress, lifelong learning.
            </p>
          </div>
          <div className="flex shrink-0 gap-7 pb-1 text-[#83918e]">
            <div className="flex items-start gap-2">
              <Github size={22} className="text-[#f0f5f3]" />
              <span className="font-mono text-[9px]">
                <strong className="text-[20px] text-[#f0f5f3]">114</strong>
                <br />
                Total Contributions
              </span>
            </div>
            <div className="flex items-start gap-2 border-l border-[#ffffff12] pl-5">
              <Code2 size={22} className="text-[#f0f5f3]" />
              <span className="font-mono text-[9px]">
                <strong className="text-[20px] text-[#5ce688]">10</strong> days
                <br />
                Longest Streak
              </span>
            </div>
            <div className="flex items-start gap-2 border-l border-[#ffffff12] pl-5">
              <GitBranch size={22} className="text-[#f0f5f3]" />
              <span className="font-mono text-[9px]">
                <strong className="text-[20px] text-[#5ce688]">9</strong>
                <br />
                Repositories
              </span>
            </div>
          </div>
        </div>
        <div className="mt-7 overflow-hidden rounded-md border border-[rgba(181,206,203,.13)] bg-[#121919]/90 p-5">
          <div className="flex justify-between font-mono text-[9px] text-[#bdc9c5]">
            <span>114 contributions in 2026</span>
            <span>Current streak: 0 days</span>
          </div>
          <div className="mt-4 grid grid-cols-[30px_1fr] gap-2">
            <div className="mt-5 grid grid-rows-7 gap-[5px] font-mono text-[8px] text-[#83918e]">
              {weekdays.map((day, index) => (
                <span key={`${day}-${index}`}>{day}</span>
              ))}
            </div>
            <div className="min-w-[900px] flex-1">
              <div className="grid grid-cols-12 font-mono text-[8px] text-[#83918e]">
                {months.map((month) => (
                  <span key={month}>{month}</span>
                ))}
              </div>
              <div className="mt-1 grid grid-flow-col grid-rows-7 gap-[5px]">
                {Array.from({ length: 364 }, (_, i) => (
                  <i
                    key={i}
                    className={`h-[11px] w-[11px] rounded-[2px] border border-[#263334] ${levels[(i * 7 + i * i) % 5]}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-end gap-1 font-mono text-[7px] text-[#83918e]">
            Less
            {levels.map((level) => (
              <span
                key={level}
                className={`h-[8px] w-[8px] rounded-[2px] ${level}`}
              />
            ))}
            More
          </div>
        </div>
      </div>
    </section>
  );
}
