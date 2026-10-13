import { useEffect, useState } from "react";

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
      className="relative inline-flex w-fit pb-1 font-hand text-[clamp(27px,5vw,34px)] font-medium leading-none text-[#f1f2ed]"
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

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="relative z-20 mx-auto flex h-[76px] max-w-[1300px] items-center justify-between px-4 sm:h-[86px] sm:px-6 lg:px-2">
      <Brand />

      <nav
        id="mobile-navigation"
        className={
          menuOpen
            ? "header-mobile-menu fixed inset-0 z-10 flex flex-col items-center justify-center gap-7 bg-[#0b1010f5] px-6 pt-16 text-sm text-[#a8b1af] backdrop-blur-xl md:static md:flex md:flex-row md:gap-8 md:bg-transparent md:p-0 md:backdrop-blur-none"
            : "hidden items-center justify-center gap-8 text-[14px] text-[#a8b1af] md:flex"
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
        className="hidden rounded-md bg-[#42adf4] px-5 py-3 text-center text-[12px] font-bold leading-tight text-[#071c2c] transition hover:bg-[#4aa5f6] md:block"
        href={`${homePrefix}#contact`}
      >
        Let&apos;s Talk
      </a>

      <button
        className={`header-menu-button relative z-20 grid size-11 place-items-center rounded-xl border border-[#ffffff1c] bg-[#101818cc] text-[#f0f5f3] backdrop-blur transition hover:border-[#49a8ff88] hover:bg-[#142020] hover:text-[#49a8ff] md:hidden ${
          menuOpen ? "header-menu-button--open" : ""
        }`}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="header-menu-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
    </header>
  );
}
