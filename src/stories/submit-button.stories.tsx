import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SubmitButton } from '@/shared/ui/components/submit-button';

const meta: Meta<typeof SubmitButton> = {
  title: 'Shared/UI/Components/SubmitButton',
  component: SubmitButton,
  args: {
    children: 'Enviar',
    isLoading: false,
    disabled: false,
  },
  argTypes: {
    isLoading: {
      control: 'boolean',
      description: 'Exibe o spinner e desabilita o botão',
    },
    children: {
      control: 'text',
      description: 'Conteúdo do botão',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o botão manualmente',
    },
    onClick: {
      action: 'clicked',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SubmitButton>;

export const Padrao: Story = {};

export const Carregando: Story = {
  args: {
    isLoading: true,
  },
};

export const Desabilitado: Story = {
  args: {
    disabled: true,
  },
};
