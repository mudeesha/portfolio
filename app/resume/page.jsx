"use client";

import { Description } from "@radix-ui/react-dialog";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { DiNodejsSmall } from "react-icons/di";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: 'About me',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium similique laborum dolore id iste enim labore perspiciatis. Dicta, molestias possimus asperiores officiis at, consectetur culpa nobis amet dolores, magnam enim.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Mudeesha Tharindu"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+94) 722 168 550"
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years"
    },
    {
      fieldName: "Skype",
      fieldValue: "mudeesha.01"
    },
    {
      fieldName: "Email",
      fieldValue: "mudeeshatharindudilshan@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Sinhala"
    },
  ]
};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: "My experience",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium similique laborum dolore id iste enim labore perspiciatis. Dicta, molestias possimus asperiores officiis at, consectetur culpa nobis amet dolores, magnam enim.",
  items: [
    {
      company: "Rightmo web solutions (pvt) LTD.",
      position: "Associate Software Engineer",
      duration: "2024 - 2025"
    },
    {
      company: "ABC web solutions (pvt) LTD.",
      position: "Abc Engineer",
      duration: "2024 - 2021"
    },
    {
      company: "ABC web solutions (pvt) LTD.",
      position: "Abc Engineer",
      duration: "2024 - 2021"
    },
    {
      company: "ABC web solutions (pvt) LTD.",
      position: "Abc Engineer",
      duration: "2024 - 2021"
    },
  ]
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: "My education",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium similique laborum dolore id iste enim labore perspiciatis. Dicta, molestias possimus asperiores officiis at, consectetur culpa nobis amet dolores, magnam enim.",
  items: [
    {
      institution: "Online Course Platform",
      description: "Full Stack  Web Development Bootcamp",
      duration: "2023"
    },
    {
      institution: "Codecadmy",
      description: "Backend",
      duration: "2022"
    },
    {
      institution: "SpringBoot Acedamy",
      description: "JAVA",
      duration: "2024"
    },
    {
      institution: "University of Ruhuna",
      description: "Batchler of Information Communication Technology.",
      duration: "2018-2023"
    },
  ]
};

const skills = {
  tittle: "My Skills",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, nesciunt sunt perspiciatis expedita unde repellendus illum adipisci enim vero saepe nisi magnam, mollitia accusantium voluptas, et possimus. Obcaecati, eligendi quidem.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <DiNodejsSmall />,
      name: "node.js",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6, ease: "easeIn"},
    }}
    className="min-h-[80vh] flex items-center justify-center py-12"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience" >Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px] overflow-y-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>

              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px] overflow-y-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.description}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className = "flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index)=> {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item,index)=>{
                    return(
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
  </motion.div>
  );
};

export default Resume;