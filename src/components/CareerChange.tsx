import { Target, MessageSquare, FileText, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";
import { LoadingButton } from "./LoadingButton";
import { Card, CardContent } from "./ui/card";
import { useInView } from "@/hooks/useInView";

export function CareerChange() {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.1 });
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefits = [
    {
      icon: Target,
      title: "Identificar bloqueios",
      description: "que travam sua evolução profissional",
    },
    {
      icon: MessageSquare,
      title: "Desenvolver uma comunicação",
      description: "estratégica e autêntica",
    },
    {
      icon: FileText,
      title: "Construir um currículo e LinkedIn",
      description: "de alto impacto",
    },
    {
      icon: TrendingUp,
      title: "Definir metas claras",
      description: "e criar um plano de ação eficiente",
    },
    {
      icon: Sparkles,
      title: "Reposicionar sua carreira",
      description: "para novas oportunidades de crescimento",
    },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-background-secondary py-20 sm:py-24 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--gold)/0.08)_0%,transparent_50%)]"></div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-3 h-3 bg-gold/30 rounded-full animate-pulse z-10"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-gold/20 rounded-full animate-pulse z-10" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-gold/25 rounded-full animate-pulse z-10" style={{ animationDelay: '2s' }}></div>

      <div ref={sectionRef as React.LegacyRef<HTMLDivElement>} className="relative max-w-[95vw] xl:max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 lg:space-y-16">
          {/* Header Section */}
          <div className={`text-center space-y-6 animate-on-scroll ${sectionInView ? 'animate-fade-in-up' : ''}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-sm font-medium text-secondary">
              <Sparkles className="w-4 h-4" />
              <span>Programa Estratégico</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-primary leading-tight tracking-tight">
              Virada de Carreira
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-poppins text-primary/90 max-w-3xl mx-auto leading-relaxed">
              Um programa estratégico e prático criado para profissionais que desejam conquistar clareza, reposicionamento e crescimento real até o final do ano.
            </p>
          </div>

          {/* Main Content */}
          <div className={`space-y-8 animate-on-scroll ${sectionInView ? 'animate-fade-in-up animate-delay-200' : ''}`}>
            {/* Introduction */}
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-lg sm:text-xl font-poppins text-primary/80 leading-relaxed">
                A proposta é simples e poderosa: em poucos meses, você terá acesso a uma plataforma completa, com vídeo-aulas práticas, materiais de apoio exclusivos e ferramentas de autoconhecimento e posicionamento, que vão te ajudar a:
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card
                    key={index}
                    className={`border-secondary/20 bg-background/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 hover:border-gold/30 group animate-on-scroll ${sectionInView ? 'animate-fade-in-up' : ''}`}
                    style={{ animationDelay: sectionInView ? `${0.3 + index * 0.1}s` : '0s' }}
                  >
                    <CardContent className="p-6 space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-gold" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-poppins font-semibold text-primary">
                          {benefit.title}
                        </h3>
                        <p className="text-sm font-poppins text-primary/70 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Diferential Section */}
          <div className={`max-w-4xl mx-auto space-y-6 animate-on-scroll ${sectionInView ? 'animate-fade-in-up animate-delay-800' : ''}`}>
            <Card className="border-gold/30 bg-gradient-to-br from-background to-secondary/10 backdrop-blur-sm shadow-elegant">
              <CardContent className="p-8 lg:p-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-gold" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-playfair font-bold text-primary">
                      O grande diferencial
                    </h3>
                    <p className="text-lg font-poppins text-primary/80 leading-relaxed">
                      O Virada de Carreira é direto ao ponto, com conteúdos aplicáveis imediatamente, para você fechar o ano de 2025 com confiança, clareza e resultados concretos na sua trajetória profissional.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className={`text-center space-y-6 animate-on-scroll ${sectionInView ? 'animate-fade-in-up animate-delay-1000' : ''}`}>
            <LoadingButton
              onClick={() => scrollToSection("contato")}
              className="w-full sm:w-auto text-lg font-inter font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant transition-all duration-500 hover:shadow-xl hover:scale-105 cursor-pointer"
            >
              Comprar Agora
            </LoadingButton>
          </div>
        </div>
      </div>
    </section>
  );
}