import { type ChangeEvent, type FormEvent, useState } from "react";
import { createRoot } from "react-dom/client";
import { Contact } from "./components/Contact";
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
  return (
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
  );
}
const root = document.getElementById("root");
if (!root) throw new Error("Root element was not found.");
createRoot(root).render(<App />);
