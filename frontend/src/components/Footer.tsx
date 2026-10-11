import { Github, Linkedin, Mail } from "lucide-react";
export function Footer() { return (
      <footer className="mx-auto flex max-w-[1100px] items-center justify-between border-t border-[rgba(181,206,203,.13)] py-6 text-[9px] text-[#83918e]">
        <a className="inline-flex items-center gap-3 text-[13px] font-extrabold" href="#top">
          <span className="grid size-[25px] place-items-center rounded-[5px] bg-[#5ce688] font-sans text-[17px] text-[#07100b]">K</span>
          <span>Kunal Rathore</span>
        </a>
        <span>© 2026 Kunal Rathore. All rights reserved.</span>
        <div>
          <a href="https://github.com">
            <Github size={15} />
          </a>
          <a href="https://linkedin.com">
            <Linkedin size={15} />
          </a>
          <a href="mailto:kunal.rathore.dev@gmail.com">
            <Mail size={15} />
          </a>
        </div>
      </footer>
); }
