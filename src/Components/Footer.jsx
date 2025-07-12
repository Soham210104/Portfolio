import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
    {" "}
    <p className="text-small text-muted-foregroud"> &copy; {new Date().getFullYear()} Soham Ovhal, All rights reserved.</p>
  
    <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors fixed bottom-4 right-4 z-50">
      <ArrowUp size={20}/>
    </a>
  </footer>
}