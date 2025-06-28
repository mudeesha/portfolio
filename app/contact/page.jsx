"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt/>,
    title: "Phone",
    description: "(+94) 722 168 550"
  },
  {
    icon: <FaEnvelope/>,
    title: "Email",
    description: "mudeeshatharindudulshan@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt/>,
    title: "Address",
    description: "827/1, Manangoda, Batapola, Sri Lanka."
  },
];


const Contact = () => {
    return (
      <motion.section
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {duration: 0.6, ease: "easeIn"},
      }}
      className="py-6 xl:py-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">

            <div className="xl:w-[54%] order-2 xl:order-none">
              <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-4xl text-accent">let's work together</h3>
                <p className="text-white/60">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi neque corrupti eaque fuga delectus unde aliquam atque non officia, cumque consequatur, dolores odit?
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="firstname" placeholder="Firstname"/>
                  <Input type="lastname" placeholder="Lastname"/>
                  <Input type="email" placeholder="Email address"/>
                  <Input type="phone" placeholder="Phone number"/>
                </div>

                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="select a service"/>
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a Service</SelectLabel>
                      <SelectItem value="est">Web Development</SelectItem>
                      <SelectItem value="cst">UI/UX Design</SelectItem>
                      <SelectItem value="mst">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Textarea className="h-[200px]" placeholder="Type your message here." />
                <Button size="md" className="max-w-40">Send Message</Button>
              </form>
            </div>

            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index)=>{
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div>{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

      </motion.section>
    )
  }
  
  export default Contact;