import { render, screen } from '@testing-library/react';
import Header from '../Header'; // Ajuste o caminho do import conforme necessário

describe('Header Component', () => {
  it('renders correctly', () => {
    render(<Header />);
    // Verifica se a imagem é renderizada.
    // Como o componente Image do Next.js está mockado para simplificar, você pode precisar adaptar este teste.
    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeInTheDocument();
  });
});
