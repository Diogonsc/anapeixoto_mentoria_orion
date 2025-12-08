import videoExecutivo from "@/assets/videos/videoexecutivo.mp4";
import { LoadingButton } from "./LoadingButton";
import { useInView } from "@/hooks/useInView";
import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export function HeroCareerMentoring() {
  const { ref: contentRef, isInView: contentInView } = useInView({ threshold: 0.2 });
  const { ref: videoRef, isInView: videoInView } = useInView({ threshold: 0.2 });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle gradient and pattern - same as HeroSection */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--gold)/0.1)_0%,transparent_50%)]"></div>

      {/* Floating elements for visual interest - same as HeroSection */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-gold/30 rounded-full animate-pulse z-10"></div>
      <div className="absolute top-40 right-20 w-4 h-4 bg-gold/40 rounded-full animate-pulse z-10" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-gold/20 rounded-full animate-pulse z-10" style={{ animationDelay: '2s' }}></div>

      <div className="relative w-full px-4 py-10 md:px-40 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[600px] lg:min-h-[700px]">
          {/* Content Section */}
          <div ref={contentRef as React.LegacyRef<HTMLDivElement>} className="lg:col-span-6 space-y-8 text-center lg:text-left">
            {/* Badge/Status */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-sm font-medium text-secondary animate-on-scroll ${contentInView ? 'animate-fade-in' : ''}`}>
              <TrendingUp className="w-4 h-4" />
              <span>Mentoria de Carreira Premium</span>
            </div>

            {/* Main Heading */}
            <div className={`space-y-4 animate-on-scroll ${contentInView ? 'animate-fade-in-up animate-delay-100' : ''}`}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-primary leading-[1.1] tracking-tight">
                Mentoria VIVA{" "}
                <span className="relative">
                  <span className="relative z-10">de Carreira</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gold/20 -skew-x-12 transform origin-left"></div>
                </span>
              </h1>
            </div>

            {/* Description Text */}
            <div className={`space-y-6 animate-on-scroll ${contentInView ? 'animate-fade-in-up animate-delay-200' : ''}`}>
              <p className="text-lg font-poppins text-primary/80 leading-relaxed">
                Uma experiência de mentoria <span className="font-bold">premium</span> desenvolvida especialmente para profissionais que buscam transformar sua trajetória profissional, alcançar seus objetivos de carreira e desenvolver todo o seu potencial.
              </p>
              <p className="text-lg font-poppins text-primary/80 leading-relaxed">
                Com uma abordagem personalizada e focada em resultados, a Mentoria VIVA de Carreira combina <span className="font-bold">estratégia, autenticidade e ação</span> para impulsionar sua evolução profissional.
              </p>
            </div>

            {/* CTA Button with Pulse Animation */}
            <div className={`space-y-4 animate-on-scroll ${contentInView ? 'animate-fade-in-up animate-delay-400' : ''}`}>
              <LoadingButton
                onClick={() => scrollToSection("contato")}
                className="w-full sm:w-auto text-lg font-inter font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant transition-all duration-500 hover:shadow-xl hover:scale-105 animate-gentle-pulse"
              >
                Quero conhecer a Mentoria VIVA de Carreira
              </LoadingButton>
            </div>
          </div>

          {/* Video Section */}
          <div ref={videoRef as React.LegacyRef<HTMLDivElement>} className="lg:col-span-6 relative">
            <div className={`relative group animate-on-scroll ${videoInView ? 'animate-slide-in-right' : ''}`}>
              {/* Glow effect on hover */}
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-transparent to-gold/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Premium Card wrapper */}
              <Card className="relative overflow-hidden border-gold/30 bg-background/80 backdrop-blur-sm shadow-elegant group-hover:shadow-2xl transition-all duration-500 rounded-2xl p-0">
                <div className="relative aspect-[4/3] lg:aspect-[3/2] w-full min-h-[400px] lg:min-h-[500px]">
                  <video
                    src={videoExecutivo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  >
                    Seu navegador não suporta a reprodução de vídeos.
                  </video>

                  {/* Overlay gradient for premium look */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none"></div>

                  {/* Decorative corner elements - premium touch */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold/30 rounded-tr-2xl opacity-60"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-gold/30 rounded-bl-2xl opacity-60"></div>
                </div>
              </Card>

              {/* Decorative elements around card */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gold/20 rounded-full animate-pulse z-5"></div>
              <div className="absolute -bottom-4 -right-6 w-10 h-10 bg-gold/30 rounded-full animate-pulse delay-1000 z-5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

