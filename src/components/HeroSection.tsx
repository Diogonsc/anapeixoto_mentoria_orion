import * as React from "react";
import { Sparkles, TrendingUp, Users } from "lucide-react";
import anaPeixotoHero from "@/assets/ana-peixoto-hero.jpg";
import anaPeixotoHero1 from "@/assets/ana-carousel-01.png";
import anaPeixotoHero2 from "@/assets/ana-carousel-02.png";
import anaPeixotoHero3 from "@/assets/ana-carousel-03.png";
import anaPeixotoHero4 from "@/assets/ana-carousel-04.png";
import { ScrollIndicator } from "./ScrollIndicator";
import { LoadingButton } from "./LoadingButton";
import { useInView } from "@/hooks/useInView";
import { ImageCarousel } from "./ImageCarousel";

export const HeroSection = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.2 });
  const { ref: imageRef, isInView: imageInView } = useInView({ threshold: 0.2 });
  
  const images = [anaPeixotoHero, anaPeixotoHero1, anaPeixotoHero2, anaPeixotoHero3, anaPeixotoHero4];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--gold)/0.1)_0%,transparent_50%)]"></div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-gold/30 rounded-full animate-pulse z-10"></div>
      <div className="absolute top-40 right-20 w-4 h-4 bg-gold/40 rounded-full animate-pulse z-10" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-gold/20 rounded-full animate-pulse z-10" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-[95vw] xl:max-w-[1800px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Section */}
          <div ref={headerRef as React.LegacyRef<HTMLDivElement>} className="space-y-8 text-center lg:text-left">
            {/* Badge/Status */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-sm font-medium text-secondary animate-on-scroll ${headerInView ? 'animate-fade-in' : ''}`}>
              <Sparkles className="w-4 h-4" />
              <span>Transformação Profissional</span>
            </div>

            {/* Main Heading */}
            <div className={`space-y-4 animate-on-scroll ${headerInView ? 'animate-fade-in-up animate-delay-100' : ''}`}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-primary leading-[0.9] tracking-tight">
                Muito Prazer,
                <br className="lg:hidden" />
                <span className="relative">
                  <span className="relative z-10">Ana Peixoto</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gold/20 -skew-x-12 transform origin-left"></div>
                </span>
              </h1>
            </div>

            {/* Subtitle with enhanced typography */}
            <div
              className={`space-y-6 animate-on-scroll ${headerInView ? 'animate-fade-in-up animate-delay-200' : ''}`}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-primary text-justify lg:text-left">
                Transformando potencial em liderança com clareza, propósito e estratégia.
              </h2>
              
              <p className="text-lg font-poppins text-primary/80 leading-relaxed font-semibold text-justify lg:text-left">
                Ana Peixoto — Educadora Executiva • Mentora de Carreira
              </p>

              <p className="text-lg font-poppins text-primary/80 leading-relaxed text-justify lg:text-left">
                <span className="font-bold">Especialista em desenvolvimento de líderes, gestores e executivos.</span>
                <br />
                Acompanho profissionais e líderes na transição da operação para a liderança e no aprimoramento de executivos. Minha metodologia une estratégia, sofisticação e humanidade para gerar resultados sustentáveis.
              </p>
            </div>

            {/* Social Proof */}
            <div
              className={`flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground animate-on-scroll ${headerInView ? 'animate-fade-in-up animate-delay-400' : ''}`}
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gold" />
                <span>Profissionais transformados</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-gold" />
                <span>95% de satisfação</span>
              </div>
            </div>

            {/* CTA Section */}
            <div
              className={`space-y-4 animate-on-scroll ${headerInView ? 'animate-fade-in-up animate-delay-600' : ''}`}
            >
              <LoadingButton
                onClick={() => scrollToSection("mentorias")}
                className="w-full sm:w-auto text-lg font-inter font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant transition-all duration-500 hover:shadow-xl hover:scale-105"
              >
                Conheço nossas mentorias
              </LoadingButton>
            </div>
          </div>

          {/* Images Section - Carousel com Shadcn UI */}
          <div ref={imageRef as React.LegacyRef<HTMLDivElement>} className={`animate-on-scroll ${imageInView ? 'animate-slide-in-right' : ''}`}>
            <ImageCarousel
              images={images}
              showDecorativeElements={true}
              altPrefix="Ana Peixoto - Foto"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <ScrollIndicator targetId="about" /> */}
    </section>
  );
};
