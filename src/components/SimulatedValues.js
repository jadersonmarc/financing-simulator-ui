import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function SimulatedValues({result}) {
    console.log(result[0].installments)
    return (
        <div className="w-full lg:h-84 rounded overflow-hidden shadow-lg p-8 bg-white">
            <h2 className="font-bold mb-2">Valores Simulados para você</h2>
            <div className="bg-custom-purple h-[2px] w-8 mb-4"></div>
            <div className="flex w-80 h-16 justify-between overflow-hidden shadow-lg space-x-6">
                <div className="w-36 p-2">
                    <p className="text-sm font-medium">{result[0].installments}x</p>
                    <p className="font-bold text-custom-purple">R$ {result[0].installmentValue.toFixed(2).replace(".", ",")}</p>
                </div>
                <div className="overflow-hidden">
                    <div className="w-36 h-8 px-2 bg-custom-purple ml-20 rounded-custom text-white">
                        <p className="text-sm">IPVA GRÁTIS</p>
                    </div>
                </div>
            </div>
            <div className="lg:flex w-80 lg:h-16">
                <div className="lg:w-36 p-4 mr-4 shadow-lg rounded-lg">
                    <p className="text-sm font-medium">{result[1].installments}x</p>
                    <p className="font-bold text-custom-purple">R$ {result[1].installmentValue.toFixed(2).replace(".", ",")}</p>
                </div>
                <div className="lg:w-36 rounded-lg p-4 shadow-lg">
                    <p className="text-sm font-medium">{result[2].installments}x</p>
                    <p className="font-bold text-custom-purple">R$ {result[2].installmentValue.toFixed(2).replace(".", ",")}</p>
                </div>
            </div>
            <div className="lg:flex max-sm:space-y-3 max-sm:text-center lg:space-x-2 mt-6">
                <div className="h-8 flex text-white space-x-2 p-1 justify-center rounded-custom bg-green-500">
                    <p>
                        <FontAwesomeIcon icon={faWhatsapp} size="1x" />
                    </p>
                    <p className="text-xs mt-1 font-medium">
                        Falar com consultor
                    </p>
                </div>
                <div>
                    <p className="font-medium">
                        (31) 3441-0240
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SimulatedValues;
