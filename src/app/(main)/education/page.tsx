"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure AOS styles are imported
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, School } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Technology",
    institution: "Rise Krishna Sai Gandhi Group Of Institutions",
    period: "2020-2024",
    score: "6.9 CGPA",
    icon: <GraduationCap className="w-6 h-6 text-blue-400" />,
  },
  {
    degree: "Intermediate",
    institution: "Sree Pratibha Junior College",
    period: "2018-2020",
    score: "7.0 CGPA",
    icon: <BookOpen className="w-6 h-6 text-orange-400" />,
  },
  {
    degree: "Secondary Education",
    institution: "Sree Gurudatta High School",
    period: "2017-2018",
    score: "8.2 CGPA",
    icon: <School className="w-6 h-6 text-green-400" />,
  },
];

const EducationSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-out-cubic",
      once: false,  
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b  text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <span className="flex justify-center">
          <p className="text-2xl whitespace-nowrap sm:text-2xl md:text-3xl uppercase tracking-wide font-bold text-orange-500 inline-block  mb-12 text-center border-b-2 border-orange-400 inline-block">
            Education
          </p>
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {educationData.map((edu, index) => (
    <motion.div
      key={index}
      data-aos={
        index === 0 ? "fade-right" : index === 1 ? "fade-up" : "fade-left"
      }
      
    >
      <Card className=" border-none hover:border-orange-200 bg-gray-800 transition-all duration-300 shadow-md hover:shadow-orange-500/100 rounded-lg overflow-hidden">
        <CardHeader className="p-5 flex flex-row justify-center items-center space-x-4">
          <span>{edu.icon}</span>
          <CardTitle className="text-lg font-semibold text-white border-b-2 border-gray-600 pb-1">
            {edu.degree}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-5">
          <p className="text-md font-medium text-gray-300">{edu.institution}</p>
          <div className="flex justify-between text-sm text-gray-400 mt-3">
            <span>{edu.period}</span>
            <span className="font-semibold text-green-400">{edu.score}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
};

export default EducationSection;
