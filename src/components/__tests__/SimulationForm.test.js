import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SimulationForm from '../SimulationForm';
import { mockVehicles } from './__mocks__/vehiclesMock';

describe('SimulationForm', () => {
    it('chama onVehiclesSelected com o veículo selecionado ao submeter', async () => {
      const handleVehiclesSelected = jest.fn();
  
      render(<SimulationForm vehicles={mockVehicles} onVehiclesSelected={handleVehiclesSelected} />);
  
      fireEvent.change(screen.getByRole('combobox'), { target: { value: '2' } });
      fireEvent.submit(screen.getByRole('button'));
  
      await waitFor(() => expect(handleVehiclesSelected).toHaveBeenCalledWith(mockVehicles[1]));
    });
  });