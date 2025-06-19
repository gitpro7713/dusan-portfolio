import React from "react";
import Img from "../../../components/smallComp/image/Img"; // Assuming this path is correct for your project
import ArrowIcon from "../../../components/Icons/ArrowIcon"; // Assuming this path is correct for your project
import { forwardRef } from "react";
interface AboutMeProps {
  // Define any props you might pass to AboutMe here
  // For example: profileImageUrl?: string;
}

const AboutMe = forwardRef<HTMLDivElement, AboutMeProps>((props, ref) => {
  const technologies = [
    ["Next.js/React", "TypeScript/JavaScript", "Tailwind CSS", "Angular/Vue", "AWS/Google Cloud"],
    ["Node.js", "Solidity/Web3.js", "MongoDB/SQL Server", "Python","AI Agents/Automation"],
  ];

  return (
    <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col items-center py-20 bg-AAprimary">
      {/* 0.1 About Me Title */}
      <div className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px]">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center mr-4">
            <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} />
            <span className="text-AAsecondary font-Header text-sm sm:text-xl"> 01.</span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>

        {/* Paragraphs & Image */}
        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2">
          {/* Text Content */}
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm">
            <div className="font-Header text-gray-400 text-justify">
              Hey there! I&apos;m <b>Dusan Hajilo</b> and I thrive at the intersection of design and code, transforming 
              complex requirements into seamless, user-centric experiences that drive real business value.
            </div>
            <div className="font-Header text-gray-400 text-justify">
              After years of teaching myself and eventually getting my{" "}
              <span className="text-AAsecondary">computer science degree</span> and{" "}
              <span className="text-AAsecondary">Bachelor&apos;s in Computer Science</span>, I&apos;ve spent{" "}
              <span className="text-AAsecondary">+7 years</span> honing my skills professionally and have been lucky
              enough to work with some really interesting companies and startups. <br/>I’ve led cross-functional teams to launch 
              everything from <span className="text-AAsecondary">enterprise portals</span>(Flutter + Firebase) to 
              <span className="text-AAsecondary"> NFC-powered media platforms</span> and even 
              <span className="text-AAsecondary"> stealth monitoring bots</span> for real-time event tracking.
            </div>
            <div className="font-Header text-gray-400 text-justify">
            What excites me most is tackling new challenges—whether it’s exploring <span className="text-AAsecondary">AI-driven automation</span>, architecting <span className="text-AAsecondary">microservices</span>, 
            or pushing the limits of <span className="text-AAsecondary">web3</span> integrations. <br/>I’m always learning, always iterating, and always committed to delivering 
            <span className="text-AAsecondary"> impactful innovation</span>. <br/>If you’re looking for a developer who can lead technical vision, mentor teams, and translate 
            ambitious ideas into production-ready solutions, <span className="text-AAsecondary">LET’S CONNECT!</span>
            </div>
            <div className="font-Header tracking-wide text-gray-400 pt-2 pb-1 text-justify">
              Here&apos;s what I&apos;m usually working with these days:
            </div>
            {/* Technologies List */}
            <div className="font-Header tracking-wide flex flex-row space-x-12 md:space-x-16 justify-center lg:justify-start">
              {technologies.map((techGroup, groupIndex) => (
                <div key={groupIndex} className="flex flex-col space-y-4 sm:text-base text-sm">
                  {techGroup.map((tech, techIndex) => (
                    <div key={techIndex} className="flex flex-row items-center space-x-2">
                      <ArrowIcon className={"h-3 w-3 text-AAsecondary flex-none"} />
                      <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Image Section (Desktop and Tablet) */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden">
            <div className="group-hover:translate-x-3 group-hover:translate-y-3 duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 translate-y-5 rounded"></div>
            <div className="absolute w-5/6 h-5/6 rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/img/Portfolio-portrait-3.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>

          {/* Image Section (Mobile) */}
          <div className="relative w-full h-48 md:hidden flex justify-center items-center">
            <div className="absolute w-48 h-full rounded translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"/img/Portfolio-portrait-3.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full bg-AAsecondary opacity-10 md:opacity-60 rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
});
AboutMe.displayName = "AboutMe";
export default AboutMe; // Changed to a const for functional component definition with type
