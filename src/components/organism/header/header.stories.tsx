import type { Meta, StoryObj } from '@storybook/react-vite';
import Header from './header';

const meta = {
  title: 'organism/header',
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
};

// == v2 ==
// import type { Meta, StoryObj } from '@storybook/react-vite';
// import { BrowserRouter } from 'react-router-dom';
// import Header from './header';

// const meta: any = {
//   title: 'organism/header',
//   component: Header,
//   decorators: [
//     Story => (
//       <BrowserRouter>
//         {Story()}
//       </BrowserRouter>
//     ),
//   ],
// } satisfies Meta<typeof Header>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const Main: Story = {
//   args: {},
// };
