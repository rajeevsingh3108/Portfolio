//import { useRef } from "react";
import React, { useRef, useState, useEffect } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
//import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  
  return (
    <section className="c-space section-spacing" id="About">
      <div className="flex justify-start items-start"><h2 className="text-heading">About Me</h2> </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Rajeev Singh</p>
            <p className="subtext">
              A passionate full-stack developer with a strong foundation in computer science.
              I specialize in building dynamic and responsive web applications using modern technologies like React and Node.js. Over the past few years,
              I've worked on a variety of projects that have enhanced my frontend, backend, and database management skills.
              I enjoy solving real-world problems through clean code, scalable architecture, and user-centric design.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
            <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
                <p className="flex items-end text-5xl text-gray-500">
                    CODE IS CRAFT
                </p>
                <Card  style={{rotate: "75deg", top:"30%", left: "20%"}} 
                text="OOPS"
                containerRef={grid2Container}
                />
                <Card style={{rotate: "-30deg", top:"60%", left: "45%"}}
                text="DBMS"
                containerRef={grid2Container}
                />
                <Card style={{rotate: "90deg", bottom:"30%", left: "70%"}}
                text="Operating System"
                containerRef={grid2Container}
                />
                <Card style={{rotate: "-45deg", top:"55%", left: "0%"}}
                text="Machine Learning"
                containerRef={grid2Container}
                />
                <Card style={{rotate: "20deg", top:"10%", left: "30%"}}
                text="AI"
                containerRef={grid2Container}
                />

                <Card style={{rotate: "30deg", top:"70%", left: "70%"}}
                image="assets/logos/java.svg"
                containerRef={grid2Container}
                />
                <Card style={{rotate: "-45deg", top:"70%", left: "25%"}}
                image="assets/logos/c++.svg"
                containerRef={grid2Container}
                />
                <Card style={{rotate: "-45deg", top:"5%", left: "10%"}}
                image="assets/logos/python.svg"
                containerRef={grid2Container}
                />
            </div>
        </div>
       {/* Grid 3 */}
        <div className="grid-black-color grid-3">
            {/* <div className="z-10 w-[50%]">
                <p className="headtext">Time Zone</p> 
                <p className="subtext">
                    I'm based in Mars, and open to remote work worldwide
                </p>
            </div> */}
            <div className="z-10 w-[50%]">
  {/* <p className="headtext">Time Zone</p>  */}
  <p className="subtext mb-4">
    Available for remote roles from any time zone.
View my resume to learn more about my experience.
  </p>
  <a
    href="https://drive.google.com/file/d/1GELO1uHTQCaRYcZLVO_5JguwY8lVhRjZ/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-4 py-2 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition duration-300"
  >
    View Resume
  </a>
</div>

            <figure className="absolute left-[30%] top-[10%]">
                <Globe />
            </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
            <div className="flex flex-col items-center justify-center gap-4 size-full">
                <p className="text-center headtext"> Do you want to start a project together? </p>
                <CopyEmailButton />
            </div>
        </div>
       {/* Grid 5 */}
<div className="grid-default-color grid-5 relative overflow-hidden">
  {/* Background Image */}
  <img
    src="assets/leetcode.png"
    alt="Leetcode"
    className="absolute inset-0 w-full h-full object-cover object-top opacity-60"
  />

  {/* Overlay Gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />

  {/* Foreground Content */}
  <div className="relative z-20 p-6 flex flex-col items-center justify-center text-center text-white">
    <h6>The Inside Scoop</h6>
    <p className="headText text-lg md:text-xl lg:text-2xl font-medium leading-snug max-w-xl">
      Exploring the Core of<br />Problem-Solving: DSA in Focus
    </p>
    <a
      href="https://leetcode.com/u/rajeev_rajawat/"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 text-sm md:text-base text-purple-300 underline hover:text-purple-400 transition-colors duration-200"
    >
      Visit My LeetCode Profile →
    </a>
  </div>
</div>

      </div>
  </section>
  );
};

export default About;
