function SimulationForm({ onSubmit, register }) {
    return (
      <div className="bg-white m-8 p-8 rounded-md">
        <h3 className="text-left text-xl font-roboto font-bold leading-9">
          Selecione um veículo que deseja simular o financiamento
        </h3>
        <form onSubmit={onSubmit} className="lg:flex my-6 items-center max-sm:space-y-4 lg:space-x-6">
          <select {...register("selectOption")} className="w-60 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5">
            <option value="option1">Opção 1</option>
            <option value="option2">Opção 2</option>
            <option value="option3">Opção 3</option>
          </select>
  
          <button type="submit" className="w-60 px-4 py-2 bg-custom-purple rounded-custom text-white">
            Simular
          </button>
        </form>
      </div>
    );
  }
  
  export default SimulationForm;
  