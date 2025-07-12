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
    <section className="py-24 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-black mb-6">
              COMPRE COM <span className="text-gradient">SEGURANÇA</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Sua satisfação é nossa prioridade. Oferecemos garantias que protegem seu investimento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <guarantee.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-3">{guarantee.title}</h3>
                <p className="text-muted-foreground text-sm">{guarantee.description}</p>
              </div>
            ))}
          </div>
          
          {/* Selo de segurança */}
          <div className="bg-card border border-border/50 rounded-2xl p-8">
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="font-medium">SSL Certificado</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="font-medium">Dados Protegidos</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="font-medium">Garantia Total</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="font-medium">Suporte 24h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;