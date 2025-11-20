import type { Meta, StoryObj } from '@storybook/react-vite';
import HomeLayout from './home.layout';

const meta = {
  title: 'layout/home',
  component: HomeLayout,
} satisfies Meta<typeof HomeLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
};
