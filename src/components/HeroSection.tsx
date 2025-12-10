import * as React from "react";
import { Star, Users, Award } from "lucide-react";
import anaPeixotoHero from "@/assets/imagem1.png";
import anaPeixotoHero1 from "@/assets/imagem2.png";
import anaPeixotoHero2 from "@/assets/imagem3.png";
import anaPeixotoHero3 from "@/assets/ana-carousel-03.png";
import anaPeixotoHero4 from "@/assets/ana-carousel-04.png";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

export const HeroSection = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.2 });
  const { ref: imageRef, isInView: imageInView } = useInView({ threshold: 0.2 });
  
  const images = [anaPeixotoHero, anaPeixotoHero1, anaPeixotoHero2, anaPeixotoHero3, anaPeixotoHero4];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30 relative overflow-hidden">
      {/* Background with subtle gradient and pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--gold)/0.1)_0%,transparent_50%)]"></div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-gold/30 rounded-full animate-pulse z-10"></div>
      <div className="absolute top-40 right-20 w-4 h-4 bg-gold/40 rounded-full animate-pulse z-10" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-gold/20 rounded-full animate-pulse z-10" style={{ animationDelay: '2s' }}></div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - 6 columns */}
          <div ref={headerRef as React.LegacyRef<HTMLDivElement>} className={`lg:col-span-6 space-y-8 animate-on-scroll ${headerInView ? 'animate-fade-in-up' : ''}`}>
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-primary leading-tight">
                Muito Prazer,{" "}
                <span className="block lg:inline text-gold lg:mt-0 mt-2 relative">
                  <span className="relative z-10">Ana Peixoto</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gold/20 -skew-x-12 transform origin-left"></div>
                </span>
              </h1>
              
              <p className="text-2xl lg:text-3xl font-playfair text-primary leading-relaxed font-light">
                Transformando potencial em liderança com:
                <br />
                <span className="flex flex-wrap items-center gap-2 lg:gap-3 mt-2">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    <span className="font-semibold text-gold">clareza</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    <span className="font-semibold text-gold">propósito</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    <span className="font-semibold text-gold">estratégia</span>
                  </span>
                </span>
              </p>

              <div className="pt-4 space-y-3">
                <p className="text-lg font-poppins font-semibold text-primary">
                  Ana Peixoto — Educadora Executiva • Mentora de Carreira
                </p>
                
                <p className="text-lg font-poppins text-primary/80 leading-relaxed">
                  <span className="font-semibold">Especialista em desenvolvimento de líderes, gestores e executivos.</span> Acompanho profissionais e líderes na transição da operação para a liderança e no aprimoramento de executivos. Minha metodologia une estratégia, sofisticação e humanidade para gerar resultados sustentáveis.
                </p>
              </div>
            </div>

            {/* Social Proof */}
            <div className={`flex flex-wrap items-center gap-8 pt-6 pb-6 border-y border-secondary/20 animate-on-scroll ${headerInView ? 'animate-fade-in-up animate-delay-200' : ''}`}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center border border-secondary/20">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-xl font-bold text-primary">650+</p>
                  <p className="text-sm text-muted-foreground">Executivos e negócios transformados</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center border border-secondary/20">
                  <Star className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-xl font-bold text-primary">95%</p>
                  <p className="text-sm text-muted-foreground">De satisfação</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center border border-secondary/20">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-xl font-bold text-primary">10+</p>
                  <p className="text-sm text-muted-foreground">Anos de experiência</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className={`pt-2 animate-on-scroll ${headerInView ? 'animate-fade-in-up animate-delay-400' : ''}`}>
              <Button
                onClick={() => scrollToSection("mentorias")}
                size="lg"
                className="w-full md:w-auto px-10 py-5 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-inter font-semibold rounded-xl transition-all duration-300 flex items-center gap-3 shadow-elegant hover:shadow-xl hover:scale-105"
              >
                Conheça nossas mentorias
              </Button>
            </div>
          </div>

          {/* Right Content - Image Grid - 6 columns */}
          <div ref={imageRef as React.LegacyRef<HTMLDivElement>} className={`lg:col-span-6 relative animate-on-scroll ${imageInView ? 'animate-slide-in-right' : ''}`}>
            {/* Grid de 3 imagens */}
            <div className="grid grid-cols-[3fr_2fr] gap-4 max-h-[750px] auto-rows-fr">
              {/* Imagem 1 - Grande, ocupa 2 rows */}
              <div className="row-span-2 relative group">
                <div className="h-full max-h-[750px] bg-gradient-to-br from-secondary/20 to-secondary/30 rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_0_15px_5px_rgba(101,67,33,0.4)] transition-all duration-300">
                  <img
                    src={images[0]}
                    alt="Ana Peixoto - Foto Principal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Imagem 2 - Média superior */}
              <div className="relative group flex flex-col">
                <div className="flex-1 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_0_15px_5px_rgba(101,67,33,0.4)] transition-all duration-300 flex items-center justify-center">
                  <img
                    src={images[1]}
                    alt="Ana Peixoto - Foto 2"
                    className="w-full h-full object-contain object-center"
                  />
                </div>
              </div>

              {/* Imagem 3 - Média inferior */}
              <div className="relative group flex flex-col">
                <div className="flex-1 bg-gradient-to-br from-secondary/30 to-secondary/40 rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_0_15px_5px_rgba(101,67,33,0.4)] transition-all duration-300 flex items-center justify-center">
                  <img
                    src={images[2]}
                    alt="Ana Peixoto - Foto 3"
                    className="w-full h-full object-contain object-center"
                  />
                </div>
              </div>
            </div>

            {/* Floating Card - Live */}
            {/* <div className="absolute -bottom-6 left-0 bg-background p-5 rounded-2xl shadow-2xl z-20 max-w-[280px] border border-secondary/20">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0">
                  <div className="text-primary-foreground text-xs font-bold">LIVE</div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-primary leading-tight mb-1">
                    O que ninguém te contou sobre carreira estagnada
                  </p>
                  <p className="text-xs text-muted-foreground mb-2">
                    Você entrega, se esforça... mas continua invisível?
                  </p>
                  <div className="flex items-center gap-2 text-gold">
                    <span className="text-sm font-bold">07 AGO • 19H</span>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gold/30 rounded-full blur-3xl opacity-30 -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gold/20 rounded-full blur-3xl opacity-40 -z-10"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
