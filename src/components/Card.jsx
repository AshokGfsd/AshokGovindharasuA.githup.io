import React from "react";
import { motion } from "framer-motion";

const Card = ({ project }) => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="custom-card max-w-xl bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <div className="custom-card-header">
        <p className="project-title">{project.title}</p>
        <div className="tech-stack">
          {project.techStack.map((tech, index) => (
            <img
              src={tech}
              alt={tech}
              className="custom-card-img"
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="keywords">
        {project.keywords.map((keyword, index) => (
          <p className="keyword" key={index}>
            {keyword}
          </p>
        ))}
      </div>
      <div>
        <p className="proj-desc">{project.description}</p>
      </div>
      <div className="card-actions">
        <a href={project.frontendLink} className="link-btn" target="_blank">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
          <span>Frontend</span>
        </a>
        {project.backendLink && (
          <a href={project.backendLink} className="link-btn" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
            <span>Backend</span>
          </a>
        )}

        <a href={project.liveLink} className="link-btn" target="_blank">
          ⋙
        </a>
      </div>
    </motion.div>
  );
};

export default Card;
