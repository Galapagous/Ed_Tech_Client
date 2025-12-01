export interface IDropdownMenu {
  label: string;
  action: () => void;
}

export interface IOption {
  id: number;
  value: string;
  questionId: string;
}

export interface IQuestion {
  id: number;
  question: string;
  docId: string;
  answer: string;
  courseId: string;
  options: IOption[];
}
