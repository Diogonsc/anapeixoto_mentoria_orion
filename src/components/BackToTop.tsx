import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostra o botão quando o usuário rolar mais de 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Verifica a posição inicial
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      variant="gold"
      size="icon"
      aria-label="Voltar ao topo"
      className={cn(
        "fixed bottom-6 right-6 z-50 rounded-full shadow-lg shadow-gold/30 transition-all duration-500 ease-in-out",
        "hover:shadow-xl hover:shadow-gold/40 hover:scale-110",
        "border border-gold/20 hover:border-gold/40",
        "bg-gradient-to-br from-gold/95 to-gold/80 hover:from-gold hover:to-gold/95",
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}

