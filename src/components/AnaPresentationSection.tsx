import { Card, CardContent } from "@/components/ui/card";
import anaPeixotoHero from "@/assets/imagem1.png";
import { useInView } from "@/hooks/useInView";
import { Sparkles } from "lucide-react";

export function AnaPresentationSection() {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="apresentacao-completa"
      className="relative w-full overflow-hidden bg-background-secondary py-20 sm:py-24 lg:py-32"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--gold)/0.05)_0%,transparent_50%)]"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-3 h-3 bg-gold/20 rounded-full animate-pulse z-10"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-gold/15 rounded-full animate-pulse z-10" style={{ animationDelay: '1s' }}></div>

      <div ref={sectionRef as React.LegacyRef<HTMLDivElement>} className="relative max-w-[95vw] xl:max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <Card className={`border-secondary/20 bg-background/80 backdrop-blur-sm shadow-elegant overflow-hidden animate-on-scroll ${sectionInView ? 'animate-fade-in-up' : ''}`}>
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 p-8 lg:p-12">
              {/* Image Section */}
              <div className="relative w-full lg:w-1/3 h-96 lg:h-[auto] flex-shrink-0 rounded-xl overflow-hidden shadow-elegant">
                <img
                  src={anaPeixotoHero}
                  alt="Ana Peixoto - Educadora Executiva e Mentora de Carreira"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="flex-1 space-y-6">
                {/* Title */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-sm font-medium text-secondary w-fit">
                    <Sparkles className="w-4 h-4" />
                    <span>Educadora Executiva e Mentora de Carreira</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary">
                    ANA PEIXOTO
                  </h2>
                </div>

                {/* Content */}
                <div className="space-y-4 text-lg font-poppins text-primary/80 leading-relaxed">
                  <p>
                    Educadora Executiva e Mentora de Carreira, com sólida atuação no desenvolvimento de líderes, gestores e executivos em organizações de diferentes portes. Nos últimos anos, impactou a performance de profissionais que hoje ocupam posições estratégicas — de supervisão a gerência e diretoria — com evolução comprovada em maturidade emocional, clareza estratégica e resultados consistentes.
                  </p>

                  <p>
                    Apaixonada por comportamento humano, Ana dedica sua trajetória a ajudar profissionais a acessarem sua identidade de liderança, fortalecerem sua autonomia emocional e elevarem sua forma de pensar, decidir e se posicionar no mercado. Seu trabalho une profundidade, inteligência estratégica e humanidade — pilares que formam líderes mais conscientes, preparados e capazes de transformar pessoas e culturas.
                  </p>

                  <p>
                    Fundadora da sua metodologia própria para desenvolvimento executivo, estruturada em dois programas complementares — <span className="font-bold">Método ASCENSO</span> (para líderes em desenvolvimento) e <span className="font-bold">Método Executivo ALFA</span> (para gerentes, diretores e CEOs) — ajuda profissionais a construírem carreiras sólidas, saudáveis, estratégicas e com propósito.
                  </p>

                  <p>
                    Também é criadora do <span className="font-bold">ORION</span>, o primeiro agente inteligente voltado exclusivamente para líderes e gestores, projetado para apoiar decisões críticas, conversas difíceis e desafios de relacionamento dentro das organizações.
                  </p>

                  <p>
                    Com uma visão profundamente humana e estratégica, Ana acredita que toda liderança só se sustenta quando começa de dentro para fora — e que o verdadeiro sucesso profissional nasce do equilíbrio entre consciência, preparo, propósito e impacto.
                  </p>

                  <p className="font-bold text-primary text-xl pt-4 border-t border-gold/20">
                    Seu propósito é claro: formar líderes que crescem com maturidade — e elevam tudo o que tocam.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

