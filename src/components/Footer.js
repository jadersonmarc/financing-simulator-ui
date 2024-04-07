import { faFacebook, faTwitter, faInstagram, faWhatsapp, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
      <div className="w-full mt-auto flex max-sm:flex-col max-sm:items-center lg:justify-around p-8 bg-gray-500">
      <ul className="text-white hidden md:block space-y-2">
          <li>
          <p className="font-medium">Encontre seu veículo</p>
          </li>
          <li>
          <p className="text-sm">Lojas</p>
          </li>
          <li>
          <p className="text-sm">Promoções</p>
          </li>
          <li>
          <p className="text-sm">Vantagens</p>
          </li>
          <li>
          <p className="text-sm">Garantia Mais</p>
          </li>
        </ul>
        <ul className="text-white hidden md:block space-y-2">
        <li>
          <p className="font-medium">A Empresa</p>
          </li>
          <li>
          <p className="text-sm">Sobre </p>
          </li>
          <li>
          <p className="text-sm">Delivery</p>
          </li>
          <li>
          <p className="text-sm">Aviso de Privacidade</p>
          </li>
          <li>
          <p className="text-sm">Blog Seminovos</p>
          </li>
        </ul>
        <ul className="text-white hidden md:block space-y-2">
        <li>
          <p className="font-medium">Atendimento</p>
          </li>
          <li>
          <p className="text-sm">Perguntas Frequentes </p>
          </li>
          <li>
          <p className="text-sm">Fale Conosco</p>
          </li>
          <li>
          <p className="text-sm">Pós-vendas</p>
          </li>
        </ul>
        <ul className="text-white hidden md:block space-y-2">
        <li>
          <p className="font-medium">Lojistas</p>
          </li>
          <li>
          <p className="text-sm">Acesse Seminovos Atacado</p>
          </li>
        </ul>
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
        <div className="text-white space-y-2">
          <p className="font-medium">Siga a gente </p>
          <ul className="flex space-x-3">
          <li className="bg-custom-purple rounded-md p-2">
            <FontAwesomeIcon icon={faFacebook} size="1x" />
          </li>
          <li className="bg-custom-purple rounded-md p-2">
            <FontAwesomeIcon icon={faTwitter} size="1x" />
          </li>
          <li className="bg-custom-purple rounded-md p-2">
            <FontAwesomeIcon icon={faInstagram} size="1x" />
          </li>
          <li className="bg-custom-purple rounded-md p-2">
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
          </li>
        </ul>
        </div>
      </div>
    );
  }
  
  export default Footer;
  