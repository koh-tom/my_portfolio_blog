"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Type, Atom, Globe, Gem, Bot, Container } from "lucide-react";

const skills = [
  { name: "TypeScript", proficiency: 5, icon: Type },
  { name: "React", proficiency: 4, icon: Atom },
  { name: "Next.js", proficiency: 4, icon: Globe },
  { name: "Ruby on Rails", proficiency: 3, icon: Gem },
  { name: "ROS2", proficiency: 2, icon: Bot },
  { name: "Docker", proficiency: 3, icon: Container },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function Skills() {
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <motion.div
          ref={skillsRef}
          variants={containerVariants}
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-8"
        >
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={itemVariants}>
              <Card className="p-6 bg-gray-800 border-gray-700 flex flex-col items-center w-36">
                <div className="text-4xl mb-2">
                  <skill.icon className="w-10 h-10 text-white" />
                </div>
                <p className="font-semibold text-white">{skill.name}</p>
                <div className="flex justify-center mt-2 gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={`${skill.name}-dot-${i}`}
                      className={`block w-3 h-3 rounded-full ${i < skill.proficiency ? "bg-blue-500" : "bg-gray-600"}`}
                    ></span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
