import '@testing-library/jest-dom';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

const mockedUsedNavigate = vi.fn();

// vi.mock('react-router-dom', () => ({
//   ...vi.importActual('react-router-dom'),
//   useNavigate: () => mockedUsedNavigate,
// }));

vi.mock('react-router-dom', async () => {
  const actual = (await vi.importActual('react-router-dom')) as any;
  return { ...actual, useNavigate: () => mockedUsedNavigate };
});

const renderComponent = () => {
  return render(<Home />);
};

describe('<Home />', () => {
  it('Deve renderizar  um componente de card com um  texto inicial ', () => {
    const { getByText } = renderComponent();

    expect(getByText('Histórico de empréstimos')).toBeInTheDocument();
  });

  beforeEach(async () => {
    const actual = (await vi.importActual('react-router-dom')) as any;
    vi.spyOn(
      { ...actual, useNavigate: () => mockedUsedNavigate },
      'useNavigate'
    ).mockImplementation(() => mockedUsedNavigate);
  });

  it('Deve navegar para a página cadastrar Livro ao clicar no card', async () => {
    renderComponent();
    expect(screen.getByTestId('card-cadastro')).toBeInTheDocument();

    userEvent.click(screen.getByText('Cadastrar novo livro'));

    expect(mockedUsedNavigate).toHaveBeenCalledWith('/cadastro');
  });
});
