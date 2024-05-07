import { StaticImageData } from "next/image";

export interface Experience {
  role: string;
  timeWorked: string;
  description: string;
  badges: string[];
}

export interface Event {
  dateText: string;
  mainText: string;
  secondaryLeft: string;
  secondaryRight: string;
  description: string;
  image?: StaticImageData;
}
