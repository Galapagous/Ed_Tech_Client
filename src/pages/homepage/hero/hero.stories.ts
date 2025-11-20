import type { Meta, StoryObj } from '@storybook/react-vite';
import Hero from './hero';

const meta = {
  title: 'homepage/hero',
  component: Hero,
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
};
