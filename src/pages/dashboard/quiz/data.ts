export const getQuizData = (courseData: any) => {
  if (courseData?.length === 0) return [];
  const result = courseData?.map((data: any) => ({
    id: data?.id,
    course: data?.title,
    description: data?.description,
  }));
  return result;
};

export const instructions = [
  'Total number of question is 110',
  'All questions are in multiple choice format',
  'Each question carry equal mark',
  'Total time allocated to this test is 45min',
  'Kindly use the Next and Prev button to navigate the question',
  'Choose an option by selecting it from the list',
];
