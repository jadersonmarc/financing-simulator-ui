import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FooterSection from './FooterSection';
import SocialMediaLinks from './SocialMediaLinks';

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

          <div className="text-white hidden md:block space-y-2">
            <p>Atendimento ao cliente</p>
            <div className="flex hidden md:block space-y-3">
              <div className="bg-custom-purple rounded-lg p-2">
                <p>0800 000 000</p>
              </div>
              <div className="bg-green-500 p-3 rounded-md">
              <p><FontAwesomeIcon icon={faWhatsapp} size="1x" /></p>
              </div>
            </div>
          </div>

          <SocialMediaLinks />
      </footer>
    );
  }
  
  export default Footer;
  