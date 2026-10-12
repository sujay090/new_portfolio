import {
  ArrowDownToLine,
  ArrowRight,
  BookOpen,
  Code2,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { Button } from "./shared";

function Greeting() {
  return (
    <p className="mb-5 flex items-center gap-2 font-hand text-[25px] leading-none text-[#f1f2ed]">
      <span aria-hidden="true" className="h-px w-4 bg-[#49a8ff]" />
      Hi, I&apos;m
      <span aria-hidden="true" className="h-px w-7 bg-[#49a8ff]" />
    </p>
  );
}

function FocusCard() {
  return (
    <article className="rounded-lg border border-[#314043] bg-[#101718]/95 p-5 shadow-2xl shadow-black/20">
      <div className="mb-5 flex items-center gap-2 font-mono text-[11px] font-medium text-[#49a8ff]">
        <span className="grid size-4 place-items-center border border-[#49a8ff]">
          ◌
        </span>
        Current Focus
      </div>
      <p className="mb-4 text-[10px] text-[#7d8988]">Building &amp; learning</p>
      {[
        [
          "Building MeghVault",
          "A better cloud storage experience.",
          "In progress",
          "bg-[#49a8ff]",
        ],
        [
          "Thinking In System Designs",
          "Scalable architecture, one concept at a time.",
          "Exploring",
          "bg-[#5ce688]",
        ],
        [
          "Sharing what I learn",
          "Practical notes from the things I build.",
          "Up next",
          "bg-[#a8b1af]",
        ],
      ].map(([title, description, state, color]) => (
        <div className="border-l border-[#263334] py-2 pl-3" key={title}>
          <div className="flex items-center justify-between gap-2 text-[12px] font-semibold text-[#e7ece9]">
            {title}
            <span className="whitespace-nowrap text-[9px] font-normal text-[#83918e]">
              <i
                className={`mr-1 inline-block size-1.5 rounded-full ${color}`}
              />
              {state}
            </span>
          </div>
          <p className="mt-1 text-[9px] leading-5 text-[#83918e]">
            {description}
          </p>
        </div>
      ))}
      <p className="mt-4 border-t border-[#263334] pt-4 font-hand text-[17px] leading-tight text-[#aeb8b5]">
        Small steps today. Better things
        <br />
        tomorrow.
      </p>
    </article>
  );
}

function LearningCard() {
  return (
    <article className="rounded-lg border border-[#314043] bg-[#101718]/95 p-5">
      <div className="mb-5 flex items-center gap-2 font-mono text-[11px] font-medium text-[#49a8ff]">
        <BookOpen size={15} />
        Currently Learning
      </div>
      <h3 className="text-[12px] font-semibold text-[#e7ece9]">
        Distributed Cloud Architecture
      </h3>
      <p className="mt-2 text-[9px] text-[#83918e]">
        Designing systems that grow gracefully.
      </p>
      <div className="mt-5 flex items-center gap-3">
        <div className="h-1 flex-1 rounded-full bg-[#465050]">
          <div className="h-full w-[65%] rounded-full bg-[#49a8ff]" />
        </div>
        <span className="text-[9px] text-[#83918e]">65%</span>
      </div>
    </article>
  );
}

function CodingCard() {
  return (
    <article className="rounded-lg border border-[#314043] bg-[#101718]/95 p-5">
      <div className="mb-4 flex items-center gap-2 font-mono text-[11px] font-medium text-[#49a8ff]">
        <Code2 size={15} className="text-[#5ce688]" />
        Coding in 2026
      </div>
      <div className="flex items-end gap-2">
        <strong className="text-[29px] leading-none text-[#f1f2ed]">476</strong>
        <span className="mb-1 text-[9px] text-[#83918e]">hours</span>
      </div>
      <p className="mt-2 text-[9px] text-[#83918e]">Consistent. Day by day.</p>
    </article>
  );
}

export function Hero() {
  return (
    <section className="min-h-[calc(100svh-7rem)]">
      <div className="hero-section-drift mx-auto grid max-w-[1300px] grid-cols-[.9fr_1.6fr_.88fr] items-center gap-8 px-2 pt-20 max-xl:grid-cols-[.85fr_1.35fr_.8fr] max-lg:grid-cols-2 max-lg:gap-5 max-md:block max-md:pt-14">
        <div className="relative z-10 animate-hero-enter max-lg:col-span-1">
          <Greeting />
          <h1 className="font-sans text-[clamp(64px,6.3vw,92px)] font-extrabold leading-[.86] tracking-[-.075em] text-[#f4f5f2]">
            Sujay
            <br />
            Pradhan
          </h1>
          <p className="mt-8 text-center font-hand text-[30px] leading-[1.25] text-[#f1f2ed]">
            Building useful things
            <br />
            <span className="relative">
              on the internet.
              <span className="absolute -bottom-2 left-1/2 h-px w-36 -translate-x-1/2 rotate-[-5deg] bg-[#5ce688]" />
            </span>
          </p>
          <p className="mt-9 max-w-[330px] text-[13px] leading-6 text-[#9ba6a3]">
            I&apos;m a full-stack developer who loves turning ideas into
            real-world products. Currently exploring cloud, distributed systems
            and everything in between.
          </p>
          <div className="mt-7 flex items-center gap-3">
            <Button href="#projects">View My Work</Button>
            <a
              className="inline-flex items-center gap-2 rounded border border-[#344041] px-4 py-3 text-[11px] font-semibold text-[#dce4e0] transition hover:border-[#49a8ff] hover:text-[#49a8ff]"
              href="/Sujay_Pradhan_Resume.pdf"
              download="Sujay_Pradhan_Resume.pdf"
            >
              <ArrowDownToLine size={14} />
              Download Resume
            </a>
          </div>
          <div className="mt-8 flex gap-6 text-[#dbe4df]">
            <a href="https://github.com" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:kunal.rathore.dev@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="relative h-[650px] animate-hero-enter [animation-delay:180ms] max-lg:col-span-1 max-md:mt-10 max-md:h-[520px]">
          <img
            src="/hero-chalk-stroke-v1.avif"
            alt=""
            aria-hidden="true"
            className="absolute left-[4%] top-[11%] z-0 h-[58%] w-[42%] animate-hero-drift-slow object-contain opacity-75"
          />
          <img
            src="/hero-plant-v1.avif"
            alt=""
            aria-hidden="true"
            className="absolute bottom-[7%] right-[3%] z-0 h-[62%] w-[42%] animate-hero-drift-reverse object-contain object-bottom opacity-90"
          />
          <div className="absolute right-[2%] top-[12%] z-10 animate-hero-drift-slow font-hand text-[18px] leading-tight text-[#aeb8b5]">
            Same
            <br />
            Developer.
            <br />
            Bigger
            <br />
            Dreams.
            <span className="block rotate-[-25deg] text-4xl">↙</span>
          </div>
          <div className="absolute inset-x-[4%] bottom-0 top-0 z-[1] animate-float">
            <img
              src="/hero-portrait-transparent.png"
              alt="Kunal Rathore working on a laptop"
              className="h-full w-full object-contain object-bottom drop-shadow-[0_24px_30px_rgba(0,0,0,.28)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[22%] bg-gradient-to-t from-[#080b0b] via-[#080b0b]/80 to-transparent"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 max-lg:col-span-2 max-lg:grid max-lg:grid-cols-3 max-md:mt-8 max-md:block">
          <div className="animate-hero-enter [animation-delay:320ms]">
            <FocusCard />
          </div>
          <div className="animate-hero-enter [animation-delay:460ms]">
            <LearningCard />
          </div>
          <div className="animate-hero-enter [animation-delay:600ms]">
            <CodingCard />
          </div>
        </div>
      </div>
    </section>
  );
}
