import React from "react";
import { Card, CardProps } from "../Card";
import { CardsArea } from "../CardsArea";
import { MainArea } from "../MainArea";

import styles from "./styles.module.css";

const projects: CardProps[] = [
  {
    description: "🥗 Appetizer Project",
    href: "/project/analyzing-dna",
    meta: "01. From JavaScript to TypeScript",
    title: "Analyzing DNA",
  },
  {
    description: "🥗 Appetizer Project",
    href: "/project/analyzing-dna2",
    meta: "02. From JavaScript to TypeScript",
    title: "Analyzing DNA",
  },
  {
    description: "🥗 Appetizer Project",
    href: "/project/analyzing-dna3",
    meta: "03. From JavaScript to TypeScript",
    title: "Analyzing DNA",
  },
  {
    description: "🥗 Appetizer Project",
    href: "/project/analyzing-dna4",
    meta: "04. From JavaScript to TypeScript",
    title: "Analyzing DNA",
  },
  {
    description: "🥗 Appetizer Project",
    href: "/project/analyzing-dna5",
    meta: "05. From JavaScript to TypeScript",
    title: "Analyzing DNA",
  },
  {
    description: "🥗 Appetizer Project",
    href: "/project/analyzing-dna6",
    meta: "06. From JavaScript to TypeScript",
    title: "Analyzing DNA",
  },
];

export const ProjectsSection = () => {
  return (
    <MainArea>
      <CardsArea
        description="Hands on real world projects that will help you exercise your knowledge
      of TypeScript."
        heading="Projects"
        link={{
          children: "See all XYZ projects",
          href: "/projects",
        }}
      >
        {projects.map((project) => (
          <Card className={styles.card} {...project} key={project.href} />
        ))}
      </CardsArea>
    </MainArea>
  );
};
