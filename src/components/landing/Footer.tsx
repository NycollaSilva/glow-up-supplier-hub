import { Mail, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="mb-6 sm:mb-8">
            <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-black text-gradient">
              FORNECEDORES PREMIUM
            </h3>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base px-4">
              Sua fonte confiável de fornecedores verificados
            </p>
          </div>
          
          {/* Support contact */}
          <div className="bg-muted/30 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base">Precisa de ajuda?</span>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm mb-2 px-4">
              Entre em contato com nosso suporte especializado:
            </p>
            <a 
              href="mailto:suporte@fornecedorespremium.com" 
              className="text-primary font-medium hover:underline text-sm sm:text-base break-all"
            >
              suporte@fornecedorespremium.com
            </a>
          </div>
          
          {/* Legal info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              <span>Pagamentos processados com segurança</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              <span>Dados protegidos por SSL</span>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-border/30 pt-4 sm:pt-6 mt-6 sm:mt-8">
            <p className="text-xs sm:text-sm text-muted-foreground px-4">
              © 2024 Fornecedores Premium. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground mt-2 px-4">
              CNPJ: XX.XXX.XXX/0001-XX • Este produto não garante resultados. Resultados podem variar.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;