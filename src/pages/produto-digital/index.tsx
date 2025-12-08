import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Brain, MessageSquare, Shield, BarChart3, TrendingUp, Zap, Sparkles } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { LoadingButton } from "@/components/LoadingButton";

export default function ProdutoDigital() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: contentRef, isInView: contentInView } = useInView({ threshold: 0.1 });

  const handleWhatsApp = () => {
    // Substituir com o link real do WhatsApp
    window.open("https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20ter%20o%20ORION%20comigo", "_blank");
  };

  const benefits = [
    "Clareza para decidir (com análise de riscos, prós e contras)",
    "Comunicação assertiva e elegante",
    "Melhor gestão de conflitos",
    "Postura emocional madura",
    "Foco e priorização em momentos críticos",
    "Capacidade de engajar e direcionar o time"
  ];

  const targetAudience = [
    "Coordenadores",
    "Supervisores",
    "Gerentes",
    "Heads",
    "Diretores",
    "Executivos e CEOs"
  ];

  const features = [
    {
      title: "Conversas difíceis",
      icon: MessageSquare,
      items: [
        "Orientações passo a passo",
        "Scripts prontos",
        "Estruturas de comunicação"
      ]
    },
    {
      title: "Conflitos internos",
      icon: Shield,
      items: [
        "Cenários e alternativas possíveis",
        "Linguagem neutra e técnica",
        "Recomendações de postura"
      ]
    },
    {
      title: "Tomada de decisão",
      icon: Brain,
      items: [
        "Análise racional",
        "Impactos possíveis",
        "Riscos e consequências"
      ]
    },
    {
      title: "Gestão emocional",
      icon: TrendingUp,
      items: [
        "Ajuda a interpretar emoções",
        "Dá caminhos de autocontrole",
        "Sugere posturas equilibradas"
      ]
    },
    {
      title: "Feedbacks e alinhamentos",
      icon: BarChart3,
      items: [
        "Formatador de feedbacks",
        "Frases-chave",
        "Modelos de devolutivas"
      ]
    }
  ];

  const differentials = [
    "Linguagem executiva",
    "Abordagem humana, não mecanizada",
    "Consciência emocional",
    "Orientação estratégica personalizada",
    "Focado na prática real de liderança",
    "Disponível 24/7",
    "Integrado ao seu contexto"
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 py-20 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--gold)/0.1)_0%,transparent_50%)]"></div>
        
        <div ref={heroRef as React.LegacyRef<HTMLDivElement>} className="relative max-w-[95vw] xl:max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-center">
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-sm font-medium text-secondary animate-on-scroll ${heroInView ? 'animate-fade-in' : ''}`}>
              <Sparkles className="w-4 h-4" />
              <span>ORION - Agente Inteligente</span>
            </div>

            <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-primary leading-tight tracking-tight animate-on-scroll ${heroInView ? 'animate-fade-in-up animate-delay-100' : ''}`}>
              ORION
            </h1>

            <p className={`text-xl sm:text-2xl lg:text-3xl font-poppins text-primary/90 font-medium max-w-4xl mx-auto animate-on-scroll ${heroInView ? 'animate-fade-in-up animate-delay-200' : ''}`}>
              Seu agente inteligente para liderança estratégica
            </p>

            <p className={`text-lg sm:text-xl font-poppins text-primary/80 max-w-3xl mx-auto animate-on-scroll ${heroInView ? 'animate-fade-in-up animate-delay-300' : ''}`}>
              O aliado estratégico da liderança moderna.
            </p>
          </div>
        </div>
      </section>

      {/* O que é o ORION */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 py-20 sm:py-24 lg:py-32">
        <div ref={contentRef as React.LegacyRef<HTMLDivElement>} className="relative max-w-[95vw] xl:max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className={`text-center mb-12 lg:mb-16 animate-on-scroll ${contentInView ? 'animate-fade-in-up' : ''}`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
                O que é o ORION
              </h2>
              <p className="text-lg sm:text-xl font-poppins text-primary/80 leading-relaxed max-w-4xl mx-auto">
                ORION é um agente de IA criado para apoiar líderes, gestores e executivos em momentos de alta complexidade. Ele atua como um mentor digital, oferecendo clareza, estratégia e linguagem precisa para lidar com pessoas, resolver conflitos e tomar decisões com segurança.
              </p>
              <p className="text-lg sm:text-xl font-poppins text-primary/90 font-medium max-w-4xl mx-auto mt-6">
                Ele acessa a tecnologia mas fala com humanidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="relative w-full overflow-hidden bg-background-secondary py-20 sm:py-24 lg:py-32">
        <div className="relative max-w-[95vw] xl:max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className={`text-center mb-12 lg:mb-16 animate-on-scroll ${contentInView ? 'animate-fade-in-up' : ''}`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
                Para quem é
              </h2>
              <p className="text-lg sm:text-xl font-poppins text-primary/80 leading-relaxed max-w-4xl mx-auto">
                ORION foi desenvolvido para profissionais que precisam tomar decisões rápidas, comunicar com precisão e manter equilíbrio emocional, mesmo sob pressão.
              </p>
            </div>

            <Card className={`border-secondary/20 bg-background/80 backdrop-blur-sm shadow-elegant animate-on-scroll ${contentInView ? 'animate-fade-in-up animate-delay-200' : ''}`}>
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
                    Ideal para:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {targetAudience.map((audience, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0" />
                        <span className="text-lg font-poppins text-primary/80">{audience}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={`border-gold/30 bg-gradient-to-br from-background to-secondary/10 backdrop-blur-sm shadow-elegant animate-on-scroll ${contentInView ? 'animate-fade-in-up animate-delay-300' : ''}`}>
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-playfair font-bold text-primary">
                    A promessa do ORION
                  </h3>
                  <p className="text-lg sm:text-xl font-poppins text-primary/90 leading-relaxed font-medium">
                    Ajudar você a liderar com mais inteligência estratégica, postura emocional e qualidade de comunicação sem depender de força, improviso ou desgaste.
                  </p>
                  <p className="text-xl sm:text-2xl font-poppins text-primary font-bold pt-4 border-t border-gold/20">
                    ➡️ Transformar sua liderança em decisões claras e conversas maduras, todos os dias.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* A transformação */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 py-20 sm:py-24 lg:py-32">
        <div className="relative max-w-[95vw] xl:max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className={`text-center mb-12 lg:mb-16 animate-on-scroll ${contentInView ? 'animate-fade-in-up' : ''}`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
                A transformação que ORION entrega
              </h2>
            </div>

            <div className={`space-y-8 animate-on-scroll ${contentInView ? 'animate-fade-in-up animate-delay-200' : ''}`}>
              <h3 className="text-2xl font-playfair font-bold text-primary text-center">
                Com o apoio do ORION, você desenvolve:
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {benefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="border-secondary/20 bg-background/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 hover:border-gold/30"
                  >
                    <CardContent className="p-6 flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                      <p className="text-lg font-poppins text-primary/80 leading-relaxed">{benefit}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className={`border-gold/30 bg-gradient-to-br from-background to-secondary/10 backdrop-blur-sm shadow-elegant max-w-4xl mx-auto mt-12 animate-on-scroll ${contentInView ? 'animate-fade-in-up animate-delay-400' : ''}`}>
                <CardContent className="p-8 lg:p-12 text-center">
                  <p className="text-xl sm:text-2xl font-poppins text-primary leading-relaxed">
                    Você passa a liderar com mais consciência, calma e precisão — mesmo em cenários complexos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* O que o ORION faz na prática */}
      <section className="relative w-full overflow-hidden bg-background-secondary py-20 sm:py-24 lg:py-32">
        <div className="relative max-w-[95vw] xl:max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className={`text-center mb-12 lg:mb-16 animate-on-scroll ${contentInView ? 'animate-fade-in-up' : ''}`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
                O que o ORION faz na prática
              </h2>
              <p className="text-lg sm:text-xl font-poppins text-primary/80 leading-relaxed max-w-4xl mx-auto">
                ORION te ajuda a lidar com situações reais de liderança, como:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-secondary/20 bg-background/80 backdrop-blur-sm shadow-elegant hover:border-gold/30 transition-all duration-300">
                    <CardContent className="p-8 space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-gold" />
                      </div>
                      <h3 className="text-xl font-playfair font-bold text-primary">
                        ✔ {feature.title}
                      </h3>
                      <div className="space-y-2">
                        {feature.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start gap-2 text-sm font-poppins text-primary/70">
                            <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 py-20 sm:py-24 lg:py-32">
        <div className="relative max-w-[95vw] xl:max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className={`text-center mb-12 lg:mb-16 animate-on-scroll ${contentInView ? 'animate-fade-in-up' : ''}`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
                Como funciona (pelo WhatsApp)
              </h2>
              <p className="text-lg sm:text-xl font-poppins text-primary/80 leading-relaxed max-w-4xl mx-auto">
                ORION conversa com você como um assistente inteligente e profissional:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Você descreve o cenário",
                  description: "em até 2 linhas"
                },
                {
                  step: "2",
                  title: "ORION analisa",
                  description: "e devolve clareza, estratégia e caminhos"
                },
                {
                  step: "3",
                  title: "Fornece scripts prontos",
                  description: "abordagens, alternativas e recomendações comportamentais"
                },
                {
                  step: "4",
                  title: "Você aplica",
                  description: "imediatamente no seu time"
                }
              ].map((item, index) => (
                <Card key={index} className="border-secondary/20 bg-background/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
                      <span className="text-2xl font-playfair font-bold text-gold">{item.step}</span>
                    </div>
                    <h3 className="text-lg font-poppins font-semibold text-primary">{item.title}</h3>
                    <p className="text-sm font-poppins text-primary/70">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className={`border-gold/30 bg-gradient-to-br from-background to-secondary/10 backdrop-blur-sm shadow-elegant max-w-4xl mx-auto mt-12 animate-on-scroll ${contentInView ? 'animate-fade-in-up animate-delay-400' : ''}`}>
              <CardContent className="p-8 lg:p-12 text-center">
                <p className="text-2xl sm:text-3xl font-playfair font-bold text-primary">
                  Simples. Rápido. Profissional.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="relative w-full overflow-hidden bg-background-secondary py-20 sm:py-24 lg:py-32">
        <div className="relative max-w-[95vw] xl:max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className={`text-center mb-12 lg:mb-16 animate-on-scroll ${contentInView ? 'animate-fade-in-up' : ''}`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
                Diferenciais do ORION
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {differentials.map((differential, index) => (
                <Card key={index} className="border-secondary/20 bg-background/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6 flex items-center gap-3">
                    <Zap className="w-5 h-5 text-gold flex-shrink-0" />
                    <p className="text-base font-poppins text-primary/80">{differential}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 py-20 sm:py-24 lg:py-32">
        <div className="relative max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <p className="text-xl sm:text-2xl font-poppins text-primary/90 leading-relaxed font-medium italic">
              Sua liderança não precisa de mais peso precisa de mais clareza.
            </p>
            <div className="pt-4">
              <LoadingButton
                onClick={handleWhatsApp}
                className="text-lg font-inter font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant transition-all duration-500 hover:shadow-xl hover:scale-105"
              >
                ➡️ Quero ter o ORION comigo
              </LoadingButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
