import { Github } from "lucide-react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 0,
    title: "JotBoard – Notes App",
    description: "A full-stack notes application with complete CRUD features, clean UI, rate limiting, and a MERN architecture.",
    image: "/projects/Website.png",
    tags: ["MERN", "React", "Express", "MongoDB", "Tailwind", "Redis"],
    githubUrl: "https://github.com/Soham210104/JotBoard",
    demoUrl: "https://jotboard-gv7j.onrender.com/"
  },
  {
    id: 1,
    title: "ASUS Driver Helper Tool",
    description: "A C# tool that detects Wi-Fi/Bluetooth drivers, compares installed vs latest versions, and provides one-click download links for easy updates.",
    image: "/projects/asusdriver.png",
    tags: ["C#", "WinForms", "PowerShell", "JSON", "Automation", "Driver Management"],
    githubUrl: "https://github.com/Soham210104/ASUSDriverHelper"
  },
  {
    id: 2,
    title: "MovieHunt",
    description: "This is a movie discovery web application that allows users to search for movies, view details, and save their favorites.",
    image: "/projects/moviehunt.png",
    tags: ["HTML", "CSS", "JavaScript", "API", "React", "Tailwind CSS","Appwrite"],
    githubUrl: "https://github.com/Soham210104/MovieHunt"
  },
  {
    id: 3,
    title: "SmartMeasurer",
    description: "This is an augmented reality mobile application that allows users to measure real-world objects using their smartphone camera.",
    image: "/projects/AR.jpg",
    tags: ["C#", "Augmented Reality", "Unity","AR Foundation", "ARCore", "ARKit"],
    githubUrl: "https://github.com/Soham210104/HeightMeasurer"
    // Future add the demoUrl 
  },
  {
    id: 4,
    title: "Interactive Item Management System",
    description: "Developed this full stack Game in a team of 3, during hackathon, where my contribution was of Game Logic and Backend.",
    image: "/projects/test1.png",
    tags: ["C#", "OOP", "Unity", "DSA", "Algorithms", "Game Development"],
    githubUrl: "https://github.com/Soham210104/GameJam"
  },
];


export const ProjectsSection = () => {
  return <section id="projects" className="py-24 px-4 relative ">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        {" "}
        Featured <span className="text-primary">Projects</span>
      </h2>

      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto ">
        Here are some of the projects I've worked on. Click on the project title to view more details.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, key) => (
          <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
            <div className="h-48 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4 ">
                {project.tags.map((tag) => (
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 bordertext-secondary-foreground">{tag}</span>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                    <Github size={20} />
                  </a>

                  {/* Show Live Demo ONLY if available */}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm text-primary underline hover:opacity-80"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/Soham210104" target="_blank" rel="noopener noreferrer">
          Check My GitHub<ArrowRight size={16} />
        </a>
      </div>
    </div>
  </section>;
}
