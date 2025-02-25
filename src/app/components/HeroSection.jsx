"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 ">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Aditya Chauhan',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Web Developer',
                        1000,
                        'VR Developer',
                        1000,
                        'Mobile App Developer',
                        1000
                    ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Bridging Web, VR & Mobile Innovation | Crafting Engaging & Scalable Digital Experiences
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 via-secondary-500 to-tertiary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/AdityaChauhan.pdf" target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 via-secondary-500 to-tertiary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
          <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}className='col-span-5 place-self-center mt-4 lg:mt-0 '>
                {/* <div className='rounded-full bg-[#181818] border border-gradient-to-br from-cyan-500  via-blue-500 to-purple-500 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]  relative'>
                    <Image src="/images/hero-image.png" alt="hero image" width={300} height={500} className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'></Image>
                </div> */}
                <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 blur-xl opacity-50"></div>
                <div className="absolute inset-0 rounded-full p-[4px] bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500">
                    <div className="w-full h-full rounded-full bg-[#181818] flex items-center justify-center">
                    <Image
                        src="/images/hero-image.png"
                        alt="hero image"
                        width={300}
                        height={500}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    />
                    </div>
                </div>
                </div>
            </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
