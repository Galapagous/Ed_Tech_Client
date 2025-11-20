import type { Meta, StoryObj } from '@storybook/react-vite';
import Faq from './faq';

const meta = {
  title: 'homepage/faq',
  component: Faq,
} satisfies Meta<typeof Faq>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
};
