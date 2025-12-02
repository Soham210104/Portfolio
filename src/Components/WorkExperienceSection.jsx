// Components/WorkExperienceSection.jsx
import { Briefcase } from "lucide-react";

const workExperiences = [
  {
    role: "Software Developer Intern",
    company: "VSQUARE",
    duration: "Feb 2024 - Aug 2024",
    description: (
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>Developed and maintained software components across the SDLC in an Agile environment.</li>
        <li>Enhanced authentication security using regex validation and resolved software bugs.</li>
        <li>Built a C#–Python integration bridge to enable cross-platform solutions.</li>
        <li>Conducted debugging and troubleshooting to ensure application reliability</li>
        <li>Used REST APIs and Postman for backend integration and testing.</li>
        <li>Collaborated with cross-functional teams to deliver features meeting business requirements.</li>
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
                href="/documents/ExperienceLetterSoftwareAug.pdf"
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
