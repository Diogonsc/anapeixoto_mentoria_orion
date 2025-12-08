import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  TrendingUp, 
  Package
} from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useNavigate } from "react-router-dom";
export function MentorshipMethodsSection() {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.1 });
  const navigate = useNavigate();
  const methods = [
    {
      id: "metodo-ascenso",
      title: "MÉTODO ASCENSO (NÍVEL INICIAL E INTERMEDIÁRIO DE LIDERANÇA)",
      subtitle: "A transformação: da operação para a liderança com segurança, clareza e presença.",
      description: "O Método ASCENSO desenvolve profissionais que estão prontos para assumir sua primeira posição de liderança. Você aprende a lidar com pessoas, assumir responsabilidades, delegar, comunicar com firmeza e liderar com inteligência emocional — sem perder sua identidade no processo.",
      transformation: "➡️ De profissional técnico para líder confiável, estruturado e pronto para crescer.",
      time: "🕒 6 meses",
      icon: GraduationCap,
      image: "MÉTODO ASCENSO",
      onClick: () => {
        navigate("/mentoria-carreira");
      },
    },
    {
      id: "metodo-executivo-alfa",
      title: "MÉTODO EXECUTIVO ALFA",
      subtitle: "A transformação: da liderança sobrecarregada para a liderança estratégica, consciente e de alto impacto.",
      description: "O Método Executivo ALFA é uma jornada profunda para quem já ocupa cargos de decisão, mas precisa elevar maturidade, expandir visão e liderar com mais estratégia, clareza e propósito. Aqui, o executivo aprende a formar sucessores, sustentar cultura, engajar pessoas e tomar decisões com inteligência emocional e racional.",
      transformation: "➡️ De gestor experiente para líder estratégico, inspirador e com poder de impacto real.",
      time: "🕒 12 meses",
      icon: TrendingUp,
      image: "MÉTODO EXECUTIVO ALFA",
      onClick: () => {
        navigate("/mentoria-executiva");
      },
    },
    {
      id: "orion",
      title: "ORION",
      subtitle: "Decisões mais assertivas. Conversas mais humanas.",
      description: "ORION é o agente de IA criado para apoiar líderes, gestores e executivos em decisões críticas do dia a dia. Ele oferece clareza estratégica, orientação prática e linguagem pronta para conversas difíceis, gestão de conflitos e tomada de decisão com equilíbrio emocional. Ele não substitui o líder — potencializa a sua forma de pensar, agir e comunicar.",
      transformation: "",
      time: "",
      icon: Package,
      image: "ORION",
      onClick: () => {
        navigate("/produto-digital");
      },
    },
  ];


  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 py-20 sm:py-24 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--gold)/0.05)_0%,transparent_50%)]"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-3 h-3 bg-gold/20 rounded-full animate-pulse z-10"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-gold/15 rounded-full animate-pulse z-10" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-[95vw] xl:max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Section 1: CONHEÇO NOSSAS MENTORIAS */}
        <div id="mentorias" ref={sectionRef as React.LegacyRef<HTMLDivElement>} className="mb-20 lg:mb-32">
          <div className={`text-center mb-12 lg:mb-16 animate-on-scroll ${sectionInView ? 'animate-fade-in-up' : ''}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-4">
              CONHEÇO NOSSAS MENTORIAS: 
            </h2>
          </div>

          <div className="space-y-8 lg:space-y-12">
            {methods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card
                  key={method.id}
                  className={`border border-secondary/20 bg-background/80 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 hover:border-gold/30 overflow-hidden animate-on-scroll ${sectionInView ? 'animate-fade-in-up' : ''}`}
                  style={{ animationDelay: sectionInView ? `${0.2 + index * 0.1}s` : '0s' }}
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8 p-6 lg:p-8">
                      {/* Image/Icon Section */}
                      <div className="relative w-full lg:w-64 h-48 lg:h-48 flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-secondary/20 to-secondary/10 border border-secondary/20">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center p-4">
                            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gold/10 flex items-center justify-center">
                              <Icon className="w-8 h-8 text-gold" />
                            </div>
                            <p className="text-xs font-poppins font-semibold text-primary/60 uppercase tracking-wider">
                              {method.image}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-playfair font-bold text-primary mb-2">
                            {method.title}
                          </h3>
                          {method.subtitle && (
                            <p className="text-base sm:text-lg font-poppins text-primary/90 leading-relaxed font-medium mb-3">
                              {method.subtitle}
                            </p>
                          )}
                        </div>
                        <p className="text-base sm:text-lg font-poppins text-primary/80 leading-relaxed">
                          {method.description}
                        </p>
                        {method.transformation && (
                          <p className="text-base sm:text-lg font-poppins text-primary/90 leading-relaxed font-medium">
                            {method.transformation}
                          </p>
                        )}
                        {method.time && (
                          <p className="text-base font-poppins text-primary/80">
                            Tempo de acompanhamento: {method.time}
                          </p>
                        )}
                        <div className="pt-2">
                          <Button
                            onClick={method.onClick}
                            variant="gold"
                            size="lg"
                            className="font-poppins font-semibold w-full lg:w-auto"
                          >
                            Saiba mais →
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

