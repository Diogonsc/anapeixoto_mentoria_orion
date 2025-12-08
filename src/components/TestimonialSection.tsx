import anaKarolina from "@/assets/ana-karolina.jpg";
import alefSouza from "@/assets/alef-souza.jpg";
import larissaMesquita from "@/assets/larissa-mesquita.jpg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Quote } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export function TestimonialSection() {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.1 });
  const { ref: faqRef, isInView: faqInView } = useInView({ threshold: 0.1 });
  const testimonials = [
    {
      id: 1,
      name: "Ana Karolina",
      career: "Gerente de Estética",
      quote:
        "Me formei em Podologia e estagiei por dois anos em uma clínica estética. Mas, sem conhecer bem o mercado e sem clareza sobre o caminho que queria seguir, me sentia perdida profissionalmente. Foi quando te procurei — e viver essa mentoria foi transformador. Descobri meu lugar, reconheci meu potencial e hoje atuo como gerente de estética em uma clínica renomada.",
      image: anaKarolina,
    },
    {
      id: 2,
      name: "Alef Souza",
      career: "Supervisor de Logística",
      quote:
        "Atuava como Encarregado e tinha vontade em me tornar um supervisor e saber atuar com uma gestão eficiente e você me ajudou em cada passo e a conquistar um lugar que no momento era importante para mim. Obrigado.",
      image: alefSouza,
    },
    {
      id: 3,
      name: "Larissa Mesquita",
      career: "Analista Financeiro",
      quote:
        "Quando conheci a Ana, eu era assistente financeiro e viajava 52 km por dia até o trabalho. Queria crescer na carreira e conquistar uma vaga de analista com home office. Através da mentoria, reconheci minhas habilidades, reposicionei meu perfil e hoje atuo 100% remoto, em um cargo alinhado à minha experiência e estilo de vida.",
      image: larissaMesquita,
    },
    {
      id: 4,
      name: "Depoimento 4",
      career: "Cargo 4",
      quote:
        "Depoimento curto e impactante sobre a transformação proporcionada pela mentoria da Ana Peixoto.",
      image: anaKarolina,
    },
    {
      id: 5,
      name: "Depoimento 5",
      career: "Cargo 5",
      quote:
        "Depoimento curto e impactante sobre a transformação proporcionada pela mentoria da Ana Peixoto.",
      image: larissaMesquita,
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 py-20 sm:py-24 lg:py-32"
    >
      <div ref={sectionRef as React.LegacyRef<HTMLDivElement>} className="relative max-w-[95vw] xl:max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-12 lg:mb-16 animate-on-scroll ${sectionInView ? 'animate-fade-in-up' : ''}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-4">
            DEPOIMENTOS
          </h2>
        </div>

        {/* Carousel */}
        <div className={`relative max-w-[95vw] xl:max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16 animate-on-scroll ${sectionInView ? 'animate-fade-in-up animate-delay-200' : ''}`}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-full border-gold/20 shadow-elegant hover:shadow-2xl transition-all duration-500">
                    <CardContent className="flex flex-col p-6 sm:p-8 h-full">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <Quote className="w-8 h-8 text-gold opacity-50" />
                      </div>

                      {/* Quote Text */}
                      <p className="text-foreground text-base sm:text-lg leading-relaxed mb-6 flex-grow">
                        "{testimonial.quote}"
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-4 pt-4 border-t border-gold/10">
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-gold/20">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="font-fraunces text-primary text-base sm:text-lg">
                            {testimonial.name}
                          </p>
                          <p className="text-muted-foreground text-sm sm:text-base">
                            {testimonial.career}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* FAQ Section */}
        <div ref={faqRef as React.LegacyRef<HTMLDivElement>} className="mt-20 lg:mt-32 max-w-4xl mx-auto">
          <div className={`text-center mb-12 lg:mb-16 animate-on-scroll ${faqInView ? 'animate-fade-in-up' : ''}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-4">
              Reconecte-se com sua essência profissional
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Encontre aqui respostas claras para suas dúvidas mais comuns,
              facilitando seu caminho para o sucesso.
            </p>
          </div>

          <Accordion type="single" collapsible className={`w-full animate-on-scroll ${faqInView ? 'animate-fade-in-up animate-delay-200' : ''}`}>
            <div className="space-y-4">
              <AccordionItem
                value="item-1"
                className="border-gold/20 rounded-lg px-6 bg-background/50 backdrop-blur-sm hover:border-gold/30 transition-all duration-300 border"
              >
              <AccordionTrigger className="text-left font-poppins font-semibold text-primary hover:no-underline py-6">
                Como a mentoria pode ajudar na minha carreira?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-poppins leading-relaxed">
                Ofereço estratégias personalizadas para fortalecer sua identidade
                profissional e alcançar seus objetivos.
              </AccordionContent>
            </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border-gold/20 rounded-lg px-6 bg-background/50 backdrop-blur-sm hover:border-gold/30 transition-all duration-300 border"
              >
              <AccordionTrigger className="text-left font-poppins font-semibold text-primary hover:no-underline py-6">
                Quais são os diferenciais do método Ana Peixoto?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-poppins leading-relaxed">
                Utilizo uma abordagem humanizada que respeita sua individualidade
                e potencial.
              </AccordionContent>
            </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border-gold/20 rounded-lg px-6 bg-background/50 backdrop-blur-sm hover:border-gold/30 transition-all duration-300 border"
              >
              <AccordionTrigger className="text-left font-poppins font-semibold text-primary hover:no-underline py-6">
                Qual o perfil ideal para participar da mentoria?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-poppins leading-relaxed">
                Profissionais que buscam crescimento autêntico e alinhamento com
                seus valores.
              </AccordionContent>
            </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border-gold/20 rounded-lg px-6 bg-background/50 backdrop-blur-sm hover:border-gold/30 transition-all duration-300 border"
              >
              <AccordionTrigger className="text-left font-poppins font-semibold text-primary hover:no-underline py-6">
                Como funciona o processo de mentoria?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-poppins leading-relaxed">
                A mentoria acontece em sessões personalizadas, focadas nas suas
                necessidades.
              </AccordionContent>
              </AccordionItem>
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
