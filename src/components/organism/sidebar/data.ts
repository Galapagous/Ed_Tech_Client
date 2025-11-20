import type { IconType } from 'react-icons';
import { BiPowerOff } from 'react-icons/bi';
import { FaBook } from 'react-icons/fa';
import { IoMdAnalytics } from 'react-icons/io';
import { MdFactCheck, MdQuiz } from 'react-icons/md';
export interface ISideIcon {
  title: string;
  link: string;
  icon: IconType;
}

export const sidebarData: ISideIcon[] = [
  {
    title: 'Analytics',
    link: '/dashboard/analytics',
    icon: IoMdAnalytics,
  },
  {
    title: 'courses',
    link: '/dashboard/courses',
    icon: FaBook,
  },
  {
    title: 'quiz',
    link: '/dashboard/quiz',
    icon: MdQuiz,
  },
  {
    title: 'result',
    link: '/dashboard/result',
    icon: MdFactCheck,
  },
];

export const logout = {
  title: 'Logout',
  link: '/login',
  icon: BiPowerOff,
};
