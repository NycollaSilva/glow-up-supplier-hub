import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Decorative elements - hidden on mobile for better performance */}
      <div className="hidden sm:block absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="hidden sm:block absolute bottom-32 right-16 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-1000" />
      <div className="hidden sm:block absolute top-1/2 right-1/4 w-16 h-16 bg-primary/30 rounded-full blur-lg animate-bounce" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-3 sm:px-4 py-2 mb-6 sm:mb-8 animate-fade-in">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-primary fill-primary flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-center">Mais de 1.000 empreendedores já transformaram seus negócios</span>
          </div>
          
          {/* Main headline */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 animate-fade-in delay-200 leading-tight">
            <span className="block">TRANSFORME SEU</span>
            <span className="block text-gradient">NEGÓCIO HOJE</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground font-light mb-6 sm:mb-8 leading-relaxed animate-fade-in delay-300 px-4">
            Acesse nossa planilha exclusiva com <span className="text-primary font-semibold">+500 fornecedores</span> verificados e confiáveis. 
            <br className="hidden md:block" />
            Economize tempo, reduza custos e <span className="text-secondary font-semibold">aumente seus lucros</span> em até 300%.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:gap-4 items-center justify-center mb-8 sm:mb-12 animate-fade-in delay-500 px-4">
            <Button variant="cta" size="xl" className="w-full sm:max-w-md text-sm sm:text-base">
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              QUERO MINHA PLANILHA AGORA
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button variant="outline" size="xl" className="w-full sm:max-w-md text-sm sm:text-base">
              Ver demonstração
            </Button>
          </div>
          
          {/* Social proof numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-3xl mx-auto animate-fade-in delay-700 px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary mb-1 sm:mb-2">+500</div>
              <div className="text-muted-foreground text-sm sm:text-base">Fornecedores Verificados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary mb-1 sm:mb-2">1000+</div>
              <div className="text-muted-foreground text-sm sm:text-base">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary mb-1 sm:mb-2">300%</div>
              <div className="text-muted-foreground text-sm sm:text-base">Aumento médio de lucro</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;