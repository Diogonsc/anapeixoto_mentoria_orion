import { Card, CardContent } from "@/components/ui/card";
import { 
  Youtube, 
  Linkedin, 
  Instagram, 
  Phone,
  Sparkles
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

export function SocialMediaSection() {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.1 });

  const socialLinks = [
    {
      icon: Youtube,
      href: "https://youtube.com",
      label: "YouTube",
      ariaLabel: "Inscreva-se no YouTube"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      ariaLabel: "Conecte-se no LinkedIn"
    },
    {
      icon: Instagram,
      href: "https://instagram.com",
      label: "Instagram",
      ariaLabel: "Siga-nos no Instagram"
    },
    {
      icon: Phone,
      href: "https://wa.me/5511999999999",
      label: "WhatsApp",
      ariaLabel: "Entre em contato via WhatsApp"
    },
  ];

  return (
    <section
      id="redes-sociais"
      className="relative w-full overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 py-20 sm:py-24 lg:py-32"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--gold)/0.05)_0%,transparent_50%)]"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-3 h-3 bg-gold/20 rounded-full animate-pulse z-10"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-gold/15 rounded-full animate-pulse z-10" style={{ animationDelay: '1s' }}></div>

      <div ref={sectionRef as React.LegacyRef<HTMLDivElement>} className="relative max-w-[95vw] xl:max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <Card className={`border-secondary/20 bg-background/80 backdrop-blur-sm shadow-elegant overflow-hidden animate-on-scroll ${sectionInView ? 'animate-fade-in-up' : ''}`}>
          <CardContent className="p-8 lg:p-12">
            <div className="flex flex-col items-center space-y-8">
              {/* Title Section */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-sm font-medium text-secondary w-fit mx-auto">
                  <Sparkles className="w-4 h-4" />
                  <span>Siga-nos nas redes sociais</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary">
                  Conecte-se comigo
                </h2>
                <p className="text-lg font-poppins text-primary/80 leading-relaxed max-w-2xl">
                  Acompanhe conteúdos exclusivos sobre liderança, desenvolvimento executivo e estratégias de carreira.
                </p>
              </div>

              {/* Social Links Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-2xl">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                      className={`group relative flex flex-col items-center justify-center p-6 sm:p-8 rounded-xl bg-gradient-to-br from-gold/15 to-gold/5 border border-gold/20 hover:border-gold/40 hover:from-gold/30 hover:to-gold/15 hover:scale-105 hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 overflow-hidden animate-on-scroll ${sectionInView ? 'animate-fade-in-up' : ''}`}
                      style={{ animationDelay: sectionInView ? `${0.2 + index * 0.1}s` : '0s' }}
                    >
                      {/* Background gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Icon */}
                      <div className="relative z-10 mb-3">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-background/80 flex items-center justify-center border border-gold/20 group-hover:border-gold/40 group-hover:scale-110 transition-all duration-300">
                          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-gold group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                        </div>
                      </div>
                      
                      {/* Label */}
                      <span className="relative z-10 text-sm sm:text-base font-poppins font-semibold text-primary group-hover:text-gold transition-colors duration-300 text-center">
                        {social.label}
                      </span>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-300"></div>
                    </a>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

