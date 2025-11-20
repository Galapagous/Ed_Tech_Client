import type { Meta, StoryObj } from '@storybook/react-vite';
import Header from './sidebar';

const meta = {
  title: 'organism/sidebar',
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    toggle: () => false,
    show: false,
  },
};
