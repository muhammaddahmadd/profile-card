import React from "react";
import Skill from "./Skill.js";
import "./index.css";

const mySkills = [
  {
    name: "JavaScript",
    level: "pro",
    color: "cyan",
  },
  {
    name: "React",
    level: "newbie",
    color: "purple",
  },
  {
    name: "HTML & CSS",
    level: "pro",
    color: "cyan",
  },
  {
    name: "Git & Github",
    level: "mid",
    color: "coral",
  },
  {
    name: "Tailwind",
    level: "newbie",
    color: "purple",
  },
  {
    name: "BootStrap",
    level: "mid",
    color: "coral",
  },
];

function SkillList() {
  const skills = mySkills;
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          name={skill.name}
          level={skill.level}
          color={skill.color}
        ></Skill>
      ))}
    </div>
  );
}

export default SkillList;
