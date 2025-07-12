import { Check, Database, Shield, Zap, Clock, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "+500 Fornecedores Verificados",
    description: "Base completa com contatos diretos, especialidades e avaliações reais"
  },
  {
    icon: Shield,
    title: "100% Confiáveis",
    description: "Todos os fornecedores passaram por rigoroso processo de verificação"
  },
  {
    icon: Zap,
    title: "Acesso Instantâneo",
    description: "Receba sua planilha imediatamente após a compra, direto no seu email"
  },
  {
    icon: Clock,
    title: "Economize Tempo",
    description: "Pare de perder horas procurando fornecedores. Tudo organizado em um só lugar"
  },
  {
    icon: TrendingUp,
    title: "Aumente Seus Lucros",
    description: "Negocie melhor com fornecedores de qualidade e reduza seus custos"
  },
  {
    icon: Users,
    title: "Suporte Especializado",
    description: "Suporte técnico e consultoria para maximizar seus resultados"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-black mb-6">
            O QUE VOCÊ VAI <span className="text-gradient">RECEBER</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma planilha completa e organizada que vai revolucionar a forma como você encontra e negocia com fornecedores
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <h3 className="font-heading text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              <div className="mt-6 flex items-center text-primary">
                <Check className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Incluído na planilha</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;