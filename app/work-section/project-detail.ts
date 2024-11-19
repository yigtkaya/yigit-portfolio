export type ProjectDetailProps = {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  image: string;
  available: boolean;
};


export const devProjects: ProjectDetailProps[] = [
  {
    id: 1,
    name: "Project 1",
    description: "Description 1",
    techStack: ["React", "Next.js", "TypeScript"],
    image: "/robot.png",
    available: true,
  },
  {
    id: 2,
    name: "Project 2",
    description: "Description 2",
    techStack: ["React", "Next.js", "TypeScript"],
    image: "/portrait.png",
    available: true,
  },
  {
    id: 3,
    name: "Project 3",
    description: "Description 3",
    techStack: ["React", "Next.js", "TypeScript"],
    image: "/illustrator.png",
    available: true,
  },
  {
    id: 4,
    name: "Project 4",
    description: "Description 4",
    techStack: ["React", "Next.js", "TypeScript"],
    image: "/hero-img.png",
    available: true,
  },
];
