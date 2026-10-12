import { useRef, useState } from "react";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const commitRef = useRef<HTMLDivElement>(null);
  const [commitPosition, setCommitPosition] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  const handleCommitPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const element = commitRef.current;
    if (!element) return;
    const bounds = element.getBoundingClientRect();
    dragOffset.current = {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    };
    element.setPointerCapture(event.pointerId);
    setCommitPosition({ x: bounds.left, y: bounds.top });
    setIsDragging(true);
  };

  const handleCommitPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !commitRef.current) return;
    const size = commitRef.current.offsetWidth;
    const x = Math.min(
      Math.max(8, event.clientX - dragOffset.current.x),
      window.innerWidth - size - 8,
    );
    const y = Math.min(
      Math.max(8, event.clientY - dragOffset.current.y),
      window.innerHeight - size - 8,
    );
    setCommitPosition({ x, y });
  };

  const handleCommitPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    commitRef.current?.releasePointerCapture(event.pointerId);
    setIsDragging(false);
  };

  return (
    <footer className="mt-0 w-full border-t border-[#ffffff12] bg-[#080b0b]/80">
      <div className="mx-auto flex min-h-[108px] max-w-[1300px] items-center justify-between gap-8 px-2 py-6 text-[#83918e]">
        <div>
          <a
            className="font-hand text-[26px] italic leading-none text-[#49a8ff]"
            href="#top"
          >
            Sujay Pradhan
          </a>
          <p className="mt-2 font-mono text-[9px] tracking-[.12em] text-[#8d9894]">
            Build&nbsp; · &nbsp;Learn&nbsp; · &nbsp;Share&nbsp; · &nbsp;Grow
          </p>
        </div>

        <div className="flex items-center gap-5">
          <nav className="flex items-center gap-5" aria-label="Social links">
            <a
              className="transition-colors hover:text-[#f0f5f3]"
              href="https://github.com"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
            <a
              className="transition-colors hover:text-[#f0f5f3]"
              href="https://linkedin.com"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <a
              className="transition-colors hover:text-[#f0f5f3]"
              href="https://twitter.com"
              aria-label="Twitter"
            >
              <Twitter size={15} />
            </a>
            <a
              className="transition-colors hover:text-[#f0f5f3]"
              href="https://instagram.com"
              aria-label="Instagram"
            >
              <Instagram size={15} />
            </a>
          </nav>
          <span className="h-5 w-px bg-[#26312f]" />
          <span className="text-[9px] whitespace-nowrap">
            © 2026 Sujay Pradhan. All rights reserved.
          </span>
        </div>

        <div
          ref={commitRef}
          className={`footer-commit fixed z-50 hidden size-[66px] touch-none place-items-center rounded-full border border-[#215044] bg-[#0a1916] shadow-[0_0_18px_rgba(52,214,130,.16)] sm:grid ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={
            commitPosition
              ? { left: commitPosition.x, top: commitPosition.y }
              : { right: 24, bottom: 24 }
          }
          aria-label="Keep building"
          role="button"
          tabIndex={0}
          onPointerDown={handleCommitPointerDown}
          onPointerMove={handleCommitPointerMove}
          onPointerUp={handleCommitPointerUp}
          onPointerCancel={handleCommitPointerUp}
        >
          <span className="footer-commit-ring footer-commit-ring--outer absolute inset-1 rounded-full border border-dashed border-[#27725b]" />
          <span className="footer-commit-ring footer-commit-ring--inner absolute inset-2.5 rounded-full border border-[#173d34]" />
          <span className="footer-commit-core relative grid size-8 place-items-center rounded-full border border-[#36a66e] bg-[#103426] text-[#5ce688] shadow-[0_0_12px_rgba(92,230,136,.35)]">
            <span className="footer-commit-arrow">↗</span>
          </span>
          <small className="absolute -bottom-4 whitespace-nowrap font-hand text-[9px] italic text-[#63736e]">
            commit
          </small>
        </div>
      </div>
    </footer>
  );
}
