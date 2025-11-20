import type { IconType } from 'react-icons';
import { BiBook, BiShareAlt } from 'react-icons/bi';
import { BsQuestion } from 'react-icons/bs';
import { MdQuiz } from 'react-icons/md';

export interface IDashboardCard {
  title: string;
  description: string;
  value: number;
  icon: IconType;
  color: string;
}

export const analyticTab = [
  {
    title: 'Overview',
  },
  {
    title: 'Notification',
  },
  {
    title: 'History',
  },
];

export const analyticCard: IDashboardCard[] = [
  {
    title: 'Total Course',
    description: 'compared to last month',
    value: 10,
    icon: BiBook,
    color: '#fffcf2',
  },
  {
    title: 'Question Generated',
    description: 'compared to last month',
    value: 150,
    icon: BsQuestion,
    color: '#ccc5b9',
  },
  {
    title: 'Quiz Taken',
    description: 'compared to last month',
    value: 360,
    icon: MdQuiz,
    color: '#403d39',
  },
  {
    title: 'Blog Shared',
    description: 'compared to last month',
    value: 5,
    icon: BiShareAlt,
    color: '#eb5e28',
  },
];

export const chartData = [
  { name: 'Q1', sales: 2400, profit: 1200 },
  { name: 'Q2', sales: 3800, profit: 1900 },
  { name: 'Q3', sales: 3200, profit: 1600 },
  { name: 'Q4', sales: 5000, profit: 2400 },
];

export const topCourses = [
  { name: 'React', value: 80 },
  { name: 'Tailwind', value: 75 },
  { name: 'Javascript', value: 75 },
  { name: 'Typescript', value: 85 },
  { name: 'Nodejs', value: 90 },
];

export const sampleTableHead = ['User', 'Course', 'Questions', 'Result', 'likes'];
export const sampleTableData = [
  {
    user: 'Nnamuria',
    course: 'Agric Econs',
    questions: 20,
    result: 89,
    likes: 1500,
  },
  {
    user: 'Uzaifa',
    course: 'Mechanics',
    questions: 25,
    result: 90,
    likes: 1000,
  },
  {
    user: 'Leno',
    course: 'Physics',
    questions: 21,
    result: 82,
    likes: 100,
  },
  {
    user: 'Pickford',
    course: 'PHE',
    questions: 30,
    result: 80,
    likes: 1300,
  },
  {
    user: 'Zainb',
    course: 'Social Econs',
    questions: 27,
    result: 88,
    likes: 1100,
  },
];
