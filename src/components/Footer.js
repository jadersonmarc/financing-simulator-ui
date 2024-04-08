import FooterSection from './FooterSection';
import SocialMediaLinks from './SocialMediaLinks';
import CustomerSupport from './CustomerSupport';

function Footer() {
    return (
      <footer className="w-full mt-auto flex max-sm:flex-col max-sm:items-center lg:justify-around p-8 bg-gray-500">
        <FooterSection 
            title="Encontre seu veículo" 
            items={["Lojas", "Promoções", "Vantagens", "Garantia Mais"]} 
          />
          <FooterSection 
            title="A Empresa" 
            items={["Sobre", "Delivery", "Aviso de Privacidade", "Blog Seminovos"]} 
          />
          
          <FooterSection 
            title="A Empresa" 
            items={["Sobre", "Delivery", "Aviso de Privacidade", "Blog Seminovos"]} 
          />
          
          <FooterSection 
            title="Atendimento" 
            items={["Perguntas Frequentes", "Fale Conosco", "Pós-vendas", "Blog Seminovos"]} 
          />

          <FooterSection 
                  title="Lojistas" 
                  items={["Acesse Seminovos Atacado"]} 
          />

          <CustomerSupport />
          
          <SocialMediaLinks />
      </footer>
    );
  }
  
  export default Footer;
  