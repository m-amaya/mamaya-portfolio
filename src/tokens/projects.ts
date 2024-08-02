import { DefaultMantineColor } from "@mantine/core";

const projectTags = [
  "Animation",
  "API",
  "App",
  "Auth",
  "Clone",
  "Database",
  "Form",
  "Site",
  "Utility"
] as const;

type ProjectTag = (typeof projectTags)[number];

export const TAG_COLOR_MAP: Record<ProjectTag, DefaultMantineColor> = {
  Animation: "indigo.1",
  API: "orange.1",
  App: "green.1",
  Auth: "grape.1",
  Clone: "teal.1",
  Database: "pink.1",
  Form: "yellow.1",
  Site: "violet.1",
  Utility: "cyan.1"
};

export type Project = {
  name: string;
  date: Date;
  tags: ProjectTag[];
  description: string;
};

export const projectData: Project[] = [
  {
    name: "Chatter",
    date: new Date(2022, 6, 8),
    tags: ["Site", "Auth", "Clone"],
    description: "A Twitter/X clone"
  },
  {
    name: "Skin Test",
    date: new Date(2022, 11, 4),
    tags: ["Form", "Animation"],
    description: "The Typology Skin Test"
  },
  {
    name: "Calculator",
    date: new Date(2022, 12, 20),
    tags: ["App", "Utility"],
    description: "A simple calculator app"
  },
  {
    name: "Weather.ly",
    date: new Date(2023, 2, 11),
    tags: ["App", "API", "Utility"],
    description: "A basic weather app"
  },
  {
    name: "Color Scale",
    date: new Date(2023, 8, 8),
    tags: ["App", "Utility"],
    description: "A color palette generator"
  },
  {
    name: "Chorelist",
    date: new Date(2023, 11, 23),
    tags: ["App", "Auth", "Database"],
    description: "A chore manager"
  },
  {
    name: "Quizzle",
    date: new Date(2024, 1, 2),
    tags: ["Site", "Animation", "Database", "Clone"],
    description: "A Quizlet clone"
  },
  {
    name: "Trivia.ly",
    date: new Date(2024, 4, 10),
    tags: ["App", "Animation", "API"],
    description: "A trivia game"
  },
  {
    name: "Blogger",
    date: new Date(2024, 5, 24),
    tags: ["App", "Auth", "Clone"],
    description: "A Medium clone"
  },
  {
    name: "GoodPup",
    date: new Date(2024, 6, 4),
    tags: ["Site", "Clone"],
    description: "A GoodDog clone"
  },
  {
    name: "Banked",
    date: new Date(2024, 7, 15),
    tags: ["App", "Database"],
    description: "A small bank app"
  }
];
