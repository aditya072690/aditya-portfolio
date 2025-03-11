"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Flowind",
    description: "Flowind is a SwiftUI productivity app with seamless onboarding, animated UI, and Firebase-powered authentication. Open-source and developer-friendly, it enhances workflow efficiency with a smooth user experience.",
    image: "/images/projects/1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/aditya072690/Flowind",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Quizzler",
    description: "Quizzler is a fun and interactive SwiftUI trivia app with customizable questions, progress tracking, and smooth animations. Designed with the MVC pattern, it keeps data organized for a seamless user experience.",
    image: "/images/projects/2.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/aditya072690/Quizzler",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "BMI-Calculator",
    description: "The BMI Calculator is a sleek SwiftUI app with animated navigation and smart data handling for accurate health tracking. Built for a smooth user experience, it leverages Swift’s best practices for efficiency and clarity.",
    image: "/images/projects/3.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/aditya072690/BMI-Calculator",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "ScoreKeeper",
    description: "ScoreKeeper is a user-friendly Python app with a sleek GUI for tracking game scores effortlessly. Open-source and community-driven, it ensures easy score management with database support.",
    image: "/images/projects/4.png",
    tag: ["All", "PC"],
    gitUrl: "https://github.com/aditya072690/ScoreKeeper",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Treeheaven",
    description: "TreeHeaven is a sleek, web-based online store built with HTML, CSS, SCSS, and JavaScript for a smooth shopping experience. Hosted on Vercel and open-source, it invites community contributions to enhance its features.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aditya072690/treeheaven1",
    previewUrl: "treeheaven.vercel.app",
  },
  {
    id: 6,
    title: "Weightswap",
    description: "WeightSwap is a PHP-powered web app for seamless weight-based transactions, featuring user authentication and payment processing. Hosted on Vercel, it offers a user-friendly experience and welcomes community contributions.",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/aditya072690/weightswap",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Clima",
    description: "Clima A weather forecasting application that provides current and forecasted weather conditions, including temperature, humidity, wind speed, and precipitation. The app uses APIs to gather data and offers insights into local climate patterns for better planning.",
    image: "/images/projects/7.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/aditya072690/Clima",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Flash Chat",
    description: "Flash Chat A simple yet efficient chat application built with Swift and Firebase. It allows users to connect, send messages, and view real-time updates. The app provides a basic UI for easy communication.",
    image: "/images/projects/8.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/aditya072690/Flash-Chat",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="PC"
          isSelected={tag === "PC"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
