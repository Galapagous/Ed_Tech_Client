import { LiaUploadSolid } from 'react-icons/lia';
import UPLOAD from '../../../assets/image/eye.jpeg';
import QUIZ from '../../../assets/image/brain.jpeg';
import ANALYZE from '../../../assets/image/teach.jpeg';
import CONNECT from '../../../assets/image/connect.jpeg';
import { MdQuiz } from 'react-icons/md';
import { BiAnalyse } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import type { IconType } from 'react-icons';

export interface IFeature {
  title: string;
  description: string;
  icon: IconType;
  background: string;
}

export const features: IFeature[] = [
  {
    title: 'Upload',
    description: 'Upload your academic papers or course material',
    icon: LiaUploadSolid,
    background: UPLOAD,
  },
  {
    title: 'Quiz',
    description: 'Explore different question type and difficulties',
    icon: MdQuiz,
    background: QUIZ,
  },
  {
    title: 'Analyze',
    description: 'Track your understanding of the course materials',
    icon: BiAnalyse,
    background: ANALYZE,
  },
  {
    title: 'Connect',
    description: 'Share your findings with other users all over the world',
    icon: BsPerson,
    background: CONNECT,
  },
];
