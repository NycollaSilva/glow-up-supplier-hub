import { Mail, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h3 className="font-heading text-2xl font-black text-gradient">
              FORNECEDORES PREMIUM
            </h3>
            <p className="text-muted-foreground mt-2">
              Sua fonte confiável de fornecedores verificados
            </p>
          </div>
          
          {/* Support contact */}
          <div className="bg-muted/30 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Mail className="w-5 h-5 text-primary" />
              <span className="font-medium">Precisa de ajuda?</span>
            </div>
            <p className="text-muted-foreground text-sm mb-2">
              Entre em contato com nosso suporte especializado:
            </p>
            <a 
              href="mailto:suporte@fornecedorespremium.com" 
              className="text-primary font-medium hover:underline"
            >
              suporte@fornecedorespremium.com
            </a>
          </div>
          
          {/* Legal info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Pagamentos processados com segurança</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Dados protegidos por SSL</span>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-border/30 pt-6 mt-8">
            <p className="text-sm text-muted-foreground">
              © 2024 Fornecedores Premium. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              CNPJ: XX.XXX.XXX/0001-XX • Este produto não garante resultados. Resultados podem variar.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;