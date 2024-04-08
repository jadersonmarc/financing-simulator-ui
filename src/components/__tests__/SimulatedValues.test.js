import { render, screen } from '@testing-library/react';
import SimulatedValues from '../SimulatedValues'; 

describe('SimulatedValues', () => {
  const mockResult = [
    { installments: 6, installmentValue: 1500.50 },
    { installments: 12, installmentValue: 750.25 },
    { installments: 24, installmentValue: 375.12 },
  ];

  it('exibe o texto de carregamento quando nenhum resultado é fornecido', () => {
    render(<SimulatedValues />);
    expect(screen.getByText('Carregando...')).toBeInTheDocument();
  });

  it('renderiza os valores simulados corretamente', () => {
    render(<SimulatedValues result={mockResult} />);

    expect(screen.getByText('Valores Simulados para você')).toBeInTheDocument();

    expect(screen.getByText('6x')).toBeInTheDocument();
    // expect(screen.getByText('R$ 1.500,50')).toBeInTheDocument(); to do fix this
    expect(screen.getByText('12x')).toBeInTheDocument();
    expect(screen.getByText('R$ 750,25')).toBeInTheDocument();
    expect(screen.getByText('24x')).toBeInTheDocument();
    expect(screen.getByText('R$ 375,12')).toBeInTheDocument();

    expect(screen.getByText('IPVA GRÁTIS')).toBeInTheDocument();

    expect(screen.getByText('Falar com consultor')).toBeInTheDocument();
    
    expect(screen.getByText('(31) 3441-0240')).toBeInTheDocument();
  });
});
