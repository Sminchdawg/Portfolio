import { Text } from "@chakra-ui/react";
import ExperienceSection from "./ExperienceSection";
import { Experience } from "../types";

interface CompanyExperienceProps {
  company: string;
  experiences: Experience[];
  className?: string;
}

const CompanyExperience = ({
  company,
  experiences,
  className,
}: CompanyExperienceProps) => (
  <div className={`${className}`}>
    <Text className="text-2xl flex-1 mb-2 text-secondary w-[200px]">
      {company}
    </Text>
    <div className="flex flex-col gap-8">
      {experiences.map((experience) => (
        <ExperienceSection
          key={experience.role}
          role={experience.role}
          timeWorked={experience.timeWorked}
          description={experience.description}
          badges={experience.badges}
        />
      ))}
    </div>
  </div>
);

export default CompanyExperience;
