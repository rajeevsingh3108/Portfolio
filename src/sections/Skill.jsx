// import React from "react";
// import { SkillsInfo } from "../constants";
// import Tilt from "react-parallax-tilt";
// import { OrbitingCircles } from "../components/OrbitingCircles";

// const OrbitingSideFrameworks = ({ position = "right" }) => {
//   const skills = [
//     "react",
//     "vitejs",
//     "dotnet",
//     "blazor",
//     "tailwindcss",
//     "git",
//     "wordpress",
//     "html5",
//     "css3",
//     "javascript",
//   ];

//   const isRight = position === "right";
//   const sideClass = isRight ? "right-[-20vw]" : "left-[-20vw]";

//   return (
//     <div
//       className={`absolute top-0 ${sideClass} h-full w-[60vw] z-0 hidden md:block pointer-events-none`}
//     >
//       <div className="relative h-full w-full flex items-center justify-center">
//         {/* Outer Orbit */}
//         <OrbitingCircles iconSize={70} radius={260}>
//           {skills.map((skill, index) => (
//             <img
//               key={index}
//               src={`assets/logos/${skill}.svg`}
//               className="duration-200 rounded-sm hover:scale-110"
//               alt={skill}
//             />
//           ))}
//         </OrbitingCircles>

//         {/* Inner Orbit */}
//         <OrbitingCircles iconSize={45} radius={180} reverse speed={2}>
//           {skills
//             .slice()
//             .reverse()
//             .map((skill, index) => (
//               <img
//                 key={index}
//                 src={`assets/logos/${skill}.svg`}
//                 className="duration-200 rounded-sm hover:scale-110"
//                 alt={skill}
//               />
//             ))}
//         </OrbitingCircles>
//       </div>
//     </div>
//   );
// };

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="relative p-16 font-sans bg-skills-gradient overflow-hidden"
//     >
//       {/* Orbiting Frameworks on both sides */}
//       <OrbitingSideFrameworks position="left" />
//       <OrbitingSideFrameworks position="right" />

//       {/* Section Title */}
//       <div className="text-center mb-8 relative z-10">
//         <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           A collection of my technical skills and expertise honed through
//           various projects and experiences
//         </p>
//       </div>

//       {/* Skill Categories */}
//       <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between relative z-10">
//         {SkillsInfo.map((category) => (
//           <div
//             key={category.title}
//             className="bg-white/5 backdrop-blur-lg px-6 sm:px-10 py-8 sm:py-6 mb-10 sm:w-[48%] rounded-2xl border border-white/20 shadow-[0_0_30px_2px_rgba(130,69,236,0.15)]"
//           >
//             <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-4 text-center">
//               {category.title}
//             </h3>

//             <Tilt
//               tiltMaxAngleX={20}
//               tiltMaxAngleY={20}
//               perspective={1000}
//               scale={1.05}
//               transitionSpeed={1000}
//               gyroscope={true}
//             >
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
//                 {category.skills.map((skill) => (
//                   <div
//                     key={skill.name}
//                     className="flex items-center justify-center space-x-2 bg-transparent border border-gray-600/40 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
//                   >
//                     <img
//                       src={skill.logo}
//                       alt={`${skill.name} logo`}
//                       className="w-6 h-6 sm:w-8 sm:h-8"
//                     />
//                     <span className="text-xs sm:text-sm text-gray-300">
//                       {skill.name}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </Tilt>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;


