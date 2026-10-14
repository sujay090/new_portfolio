import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Contact } from "./components/Contact";
import { AllProjects } from "./components/AllProjects";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { GithubActivity } from "./components/GithubActivity";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { TechStack } from "./components/TechStack";
import "./styles.css";
type FormState = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};
type Status = { type: "" | "loading" | "success" | "error"; text: string };

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const minimumDisplayTime = new Promise<void>((resolve) => {
      window.setTimeout(resolve, 1600);
    });
    const fontsReady = document.fonts?.ready ?? Promise.resolve();

    Promise.all([minimumDisplayTime, fontsReady]).then(() => {
      if (isMounted) setIsLoading(false);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          } else {
            entry.target.classList.remove("reveal-visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px" },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    projectType: "A freelance project",
    message: "",
  });
  const [status, setStatus] = useState<Status>({ type: "", text: "" });
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: "loading", text: "Sending your note..." });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as { message: string };
      if (!response.ok) throw new Error(data.message);
      setStatus({ type: "success", text: data.message });
      setForm({
        name: "",
        email: "",
        projectType: "A freelance project",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    }
  };
  const updateForm = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) =>
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  const isProjectsPage =
    window.location.pathname.replace(/\/+$/, "") === "/projects";

  return (
    <>
      {isProjectsPage ? (
        <AllProjects />
      ) : (
        <div className="min-h-screen overflow-hidden bg-[#080b0b] bg-[url('/chalk-background.webp')] bg-cover bg-fixed bg-center bg-no-repeat font-sans text-[#f0f5f3]">
          <Header />
          <main id="top">
            <Hero />
            <Experience />
            <GithubActivity />
            <Projects />
            <TechStack />
            <Education />
            <Contact
              form={form}
              status={status}
              handleSubmit={handleSubmit}
              updateForm={updateForm}
            />
          </main>
          <Footer />
        </div>
      )}
      <div
        aria-hidden={!isLoading}
        className={`portfolio-loader ${isLoading ? "" : "portfolio-loader--hidden"}`}
      >
        <div className="portfolio-loader__glow" />
        <div className="portfolio-loader__chalk-dust" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="portfolio-loader__content">
          <p className="portfolio-loader__eyebrow">A little something is taking shape</p>
          <div className="portfolio-loader__name-wrap">
            <p className="portfolio-loader__signature">Sujay Pradhan</p>
          </div>
          <span className="portfolio-loader__line" />
          <p className="portfolio-loader__status">Loading experience</p>
        </div>
      </div>
    </>
  );
}
const root = document.getElementById("root");
if (!root) throw new Error("Root element was not found.");
createRoot(root).render(<App />);
