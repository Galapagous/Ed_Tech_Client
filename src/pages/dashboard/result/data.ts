export const resultTabledata = (data: any) => {
  if (data?.result?.length === 0) return [];
  const result = data?.result?.map((element: any) => ({
    id: element.id,
    title: element.title,
    description: element.description,
    docs: element.doc || 0,
    createdat: element?.created_at?.split('T')[0],
  }));
  return result;
};

export const resultTableHeader = ['Title', 'Description', 'Docs', 'CreatedAt'];

export const resultData = [
  {
    id: '1',
    course: 'Human Anatomy',
    description: 'A deep dive into the anatomy of human existence',
    docs: '5',
    updatedAt: '01-12-25',
  },
];

export const getAverage = (value: number, total: number): number => {
  return Math.floor(value / total);
};
