import { StaticImageData } from "next/image";

export interface Comment {
  id: string;
  avatar: StaticImageData;
  link: string;
  arrouba: string;
}