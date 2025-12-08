import { ChevronDown } from "lucide-react";

interface ScrollIndicatorProps {
  targetId: string;
}

export const ScrollIndicator = ({ targetId }: ScrollIndicatorProps) => {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="absolute w-full flex justify-center bottom-2 sm:w-auto sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:bottom-8 animate-bounce">
      <button
        onClick={scrollToSection}
        className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
        aria-label="Rolar para baixo"
      >
        <span className="text-xs font-medium tracking-wider uppercase">Descubra mais</span>
        <div className="relative">
          <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
          <div className="absolute inset-0 w-6 h-6 border border-current rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-300"></div>
        </div>
      </button>
    </div>
  );
}; 