import { render, screen } from '@testing-library/react';
import Footer from '../Footer'; // Ajuste o caminho conforme necessário

// Mocks para subcomponentes (se necessário)
jest.mock('../FooterSection', () => ({ title, items }) => (
  <div data-testid="footer-section">
    <h5>{title}</h5>
    <ul>{items && items.map(item => <li key={item}>{item}</li>)}</ul>
  </div>
));
jest.mock('../SocialMediaLinks', () => () => <div data-testid="social-media-links">Social Media Links</div>);
jest.mock('../CustomerSupport', () => () => <div data-testid="customer-support">Customer Support</div>);

describe('Footer', () => {
  it('renderiza as seções do rodapé corretamente', () => {
    render(<Footer />);

    // Verifica a presença das seções do rodapé
    const footerSections = screen.getAllByTestId('footer-section');
    expect(footerSections.length).toBe(5); // Ajuste o número conforme necessário

    // Verifica a presença dos links de mídia social
    expect(screen.getByTestId('social-media-links')).toBeInTheDocument();

    // Verifica a presença do suporte ao cliente
    expect(screen.getByTestId('customer-support')).toBeInTheDocument();
  });
});
