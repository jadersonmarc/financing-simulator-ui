import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function SocialMediaLinks() {
  return (
    <div className="text-white space-y-2">
      <p className="font-medium">Siga a gente</p>
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
  );
}

export default SocialMediaLinks;
