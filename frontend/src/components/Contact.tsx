import { ChangeEvent, FormEvent } from "react";
import {
  Check,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { SectionLabel } from "./shared";

type FormState = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

type Status = { type: "" | "loading" | "success" | "error"; text: string };

type ContactProps = {
  form: FormState;
  status: Status;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  updateForm: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

const inputClass =
  "mt-1.5 w-full rounded-md border border-[#1d2927] bg-[#090e0d] px-3 py-2.5 text-[11px] text-[#dce4e1] outline-none placeholder:text-[#56615e] focus:border-[#318ed2]";

export function Contact({
  form,
  status,
  handleSubmit,
  updateForm,
}: ContactProps) {
  return (
    <section
      className="mt-[120px] w-full border-t border-[#ffffff12]"
      id="contact"
    >
      <div className="mx-auto max-w-[1300px] px-2 py-[90px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-[70px]">
          <div className="relative">
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-3 max-w-[570px] font-sans text-[clamp(43px,5vw,64px)] font-extrabold leading-[.84] tracking-[-.07em] text-[#f4f5f2]">
              <span className="whitespace-nowrap">
                Let&apos;s Build{" "}
                <span className="text-[#49a8ff]">Something</span>
              </span>
              <br />
              <span className="text-[#49a8ff]">Together</span>
            </h2>
            <p className="mt-5 max-w-[460px] text-[12px] leading-5 text-[#9aa5a1]">
              Have a product idea, a role to discuss, or just want to say hello?
              Send the right brief and I&apos;ll get back to you soon.
            </p>

            <div className="mt-10 grid gap-4 text-[11px] text-[#c0cbc7]">
              <a
                className="flex items-center gap-3"
                href="mailto:kunal.rathore78@email.com"
              >
                <Mail size={16} className="text-[#d9e1de]" />
                <span>
                  <small className="block text-[8px] uppercase tracking-[.16em] text-[#78837f]">
                    Email
                  </small>
                  pradhansujay856@gmail.com
                </span>
              </a>
              <a className="flex items-center gap-3" href="tel:+918359916948">
                <Phone size={16} className="text-[#d9e1de]" />
                <span>
                  <small className="block text-[8px] uppercase tracking-[.16em] text-[#78837f]">
                    Phone
                  </small>
                  +91 8101571141
                </span>
              </a>
              <span className="flex items-center gap-3">
                <MapPin size={16} className="text-[#d9e1de]" />
                <span>
                  <small className="block text-[8px] uppercase tracking-[.16em] text-[#78837f]">
                    Based in
                  </small>
                  Kollkata, West Bengal, India
                </span>
              </span>
              <span className="flex items-center gap-3 text-[#5ce688]">
                <span className="grid size-4 place-items-center rounded-full border border-[#2ccf71]">
                  <Check size={10} />
                </span>
                <span>
                  <small className="block text-[8px] uppercase tracking-[.16em] text-[#78837f]">
                    Availability
                  </small>
                  Available
                </span>
              </span>
            </div>

            <div className="mt-16 ml-auto mr-8 max-w-[170px] font-hand text-[21px] italic leading-[.9] text-[#a0aaa7]">
              Good People
              <br />
              Build Great Things...
              <svg
                className="mt-2 ml-8 h-3 w-24 text-[#49a8ff]"
                viewBox="0 0 110 18"
                fill="none"
              >
                <path
                  d="M4 12Q50 2 106 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="contact-channel-card relative mt-12 hidden h-[185px] max-w-[300px] overflow-hidden rounded-xl border border-[#39403f] bg-gradient-to-br from-[#202625] via-[#121716] to-[#080b0b] shadow-[inset_0_1px_0_rgba(225,235,232,.08),0_12px_30px_rgba(0,0,0,.2)] sm:block">
              <div className="absolute left-3 top-3 text-[8px] uppercase tracking-[.18em] text-[#a2aeaa]">
                Open channel{" "}
                <i className="ml-1 inline-block size-1.5 rounded-full bg-[#5ce688]" />
              </div>
              <div className="contact-channel-node contact-channel-node--brief absolute left-5 top-14 rounded-md border border-[#29404b] bg-gradient-to-br from-[#172832] to-[#101b20] px-4 py-3 text-[10px] text-[#d8e2df]">
                <span className="mr-2 text-[#49a8ff]">▣</span> Brief
                <small className="block pl-5 text-[8px] text-[#71827e]">
                  Share the idea
                </small>
              </div>
              <div className="contact-channel-node contact-channel-node--impact absolute bottom-8 right-3 rounded-md border border-[#29404b] bg-gradient-to-br from-[#172a2a] to-[#101b20] px-4 py-3 text-[10px] text-[#d8e2df]">
                <span className="mr-2 text-[#5ce688]">✣</span> Impact
                <small className="block pl-5 text-[8px] text-[#71827e]">
                  Shape it together
                </small>
              </div>
              <div className="contact-channel-orbit absolute bottom-4 left-16 h-20 w-36 rotate-[-20deg] rounded-[50%] border border-[#194b69]" />
              <div className="absolute bottom-3 right-4 font-hand text-[13px] italic text-[#9aa8a3]">
                A clear brief → a better build.
              </div>
            </div>
          </div>

          <div className="relative lg:pt-[150px]">
            <div className="absolute -top-2 right-4 hidden font-hand text-[22px] italic leading-[.9] text-[#a0aaa7] lg:block">
              Good
              <br />
              People
              <br />
              Build
              <br />
              Great Things...
            </div>
            <form
              className="rounded-xl border border-[#293735] bg-[#111817]/95 p-5 sm:p-6"
              onSubmit={handleSubmit}
            >
              <div className="flex items-center justify-between">
                <SectionLabel>Start a conversation</SectionLabel>
                <span className="flex items-center gap-1 text-[8px] text-[#84908c]">
                  <i className="size-1.5 rounded-full bg-[#5ce688] shadow-[0_0_7px_#5ce688]" />
                  Replies within 1–2 days
                </span>
              </div>
              <h3 className="mt-3 text-[20px] font-bold tracking-[-.04em] text-[#e9efec]">
                Tell me what you&apos;re planning.
              </h3>
              <p className="mt-3 text-[10px] text-[#7f8b87]">
                I&apos;m reaching out about
              </p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {["A freelance project", "A job opportunity"].map((type) => (
                  <label
                    className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2.5 text-[10px] ${
                      form.projectType === type
                        ? "border-[#2876a9] bg-[#142631] text-[#c9d9d5]"
                        : "border-[#1d2927] text-[#798682]"
                    }`}
                    key={type}
                  >
                    <input
                      className="accent-[#49a8ff]"
                      type="radio"
                      name="projectType"
                      value={type}
                      checked={form.projectType === type}
                      onChange={updateForm}
                    />
                    {type}
                  </label>
                ))}
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <label className="text-[9px] text-[#9aa5a1]">
                  Your name <span className="text-[#49a8ff]">*</span>
                  <input
                    className={inputClass}
                    required
                    name="name"
                    value={form.name}
                    onChange={updateForm}
                    placeholder="Kunal Sharma"
                  />
                </label>
                <label className="text-[9px] text-[#9aa5a1]">
                  Your email <span className="text-[#49a8ff]">*</span>
                  <input
                    className={inputClass}
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={updateForm}
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label className="mt-3 block text-[9px] text-[#9aa5a1]">
                Project title <span className="text-[#49a8ff]">*</span>
                <input
                  className={inputClass}
                  required
                  name="title"
                  placeholder="What are we building?"
                />
              </label>
              <label className="mt-3 block text-[9px] text-[#9aa5a1]">
                Project description <span className="text-[#49a8ff]">*</span>
                <textarea
                  className={`${inputClass} resize-none`}
                  required
                  name="message"
                  value={form.message}
                  onChange={updateForm}
                  rows={4}
                  placeholder="Tell me about the product, scope, and what success looks like..."
                />
              </label>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <label className="text-[9px] text-[#9aa5a1]">
                  Budget range
                  <input
                    className={inputClass}
                    name="budget"
                    placeholder="Select a range"
                  />
                </label>
                <label className="text-[9px] text-[#9aa5a1]">
                  Expected timeline
                  <input
                    className={inputClass}
                    name="timeline"
                    placeholder="Select a timeline"
                  />
                </label>
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <span className="flex items-center gap-1 text-[8px] text-[#6f7c78]">
                  <Clock3 size={11} /> Your details stay private and are only
                  used to reply.
                </span>
                <button
                  className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#49a8ff] px-4 py-3 text-[10px] font-bold text-[#061724] transition hover:bg-[#6ab8ff]"
                  disabled={status.type === "loading"}
                >
                  {status.type === "loading"
                    ? "Sending..."
                    : "Send Freelance Brief"}{" "}
                  <Send size={13} />
                </button>
              </div>
              {status.text && (
                <p
                  className={`mt-4 flex items-center gap-1 text-[10px] ${status.type === "error" ? "text-[#ff8178]" : "text-[#5ce688]"}`}
                >
                  {status.type === "error" ? (
                    <Sparkles size={13} />
                  ) : (
                    <Check size={13} />
                  )}{" "}
                  {status.text}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
