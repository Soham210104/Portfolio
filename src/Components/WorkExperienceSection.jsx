// Components/WorkExperienceSection.jsx
import { Briefcase } from "lucide-react";

const workExperiences = [
  {
    role: "Software Developer Intern",
    company: "VSQUARE",
    duration: "Feb 2024 - April 2024",
    description: (
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>Improved login system security using regex validation and fixed critical bugs, reducing unauthorized access by 40%.</li>
        <li>Built a communication bridge between C# and Python, making cross-platform features work smoothly and improving user engagement by 25%.</li>
        <li>Developed and optimized backend services on Microsoft Azure, reducing API load and storage usage through smart data handling and caching.</li>
        <li>Followed the full software development process from planning to deployment, ensuring reliable and maintainable code delivery.</li>
        <li>Worked with cross-functional teams in Agile sprints to meet development goals on time.</li>
      </ul>
    )
  },
];


export const WorkExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {workExperiences.map((exp, key) => (
            <div key={key} className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{exp.role} @ {exp.company}</h4>
                  <p className="text-sm text-muted-foreground">{exp.duration}</p>
                  <p className="mt-2 text-muted-foreground">{exp.description}</p>
                </div>
              </div>
              <a
                href="./public/documents/WorkExperience_Letter.pdf"
                download
                className="inline-block mt-4 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Letter of Intent
              </a>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
