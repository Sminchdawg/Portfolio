import Image from "next/image";
import astronaut from "../../public/astronaut.webp";
import SectionHeader from "../../components/SectionHeader";
import Timeline from "../../components/Timeline";
import oldMe from "../../public/oldMe.webp";
import middleMe from "../../public/middleMe.webp";
import youngMe from "../../public/youngMe.webp";

const leadrExperience = [
  {
    role: "Senior Frontend Engineer",
    timeWorked: "May, 2022 - Present",
    description: `As a front-end developer, I led biweekly guild meetings to enhance
      coding standards, fostering a culture of collaboration and
      continuous improvement. My gap analysis efforts ensured high
      product quality, focusing on end-user satisfaction, while my
      collaboration with the design team established UI consistency
      across the application. I spearheaded major upgrades,
      transitioning our application to React 18 and React Query v5, and
      played a key role in streamlining and unifying the code structure.
      These initiatives significantly improved application performance,
      user experience, and maintainability.`,
    badges: ["Javascript", "Typescript", "React", "React Query", "Zustand"],
  },
  {
    role: "Intermediate Frontend Engineer",
    timeWorked: "June 2021 - May, 2022",
    description: `
      I efficiently coordinated with QA engineers to deliver completed projects,
      fostering a collaborative environment that ensured seamless integration of quality assurance processes and prompt resolution of any issues.
      My optimization of a critical list page that was rerendering excessively led to significant improvements in user experience, enhancing responsiveness and reducing load times.
      I also played a crucial role in transitioning our React application from JavaScript to TypeScript, which enhanced development robustness and maintainability.
      Additionally, I contributed heavily to transitioning from Redux to React Query, improving data fetching efficiency and user experience across the application.`,
    badges: ["Javascript", "Typesript", "React", "React Query", "Redux"],
  },
];

const turningExperience = [
  {
    role: "Junior Frontend Engineer",
    timeWorked: "March 2020 - May 2021",
    description: `
      I collaborated closely with designers to independently develop and implement features, demonstrating self-sufficiency and strong communication skills in our team. This collaboration not only enhanced the application's functionality but also ensured aesthetic consistency across the platform. I actively participated in the transition from React to Angular, quickly mastering the new framework and sharing my insights to enhance team proficiency. This initiative significantly improved our team's efficiency and facilitated the seamless integration of Angular technologies, optimizing our development processes.`,
    badges: ["Javascript", "Typescript", "Angular"],
  },
  {
    role: "Intern",
    timeWorked: "February 2019 - March 2020",
    description: `
      My keen questioning mindset and strong commitment to learning quickly were instrumental in my professional development, allowing me to adapt swiftly to new technologies and challenges. I successfully led the transition of our application from Bootstrap version 3 to version 4, meticulously resolving breaking changes to ensure seamless functionality and preserve user experience. Additionally, I developed comprehensive unit tests for React components using Jest and Enzyme, which significantly enhanced code reliability and robustness. These efforts contributed to maintaining high-quality standards and consistent frontend functionality across our projects.`,
    badges: ["Javascript", "React", "Redux", "Jest", "Enzyme"],
  },
];

export default function Home() {
  return (
    <main className="flex flex-col px-5">
      <section
        id="home"
        className="h-screen flex flex-col center justify-center"
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
      <section id="aboutMe">
        <div>little image thing of me</div>
        <SectionHeader text="About Me" />
        <p className="text-background mt-5">
          Hi, my name is <b>Mitchell Genova</b>. I'm a Senior Frontend Developer
          from Pennsylvania, USA. I have 5 years of frontend experience, with a
          proficiency in <b>React</b>. I have experience with many tools, with
          two of my favorites being <b>React-query</b> and <b>Typescript</b>. I
          am very passionate about performance and scaling solutions.
        </p>
      </section>
      <section id="experience" className="mt-20">
        <SectionHeader text="Experience" />
        <Timeline
          className="mt-5"
          events={[
            {
              dateText: "May 2022 - Present",
              mainText: "Senior Frontend Engineer",
              company: "Leadr",
              link: "https://www.leadr.com/",
              description:
                "As a Senior Frontend Engineer at Leadr, I led and facilitated biweekly meetings for the frontend team, creating a collaborative environment to establish best practices and strategies for enhancing code quality and efficiency. My role involved spearheading initiatives such as the transition from Redux to React-Query and the consolidation of outdated packages, significantly improving application performance and user experience by optimizing resource utilization and adopting modern technologies.",
              image: oldMe,
            },
            {
              dateText: "June 2021 - May 2022",
              mainText: "Intermediate Frontend Engineer",
              company: "Leadr",
              link: "https://www.leadr.com/",
              description:
                "As an Intermediate Frontend Engineer at Leadr, I collaborated with the design team to ideate and implement user-centric features, significantly boosting user satisfaction and enhancing the overall experience. My role also involved conducting comprehensive gap analyses and delivering high quality code, which enabled proactive identification of discrepancies and efficient integration with QA engineers, thus aligning product features closely with strategic project objectives.",
              image: middleMe,
            },
            {
              dateText: "May 2020 - May 2021",
              mainText: "Junior Frontend Engineer",
              company: "Turning Technologies (echo360)",
              link: "https://echo360.com/",
              description:
                "As a Junior Frontend Engineer at Turning Technologies, I played a pivotal role in significant projects, including a complete UI rewrite and the transition of three applications from React to Angular, showcasing my adaptability and dedication to the team. I also collaborated closely with designers to independently develop and implement features, demonstrating self-sufficiency and effective communication skills while adhering to strict project timelines and maintaining high-quality standards.",
              image: youngMe,
            },
            {
              dateText: "May 2022 - Present",
              mainText: "Frontend Engineer Intern",
              company: "Turning Technologies (echo360)",
              link: "https://echo360.com/",
              description:
                "As a Frontend Engineer intern at Turning Technologies, I demonstrated a rapid learning curve, fueled by a keen questioning mindset and unwavering commitment, which enabled me to play a significant role in transitioning the application from Bootstrap version 3 to version 4, resolving breaking changes to ensure seamless functionality. My dedication to maintaining high standards was further showcased as I developed comprehensive unit tests for React components using Jest and Enzyme, ensuring robust code coverage and reliable frontend functionality without compromising user experience.",
              image: youngMe,
            },
          ]}
        />
      </section>
    </main>
  );
}
