import type { Meta, StoryObj } from '@storybook/react-vite';
import Testimonial from './testimonial';

const meta = {
  title: 'homepage/testimonial',
  component: Testimonial,
} satisfies Meta<typeof Testimonial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
};
