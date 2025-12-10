import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Sparkles,
} from "lucide-react";

export function Footer() {

  const navigationLinks = [
    { path: "/", label: "Início" },
    { path: "/mentoria-carreira", label: "Método ASCENSO" },
    { path: "/mentoria-executiva", label: "Método Executivo ALFA" },
    { path: "/produto-digital", label: "ORION" },
    { path: "/#apresentacao-completa", label: "Apresentação Completa" },
  ];

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
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 border-t-2 border-gold/30 shadow-[0_-4px_30px_-15px_hsl(var(--gold)/0.15)]">
      {/* Background decorative elements - mais visíveis */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--gold)/0.12)_0%,transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_100%,hsl(var(--gold)/0.08)_0%,transparent_50%)]"></div>
      
      {/* Floating decorative elements - mais elegantes */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-gold/30 rounded-full animate-pulse z-10 shadow-lg shadow-gold/20"></div>
      <div className="absolute bottom-20 right-20 w-5 h-5 bg-gold/25 rounded-full animate-pulse z-10 shadow-lg shadow-gold/20" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-gold/35 rounded-full animate-pulse z-10 shadow-md shadow-gold/25" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-gold/40 rounded-full animate-pulse z-10" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Brand Section */}
          <div className="space-y-5 lg:col-span-1">
            <div className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center shadow-lg shadow-gold/20 group-hover:shadow-xl group-hover:shadow-gold/30 group-hover:scale-110 transition-all duration-300 border border-gold/20">
                <Sparkles className="w-7 h-7 text-gold group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-primary group-hover:text-gold transition-colors duration-300">
                Ana Peixoto
              </h3>
            </div>
            <p className="text-sm font-poppins text-primary/80 leading-relaxed">
              Educadora Executiva e Mentora de Carreira. Transformando potencial em liderança com clareza, propósito e estratégia.
            </p>
            <div className="flex items-center gap-2 text-xs font-poppins text-primary/70 bg-gold/5 px-3 py-2 rounded-lg border border-gold/10 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
              <span className="font-semibold">+650 executivos e negócios transformados</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-bold text-primary mb-5">
              Navegação
            </h4>
            <nav className="flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group relative text-sm font-poppins font-medium text-primary/80 hover:text-gold transition-all duration-300 w-fit"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-gold/60 group-hover:w-full transition-all duration-300 ease-out"></span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-bold text-primary mb-5">
              Contato
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:contato@anapeixoto.com"
                className="flex items-center gap-3 text-sm font-poppins font-medium text-primary/80 hover:text-gold transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/15 to-gold/5 flex items-center justify-center group-hover:from-gold/30 group-hover:to-gold/15 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gold/20 transition-all duration-300 border border-gold/20 group-hover:border-gold/40">
                  <Mail className="w-5 h-5 text-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">contato@anapeixoto.com</span>
              </a>
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-3 text-sm font-poppins font-medium text-primary/80 hover:text-gold transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/15 to-gold/5 flex items-center justify-center group-hover:from-gold/30 group-hover:to-gold/15 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gold/20 transition-all duration-300 border border-gold/20 group-hover:border-gold/40">
                  <Phone className="w-5 h-5 text-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">(21) 99999-9999</span>
              </a>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-bold text-primary mb-5">
              Redes Sociais
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-gold/15 to-gold/5 flex items-center justify-center hover:from-gold/30 hover:to-gold/15 hover:scale-110 hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 group border border-gold/20 hover:border-gold/40 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Icon className="w-5 h-5 text-gold relative z-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                    <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-300"></div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gold/20"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="px-4">
              <Sparkles className="w-5 h-5 text-gold/40" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-xs font-poppins font-medium text-primary/70">
              © {new Date().getFullYear()} Ana Peixoto. Todos os direitos reservados.
            </p>
            <p className="text-xs font-poppins text-primary/60 mt-1">
              Desenvolvido com dedicação para transformar carreiras.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

