import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "SDE-1",
    location: "UST -Trivandrum , Kerala",
    description:
      "I worked as a full stack developer.Developed software applications using React and Spring-Boot. Designed and implemented user interfaces using React to enhance user experience. Executed project planning and coordination to meet deadlines effectively ",
    icon: React.createElement(CgWorkAlt),
    date: "2025",
  },
  {
    title: "Intern",
    location: "Tata Elxsi -Trivandrum , Kerala",
    description:
      "Supported the development and execution of a Proof of Concept (POC) related to rail and off-highway applications. Collaborated with cross-functional teams to troubleshoot and resolve technical issues.",
    icon: React.createElement(FaReact),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "MoneyMaster",
    description:
      "The project aims to help users manage their personal finances by tracking expenses, setting budgets, and providing useful insights into their spending habits.",
    tags: ["Flutter","MongoDB"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Talent Recruitment Platform",
    description:
      "Recruitment platform streamlines hiring for recruiters and candidates. Efficiently manage job postings,candidate profiles, and assessments.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "MySQL",
  "Java",
  "SpringBoot",
  "Python",
  "Django",
] as const;
