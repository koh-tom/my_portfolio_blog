"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <motion.div
        className="p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-4"
          variants={itemVariants}
        >
          enje
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Software Engineer specializing in Web Development & FPGA.
        </motion.p>
        <motion.div
          className="mt-8 flex justify-center gap-4"
          variants={itemVariants}
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-black"
          >
            <Link href="/portfolio">View Projects</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/blog">Read Blog</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
