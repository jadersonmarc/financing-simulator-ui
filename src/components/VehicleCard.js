import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faTachometerAlt, faCog } from '@fortawesome/free-solid-svg-icons';

function VehicleCard({vehicle}) {
    return (
        <div className="lg:w-72 h-84 rounded overflow-hidden shadow-lg bg-white">
            <div className="relative h-48">
                <Image src={vehicle.photo} alt="Carro" layout="fill" className="pb-5"  style={{ objectFit: 'cover' }}  />
            </div>
            <div className="px-4 pb-2">
                <p className="font-semibold mb-2">{vehicle.brand}</p>
                <p className="text-gray-500 text-xs">
                {vehicle.model}
                </p>
                <div className="flex justify-between items-center pt-2">
                    <p className="text-xs text-gray-500"><FontAwesomeIcon icon={faCalendarAlt} size="1x" className="mr-1"/>{vehicle.year}</p>
                    <p className="text-xs text-gray-500"><FontAwesomeIcon icon={faTachometerAlt} size="1x" className="mr-1"/>{vehicle.mileage}</p>
                    <p className="text-xs text-gray-500"><FontAwesomeIcon icon={faCog} size="1x" className="mr-1"/>{vehicle.transmission_type}</p>
                </div>
                <p className="font-bold mt-2">
                    R$ {Number(vehicle.price).toFixed(2).replace(".", ",")}
                </p>
            </div>
        </div>
    );
}

export default VehicleCard;
