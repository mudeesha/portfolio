import HeroMotion from "@/components/HeroMotion";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export const metadata = {
  title: "Mudeesha Tharindu Dilshan: Software Engineer",
  description: "Portfolio of Mudeesha Tharindu Dilshan with projects, skills, and experience.",
  alternates: {
    canonical: "https://mudeesha-portfolio.vercel.app",
  },
};

export default function Home() {
  return (
    <>
      <HeroMotion />
      
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            
            {/* Text Content */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Software Engineer</span>
              <h1 className="h1">
                Hello I'm <br />
                <span className="text-accent">Mudeesha Tharindu</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I specialize in crafting elegant and user-centric digital experiences,
                with strong proficiency in a wide range of programming languages and
                modern technologies.
              </p>

              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>

                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Photo Section */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>

        <Stats />
      </section>
    </>
  );
}
