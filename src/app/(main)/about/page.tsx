"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Download,
  Send,
  Phone,
  Mail,
  MapPin,
  User,
  Languages,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import { motion } from "framer-motion";
import BackgroundEffect from "../bgeffect/page";


const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      className="flex flex-col lg:flex-col  items-center justify-center gap-10 text-white px-6 py-0 lg:py-4 md:py-4 "
      id="about"
    >
     <BackgroundEffect  />
      <div className=" lg:mb-12 ">
      
              <span className="text-3xl sm:text-2xl md:text-3xl uppercase tracking-wide font-bold text-orange-400 inline-block  border-b-2 border-orange-400 pb-1">
                About Me
              </span>
      
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-4">
  {/* Image Section */}
  <div className="w-full lg:w-1/2 flex justify-center" >
    <motion.img
    src="./images/manoharsai.jpg"
    alt="Manohar"
    className="rounded-full w-52 h-52 sm:w-80 sm:h-80 border-4 border-white"
  />
  </div>

  {/* Content Section */}
  <div className="w-full lg:w-1/2 bg-transparent text-white" data-aos="fade-right">
    <Card className="bg-transparent border-none shadow-none">
      <CardContent className="lg:space-y-6 md:space-y-6 p-0">
        {/* Bio Summary */}
        <p className="text-white text-sm sm:text-base leading-relaxed">
          I'm a passionate <b>Backend Developer</b> currently working as an <b>Intern at KARYAHUB Solutions</b>, focused on building robust and scalable server-side applications. I work with <b>Python</b>, <b>FastAPI</b>, and <b>SQL</b> to develop clean APIs and manage databases efficiently. I'm enthusiastic about problem-solving, backend architecture, and writing maintainable, high-performance code as I continue to grow in my development career.
        </p>

        {/* Strengths & Weaknesses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5">
          {/* Strengths */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-orange-500 border-b-2 border-orange-400 pb-2 w-full">
              Strengths
            </h3>
            <ul className="mt-4 space-y-3 text-gray-300 text-sm">
              <li className="flex items-left gap-2">
                <ThumbsUp className="text-green-400" size={20} /> Strong Problem-Solving & Debugging Skills
              </li>
              <li className="flex items-left gap-2">
                <ThumbsUp className="text-green-400" size={20} /> Efficient API Design & Database Management
              </li>
              <li className="flex items-left gap-2">
                <ThumbsUp className="text-green-400" size={20} /> Strategic Thinking & System Optimization
              </li>
            </ul>
          </div>

          {/* Weaknesses */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-orange-500 border-b-2 border-orange-400 pb-2 w-full">
              Weaknesses
            </h3>
            <ul className="mt-4 space-y-3 text-gray-300 text-sm">
              <li className="flex items-left gap-2">
                <ThumbsDown className="text-red-400" size={20} /> Sometimes Overanalyze Backend Logic Details
              </li>
              <li className="flex items-left gap-2">
                <ThumbsDown className="text-red-400" size={20} />Perfectionism in Code Refactoring & Optimization
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</div>

    </section>
  );
};

export default AboutMe;
