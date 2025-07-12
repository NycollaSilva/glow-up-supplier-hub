import { Shield, CreditCard, Lock, CheckCircle } from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    title: "Garantia de 7 Dias",
    description: "Se não ficar satisfeito, devolvemos 100% do seu dinheiro"
  },
  {
    icon: Lock,
    title: "Pagamento Seguro",
    description: "Seus dados protegidos com criptografia SSL"
  },
  {
    icon: CreditCard,
    title: "Todas as Formas de Pagamento",
    description: "PIX, cartão, boleto e parcelamento disponível"
  }
];

const GuaranteeSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full mb-4 sm:mb-6">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 px-4">
              COMPRE COM <span className="text-gradient">SEGURANÇA</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground px-4">
              Sua satisfação é nossa prioridade. Oferecemos garantias que protegem seu investimento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="text-center p-4 sm:p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-3 sm:mb-4">
                  <guarantee.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="font-heading text-base sm:text-lg font-bold mb-2 sm:mb-3">{guarantee.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{guarantee.description}</p>
              </div>
            ))}
          </div>
          
          {/* Selo de segurança */}
          <div className="bg-card border border-border/50 rounded-2xl p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-center gap-3 sm:gap-6 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <span className="font-medium text-xs sm:text-sm">SSL Certificado</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <span className="font-medium text-xs sm:text-sm">Dados Protegidos</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <span className="font-medium text-xs sm:text-sm">Garantia Total</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <span className="font-medium text-xs sm:text-sm">Suporte 24h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;