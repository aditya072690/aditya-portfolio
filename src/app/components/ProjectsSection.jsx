"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Geeta Olympiad 2025",
    description: "A high-performance production React Native application built from scratch. Features secure authentication, user onboarding, interactive quiz modules, real-time leaderboards, push notifications, and Firebase services integration (analytics, crash reporting).",
    image: "/images/projects/geeta-olympiad.png",
    tag: ["All", "Mobile"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.learngeeta.play&hl=en_IN",
    appStoreUrl: "https://apps.apple.com/nz/app/geeta-olympiad-2025/id6756177418",
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 2,
    title: "OKO Homes",
    description: "A scalable multi-tenant SaaS platform built using React, TypeScript, PostgreSQL, and Supabase. Implements secure role-based access control, interactive dashboards, real-time data sync, and optimized backend query tuning.",
    image: "/images/projects/oko-homes.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://oko-homes-01.vercel.app",
  },
  {
    id: 3,
    title: "VizSpace",
    description: "A full-stack business management and data visualization platform built with Next.js. Features backend APIs, secure authentication, and a responsive dashboard UI optimized for desktop and mobile devices.",
    image: "/images/projects/vizspace.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://www.vizspace.in",
  },
  {
    id: 4,
    title: "Learn Geeta",
    description: "A production React Native mobile app for studying the Bhagavad Gita. Implements OTP authentication, Firebase integration, local storage, real-time progress tracking, and push notifications.",
    image: "/images/projects/learn-geeta.png",
    tag: ["All", "Mobile"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.loginwithgoogle&hl=en_IN",
    appStoreUrl: "https://apps.apple.com/nz/app/learn-geeta/id6447505100",
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Atmos Farms",
    description: "A responsive Next.js website for Atmos Farms. Built custom interactive content sections, navigation systems, and optimized loading speeds for mobile responsiveness.",
    image: "/images/projects/atmos-farms.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://atomas-farm.vercel.app",
  },
  {
    id: 6,
    title: "ChatNest",
    description: "A real-time messaging application featuring group chat workspaces, media file sharing, custom profile setups, read receipts, and privacy settings. Developed with a responsive user interface.",
    image: "/images/projects/chatnest.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 7,
    title: "Flowind",
    description: "Flowind is a SwiftUI productivity app with seamless onboarding, animated UI, and Firebase-powered authentication. Open-source and developer-friendly, it enhances workflow efficiency with a smooth user experience.",
    image: "/images/projects/1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/aditya072690/Flowind",
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
              playStoreUrl={project.playStoreUrl}
              appStoreUrl={project.appStoreUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
