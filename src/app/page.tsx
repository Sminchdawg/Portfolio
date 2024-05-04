import Image from "next/image";
import astronaut from "../../public/astronaut.webp";
import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import CompanyExperience from "../../components/CompanyExperience";

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
    <main className="flex flex-col items-center px-10">
      <section className="h-screen snap-center flex flex-col center justify-center">
        <Image
          width={150}
          height={150}
          src={astronaut}
          alt="astronaut"
          className="animate-astronaut hover:animate-astronaut-fast mx-auto mb-10"
        />
        <h1 className="text-background text-5xl text-center mb-5">
          Hey, I'm Mitchell Genova
        </h1>
        <h3 className="text-background text-2xl text-center">
          I am a proactive and detail-oriented front-end developer with a strong
          commitment to collaboration, continuous improvement, and leveraging
          cutting-edge technologies to enhance application performance and user
          experience
        </h3>
      </section>
      <section className="snap-center">
        <Heading className="text-background mb-5">Experience</Heading>
        <Card className="w-full p-5">
          <CardHeader>Leadr</CardHeader>
          <CardBody className="flex flex-col gap-10">
            <CompanyExperience company="Leadr" experiences={leadrExperience} />
          </CardBody>
        </Card>
        <Card className="w-full p-5">
          <CardHeader>Leadr</CardHeader>
          <CardBody className="flex flex-col gap-10">
            <CompanyExperience company="Leadr" experiences={leadrExperience} />
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
