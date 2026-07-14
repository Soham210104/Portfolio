import { Code, Gamepad, Server } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About<span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Tech Developer</h3>

            <p className="text-muted-foreground"> Hi, I'm Soham Ovhal. An Associate Software Engineer passionate about building
              scalable full-stack applications with Java, Spring Boot, React, and AI.
              I enjoy solving real-world problems through clean code, modern technologies,
              and continuous learning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/documents/SohamOvhal_Resume_Updated.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary  cosmic-button hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>

            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground text-sm">
                    Scalable web applications with Java, Spring Boot, React, and Node.js.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Gamepad className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Development</h4>
                  <p className="text-muted-foreground text-sm">
                    Clean architecture and OOP principles for maintainable solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">   
                  <h4 className="font-semibold text-lg">Backend Engineering</h4>
                  <p className="text-muted-foreground text-sm">
                    Secure APIs, authentication, databases, and cloud-ready services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
}