import Timeline from "../Timeline";
import oldMe from "../../public/oldMe.webp";
import middleMe from "../../public/middleMe.webp";
import youngMe from "../../public/youngMe.webp";

const ExperienceTimeline = () => {
  return (
    <Timeline
      className="mt-5"
      events={[
        {
          dateText: "May 2022 - Present",
          mainText: "Senior Frontend Engineer",
          secondaryLeft: "Leadr",
          secondaryRight: "https://www.leadr.com/",
          description:
            "As a Senior Frontend Engineer at Leadr, I led and facilitated biweekly meetings for the frontend team, creating a collaborative environment to establish best practices and strategies for enhancing code quality and efficiency. My role involved spearheading initiatives such as the transition from Redux to React-Query and the consolidation of outdated packages, significantly improving application performance and user experience by optimizing resource utilization and adopting modern technologies.",
          image: oldMe,
        },
        {
          dateText: "June 2021 - May 2022",
          mainText: "Intermediate Frontend Engineer",
          secondaryLeft: "Leadr",
          secondaryRight: "https://www.leadr.com/",
          description:
            "As an Intermediate Frontend Engineer at Leadr, I collaborated with the design team to ideate and implement user-centric features, significantly boosting user satisfaction and enhancing the overall experience. My role also involved conducting comprehensive gap analyses and delivering high quality code, which enabled proactive identification of discrepancies and efficient integration with QA engineers, thus aligning product features closely with strategic project objectives.",
          image: middleMe,
        },
        {
          dateText: "May 2020 - May 2021",
          mainText: "Junior Frontend Engineer",
          secondaryLeft: "Turning Technologies (echo360)",
          secondaryRight: "https://echo360.com/",
          description:
            "As a Junior Frontend Engineer at Turning Technologies, I played a pivotal role in significant projects, including a complete UI rewrite and the transition of three applications from React to Angular, showcasing my adaptability and dedication to the team. I also collaborated closely with designers to independently develop and implement features, demonstrating self-sufficiency and effective communication skills while adhering to strict project timelines and maintaining high-quality standards.",
          image: youngMe,
        },
        {
          dateText: "Feb 2019 - Mar 2020",
          mainText: "Frontend Engineer Intern",
          secondaryLeft: "Turning Technologies (echo360)",
          secondaryRight: "https://echo360.com/",
          description:
            "As a Frontend Engineer intern at Turning Technologies, I demonstrated a rapid learning curve, fueled by a keen questioning mindset and unwavering commitment, which enabled me to play a significant role in transitioning the application from Bootstrap version 3 to version 4, resolving breaking changes to ensure seamless functionality. My dedication to maintaining high standards was further showcased as I developed comprehensive unit tests for React components using Jest and Enzyme, ensuring robust code coverage and reliable frontend functionality without compromising user experience.",
          image: youngMe,
        },
      ]}
    />
  );
};

export default ExperienceTimeline;
