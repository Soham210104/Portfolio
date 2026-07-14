import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming Languages
  { name: "Java", level: 85, category: "programming" },
  { name: "C++", level: 80, category: "programming" },
  { name: "C#", level: 75, category: "programming" },
  { name: "Python", level: 70, category: "programming" },
  { name: "JavaScript", level: 80, category: "programming" },
  { name: "SQL", level: 85, category: "programming" },

  // Frontend
  { name: "React.js", level: 80, category: "frontend" },
  { name: "HTML5", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },

  // Backend
  { name: "Spring Boot", level: 80, category: "backend" },
  { name: "Node.js", level: 75, category: "backend" },
  { name: "Express.js", level: 75, category: "backend" },
  { name: "REST APIs", level: 85, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "MySQL", level: 80, category: "backend" },

  // Tools
  { name: "Git & GitHub", level: 90, category: "tools" },
  { name: "Postman", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "AWS", level: 65, category: "tools" },

  // Concepts
  { name: "Data Structures & Algorithms", level: 85, category: "concepts" },
  { name: "Object-Oriented Programming", level: 90, category: "concepts" },
  { name: "Microservices", level: 70, category: "concepts" },
  { name: "Agile Methodologies", level: 80, category: "concepts" },
  { name: "Software Development Life Cycle", level: 80, category: "concepts" },
  { name: "Prompt Engineering", level: 85, category: "concepts" },
  { name: "Agentic AI", level: 80, category: "concepts" },
];

const categories = [
  "all",
  "programming",
  "frontend",
  "backend",
  "tools",
  "concepts",
];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};