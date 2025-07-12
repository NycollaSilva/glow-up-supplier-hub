import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Silva",
    business: "Loja de Decoração",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Essa planilha mudou completamente meu negócio! Consegui encontrar fornecedores muito melhores e economizei mais de R$ 5.000 só no primeiro mês. Recomendo para todos os empreendedores!",
    highlight: "Economizou R$ 5.000 no primeiro mês"
  },
  {
    name: "Carlos Mendes", 
    business: "E-commerce de Eletrônicos",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Incrível a qualidade dos fornecedores! Todos os contatos são reais e responsivos. Minha margem de lucro aumentou 40% depois que comecei a usar a planilha. Valeu cada centavo!",
    highlight: "Margem de lucro aumentou 40%"
  },
  {
    name: "Ana Paula Costa",
    business: "Roupas Infantis",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Como mãe empreendedora, o tempo é muito valioso. Esta planilha me poupou horas de pesquisa e me conectou com fornecedores incríveis. Meu faturamento triplicou em 6 meses!",
    highlight: "Faturamento triplicou em 6 meses"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-black mb-6">
            O QUE NOSSOS <span className="text-gradient">CLIENTES DIZEM</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 1.000 empreendedores já transformaram seus negócios com nossa planilha. Veja alguns resultados reais:
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative p-8 bg-card border border-border/50 rounded-2xl hover:border-primary/30 transition-all duration-300 group hover:transform hover:scale-105"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors duration-300" />
              
              {/* Rating stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
              
              {/* Testimonial text */}
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>
              
              {/* Highlight */}
              <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                ✨ {testimonial.highlight}
              </div>
              
              {/* Author info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional social proof */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-6 py-3">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="font-medium">4.9/5 estrelas</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">Baseado em 1.000+ avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;