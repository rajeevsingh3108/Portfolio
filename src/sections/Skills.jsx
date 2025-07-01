import React from 'react'
import { SkillsInfo } from "../constants";
import Tilt from 'react-parallax-tilt';

const Skills = () => {
    return (
    <section 
    id='skills'//py-24 pb-24 px-[12vw]
    className='p-16  font-sans bg-skills-gradient c-space section-spacing'
    >
     {/* Section Title */}
    <div className="text-start mb-8">
        <div className="flex justify-start items-start"><h2 className="text-heading">My Skills</h2> </div>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
        {SkillsInfo.map((category) => (
        <div
            key={category.title}
            className="bg-transparent backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 sm:w-[48%] rounded-2xl border border-white 
            shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
            </h3>

          {/* Skill Items - 3 per row on larger screens */}
            <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                {category.skills.map((skill) => (
                <div
                    key={skill.name}
                    className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                >
                <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                />
                <span className="text-xs sm:text-sm text-gray-300">
                    {skill.name}
                </span>
                </div>
            ))}
            </div>
        </Tilt>
        </div>
    ))}
    </div>
    </section>
)
}

export default Skills;

