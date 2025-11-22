export const getQuizData = (courseData: any, quizData: any) => {
  return [
    {
      id: 1,
      couse: 'Curruption In Nigeria',
      description: 'A study on the corruption on one of the largest country in west africa',
      docs: 3,
      attempt: 15,
      questions: [
        {
          id: 1,
          question: 'Who was behind the insurgency played out during Goodluck Jonathan regime?',
          docId: '1',
          answer: '2',
          courseId: '1',
          options: [
            { id: 1, value: 'The Current Ruling Party', question_id: '1' },
            { id: 2, value: 'Opposition Party', question_id: '1' },
            { id: 3, value: 'Northern Government', question_id: '1' },
            { id: 4, value: 'Islamic Terrorist', question_id: '1' },
          ],
        },
        {
          id: 2,
          question:
            'Which Nigerian leader is most associated with the phrase "corruption is not stealing"?',
          docId: '1',
          answer: '1',
          courseId: '1',
          options: [
            { id: 1, value: 'Goodluck Jonathan', question_id: '2' },
            { id: 2, value: 'Muhammadu Buhari', question_id: '2' },
            { id: 3, value: 'Olusegun Obasanjo', question_id: '2' },
            { id: 4, value: 'Yakubu Gowon', question_id: '2' },
          ],
        },
        {
          id: 3,
          question:
            'What was the amount allegedly missing from NNPC accounts under Diezani Alison-Madueke?',
          docId: '1',
          answer: '3',
          courseId: '1',
          options: [
            { id: 1, value: '$2 billion', question_id: '3' },
            { id: 2, value: '$10 billion', question_id: '3' },
            { id: 3, value: '$20 billion', question_id: '3' },
            { id: 4, value: '$49 billion', question_id: '3' },
          ],
        },
        {
          id: 4,
          question: 'Which anti-corruption agency was established in 2003 in Nigeria?',
          docId: '1',
          answer: '2',
          courseId: '1',
          options: [
            { id: 1, value: 'Nigerian Police Force', question_id: '4' },
            { id: 2, value: 'Economic and Financial Crimes Commission (EFCC)', question_id: '4' },
            { id: 3, value: 'Code of Conduct Bureau', question_id: '4' },
            { id: 4, value: 'Independent Corrupt Practices Commission (ICPC)', question_id: '4' },
          ],
        },
        {
          id: 5,
          question: 'The famous "Dasuki Gate" arms scandal occurred under which administration?',
          docId: '1',
          answer: '4',
          courseId: '1',
          options: [
            { id: 1, value: "Yar'Adua Administration", question_id: '5' },
            { id: 2, value: 'Obasanjo Administration', question_id: '5' },
            { id: 3, value: 'Buhari Administration', question_id: '5' },
            { id: 4, value: 'Goodluck Jonathan Administration', question_id: '5' },
          ],
        },
        {
          id: 6,
          question:
            'Which former governor was convicted in the UK for money laundering involving over £1 million in cash through London airports?',
          docId: '1',
          answer: '1',
          courseId: '1',
          options: [
            { id: 1, value: 'James Ibori', question_id: '6' },
            { id: 2, value: 'Joshua Dariye', question_id: '6' },
            { id: 3, value: 'Diepreye Alamieyeseigha', question_id: '6' },
            { id: 4, value: 'Lucky Igbinedion', question_id: '6' },
          ],
        },
      ],
    },

    // Course 2: Nigerian Civil War (1967-1970)
    {
      id: 2,
      couse: 'Nigerian Civil War (1967-1970)',
      description: 'The genocide between the southern and northern tribe of Nigeria and its origin',
      docs: 4,
      attempt: 8,
      questions: [
        {
          id: 1,
          question: 'What was the name of the secessionist state declared by Odumegwu Ojukwu?',
          docId: '2',
          answer: '3',
          courseId: '2',
          options: [
            { id: 1, value: 'Republic of Niger Delta', question_id: '1' },
            { id: 2, value: 'Oduduwa Republic', question_id: '1' },
            { id: 3, value: 'Republic of Biafra', question_id: '1' },
            { id: 4, value: 'Middle Belt Republic', question_id: '1' },
          ],
        },
        {
          id: 2,
          question: 'In which year did Biafra officially surrender, ending the civil war?',
          docId: '2',
          answer: '2',
          courseId: '2',
          options: [
            { id: 1, value: '1968', question_id: '2' },
            { id: 2, value: '1970', question_id: '2' },
            { id: 3, value: '1971', question_id: '2' },
            { id: 4, value: '1969', question_id: '2' },
          ],
        },
        {
          id: 3,
          question: 'What was the famous "No Victor, No Vanquished" declaration made by?',
          docId: '2',
          answer: '1',
          courseId: '2',
          options: [
            { id: 1, value: 'General Yakubu Gowon', question_id: '3' },
            { id: 2, value: 'General Olusegun Obasanjo', question_id: '3' },
            { id: 3, value: 'Odumegwu Ojukwu', question_id: '3' },
            { id: 4, value: 'Philip Effiong', question_id: '3' },
          ],
        },
        {
          id: 4,
          question: 'Which country was the first to recognize Biafra as a sovereign state?',
          docId: '2',
          answer: '4',
          courseId: '2',
          options: [
            { id: 1, value: 'France', question_id: '4' },
            { id: 2, value: 'Portugal', question_id: '4' },
            { id: 3, value: 'South Africa', question_id: '4' },
            { id: 4, value: 'Tanzania', question_id: '4' },
          ],
        },
        {
          id: 5,
          question: 'What was the 3Rs policy introduced by Gowon after the war?',
          docId: '2',
          answer: '2',
          courseId: '2',
          options: [
            { id: 1, value: 'Revenge, Retribution, Reconstruction', question_id: '5' },
            { id: 2, value: 'Reconciliation, Rehabilitation, Reconstruction', question_id: '5' },
            { id: 3, value: 'Recovery, Rebuilding, Reparation', question_id: '5' },
            { id: 4, value: 'Restoration, Reintegration, Redemption', question_id: '5' },
          ],
        },
      ],
    },

    // Course 3: June 12, 1993 Election Crisis
    {
      id: 3,
      couse: 'June 12, 1993 Presidential Election',
      description: 'The most peacefull and tranquent election ever occur in Nigeria',
      docs: 5,
      attempt: 20,
      questions: [
        {
          id: 1,
          question: 'Who won the June 12, 1993 presidential election that was later annulled?',
          docId: '3',
          answer: '1',
          courseId: '3',
          options: [
            { id: 1, value: 'Chief Moshood Kashimawo Olawale Abiola', question_id: '1' },
            { id: 2, value: 'Alhaji Bashir Tofa', question_id: '1' },
            { id: 3, value: 'General Muhammadu Buhari', question_id: '1' },
            { id: 4, value: 'Chief Arthur Nzeribe', question_id: '1' },
          ],
        },
        {
          id: 2,
          question: 'Who annulled the June 12, 1993 election?',
          docId: '3',
          answer: '3',
          courseId: '3',
          options: [
            { id: 1, value: 'General Sani Abacha', question_id: '2' },
            { id: 2, value: 'Ernest Shonekan', question_id: '2' },
            { id: 3, value: 'General Ibrahim Babangida', question_id: '2' },
            { id: 4, value: 'General Olusegun Obasanjo', question_id: '2' },
          ],
        },
        {
          id: 3,
          question: "What was the slogan of MKO Abiola's campaign?",
          docId: '3',
          answer: '4',
          courseId: '3',
          options: [
            { id: 1, value: 'Change the Change', question_id: '3' },
            { id: 2, value: 'Power to the People', question_id: '3' },
            { id: 3, value: 'New Nigeria', question_id: '3' },
            { id: 4, value: "Hope '93 - Farewell to Poverty", question_id: '3' },
          ],
        },
        {
          id: 4,
          question:
            'In how many states did MKO Abiola win in the June 12 election (including FCT)?',
          docId: '3',
          answer: '2',
          courseId: '3',
          options: [
            { id: 1, value: '19', question_id: '4' },
            { id: 2, value: '30', question_id: '4' },
            { id: 3, value: '24', question_id: '4' },
            { id: 4, value: '36', question_id: '4' },
          ],
        },
        {
          id: 5,
          question:
            'On what date was MKO Abiola eventually declared President-elect posthumously by Buhari?',
          docId: '3',
          answer: '1',
          courseId: '3',
          options: [
            { id: 1, value: 'June 6, 2018', question_id: '5' },
            { id: 2, value: 'May 29, 2015', question_id: '5' },
            { id: 3, value: 'June 12, 1998', question_id: '5' },
            { id: 4, value: 'October 1, 2020', question_id: '5' },
          ],
        },
      ],
    },
  ];
};
