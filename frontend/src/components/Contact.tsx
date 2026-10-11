import { ChangeEvent, FormEvent } from "react";
import { Check, Mail, MapPin, Send } from "lucide-react";
import { SectionLabel } from "./shared";
type FormState = { name: string; email: string; projectType: string; message: string };
type Status = { type: "" | "loading" | "success" | "error"; text: string };
type ContactProps = { form: FormState; status: Status; handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>; updateForm: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void };
export function Contact({ form, status, handleSubmit, updateForm }: ContactProps) { return (
        <section className="mx-auto w-[min(1100px,calc(100%-64px))] grid grid-cols-[.8fr_1.2fr] items-center gap-[90px] py-[160px]" id="contact">
          <div className="">
            <SectionLabel>Contact</SectionLabel>
            <h2>
              Let’s Build <em>Something</em>
              <br />
              <em>Together</em>
            </h2>
            <p>
              Have a product idea, a role to discuss, or just want to say hello?
              Send the right brief and I’ll get back to you soon.
            </p>
            <div className="mt-8 grid gap-3 text-[10px] text-[#bdc9c5]">
              <a href="mailto:kunal.rathore.dev@gmail.com">
                <Mail size={16} /> kunal.rathore.dev@gmail.com
              </a>
              <a href="tel:+919876543210">
                <span>⌕</span> +91 98765 43210
              </a>
              <span>
                <MapPin size={16} /> Pune, Madhya Pradesh, India
              </span>
              <span className="text-[#5ce688]">
                <i /> Available for work
              </span>
            </div>
          </div>
          <form className="p-6 rounded-md border border-[rgba(181,206,203,.13)] bg-[#121919]/90" onSubmit={handleSubmit}>
            <div className="flex items-center justify-between">
              <SectionLabel>Start a conversation</SectionLabel>
              <span>
                <i /> Replies within 1-2 days
              </span>
            </div>
            <h3>Tell me what you’re planning.</h3>
            <p className="text-[10px] text-[#83918e]">
              No pressure, no jargon — just a good conversation.
            </p>
            <div className="mb-3 flex gap-2">
              <label>
                <input
                  type="radio"
                  name="projectType"
                  value="A freelance project"
                  checked={form.projectType === "A freelance project"}
                  onChange={updateForm}
                />{" "}
                A freelance project
              </label>
              <label>
                <input
                  type="radio"
                  name="projectType"
                  value="A full-time opportunity"
                  checked={form.projectType === "A full-time opportunity"}
                  onChange={updateForm}
                />{" "}
                A full-time opportunity
              </label>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <label>
                Your name
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={updateForm}
                  placeholder="Your name"
                />
              </label>
              <label>
                Your email
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={updateForm}
                  placeholder="you@email.com"
                />
              </label>
            </div>
            <label>
              Project title
              <input name="title" placeholder="What are we building?" />
            </label>
            <label>
              Project overview
              <textarea
                required
                name="message"
                value={form.message}
                onChange={updateForm}
                rows={4}
                placeholder="Tell me a little about your idea, goals, and timeline..."
              />
            </label>
            <div className="mt-2 flex items-center justify-between text-[9px] text-[#83918e]">
              <span>Usually reply within 48 hours.</span>
              <button
                className="inline-flex items-center justify-center gap-2 rounded px-4 py-3 text-[11px] font-bold text-[#171205] transition hover:-translate-y-0.5 bg-[#f4c542] hover:bg-[#ffda62]"
                disabled={status.type === "loading"}
              >
                {status.type === "loading" ? "Sending..." : "Send message"}{" "}
                <Send size={15} />
              </button>
            </div>
            {status.text && (
              <p className={`mt-4 flex items-center gap-1 text-[10px] text-[#5ce688] ${status.type}`}>
                <Check size={15} /> {status.text}
              </p>
            )}
          </form>
        </section>
); }
