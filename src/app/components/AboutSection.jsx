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
            {["Python", "JavaScript", "TypeScript", "Swift", "Java", "Dart", "C/C++"].map((s) => (
              <span key={s} className="px-3 py-1 bg-gray-800/80 hover:bg-gray-700/80 transition-colors border border-gray-700/50 rounded-full text-xs font-medium text-gray-200">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">Frontend</h4>
          <div className="flex flex-wrap gap-2">
            {["React", "React Native", "Next.js", "Redux", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Flutter"].map((s) => (
              <span key={s} className="px-3 py-1 bg-gray-800/80 hover:bg-gray-700/80 transition-colors border border-gray-700/50 rounded-full text-xs font-medium text-gray-200">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wider">Backend</h4>
          <div className="flex flex-wrap gap-2">
            {["Django 5.1", "Django REST Framework", "Celery", "RabbitMQ", "Node.js", "Express.js", ".NET", "REST APIs", "OAuth 2.0", "Webhooks", "JWT", "RBAC"].map((s) => (
              <span key={s} className="px-3 py-1 bg-gray-800/80 hover:bg-gray-700/80 transition-colors border border-gray-700/50 rounded-full text-xs font-medium text-gray-200">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-amber-400 mb-2 uppercase tracking-wider">Database</h4>
          <div className="flex flex-wrap gap-2">
            {["PostgreSQL", "MongoDB", "Supabase", "Firebase", "Database Design & Optimization"].map((s) => (
              <span key={s} className="px-3 py-1 bg-gray-800/80 hover:bg-gray-700/80 transition-colors border border-gray-700/50 rounded-full text-xs font-medium text-gray-200">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-pink-400 mb-2 uppercase tracking-wider">Cloud / DevOps</h4>
          <div className="flex flex-wrap gap-2">
            {["AWS EC2", "AWS S3", "AWS API Gateway", "Docker", "Git", "GitHub", "CI/CD (GitHub Actions)"].map((s) => (
              <span key={s} className="px-3 py-1 bg-gray-800/80 hover:bg-gray-700/80 transition-colors border border-gray-700/50 rounded-full text-xs font-medium text-gray-200">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-emerald-400 mb-2 uppercase tracking-wider">Tools & Practices</h4>
          <div className="flex flex-wrap gap-2">
            {["Postman", "Figma", "Agile Development", "Performance Optimization", "Mobile-First Development", "Code Reviews"].map((s) => (
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
      <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800 text-white p-6 rounded-xl shadow-lg max-w-xl space-y-5">
        <div>
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Oneknotone Technologies</h3>
          <p className="text-lg font-medium text-gray-300 mt-1">Software Developer</p>
          <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">January 2024 – Present</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-cyan-400 mb-2">OKO Home Multi-Role Dashboard</h4>
          <ul className="space-y-1.5 text-sm text-gray-400 list-disc pl-4 leading-relaxed">
            <li>Built a multi-role dashboard frontend with React.js, Next.js, and TypeScript, enabling role-based access control for 3+ user types</li>
            <li>Built backend REST APIs with Node.js and .NET, adding JWT authentication and input validation to secure endpoints</li>
            <li>Optimized React rendering with React.memo, useMemo, and useCallback, improving performance by 40% and supporting 500+ concurrent users</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-blue-400 mb-2">VR & Flutter App Integration</h4>
          <ul className="space-y-1.5 text-sm text-gray-400 list-disc pl-4 leading-relaxed">
            <li>Built immersive 3D virtual environments in C++ with Unreal Engine, adding FPS navigation, camera controls, and object interaction</li>
            <li>Built a Flutter app with real-time data sync, propagating live state changes from the app to the VR system</li>
            <li>Implemented WebSocket-based communication, enabling real-time mobile-VR interaction through an event-driven architecture</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-purple-400 mb-2">Database & Performance Optimization</h4>
          <ul className="space-y-1.5 text-sm text-gray-400 list-disc pl-4 leading-relaxed">
            <li>Optimized database queries through indexing and JOIN tuning, cutting response times by 90% and adding pagination for large datasets</li>
            <li>Managed schema migrations with version control, shipping database design changes across 5+ production deployments</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-emerald-400 mb-2">Development & Deployment</h4>
          <ul className="space-y-1.5 text-sm text-gray-400 list-disc pl-4 leading-relaxed">
            <li>Ran Git-based workflows with code reviews, pull requests, and Docker containerization, inside Agile sprint planning and retrospectives</li>
          </ul>
        </div>
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
          I am a Full Stack Developer with 2+ years of experience at Oneknotone Technologies, building scalable web, mobile, and SaaS applications. I specialize in Django, React, Next.js, Node.js, TypeScript, PostgreSQL, and cloud services (AWS). From architecting async task pipelines with Celery & RabbitMQ to deploying production React Native apps with 6,000+ downloads, I bring deep expertise across the full stack — including VR/AR integration with Unreal Engine and Flutter.
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
