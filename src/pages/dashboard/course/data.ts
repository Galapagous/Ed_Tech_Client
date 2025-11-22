import { IelementType, ITheme } from '../../../components/molecule/form';

interface ICourseData {
  id: number;
  title: string;
  description: string;
  documents?: string[];
}

export const couseTabelHeader = ['Title', 'Description', 'Docs', 'createdAt'];
export const courseTabledata = (data: any[]) => {
  if (data?.length === 0) return [];
  const result = data?.map(element => ({
    id: element.id,
    title: element.title,
    description: element.description,
    docs: element.documents?.length || 0,
    createdat: 'Nov 9 2025',
  }));
  return result;
};

export const getCourseDetails = (data: any) => [
  {
    label: 'Title',
    value: data?.title,
  },
  {
    label: 'Description',
    value: data?.description,
  },
  {
    label: 'PDF Dcuments',
    value: data?.docs?.length,
  },
  {
    label: 'Questions',
    value: 23,
  },
  {
    label: 'CreatedAt',
    value: data?.created_at.split('T')[0],
  },
];

export const createCourse = [
  {
    type: IelementType.TEXT,
    placeholder: 'Title',
    name: 'title',
    border: true,
  },
  {
    type: IelementType.TEXTAREA,
    placeholder: 'Description',
    name: 'description',
  },
];

export const addDocFile = [
  {
    type: IelementType.FILE,
    placeholder: 'upload doc',
    name: 'file',
    theme: ITheme.DARK,
  },
];
