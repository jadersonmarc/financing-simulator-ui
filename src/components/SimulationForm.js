import { useForm } from 'react-hook-form';

function SimulationForm({ vehicles, onVehiclesSelected }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {

      const vehiclesSelected = vehicles.find(vehicle => vehicle.id === Number(data.selectOption));

      if (onVehiclesSelected && vehiclesSelected) {
        onVehiclesSelected(vehiclesSelected);
      }
  };

    return (
      <div className="bg-white m-8 p-8 rounded-md">
        <h3 className="text-left text-xl font-roboto font-bold leading-9">
          Selecione um veículo que deseja simular o financiamento
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="lg:flex my-6 items-center max-sm:space-y-4 lg:space-x-6">
          <select {...register("selectOption")} className="w-60 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5">
          {vehicles.map((vehicle) => (
          <option key={vehicle.id} value={vehicle.id}>
            {vehicle.brand} - {vehicle.model} 
          </option>
        ))}
          </select>
  
          <button type="submit" className="w-60 px-4 py-2 bg-custom-purple rounded-custom text-white">
            Simular
          </button>
        </form>
      </div>
    );
  }
  
  export default SimulationForm;
  