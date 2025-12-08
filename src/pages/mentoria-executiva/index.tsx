import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Users, Target, MessageSquare, FileText, TrendingUp, Brain, BarChart3, Shield, Crown, Award } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { LoadingButton } from "@/components/LoadingButton";

export default function MentoriaExecutiva() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: contentRef, isInView: contentInView } = useInView({ threshold: 0.1 });

  const handleWhatsApp = () => {
    // Substituir com o link real do WhatsApp
    window.open("https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20conhecer%20o%20Método%20Executivo%20ALFA", "_blank");
  };

  const benefits = [
    "Domínio emocional para decisões complexas",
    "Clareza estratégica para direcionar times ao futuro",
    "Comunicação de alto nível (forte, elegante e intencional)",
    "Capacidade de formar sucessores e escalar liderança",
    "Governança e visão sistêmica para orientar crescimento",
    "Influência ampliada e presença executiva consistente",
    "Alinhamento profundo entre propósito, visão e entrega"
  ];

  const targetAudience = [
    "Gerentes",
    "Heads",
    "Diretores",
    "Executivos",
    "CEO e fundadores"
  ];

  const sessionTopics = [
    "tomada de decisão estratégica",
    "gestão de crises",
    "cultura e propósito",
    "influência e posicionamento",
    "alinhamento com metas corporativas"
  ];

  const playbookTools = [
    "condução de reuniões estratégicas",
    "gestão de times de alta performance",
    "desenvolvimento de sucessores",
    "alinhamento de cultura"
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 py-20 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--gold)/0.1)_0%,transparent_50%)]"></div>
        
        <div ref={heroRef as React.LegacyRef<HTMLDivElement>} className="relative max-w-[95vw] xl:max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-center">
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-sm font-medium text-secondary animate-on-scroll ${heroInView ? 'animate-fade-in' : ''}`}>
              <Crown className="w-4 h-4" />
              <span>Método Executivo ALFA</span>
            </div>

            <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-primary leading-tight tracking-tight animate-on-scroll ${heroInView ? 'animate-fade-in-up animate-delay-100' : ''}`}>
              MÉTODO EXECUTIVO ALFA
            </h1>

            <p className={`text-xl sm:text-2xl lg:text-3xl font-poppins text-primary/90 font-medium max-w-4xl mx-auto animate-on-scroll ${heroInView ? 'animate-fade-in-up animate-delay-200' : ''}`}>
              A mentoria de alta performance para líderes seniores
            </p>

            <p className={`text-lg sm:text-xl font-poppins text-primary/80 max-w-3xl mx-auto animate-on-scroll ${heroInView ? 'animate-fade-in-up animate-delay-300' : ''}`}>
              Da liderança sobrecarregada para a liderança estratégica, consciente e de alto impacto.
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
                Para quem é o Método Executivo ALFA
              </h2>
              <p className="text-lg sm:text-xl font-poppins text-primary/80 leading-relaxed max-w-4xl mx-auto">
                Desenvolvido para líderes experientes que já ocupam cargos de responsabilidade e querem evoluir sua forma de pensar, decidir e influenciar.
              </p>
            </div>

            <Card className={`border-secondary/20 bg-background/80 backdrop-blur-sm shadow-elegant animate-on-scroll ${contentInView ? 'animate-fade-in-up animate-delay-200' : ''}`}>
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
                    Indicado para:
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
                <p className="text-lg sm:text-xl font-poppins text-primary/90 leading-relaxed font-medium">
                  <span className="font-bold text-primary">A promessa do método:</span> Elevar sua liderança ao mais alto nível ampliando visão estratégica, presença executiva, maturidade emocional e capacidade de influenciar times e organizações.
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
                A transformação que o ALFA entrega
              </h2>
              <p className="text-lg sm:text-xl font-poppins text-primary/80 leading-relaxed max-w-4xl mx-auto">
                Durante 12 meses, você irá expandir sua forma de liderar, integrar estratégia com propósito e desenvolver sua capacidade de gerar impacto real em pessoas, resultados e cultura.
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
                    ➡️ De líder experiente para executivo estratégico, consciente e com impacto sistêmico.
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* 1) Diagnóstico Executivo Profundo */}
              <Card className="border-secondary/20 bg-background/80 backdrop-blur-sm shadow-elegant hover:border-gold/30 transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-primary">1) Diagnóstico Executivo Profundo</h3>
                  <p className="text-base font-poppins text-primary/80 leading-relaxed">
                    Avaliação 360º do seu comportamento de liderança, maturidade emocional e estilo de gestão.
                  </p>
                </CardContent>
              </Card>

              {/* 2) Sessões Executivas Individuais */}
              <Card className="border-secondary/20 bg-background/80 backdrop-blur-sm shadow-elegant hover:border-gold/30 transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-primary">2) Sessões Executivas Individuais (1:1)</h3>
                  <p className="text-base font-poppins text-primary/80 leading-relaxed mb-4">
                    Encontros de 90 minutos focados em:
                  </p>
                  <div className="space-y-2">
                    {sessionTopics.map((topic, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm font-poppins text-primary/70">
                        <CheckCircle2 className="w-4 h-4 text-gold" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 3) Playbooks e Materiais de Governança */}
              <Card className="border-secondary/20 bg-background/80 backdrop-blur-sm shadow-elegant hover:border-gold/30 transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-primary">3) Playbooks e Materiais de Governança</h3>
                  <p className="text-base font-poppins text-primary/80 leading-relaxed mb-4">
                    Ferramentas exclusivas para:
                  </p>
                  <div className="space-y-2">
                    {playbookTools.map((tool, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm font-poppins text-primary/70">
                        <CheckCircle2 className="w-4 h-4 text-gold" />
                        <span>{tool}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 4) Relatório Executivo Final */}
              <Card className="border-secondary/20 bg-background/80 backdrop-blur-sm shadow-elegant hover:border-gold/30 transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-primary">4) Relatório Executivo Final</h3>
                  <p className="text-base font-poppins text-primary/80 leading-relaxed">
                    Documento estratégico com evolução, insights, riscos, competências e próximos passos.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 5) Acompanhamento */}
            <Card className={`border-gold/30 bg-gradient-to-br from-background to-secondary/10 backdrop-blur-sm shadow-elegant max-w-3xl mx-auto animate-on-scroll ${contentInView ? 'animate-fade-in-up animate-delay-400' : ''}`}>
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-bold text-primary mb-3">5) Acompanhamento de 12 meses</h3>
                    <p className="text-base font-poppins text-primary/80 leading-relaxed">
                      Alinhamento contínuo, suporte estratégico e acompanhamento personalizado.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                "Sessões 1:1 quinzenais",
                "Análises mensais de decisões estratégicas",
                "Acompanhamento via WhatsApp (linha direta executiva)",
                "Relatórios periódicos",
                "Materiais de aplicação imediata",
                "Orientação para temas sensíveis: conflitos, pressão, metas, board"
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
            <p className="text-xl sm:text-2xl font-poppins text-primary/90 leading-relaxed font-medium italic">
              A liderança executiva que você deseja já existe — só precisa ser expandida.
            </p>
            <div className="pt-4">
              <LoadingButton
                onClick={handleWhatsApp}
                className="text-lg font-inter font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant transition-all duration-500 hover:shadow-xl hover:scale-105"
              >
                ➡️ Quero conhecer o ALFA
              </LoadingButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
