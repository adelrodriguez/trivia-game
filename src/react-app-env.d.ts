/// <reference types="react-scripts" />

interface ApiResponseDTO {
  response_code: number;
  results: Array<{
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }>;
}

interface Question {
  id: string;
  category: string;
  question: string;
  correctAnswer: boolean;
}

interface Answer {
  id: string;
  answer: boolean;
  correct: boolean;
}

interface Result {
  id: string;
  question: string;
  answer: boolean;
  correct: boolean;
}
