import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["Home", "#top"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Tech Stack", "#tech-stack"],
  ["Education", "#education"],
  ["Contact", "#contact"],
] as const;

function Brand() {
  const homePrefix = window.location.pathname.replace(/\/+$/, "") === "/projects" ? "/" : "";

  return (
    <a
      className="relative inline-flex w-fit pb-1 font-hand text-[34px] font-medium leading-none text-[#f1f2ed]"
      href={`${homePrefix}#top`}
      aria-label="Sujay Pradhan home"
    >
      Sujay Pradhan
      <svg
        aria-hidden="true"
        viewBox="0 0 180 12"
        className="absolute -bottom-0.5 left-0 h-3 w-full text-[#49a8ff]"
      >
        <path
          d="M3 9 Q80 0 174 5 M28 10 Q104 5 179 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </a>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const homePrefix = window.location.pathname.replace(/\/+$/, "") === "/projects" ? "/" : "";

  return (
    <header className="relative z-20 mx-auto grid h-[86px] max-w-[1300px] grid-cols-[1fr_auto_1fr] items-center px-2">
      <Brand />

      <nav
        className={
          menuOpen
            ? "fixed inset-0 z-10 flex flex-col items-center justify-center gap-7 bg-[#0b1010] text-sm text-[#a8b1af]"
            : "flex items-center justify-center gap-8 text-[14px] text-[#a8b1af] max-md:hidden"
        }
      >
        {links.map(([label, href]) => (
          <a
            key={label}
            className="whitespace-nowrap text-center leading-tight transition-colors hover:text-[#f1f2ed]"
            href={`${homePrefix}${href}`}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>

      <a
        className="justify-self-end rounded-md bg-[#42adf4] px-5 py-3 text-center text-[12px] font-bold leading-tight text-[#071c2c] transition hover:bg-[#4aa5f6] max-md:hidden"
        href={`${homePrefix}#contact`}
      >
        Let&apos;s Talk
      </a>

      <button
        className="z-20 hidden justify-self-end border-0 bg-transparent text-white max-md:block"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}
