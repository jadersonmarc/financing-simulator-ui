import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faTachometerAlt, faCog } from '@fortawesome/free-solid-svg-icons';

function VehicleCard() {
    return (
        <div className="lg:w-72 h-84 rounded overflow-hidden shadow-lg bg-white">
            <div className="relative h-48">
                <Image src="/carro.png" alt="Carro" layout="fill" objectFit="cover" className="pb-5" />
            </div>
            <div className="px-4 pb-2">
                <p className="font-semibold mb-2">Volkswagen T-Cross</p>
                <p className="text-gray-500 text-xs">
                    1.0 200 TSI Total Flex Comfortline
                </p>
                <div className="flex justify-between items-center pt-2">
                    <p className="text-xs text-gray-500"><FontAwesomeIcon icon={faCalendarAlt} size="1x" className="mr-1"/>2020</p>
                    <p className="text-xs text-gray-500"><FontAwesomeIcon icon={faTachometerAlt} size="1x" className="mr-1"/>15.850Km</p>
                    <p className="text-xs text-gray-500"><FontAwesomeIcon icon={faCog} size="1x" className="mr-1"/>Automático</p>
                </div>
                <p className="font-bold mt-2">
                    R$ 100.000
                </p>
            </div>
        </div>
    );
}

export default VehicleCard;
