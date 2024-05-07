import Image from "next/image";
import astronaut from "../../public/astronaut.webp";
import SectionHeader from "../../components/SectionHeader";
import ExperienceTimeline from "../../components/ExperienceTimeline";
import EducationTimeline from "../../components/EducationTimeline";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section
        id="home"
        className="h-screen flex flex-col center justify-center bg-[url('../../public/spaceBackground.webp')]"
      >
        <h1 className="text-background text-5xl text-center mb-5">
          Mitchell Genova
        </h1>
        <Image
          width={150}
          height={150}
          src={astronaut}
          alt="astronaut"
          className="animate-astronaut hover:animate-astronaut-fast mx-auto mb-10"
        />
      </section>
      <div className="px-5">
        <section id="aboutMe">
          <div>little image thing of me</div>
          <SectionHeader text="About Me" />
          <p className="text-background mt-5">
            Hi, my name is <b>Mitchell Genova</b>. I'm a Senior Frontend
            Developer from Pennsylvania, USA. I have 5 years of frontend
            experience, with a proficiency in <b>React</b>. I have experience
            with many tools, with two of my favorites being <b>React-query</b>{" "}
            and <b>Typescript</b>. I am very passionate about performance and
            scaling solutions.
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
