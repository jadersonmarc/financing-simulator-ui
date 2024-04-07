import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function CustomerSupport() {
  return (
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
  );
}

export default CustomerSupport;
