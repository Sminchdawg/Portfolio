import Timeline from "../Timeline";
import frontendMasters from "../../public/frontendMasters.webp";
import ysu from "../../public/ysu.webp";

const EducationTimeline = () => {
  return (
    <Timeline
      className="mt-5"
      events={[
        {
          dateText: "Jan 2023 - Present",
          mainText: "Frontend Masters' Courses",
          secondaryLeft: "Frontend Masters",
          secondaryRight: "https://frontendmasters.com/",
          description:
            "I am continuously expanding my expertise and staying current with the latest technologies by actively engaging in advanced courses on Frontend Masters, ensuring I remain at the forefront of front-end development trends and best practices.",
          image: frontendMasters,
        },
        {
          dateText: "Aug 2016 - Dec 2020",
          mainText: "Computer Science @ YSU (bachelor)",
          secondaryLeft: "Youngstown, Ohio",
          secondaryRight: "Minor: Math",
          description:
            "I graduated with a bachelor's degree in computer science at Youngstown State University.",
          image: ysu,
        },
      ]}
    />
  );
};

export default EducationTimeline;
