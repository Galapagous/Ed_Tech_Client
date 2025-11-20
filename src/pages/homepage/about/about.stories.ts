import type { Meta, StoryObj } from '@storybook/react-vite';
import About from './about';

const meta = {
  title: 'homepage/about',
  component: About,
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
};
