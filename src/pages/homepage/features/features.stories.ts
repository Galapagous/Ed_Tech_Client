import type { Meta, StoryObj } from '@storybook/react-vite';
import Features from './features';

const meta = {
  title: 'homepage/features',
  component: Features,
} satisfies Meta<typeof Features>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
};
