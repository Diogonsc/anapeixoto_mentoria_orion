import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Users, Target, MessageSquare, FileText, TrendingUp, Brain, BarChart3 } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { LoadingButton } from "@/components/LoadingButton";

export default function MentoriaCarreira() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: contentRef, isInView: contentInView } = useInView({ threshold: 0.1 });

  const handleWhatsApp = () => {
    // Substituir com o link real do WhatsApp
    window.open("https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20conhecer%20o%20Método%20ASCENSO", "_blank");
  };

  const benefits = [
    "Clareza sobre sua identidade como líder",
    "Segurança para direcionar pessoas e processos",
    "Capacidade de delegar sem culpa",
    "Comunicação firme, clara e objetiva",
    "Gestão emocional para lidar com pressão",
    "Autoridade natural (sem precisar \"forçar postura\")",
    "Consistência para ser visto como líder pronto para crescer"
  ];

  const modules = [
    {
      icon: Target,
      title: "Construção da identidade de liderança"
    },
    {
      icon: MessageSquare,
      title: "Comunicação assertiva"
    },
    {
      icon: Users,
      title: "Delegação e acompanhamento"
    },
    {
      icon: Brain,
      title: "Gestão de conflitos"
    },
    {
      icon: BarChart3,
      title: "Organização mental e priorização"
    },
    {
      icon: TrendingUp,
      title: "Maturidade emocional na liderança"
    },
    {
      icon: FileText,
      title: "Gestão de demandas"
    },
    {
      icon: Clock,
      title: "Como liderar sem se sobrecarregar"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 py-20 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--gold)/0.1)_0%,transparent_50%)]"></div>
        
        <div ref={heroRef as React.LegacyRef<HTMLDivElement>} className="relative max-w-[95vw] xl:max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-center">
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-sm font-medium text-secondary animate-on-scroll ${heroInView ? 'animate-fade-in' : ''}`}>
              <Target className="w-4 h-4" />
              <span>Método ASCENSO</span>
            </div>

            <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-primary leading-tight tracking-tight animate-on-scroll ${heroInView ? 'animate-fade-in-up animate-delay-100' : ''}`}>
              MÉTODO ASCENSO
            </h1>

            <p className={`text-xl sm:text-2xl lg:text-3xl font-poppins text-primary/90 font-medium max-w-4xl mx-auto animate-on-scroll ${heroInView ? 'animate-fade-in-up animate-delay-200' : ''}`}>
              A jornada de elevação para novos líderes
            </p>

            <p className={`text-lg sm:text-xl font-poppins text-primary/80 max-w-3xl mx-auto animate-on-scroll ${heroInView ? 'animate-fade-in-up animate-delay-300' : ''}`}>
              Da operação para a liderança com confiança, clareza e presença.
            </p>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 py-20 sm:py-24 lg:py-32">
        <div ref={contentRef as React.LegacyRef<HTMLDivElement>} className="relative max-w-[95vw] xl:max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className={`text-center mb-12 lg:mb-16 animate-on-scroll ${contentInView ? 'animate-fade-in-up' : ''}`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
                Para quem é o Método ASCENSO
              </h2>
              <p className="text-lg sm:text-xl font-poppins text-primary/80 leading-relaxed max-w-4xl mx-auto">
                O Método ASCENSO foi criado para profissionais que já dominam sua área técnica, entregam resultado e estão prontos para dar o próximo passo: assumir uma posição de liderança.
              </p>
            </div>

            <Card className={`border-secondary/20 bg-background/80 backdrop-blur-sm shadow-elegant animate-on-scroll ${contentInView ? 'animate-fade-in-up animate-delay-200' : ''}`}>
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
                    Indicado para:
                  </h3>
                  <ul className="space-y-3 text-lg font-poppins text-primary/80">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                      <span>Analistas Sênior</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                      <span>Coordenadores iniciantes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                      <span>Supervisores</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                      <span>Profissionais de alto desempenho buscando sua primeira liderança formal</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className={`border-gold/30 bg-gradient-to-br from-background to-secondary/10 backdrop-blur-sm shadow-elegant animate-on-scroll ${contentInView ? 'animate-fade-in-up animate-delay-300' : ''}`}>
              <CardContent className="p-8 lg:p-12">
                <p className="text-lg sm:text-xl font-poppins text-primary/90 leading-relaxed font-medium">
                  <span className="font-bold text-primary">A promessa do método:</span> Te preparar para assumir a liderança com segurança, clareza e maturidade — desenvolvendo as competências essenciais que o mercado exige hoje e construindo uma presença profissional respeitada e percebida.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* A transformação */}
      <section className="relative w-full overflow-hidden bg-background-secondary py-20 sm:py-24 lg:py-32">
        <div className="relative max-w-[95vw] xl:max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className={`text-center mb-12 lg:mb-16 animate-on-scroll ${contentInView ? 'animate-fade-in-up' : ''}`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
                A transformação que o programa entrega
              </h2>
              <p className="text-lg sm:text-xl font-poppins text-primary/80 leading-relaxed max-w-4xl mx-auto">
                Durante 6 meses, você vai desenvolver a estrutura emocional, estratégica e comportamental necessária para sair da execução e assumir, de fato, o papel de liderança.
              </p>
            </div>

            <div className={`space-y-8 animate-on-scroll ${contentInView ? 'animate-fade-in-up animate-delay-200' : ''}`}>
              <h3 className="text-2xl font-playfair font-bold text-primary text-center">
                Ao final do programa, você terá:
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
                  <p className="text-xl sm:text-2xl font-poppins text-primary font-bold leading-relaxed">
                      De profissional técnico para líder confiável, estruturado e preparado para assumir novos desafios.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* O que está incluso */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 py-20 sm:py-24 lg:py-32">
        <div className="relative max-w-[95vw] xl:max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className={`text-center mb-12 lg:mb-16 animate-on-scroll ${contentInView ? 'animate-fade-in-up' : ''}`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
                O que está incluso (entregáveis)
              </h2>
              <p className="text-lg sm:text-xl font-poppins text-primary/80 leading-relaxed max-w-4xl mx-auto">
                Um programa estruturado em 4 pilares principais:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Pilar 1 */}
              <Card className="border-secondary/20 bg-background/80 backdrop-blur-sm shadow-elegant hover:border-gold/30 transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-primary">1) Diagnóstico Inicial – Mapeamento de Perfil</h3>
                  <p className="text-base font-poppins text-primary/80 leading-relaxed">
                    Levantamos sua forma de pensar, agir, decidir e liderar.
                  </p>
                  <p className="text-base font-poppins text-primary/70 italic">
                    O objetivo: saber exatamente onde você está e onde precisa chegar.
                  </p>
                </CardContent>
              </Card>

              {/* Pilar 2 */}
              <Card className="border-secondary/20 bg-background/80 backdrop-blur-sm shadow-elegant hover:border-gold/30 transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-primary">2) Trilhas de Desenvolvimento</h3>
                  <p className="text-base font-poppins text-primary/80 leading-relaxed mb-4">
                    8 módulos de alta aplicabilidade:
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {modules.map((module, index) => {
                      const Icon = module.icon;
                      return (
                        <div key={index} className="flex items-center gap-2 text-sm font-poppins text-primary/70">
                          <Icon className="w-4 h-4 text-gold" />
                          <span>{module.title}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Pilar 3 */}
              <Card className="border-secondary/20 bg-background/80 backdrop-blur-sm shadow-elegant hover:border-gold/30 transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-primary">3) Plano de Ação Personalizado</h3>
                  <p className="text-base font-poppins text-primary/80 leading-relaxed">
                    Você sai com um roteiro claro para colocar em prática no dia seguinte.
                  </p>
                </CardContent>
              </Card>

              {/* Pilar 4 */}
              <Card className="border-secondary/20 bg-background/80 backdrop-blur-sm shadow-elegant hover:border-gold/30 transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-primary">4) Acompanhamento de 6 meses</h3>
                  <p className="text-base font-poppins text-primary/80 leading-relaxed">
                    Suporte contínuo para garantir evolução, consistência e alinhamento com novas responsabilidades.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Formato do programa */}
      <section className="relative w-full overflow-hidden bg-background-secondary py-20 sm:py-24 lg:py-32">
        <div className="relative max-w-[95vw] xl:max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className={`text-center mb-12 lg:mb-16 animate-on-scroll ${contentInView ? 'animate-fade-in-up' : ''}`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
                Formato do programa
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                "Sessões individuais online (1h30)",
                "Atividades aplicadas ao seu dia a dia",
                "Acompanhamento no WhatsApp para dúvidas importantes",
                "Relatórios intermediários e indicadores de evolução",
                "Materiais executivos + exercícios práticos"
              ].map((item, index) => (
                <Card key={index} className="border-secondary/20 bg-background/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <p className="text-base font-poppins text-primary/80">{item}</p>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
              Pronto para assumir sua liderança?
            </h2>
            <p className="text-lg sm:text-xl font-poppins text-primary/80 leading-relaxed">
              O primeiro passo é uma conversa estratégica (20 min).
            </p>
            <div className="pt-4">
              <LoadingButton
                onClick={handleWhatsApp}
                className="text-lg font-inter font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant transition-all duration-500 hover:shadow-xl hover:scale-105"
              >
                  Agendar conversa
              </LoadingButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
