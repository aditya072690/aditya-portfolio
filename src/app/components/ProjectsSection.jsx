"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "SyncHub",
    description: "Multi-Platform E-Commerce Synchronization Engine. Built with Django 5.1 + DRF to sync Shopify, WooCommerce, and Amazon SP-API via OAuth 2.0 and webhooks. Engineered async task pipeline with Celery 5.x + RabbitMQ, concurrency-safe inventory with PostgreSQL row-level locking, and Fernet encryption for secrets at rest.",
    image: "/images/projects/synchub.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aditya072690/SyncHub",
    previewUrl: "",
  },
  {
    id: 2,
    title: "AssessFlow",
    description: "A full-stack assessment and testing platform built with React (Vite) and Tailwind CSS on the frontend, and Node.js, Express, and MongoDB on the backend. Features question flow, scoring logic, image support, per-user scoping, and JWT authentication.",
    image: "/images/projects/assessflow.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://assess-flow-pearl.vercel.app",
  },
  {
    id: 3,
    title: "VaultX",
    description: "Secure Cloud File Storage SaaS Platform. Architected with Next.js 14 and React frontend, .NET/Node.js Express backend. Implements JWT authentication, RBAC, WebSocket real-time features, file versioning, and AWS S3 cloud storage. Deployed via Vercel and Railway with GitHub Actions CI/CD. 99.2% production uptime.",
    image: "/images/projects/vaultx.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Geeta Olympiad 2025",
    description: "Designed, built, and deployed a React Native app independently from architecture through production. Features authentication, real-time quiz engine, leaderboard system, and push notifications using Firebase. Published on Google Play and App Store — 6,000+ downloads and 4.5+ rating.",
    image: "/images/projects/geeta-olympiad.png",
    tag: ["All", "Mobile"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.learngeeta.play&hl=en_IN",
    appStoreUrl: "https://apps.apple.com/nz/app/geeta-olympiad-2025/id6756177418",
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 5,
    title: "OKO Homes",
    description: "A scalable multi-tenant SaaS platform built using React, TypeScript, PostgreSQL, and Supabase. Implements secure role-based access control, interactive dashboards, real-time data sync, and optimized backend query tuning.",
    image: "/images/projects/oko-homes.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://oko-homes-01.vercel.app",
  },
  {
    id: 6,
    title: "VizSpace",
    description: "Built a responsive frontend with Next.js and React.js for interactive 3D virtual tours of residential buildings and complexes. Features immersive navigation and optimized loading for mobile responsiveness.",
    image: "/images/projects/vizspace.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://www.vizspace.in",
  },
  {
    id: 7,
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
    id: 8,
    title: "Atmos Farms",
    description: "A responsive Next.js website for Atmos Farms. Built custom interactive content sections, navigation systems, and optimized loading speeds for mobile responsiveness.",
    image: "/images/projects/atmos-farms.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://atomas-farm.vercel.app",
  },
  {
    id: 9,
    title: "ChatNest",
    description: "A real-time messaging application featuring group chat workspaces, media file sharing, custom profile setups, read receipts, and privacy settings. Developed with a responsive user interface.",
    image: "/images/projects/chatnest.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 10,
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
