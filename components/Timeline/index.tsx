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

const isValidUrl = (url: string) => {
  var regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  return regex.test(url);
};

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
            {event.image && (
              <Image
                src={event.image}
                width={40}
                height={40}
                alt="timeline image"
                className="rounded-full"
              />
            )}
          </StepIndicator>
          <div>
            <div className="text-background uppercase font-light">
              {event.dateText}
            </div>
            <div className="text-background font-bold">{event.mainText}</div>
            <div className="text-background font-light">
              <span>{event.secondaryLeft}</span>
              <span className="mx-2">|</span>
              {isValidUrl(event.secondaryRight) && (
                <a href={event.secondaryRight} target="_blank">
                  {event.secondaryRight}
                </a>
              )}
              {!isValidUrl(event.secondaryRight) && (
                <span>{event.secondaryRight}</span>
              )}
            </div>
            <p className="text-background mt-5">{event.description}</p>
          </div>

          <StepSeparator className="bg-background" />
        </Step>
      ))}
    </Stepper>
  );
};

export default Timeline;
