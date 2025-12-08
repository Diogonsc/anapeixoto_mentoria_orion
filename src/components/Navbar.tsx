import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Sparkles } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navigationLinks = [
  { path: "/", label: "Início" },
  { path: "/mentoria-carreira", label: "Método ASCENSO" },
  { path: "/mentoria-executiva", label: "Método Executivo ALFA" },
  { path: "/produto-digital", label: "ORION" },
  // { path: "/apresentacao-completa", label: "Apresentação Completa" },
];

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gold/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group transition-transform hover:scale-105"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center shadow-lg shadow-gold/20 group-hover:shadow-xl group-hover:shadow-gold/30 transition-all duration-300 border border-gold/20">
              <Sparkles className="w-6 h-6 text-gold group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="text-xl font-playfair font-bold text-primary group-hover:text-gold transition-colors duration-300">
              Ana Peixoto
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigationLinks
            
              .map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "group relative px-4 py-2 text-sm font-poppins font-medium transition-all duration-300 w-fit",
                    isActive(link.path)
                      ? "text-gold"
                      : "text-primary/80 hover:text-gold"
                  )}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gold to-gold/60 transition-all duration-300 ease-out",
                    isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                  )}></span>
                </Link>
              ))}
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-primary hover:text-gold hover:bg-gold/10"
                aria-label="Abrir menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-80 h-full flex flex-col p-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-l border-gold/20"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center h-16 px-4 sm:px-6 lg:px-8 border-b border-gold/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center shadow-lg shadow-gold/20 transition-all duration-300 border border-gold/20">
                    <Sparkles className="w-6 h-6 text-gold transition-transform duration-300" />
                  </div>
                  <span className="text-xl font-playfair font-bold text-primary transition-colors duration-300">
                    Ana Peixoto
                  </span>
                </div>
              </div>

              {/* Mobile Menu Links */}
              <nav className="flex-1 flex flex-col gap-1 px-4 sm:px-6 lg:px-8 py-4 overflow-y-auto">
                {navigationLinks.map((link) => (
                  <SheetClose key={link.path} asChild>
                    <Link
                      to={link.path}
                      onClick={handleLinkClick}
                      className={cn(
                        "group relative px-4 py-3 text-base font-poppins font-medium transition-all duration-300 w-fit",
                        isActive(link.path)
                          ? "text-gold"
                          : "text-primary hover:text-gold"
                      )}
                    >
                      <span className="relative z-10">{link.label}</span>
                      <span className={cn(
                        "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gold to-gold/60 transition-all duration-300 ease-out",
                        isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                      )}></span>
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

