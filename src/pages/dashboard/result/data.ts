export const resultTabledata = (data: any[]) => {
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
