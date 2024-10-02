import Image from "next/image";
import SectionHeader from "../../components/SectionHeader";
import ExperienceTimeline from "../../components/ExperienceTimeline";
import EducationTimeline from "../../components/EducationTimeline";
import logo from "../../public/logo.webp";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="px-5">
        <section id="home" className="mt-4 mb-10">
          <div className="flex items-center justify-center text-center gap-3">
            <div>
              <Image
                width={50}
                height={50}
                src={logo}
                alt="logo"
                className="rounded-lg"
              />
            </div>
            <h1 className="text-background text-3xl md:xl:text-5xl">
              Mitchell Genova
            </h1>
          </div>
        </section>
        <section id="aboutMe">
          <SectionHeader text="About Me" />
          <p className="text-background mt-5">
            Hi, my name is <b>Mitchell Genova</b>. I&apos;m a Senior Frontend
            Developer from Pennsylvania, USA. I have 6 years of frontend
            experience, with a proficiency in <b>React</b>. I have experience
            with many tools, with two of my favorites being{" "}
            <b>Tanstack-query</b> and <b>Typescript</b>. I am very passionate
            about performance and scaling solutions. I have unique experience,
            by being involved in an early stage startup. This allowed me to work
            on problems, such as: having major influence on a new codebase and
            maturing the codebase into something scalable and consistent.
          </p>
        </section>
        <section id="experience" className="mt-20">
          <SectionHeader text="Experience" />
          <ExperienceTimeline />
        </section>
        <section id="education" className="mt-20">
          <SectionHeader text="Education" />
          <EducationTimeline />
        </section>
      </div>
    </main>
  );
}
