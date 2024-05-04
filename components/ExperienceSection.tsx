import { Badge, Text } from "@chakra-ui/react";
import { Experience } from "../types";

interface ExperienceSectionProps extends Experience {
  className?: string;
}

const ExperienceSection = ({
  role,
  timeWorked,
  description,
  className,
  badges,
}: ExperienceSectionProps) => (
  <div className={`flex ${className}`}>
    {/* TODO: something better here, probably grid */}
    <Text className="mr-20 w-[200px] flex-shrink-0 text-primary flex flex-col">
      <div className="text-right">
        <div>{role}</div>
        <div>({timeWorked})</div>
      </div>
      <div className="flex flex-wrap gap-2 mt-2 justify-end">
        {badges?.map((badge) => (
          <Badge key={badge} className="rounded-md bg-secondary p-1">
            {badge}
          </Badge>
        ))}
      </div>
    </Text>
    <Text className="text-primary">{description}</Text>
  </div>
);

export default ExperienceSection;
