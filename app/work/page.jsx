"use client";

import {motion} from "framer-motion";
import React, { useState } from "react";

import {Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowDownRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis fugit suscipit cupiditate explicabo saepe porro fugiat distinctio dolores laborum? Illum velit ea inventore libero sapiente blanditiis praesentium architecto soluta dolor.",
    stack: [
      {name: "Html 5"}, {name: "Css 3"}, {name: "Javascript"},  
    ],
    image: '/assets/work/thumb1.jpg',
    live: '',
    github: "",
  },
  {
    num: '02',
    category: 'fullstack',
    title: 'project 2',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis fugit suscipit cupiditate explicabo saepe porro fugiat distinctio dolores laborum? Illum velit ea inventore libero sapiente blanditiis praesentium architecto soluta dolor.",
    stack: [
      {name: "Next.Js"}, {name: "Tailwind.css"}, {name: "Node.js"},  
    ],
    image: '/assets/work/thumb2.jpg',
    live: '',
    github: "",
  },
  {
    num: '03',
    category: 'frontend',
    title: 'project 3',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis fugit suscipit cupiditate explicabo saepe porro fugiat distinctio dolores laborum? Illum velit ea inventore libero sapiente blanditiis praesentium architecto soluta dolor.",
    stack: [
      {name: "next.js"}, {name: "Tailwind.css"}, {name: "Javascript"},  
    ],
    image: '/assets/work/thumb3.jpg',
    live: '',
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  }

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6, ease: "easeIn"}}} className="min-h-[80vh] flex-col justify-center py-12 xl:py-22 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} 
                project
              </h2>

              <p className="text-white/60">{project.description}</p>

              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>

                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowDownRight className="text-white text-3xl transition-transform duration-300 group-hover:-rotate-45 group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>

                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>

                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>

                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index)=>{
                return (
                   <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover" alt="object-cover" />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute left-0 right-0 bottom-[calc(50%-22px)] justify-between px-4 z-20 xl:bottom-0 xl:right-0 xl:left-auto xl:w-max xl:justify-none"
                btnStyles="group bg-white/5 hover:bg-white/10 text-white xl:bg-accent xl:hover:bg-accent-hover xl:text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full xl:rounded-none"
                iconsStyles="text-white group-hover:text-accent xl:text-primary xl:group-hover:text-primary transition-colors duration-300"
              />

            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work