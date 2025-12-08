import { Target, TrendingUp, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { LoadingButton } from "./LoadingButton";
import { useInView } from "@/hooks/useInView";

export function CareerOffer() {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.1 });
  const handleStartJourney = () => {
    // Aqui pode ser adicionada a lógica de redirecionamento ou ação
    console.log("Iniciar jornada clicado");
  };

  const benefits = [
    {
      icon: Target,
      title: "Descubra sua identidade profissional",
      description:
        "Estratégias personalizadas para fortalecer sua marca pessoal e alcançar objetivos reais.",
    },
    {
      icon: TrendingUp,
      title: "Transforme desafios em oportunidades",
      description:
        "Apoio humanizado para superar obstáculos e avançar com confiança na carreira.",
    },
    {
      icon: Sparkles,
      title: "Alcance seus objetivos profissionais",
      description:
        "Metodologias eficazes para garantir progresso consistente e resultados duradouros.",
    },
  ];

  return (
    <section
      id="career-offer"
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 py-20 sm:py-24 lg:py-32"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--gold)/0.08)_0%,transparent_50%)]"></div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-gold/30 rounded-full animate-pulse z-10"></div>
      <div className="absolute bottom-40 right-20 w-4 h-4 bg-gold/20 rounded-full animate-pulse z-10" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-gold/25 rounded-full animate-pulse z-10" style={{ animationDelay: '2s' }}></div>

      <div ref={sectionRef as React.LegacyRef<HTMLDivElement>} className="relative max-w-[95vw] xl:max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-12 lg:mb-16 animate-on-scroll ${sectionInView ? 'animate-fade-in-up' : ''}`}>
          <div className="inline-block mb-4">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-fraunces font-weight-thin text-gold">
              R$47,00
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-4">
            VIRADA DE CARREIRA
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto font-poppins">
            Conecte-se com sua essência para avançar na carreira.
          </p>
        </div>

        {/* CTA Button */}
        <div className={`flex justify-center mb-16 lg:mb-20 animate-on-scroll ${sectionInView ? 'animate-fade-in-up animate-delay-200' : ''}`}>
          <LoadingButton
            onClick={handleStartJourney}
            size="xl"
            className="bg-gold text-gold-foreground hover:bg-gold/90 shadow-elegant"
          >
            Inicie sua jornada
          </LoadingButton>
        </div>

        {/* Benefits Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto animate-on-scroll ${sectionInView ? 'animate-fade-in-up animate-delay-300' : ''}`}>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className={`border-gold/20 bg-background/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 hover:border-gold/30 group animate-on-scroll ${sectionInView ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: sectionInView ? `${0.4 + index * 0.1}s` : '0s' }}
              >
                <CardContent className="p-6 sm:p-8 space-y-4">
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
    </section>
  );
}

