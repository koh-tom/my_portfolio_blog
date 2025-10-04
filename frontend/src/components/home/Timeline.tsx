"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

// タイムラインデータ
const timelineEvents: TimelineEvent[] = [
  {
    date: "2022 -",
    title: "大学入学",
    description: "工学部にて情報工学について勉強中。",
  },
  {
    date: "2023",
    title: "ベンチャー企業にてアルバイト",
    description: "ベンチャー企業にてシミュレーション構築のアルバイト。",
  },
  {
    date: "2024 -",
    title: "エンジニアバイト",
    description: "Web開発のエンジニアバイト。",
  },
  {
    date: "Now",
    title: "新しい技術の探求",
    description: "常に新しい技術を学び、挑戦中。",
  },
];

const TimelineItem = ({ event, index }: { event: TimelineEvent; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const itemVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative flex items-center justify-start gap-5 md:justify-normal md:odd:flex-row-reverse group"
    >
      {/* Dot */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-500 bg-gray-800 group-odd:order-1 md:group-odd:translate-x-[-50%] md:group-even:translate-x-[50%] z-10">
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      </div>

      {/* Card */}
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
        <div className="p-4 rounded-lg border border-gray-700 bg-gray-800 shadow-md">
          <p className="text-sm text-gray-400 mb-1">{event.date}</p>
          <h3 className="font-bold">{event.title}</h3>
          <p className="text-gray-300 text-sm mt-2">{event.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Timeline() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12">My Journey</h1>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-5 md:left-1/2 w-0.5 h-full bg-gray-500 transform md:-translate-x-1/2"></div>
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={event.title} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
