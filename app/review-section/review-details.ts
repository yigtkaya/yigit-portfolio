import { StaticImageData } from "next/image";
import alice from "../../../public/team-1.webp";
import keli from "../../../public/team-2.webp";
import nena from "../../../public/team-4.webp";
import smith from "../../../public/team-1.webp";
import james from "../../../public/team-2.webp";
import anto from "../../../public/team-4.webp";

export type ReviewProps = {
  name: string;
  role: string;
  company: string;
  image: StaticImageData;
  review: string;
  index: number;
};

export const reviewDetails: ReviewProps[] = [
  {
    name: "Alice",
    role: "CEO",
    company: "Alice Inc.",
    image: alice,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    index: 1,
  },
  {
    name: "Keli",
    role: "CEO",
    company: "Alice Inc.",
    image: keli,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    index: 2,
  },
  {
    name: "Nena",
    role: "CEO",
    company: "Alice Inc.",
    image: nena,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    index: 3,
  },
  {
    name: "Smith",
    role: "CEO",
    company: "Alice Inc.",
    image: smith,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    index: 4,
  },
  {
    name: "James",
    role: "CEO",
    company: "Alice Inc.",
    image: james,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    index: 5,
  },
  {
    name: "Anto",
    role: "CEO",
    company: "Alice Inc.",
    image: anto,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    index: 6,
  },
];
