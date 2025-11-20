import type { Meta, StoryObj } from '@storybook/react-vite';
import Register from './register';

const meta = {
  title: 'auth/register',
  component: Register,
} satisfies Meta<typeof Register>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
};
