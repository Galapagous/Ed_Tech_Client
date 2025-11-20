import type { Meta, StoryObj } from '@storybook/react-vite';
import Login from './login';

const meta = {
  title: 'auth/login',
  component: Login,
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
};
