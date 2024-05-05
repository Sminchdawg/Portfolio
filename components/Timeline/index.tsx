import {
  Box,
  Step,
  StepIndicator,
  StepSeparator,
  StepStatus,
  Stepper,
} from "@chakra-ui/react";
import { Event } from "../../types";
import Image from "next/image";

interface TimelineProps {
  events: Event[];
  className?: string;
}

const Timeline = ({ events, className }: TimelineProps) => {
  return (
    <Stepper
      className={className}
      size="lg"
      index={10}
      orientation="vertical"
      gap="0"
    >
      {events.map((event, index) => (
        <Step className="pb-10" key={index}>
          <StepIndicator className="bg-secondary">
            <Image
              src={event.image}
              width={40}
              height={40}
              alt="age"
              className="rounded-full"
            />
          </StepIndicator>

          {/* <Box className="shrink-0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box> */}
          <div>
            <div className="text-background uppercase font-light">
              {event.dateText}
            </div>
            <div className="text-background font-bold">{event.mainText}</div>
            <div className="text-background font-light">
              <span>{event.company}</span>
              <span className="mx-2">|</span>
              <a href={event.link}>{event.link}</a>
            </div>
            <div className="text-background">{event.description}</div>
          </div>

          <StepSeparator className="bg-background" />
        </Step>
      ))}
    </Stepper>
  );
};

export default Timeline;
