"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    id: "skills",
    title: "Skills",
    content: (
      <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800 text-white p-6 rounded-xl shadow-lg max-w-xl flex flex-col gap-4">
        <div>
          <h4 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider">Programming Languages</h4>
          <div className="flex flex-wrap gap-2">
            {["Swift", "Python", "JavaScript", "Dart", "Java", "C/C++", "TypeScript"].map((s) => (
              <span key={s} className="px-3 py-1 bg-gray-800/80 hover:bg-gray-700/80 transition-colors border border-gray-700/50 rounded-full text-xs font-medium text-gray-200">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">Frontend</h4>
          <div className="flex flex-wrap gap-2">
            {["React", "React Native", "JavaScript", "Tailwind CSS", "CSS3", "Next.js", "TypeScript", "Flutter", "HTML5"].map((s) => (
              <span key={s} className="px-3 py-1 bg-gray-800/80 hover:bg-gray-700/80 transition-colors border border-gray-700/50 rounded-full text-xs font-medium text-gray-200">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wider">Backend</h4>
          <div className="flex flex-wrap gap-2">
            {["Node.js", "REST APIs", "Supabase", "Cloud Functions", "Role-Based Access Control", "Express.js", "PostgreSQL", "Firebase", "JWT Authentication"].map((s) => (
              <span key={s} className="px-3 py-1 bg-gray-800/80 hover:bg-gray-700/80 transition-colors border border-gray-700/50 rounded-full text-xs font-medium text-gray-200">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-pink-400 mb-2 uppercase tracking-wider">Tools</h4>
          <div className="flex flex-wrap gap-2">
            {["Git", "Docker", "Figma", "GitHub", "Postman"].map((s) => (
              <span key={s} className="px-3 py-1 bg-gray-800/80 hover:bg-gray-700/80 transition-colors border border-gray-700/50 rounded-full text-xs font-medium text-gray-200">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-emerald-400 mb-2 uppercase tracking-wider">Development Practices</h4>
          <div className="flex flex-wrap gap-2">
            {[
              "Agile Development",
              "React Performance Optimization",
              "Mobile-First Development",
              "Role-Based Access Control",
              "Pull Requests",
              "Performance Optimization",
              "Responsive Design",
              "Authentication & Authorization",
              "Code Reviews",
              "REST API Development"
            ].map((s) => (
              <span key={s} className="px-3 py-1 bg-gray-800/80 hover:bg-gray-700/80 transition-colors border border-gray-700/50 rounded-full text-xs font-medium text-gray-200">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: "education",
    title: "Education",
    content: (
      <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800 text-white p-6 rounded-xl shadow-lg max-w-xl">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Navrachana University</h3>
        <p className="text-lg font-medium text-gray-300 mt-1">B.Tech in Computer Science & Engineering</p>
        <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Vadodara, Gujarat • 2020 - 2024</p>
        <p className="mt-4 text-gray-400 text-sm leading-relaxed">
          At Navrachana University, I completed my B.Tech in Computer Science and Engineering. The program offered a solid foundation in programming and software development, with hands-on experience in well-equipped labs. Supportive faculty fostered innovation through collaborative projects, while internships provided valuable industry exposure.
        </p>
      </div>
    )
  },{
    id: "experience",
    title: "Experience",
    content: (
      <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800 text-white p-6 rounded-xl shadow-lg max-w-xl">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Oneknotone Technologies</h3>
        <p className="text-lg font-medium text-gray-300 mt-1">Software Developer</p>
        <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">01/2024 - Present</p>
        <ul className="mt-4 space-y-2 text-sm text-gray-400 list-disc pl-4 leading-relaxed">
          <li>Developed responsive React dashboards for business operations and user management using TypeScript and Firebase.</li>
          <li>Optimized React rendering performance using React.memo, useMemo, and useCallback to reduce unnecessary re-renders.</li>
          <li>Built React Native mobile features including notifications, OTP authentication, and bug fixes.</li>
          <li>Developed a Flutter application integrated with Unreal Engine VR systems, enabling real-time interaction between mobile and VR environments.</li>
          <li>Developed and maintained a scalable SaaS platform using React, TypeScript, PostgreSQL, Supabase, and Node.js.</li>
          <li>Optimized PostgreSQL queries using indexes, joins, and pagination, reducing query response times by up to 90%.</li>
          <li>Independently designed, developed, and maintained the complete Geeta Olympiad 2025 React Native application from development to production deployment.</li>
        </ul>
      </div>
    )
  },{
    id: "certifications",
    title: "Certifications",
    content: (
      <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800 text-white p-6 rounded-xl shadow-lg max-w-xl">
        <ul className="space-y-3">
          {["AWS Cloud Foundation", "AWS Machine Learning"].map((cert, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
              <span className="text-gray-300 font-medium">{cert}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="About Me" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-[#ADB7BE] text-base lg:text-lg leading-relaxed mb-6">
          I am a Full Stack Developer with 2+ years of experience designing, developing, and deploying scalable web and mobile applications. Specializing in React, React Native, Next.js, Node.js, TypeScript, PostgreSQL, Supabase, and Firebase, I build secure REST APIs, responsive dashboards, and high-performance mobile applications. With a background that spans both web/mobile development and interactive VR/AR systems, I bring a versatile approach to crafting clean, optimized, and maintainable code.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={()=> handleTabChange("skills")} active={tab === "skills"}>{""}Skills{""}</TabButton>
            <TabButton selectTab={()=> handleTabChange("education")} active={tab === "education"}>{""}Education{""}</TabButton>
            <TabButton selectTab={()=> handleTabChange("experience")} active={tab === "experience"}>{""}Experience{""}</TabButton>
            <TabButton selectTab={()=> handleTabChange("certifications")} active={tab === "certifications"}>{""}Certifications{""}</TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
