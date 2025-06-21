"use client";

import { Description } from "@radix-ui/react-dialog";
import { FaHtml5, Facss3, FaJs, FaReact, FaFigma, FaNodejs } from "react-icons/fa";
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
      fieldName: "Freelance",
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
      Description: "Associate Software Engineer",
      Duration: "2024 - 2025"
    },
  ]
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: "My experience",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium similique laborum dolore id iste enim labore perspiciatis. Dicta, molestias possimus asperiores officiis at, consectetur culpa nobis amet dolores, magnam enim.",
  items: [
    {
      company: "Rightmo web solutions (pvt) LTD.",
      Description: "Associate Software Engineer",
      Duration: "2024 - 2025"
    },
  ]
};

const Resume = () => {
  return (
    <div>resume page</div>
  )
}

export default Resume;