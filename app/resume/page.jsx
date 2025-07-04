"use client";

import { Description } from "@radix-ui/react-dialog";
import { DiNodejsSmall } from "react-icons/di";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaLaravel, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiSpringboot, SiDotnet, SiFastapi, SiMysql, SiMongodb,  SiTensorflow, SiKeras, SiOpencv  } from "react-icons/si";

const about = {
  title: 'About me',
  description: "Passionate and dedicated software engineer with experience in full-stack development, specializing in building scalable and user-centric web applications. Skilled in a variety of programming languages and frameworks, with a strong commitment to continuous learning and professional growth. Driven to create innovative digital solutions that deliver exceptional user experiences and meet real-world needs.",
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
    // {
    //   fieldName: "Linkedin",
    //   fieldValue: "www.linkedin.com/in/mudeesha-tharindu-dilshan"
    // },
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
  description: "Software engineer with proven experience in designing and developing engaging digital experiences. Strong foundation in web development complemented by a continuous commitment to learning new technologies and advancing technical skills.",
  items: [
    {
      company: "Rightmo Web Solution (PVT) LTD.",
      position: "Full-Stack Software Engineer",
      duration: "2023 - Present"
    },
  ]
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: "My Education",
  description: "Completed formal education in information and communication technology, gaining a strong theoretical and practical foundation in computing and software development",
  items: [
    {
      institution: "University of Ruhuna (Sri Lanka)",
      description: "Comprehensive four-year degree covering software engineering, web technologies, databases, and networking, with hands-on experience through project-based learning and industry training.",
      title: "BICT (Hons)",
      duration: "2018-2023"
    },
    {
      institution: "Spring Boot Academy (Sri Lanka)",
      description: "Completed hands-on courses in full-stack development using Spring Boot and Angular, with a focus on RESTful APIs and real-world project implementation.",
      title: "Spring Boot Academy – Professional Training",
      duration: "2025"
    },
  ]
};

const skills = {
  title: "My Skills",
  description: "Proficient in a wide range of programming languages, frameworks, and technology stacks commonly used in modern web and software development, with hands-on experience in building dynamic user interfaces, developing robust backend systems, and managing databases effectively.",
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
      icon: <SiSpringboot />,
      name: "Spring Boot",
    },
    {
      icon: <FaLaravel />,
      name: "Laravel",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiDotnet />,
      name: ".NET Core",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiFastapi />,
      name: "FastAPI",
    },
    // {
    //   icon: <SiTensorflow />,
    //   name: "TensorFlow",
    // },
    // {
    //   icon: <SiKeras />,
    //   name: "Keras",
    // },
    // {
    //   icon: <SiOpencv />,
    //   name: "OpenCV",
    // },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
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
                <p className="max-w-auto text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[480px] overflow-y-auto">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[210px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-auto min-h-[30px] text-center lg:text-left">
                          {item.title}
                        </h3>
                        <p className="text-white/60">{item.description}</p>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/90">{item.institution}</p>
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
                  <p className="max-w-auto text-white/60 mx-auto xl:mx-0">{skills.description}</p>
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
                <p className="max-w-auto text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 xl:gap-x-6 mx-auto xl:mx-0 w-full">
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