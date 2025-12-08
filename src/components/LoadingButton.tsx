import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";

interface LoadingButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "xl";
}

export const LoadingButton = ({ 
  onClick, 
  children, 
  className = "", 
  size = "xl" 
}: LoadingButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await onClick();
    } finally {
      // Simular um pequeno delay para feedback visual
      setTimeout(() => setIsLoading(false), 500);
    }
  };

  return (
    <Button
      onClick={handleClick}
      disabled={isLoading}
      size={size}
      className={`group relative overflow-hidden ${className}`}
    >
      <span className={`flex items-center gap-3 transition-opacity duration-200 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="w-5 h-5 animate-spin" />
        </div>
      )}
    </Button>
  );
}; 