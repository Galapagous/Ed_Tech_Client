import type { Meta, StoryObj } from '@storybook/react-vite';
import Footer from './footer';

const meta = {
  title: 'organism/footer',
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
};
