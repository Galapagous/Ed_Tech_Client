import type { Meta, StoryObj } from '@storybook/react-vite';
import Button, { IButtonType } from './button';

const meta = {
  title: 'compoent/button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Primary',
    type: IButtonType.PRIMARY,
    shadow: true,
  },
};
export const Secondary: Story = {
  args: {
    text: 'Secondary',
    type: IButtonType.SECONDARY,
    shadow: true,
  },
};
