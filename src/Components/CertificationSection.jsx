import { useState } from "react";
import { cn } from "@/lib/utils";

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    category: "cloud",
    credentialId: "Credential ID",
  },
  {
    name: "Google Cloud Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "2024",
    category: "cloud",
    credentialId: "Credential ID",
  },
  {
    name: "Docker Certified Associate",
    issuer: "Docker",
    date: "2023",
    category: "devops",
    credentialId: "Credential ID",
  },
  {
    name: "Kubernetes Application Developer (CKAD)",
    issuer: "Linux Foundation",
    date: "2023",
    category: "devops",
    credentialId: "Credential ID",
  },
  {
    name: "Oracle Certified Associate Java Programmer",
    issuer: "Oracle",
    date: "2023",
    category: "programming",
    credentialId: "Credential ID",
  },
  {
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2024",
    category: "cloud",
    credentialId: "Credential ID",
  },
];

const categories = ["all", "cloud", "devops", "programming"];

export const CertificationSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCertifications = certifications.filter(
    (cert) => activeCategory === "all" || cert.category === activeCategory
  );

  return (
    <section id="certifications" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Certifications</span>
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
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCertifications.map((cert, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover border border-secondary/50"
            >
              <div className="mb-4">
                <h3 className="font-semibold text-lg mb-2">{cert.name}</h3>
                <p className="text-sm text-primary font-medium">{cert.issuer}</p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {cert.date}
                </span>
                <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full capitalize">
                  {cert.category}
                </span>
              </div>

              <div className="mt-4 pt-4 border-t border-secondary/30">
                <p className="text-xs text-muted-foreground">
                  {cert.credentialId}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
