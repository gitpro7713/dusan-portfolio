// components/Experience/EnergyInstitute.js (or wherever you place it)

import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon"; // Adjust path as needed
import { getTasksTextWithHighlightedKeyword } from "./taskAndType"; // Adjust path

export default function Comrach() {
  const tasks = [
    {
      text: "Architected & implemented enterprise-grade web applications using React, Vue.js, Node.js, and Laravel, delivering scalable, maintainable solutions for CRM and ERP modules.",
      keywords: ["React", "Vue.js", "Laravel", "scalable", "maintainable"],
    },
    {
      text: "Collaborated with UX/UI designers to transform Figma prototypes into pixel-perfect, responsive front-end interfaces, ensuring accessibility and cross-browser consistency.",
      keywords: ["Figma prototypes", "pixel-perfect", "responsive", "accessibility", "cross-browser"],
    },
    {
      text: "Designed and deployed microservices on AWS (ECS, Lambda, RDS), establishing robust CI/CD pipelines with GitLab CI and Docker to automate testing, linting, and deployment.",
      keywords: ["microservices", "CI/CD pipelines","testing", "linting", "deployment"],
    },
    {
      text: "Integrated essential third-party services—including payment gateways (Stripe), authentication providers (OAuth2, JWT), and analytics platforms—ensuring secure, efficient data flows.",
      keywords: ["secure", "efficient"],
    },
    {
      text: "Mentored and led a team of developers, conducting code reviews, defining best practices, and fostering a culture of continuous improvement and collaboration across distributed teams.",
      keywords: ["code reviews", "best practices", "culture of continuous improvement", "collaboration"],
    },
    {
      text: "Optimized database performance through advanced indexing and query refactoring in MySQL and MongoDB, significantly enhancing system responsiveness.",
      keywords: ["MySQL", "MongoDB"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Senior Full Stack Developer <span className="text-AAsecondary">@ Comrach S.A</span>{" "}
            {/* Or your preferred color */}
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Mar 2023 - Present</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.comarch.pl/", "_blank")}
          >
            www.comrach.pl
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} /> {/* Or your preferred color */}
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
