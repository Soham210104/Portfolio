import { ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Claude Certified Architect - Foundations",
    issuer: "Anthropic Certification",
    image: "/certification/claude.png", // Update with your image path
    credentialUrl: "https://verify.skilljar.com/c/33jk6x47hg5p", // Add credential link
  },
  {
    name: "Reinvention with Agentic AI",
    issuer: "Accenture",
    image: "/certification/reinvetion.png", // Update with your image path
    credentialUrl: "https://www.linkedin.com/in/soham-ovhal-pccoe/details/certifications/", // Add credential link
  },
  {
    name: "Unity Certified Associate: Programmer",
    issuer: "Unity",
    image: "/certification/unity.png", // Update with your image path
    credentialUrl: "https://www.credly.com/badges/82a001a7-d724-4be0-aa69-913f44deea1a/public_url", // Add credential link
  },
  {
    name: "Full Stack Web Development Bootcamp",
    issuer: "Udemy",
    image: "/certification/udemy.png", // Update with your image path
    credentialUrl: "https://www.linkedin.com/in/soham-ovhal-pccoe/details/certifications/", // Add credential link
  },
  {
    name: "Aspire Leadership Program",
    issuer: "Founded at Harvard University - Aspire Institute",
    image: "/certification/aspire.png", // Update with your image path
    credentialUrl: "https://www.linkedin.com/in/soham-ovhal-pccoe/details/certifications/", // Add credential link
  },
  {
    name: "Introduction to C++ and Unreal Engine",
    issuer: "University of Colorado - Coursera",
    image: "/certification/coursera.png", // Update with your image path
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/SRHS4SWYL9TD", // Add credential link
  },
];

export const CertificationSection = () => {
  return (
    <section id="certifications" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, key) => (
            <div
              key={key}
              className="bg-card rounded-lg overflow-hidden shadow-xs card-hover border border-secondary/50 group"
            >
              {/* Certificate Image */}
              <div className="relative h-48 bg-secondary/50 overflow-hidden">
                {cert.image && cert.image !== "" ? (
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                    <span className="text-muted-foreground text-center px-4">
                      Certificate Image
                    </span>
                  </div>
                )}
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-4">
                  {cert.issuer}
                </p>

                {/* Credential Link */}
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    View Credential
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
