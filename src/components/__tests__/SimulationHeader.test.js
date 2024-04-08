import { render, screen } from '@testing-library/react';
import SimulationHeader from '../SimulationHeader'; 

describe('SimulationHeader', () => {
  it('deve renderizar o título corretamente', () => {
    render(<SimulationHeader />);
    const headingElement = screen.getByRole('heading', { name: /simulação de financiamento/i });
    expect(headingElement).toBeInTheDocument();
  });

  it('deve renderizar a linha divisória conforme esperado', () => {
    render(<SimulationHeader />);
    const dividerElement = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'div' && element.className.includes('bg-custom-purple');
    });
    expect(dividerElement).toBeInTheDocument();
  });
});
