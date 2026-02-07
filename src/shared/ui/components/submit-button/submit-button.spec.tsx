import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SubmitButton } from './submit-button';

describe('SubmitButton', () => {
  it('renderiza o conteúdo corretamente', () => {
    render(<SubmitButton>Enviar</SubmitButton>);

    expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument();
  });

  it('não exibe o spinner quando isLoading é false', () => {
    render(<SubmitButton>Enviar</SubmitButton>);

    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
  });

  it('exibe o spinner quando isLoading é true', () => {
    render(<SubmitButton isLoading>Enviar</SubmitButton>);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('desabilita o botão quando isLoading é true', () => {
    render(<SubmitButton isLoading>Enviar</SubmitButton>);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('repassa corretamente as props nativas do botão', async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();

    render(<SubmitButton onClick={onClick}>Enviar</SubmitButton>);

    await user.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
