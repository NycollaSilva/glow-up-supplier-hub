import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Zap, X } from "lucide-react";

const OfferSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-secondary/10 to-primary/5 relative overflow-hidden">
      {/* Background decorations - hidden on mobile for better performance */}
      <div className="hidden sm:block absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="hidden sm:block absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Urgency banner */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 bg-destructive/20 text-destructive border border-destructive/30 rounded-full px-3 sm:px-4 py-2 animate-pulse">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">OFERTA LIMITADA - Termina em breve!</span>
            </div>
          </div>
          
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-4 sm:mb-6 px-4">
              <span className="text-destructive block sm:inline">ÚLTIMA CHANCE!</span>
              <br />
              <span className="text-gradient">OFERTA ESPECIAL</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground px-4">
              Por tempo limitado, você tem acesso à nossa planilha premium com desconto incrível
            </p>
          </div>
          
          {/* Pricing comparison */}
          <div className="bg-card border border-border/50 rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12 mb-6 sm:mb-8 relative">
            {/* Badge "Mais Popular" */}
            <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary text-primary-foreground px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                🔥 MAIS POPULAR
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center pt-4 sm:pt-6">
              {/* Preço original riscado */}
              <div className="text-center">
                <div className="relative inline-block">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-muted-foreground/50 relative">
                    R$ 97,00
                    <X className="absolute inset-0 w-full h-full text-destructive stroke-[2] sm:stroke-[3]" />
                  </span>
                </div>
                <p className="text-muted-foreground mt-1 sm:mt-2 text-sm sm:text-base">Preço normal</p>
              </div>
              
              {/* Preço promocional */}
              <div className="text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary mb-2">
                  R$ 29<span className="text-lg sm:text-xl md:text-2xl">,90</span>
                </div>
                <div className="inline-flex items-center gap-1 sm:gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-1 sm:py-2 rounded-full">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="font-bold text-xs sm:text-sm">70% DE DESCONTO</span>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-6 sm:mt-8">
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6 px-4">
                <span className="text-primary font-semibold">Economia de R$ 67,10!</span> Investimento que se paga no primeiro fornecedor encontrado.
              </p>
              
              <Button variant="cta" size="xl" className="w-full text-sm sm:text-base lg:text-xl px-4 sm:px-8 lg:px-16">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                QUERO APROVEITAR AGORA
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </Button>
              
              <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4 px-4">
                💳 Parcelamento disponível • 🔒 Pagamento 100% seguro • ✅ Acesso imediato
              </p>
            </div>
          </div>
          
          {/* Bônus extras */}
          <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-4 sm:p-6">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4">
              🎁 BÔNUS EXCLUSIVOS (Valor: R$ 197)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
              <div className="text-xs sm:text-sm">
                ✅ <strong>E-book:</strong> "Como Negociar com Fornecedores"
              </div>
              <div className="text-xs sm:text-sm">
                ✅ <strong>Templates:</strong> Contratos e Propostas
              </div>
              <div className="text-xs sm:text-sm">
                ✅ <strong>Suporte:</strong> Consultoria por 30 dias
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;