import { render, screen } from '@testing-library/react';
import VehicleCard from '../VehicleCard'; // Ajuste o caminho conforme necessário

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => <img {...props} />, // Simula <Image> com uma tag <img> comum
}));

describe('VehicleCard', () => {
  const mockVehicle = {
    photo: '/carro-exemplo.jpg',
    brand: 'Volkswagen',
    model: 'Golf',
    year: '2020',
    mileage: '10.000km',
    transmission_type: 'Automático',
    price: '90000.00'
  };

  it('renderiza as informações do veículo corretamente', () => {
    render(<VehicleCard vehicle={mockVehicle} />);

    const image = screen.getByRole('img', { name: /carro/i });
    expect(image).toHaveAttribute('src', mockVehicle.photo);

    expect(screen.getByText(mockVehicle.brand)).toBeInTheDocument();
    expect(screen.getByText(mockVehicle.model)).toBeInTheDocument();
    expect(screen.getByText(mockVehicle.year)).toBeInTheDocument();
    expect(screen.getByText(mockVehicle.mileage)).toBeInTheDocument();
    expect(screen.getByText(mockVehicle.transmission_type)).toBeInTheDocument();

    const formattedPrice = `R$ ${Number(mockVehicle.price).toFixed(2).replace(".", ",")}`;
    expect(screen.getByText(formattedPrice)).toBeInTheDocument();
  });
});
