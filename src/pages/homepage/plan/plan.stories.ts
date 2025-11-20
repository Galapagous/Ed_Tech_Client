import type { Meta, StoryObj } from '@storybook/react-vite';
import Plan from './plan';

const meta = {
  title: 'homepage/plan',
  component: Plan,
} satisfies Meta<typeof Plan>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
};
