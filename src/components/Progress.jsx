import React from "react";
import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiReactjsFill,
  RiTailwindCssFill,
  RiBootstrapFill,
  RiFunctions,
} from "@remixicon/react";
import { useInView } from "react-intersection-observer";

const scoresData = [
  {
    title: "HTML Skills",
    score: 10.0,
    color: "bg-blue-100",
    textColor: "text-blue-500",
    barColor: "bg-accent",
    iconColor: "#e34f26",
    icon: RiHtml5Fill,
  },
  {
    title: "CSS Skills",
    score: 10.0,
    color: "bg-blue-100",
    textColor: "text-blue-500",
    barColor: "bg-accent",
    iconColor: "#264de4",
    icon: RiCss3Fill,
  },
  {
    title: "Tailwind CSS Skills",
    score: 9.0,
    color: "bg-blue-100",
    textColor: "text-blue-500",
    barColor: "bg-accent",
    iconColor: "#38bdf8",
    icon: RiTailwindCssFill,
  },
  {
    title: "Bootstrap Skills",
    score: 10.0,
    color: "bg-blue-100",
    textColor: "text-blue-500",
    barColor: "bg-accent",
    iconColor: "#563d7c",
    icon: RiBootstrapFill,
  },
  {
    title: "Javascript Skills",
    score: 9.5,
    color: "bg-blue-100",
    textColor: "text-blue-500",
    barColor: "bg-accent",
    iconColor: "#f7df1e",
    icon: RiJavascriptFill,
  },
  {
    title: "React JS Skills",
    score: 9.8,
    color: "bg-blue-100",
    textColor: "text-blue-500",
    barColor: "bg-accent",
    iconColor: "#61dafb",
    icon: RiReactjsFill,
  },
  {
    title: "Agile Methodology",
    score: 7.3,
    color: "bg-blue-100",
    textColor: "text-blue-500",
    barColor: "bg-amber-500",
    iconColor: "#000",
    icon: RiFunctions,
  },
  {
    title: "SCRUM Methodology",
    score: 8.6,
    color: "bg-blue-100",
    textColor: "text-blue-500",
    barColor: "bg-accent",
    iconColor: "#000",
    icon: RiFunctions,
  },
];

const ScoreItem = ({
  title,
  score,
  color,
  textColor,
  barColor,
  iconColor,
  icon: Icon,
  isVisible,
}) => (
  <div className="flex items-center py-3">
    <span
      className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center"
      style={{ color: iconColor }}
    >
      <Icon className="w-5 h-5" />
    </span>
    <div className="space-y-3 flex-1">
      <div className="flex items-center">
        <p className="para mr-auto text-primary dark:text-white flex items-center">
          {title}
        </p>
        <span className={`px-2 py-1 rounded-lg ${color} ${textColor} text-xs`}>
          {score} / 10
        </span>
      </div>
      <div className="overflow-hidden bg-blue-50 h-5 rounded-full w-full">
        <span
          className={`h-full ${barColor} block rounded-full transition-width duration-1000 ease-out`}
          style={{ width: isVisible ? `${score * 10}%` : "0%" }}
        ></span>
      </div>
    </div>
  </div>
);

const ScoreBoard = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="flex items-center justify-center mb-10">
      <section
        ref={ref}
        className="w-full p-9 rounded-lg shadow-cube1 bg-white dark:bg-primary"
      >
        <header className="flex items-center">
          <h2 className="h2 dark:text-white">Skill Bar</h2>
        </header>
        <section className="py-4 flex flex-col md:grid md:grid-cols-2 xl:grid xl:grid-cols-2 gap-x-6">
          {scoresData.map((score) => (
            <ScoreItem
              key={score.title}
              title={score.title}
              score={score.score}
              color={score.color}
              textColor={score.textColor}
              barColor={score.barColor}
              iconColor={score.iconColor}
              icon={score.icon}
              isVisible={inView}
            />
          ))}
        </section>
        <footer className="border-t border-gray-100 pt-4">
          <p className="text-sm text-gray-500 text-center">
            Powered by <span className="font-bold">TailwindCSS</span>
          </p>
        </footer>
      </section>
    </div>
  );
};

export default ScoreBoard;
