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

export const questions = [
  {
    id: 1,
    question: 'what of the following is most commonly found on earth',
    options: [
      { id: 1, index: 'A', value: 'Sand' },
      { id: 2, index: 'B', value: 'Granite' },
      { id: 3, index: 'C', value: 'Gold' },
      { id: 4, index: 'D', value: 'Cement' },
    ],
  },

  {
    id: 2,
    question: 'Which planet is known as the Red Planet?',
    options: [
      { id: 1, index: 'A', value: 'Mars' },
      { id: 2, index: 'B', value: 'Jupiter' },
      { id: 3, index: 'C', value: 'Venus' },
      { id: 4, index: 'D', value: 'Mercury' },
    ],
  },

  {
    id: 3,
    question: 'Which gas do plants absorb during photosynthesis?',
    options: [
      { id: 1, index: 'A', value: 'Oxygen' },
      { id: 2, index: 'B', value: 'Carbon Dioxide' },
      { id: 3, index: 'C', value: 'Nitrogen' },
      { id: 4, index: 'D', value: 'Hydrogen' },
    ],
  },

  {
    id: 4,
    question: 'Which is the largest organ in the human body?',
    options: [
      { id: 1, index: 'A', value: 'Heart' },
      { id: 2, index: 'B', value: 'Skin' },
      { id: 3, index: 'C', value: 'Liver' },
      { id: 4, index: 'D', value: 'Lungs' },
    ],
  },

  {
    id: 5,
    question: 'Which of the following is a renewable source of energy?',
    options: [
      { id: 1, index: 'A', value: 'Coal' },
      { id: 2, index: 'B', value: 'Natural Gas' },
      { id: 3, index: 'C', value: 'Solar Energy' },
      { id: 4, index: 'D', value: 'Petroleum' },
    ],
  },

  {
    id: 6,
    question: 'Which continent is the largest in land area?',
    options: [
      { id: 1, index: 'A', value: 'Africa' },
      { id: 2, index: 'B', value: 'Asia' },
      { id: 3, index: 'C', value: 'Europe' },
      { id: 4, index: 'D', value: 'South America' },
    ],
  },

  {
    id: 7,
    question: 'Which of these animals is a mammal?',
    options: [
      { id: 1, index: 'A', value: 'Shark' },
      { id: 2, index: 'B', value: 'Dolphin' },
      { id: 3, index: 'C', value: 'Frog' },
      { id: 4, index: 'D', value: 'Lizard' },
    ],
  },

  {
    id: 8,
    question: 'Which of the following is used to measure temperature?',
    options: [
      { id: 1, index: 'A', value: 'Barometer' },
      { id: 2, index: 'B', value: 'Thermometer' },
      { id: 3, index: 'C', value: 'Hygrometer' },
      { id: 4, index: 'D', value: 'Altimeter' },
    ],
  },

  {
    id: 9,
    question: 'Which of the following is a primary color?',
    options: [
      { id: 1, index: 'A', value: 'Green' },
      { id: 2, index: 'B', value: 'Red' },
      { id: 3, index: 'C', value: 'Purple' },
      { id: 4, index: 'D', value: 'Orange' },
    ],
  },

  {
    id: 10,
    question: 'Which ocean is the largest in the world?',
    options: [
      { id: 1, index: 'A', value: 'Atlantic Ocean' },
      { id: 2, index: 'B', value: 'Indian Ocean' },
      { id: 3, index: 'C', value: 'Pacific Ocean' },
      { id: 4, index: 'D', value: 'Arctic Ocean' },
    ],
  },

  {
    id: 11,
    question: 'Which of the following materials is a good conductor of electricity?',
    options: [
      { id: 1, index: 'A', value: 'Rubber' },
      { id: 2, index: 'B', value: 'Plastic' },
      { id: 3, index: 'C', value: 'Wood' },
      { id: 4, index: 'D', value: 'Copper' },
    ],
  },
];
