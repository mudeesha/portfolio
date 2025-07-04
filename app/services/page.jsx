"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Development of modern, responsive websites with clean architecture and scalable codebases, optimized for performance and seamless user experience.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "Design of modern, intuitive, and accessible user interfaces that align with brand identity and enhance overall user experience across devices.",
    href: "",
  },
  {
    num: "03",
    title: "SEO & Analytics",
    description: "Implementation of SEO strategies and performance tracking through analytics to enhance visibility and inform decisions.",
    href: "",
  },
  {
    num: "04",
    title: "DevOps & Deployment",
    description: "Configuration of deployment pipelines, version control, and infrastructure automation to ensure smooth and secure releases.",
    href: "",
  },
]

import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-">
      <div className="container mx-auto">
        <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            transition: {duration: 0.6, ease: "easeIn"},
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index)=>{
            return <div key={index} className="flex-2 flex flex-col justify-center gap-6 group">
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent transition-all duration-500">
                  {service.num}
                </div>

                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">

                  <BsArrowDownRight className='text-primary text-3xl' />
                </Link>

              </div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
              <p className='text-white/60'>{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>

            </div>
          })}

        </motion.div>
      </div>
    </section>

  )
}

export default Services;