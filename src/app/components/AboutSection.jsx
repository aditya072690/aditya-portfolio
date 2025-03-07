"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    id: "skills",
    title: "Skills",
    content: (
      <ul className='list-disc pl-2'>
        <ul className="bg-gray-900 text-white p-6 rounded-lg shadow-md max-w-xl">
          <li>Swift</li>
          <li>Firebase</li>
          <li>Git</li>
          <li>Github</li>
          <li>Node.js</li>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML,CSS</li>
          <li>PHP</li>
          <li>Tailwind CSS</li>
          <li>Next.js</li>
          <li>Java</li>
          <li> C++</li>
          <li>typescript</li>
        </ul>
      </ul>
    )
  },
  {
    id: "education",
    title: "Education",
    content: (
      // <ul className='list-disc pl-2'>
      //   <ul className="bg-gray-900 text-white p-6 rounded-lg shadow-md max-w-xl">
      //     <li>Navrachana University</li>
      //     <li>Vadodara, Gujarat</li>
      //   </ul>
      // </ul>
      <ul className='list-disc pl-2'>
       <ul className="bg-gray-900 text-white p-6 rounded-lg shadow-md max-w-xl">
          <li className="text-2xl font-bold">Navrachana University</li>
          <li className="text-lg text-gray-400">B.Tech Computer Science and Engineering</li>
          <li className="text-sm text-gray-500 mt-1">Vadodara, Gujarat</li>
          <p className="mt-4 text-gray-300 leading-relaxed">
          At Navrachana University, I completed my Bachelor of Engineering in Computer Science and Engineering. The program offered a solid foundation in programming and software development, with hands-on experience in well-equipped labs. Supportive faculty fostered innovation through collaborative projects, while internships provided valuable industry exposure. This experience has thoroughly prepared me for a successful career in technology.
          </p>
        </ul>
      </ul>
    )
  },{
    id: "experience",
    title: "Experience",
    content: (
      <ul className='list-disc pl-2'>
       <ul className="bg-gray-900 text-white p-6 rounded-lg shadow-md max-w-xl">
          <li className="text-2xl font-bold">Oneknotone Technologies LLP</li>
          <li className="text-lg text-gray-400">VR Developer</li>
          <li className="text-sm text-gray-500 mt-1">MAY 2024 - PRESENT</li>
          <p className="mt-4 text-gray-300 leading-relaxed">
            As a Junior Developer, I work on creating immersive virtual reality experiences using a game engine. 
            I assist in designing environments, adding interactive features, and ensuring they run efficiently. 
            I also participate in testing these experiences with users to gather feedback and improve how they feel and function. 
            My goal is to contribute to building engaging and user-friendly VR environments while learning and growing my skills in the process.
          </p>
        </ul>
      </ul>
    )
  },{
    id: "certifications",
    title: "Certifications",
    content: (
      <ul className='list-disc pl-2'>
        <ul className="bg-gray-900 text-white p-6 rounded-lg shadow-md max-w-xl">
          <li>AWS Cloud Foundation</li>
          <li>AWS Machine Learing</li>
        </ul>
      </ul>
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
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a passionate developer with experience in web development, VR development, and a growing expertise in mobile app development. Skilled in technologies like HTML, CSS, JavaScript, Java, Swift, and frameworks like Flutter and Firebase, I create scalable, user-centric solutions for business growth. My background includes developing websites and apps, designing interactive VR environments in Unreal Engine, and incorporating AR features for educational purposes. Currently, I am focused on mastering Swift and building iOS projects daily to enhance my skills. I thrive on innovation, continuous learning, and delivering high-quality solutions.
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
