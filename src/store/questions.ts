import { action, Action, thunk, Thunk, computed, Computed } from 'easy-peasy';
import keyBy from 'lodash/keyBy';
import shortid from 'shortid';
import { StoreModel } from '.';
import { Injections } from './injections';
import { parseString } from '../utils';

export interface QuestionsModel {
  // State
  loading: boolean;
  error: boolean;
  questions: Question[];
  questionsById: Computed<
    QuestionsModel,
    { [key: string]: Question },
    StoreModel
  >;
  answers: Answer[];
  results: Computed<QuestionsModel, Result[], StoreModel>;
  score: Computed<QuestionsModel, number, StoreModel>;
  // Actions
  showLoading: Action<QuestionsModel, boolean>;
  showError: Action<QuestionsModel, boolean>;
  getQuestions: Thunk<QuestionsModel, void, Injections, StoreModel>;
  addQuestions: Action<QuestionsModel, ApiResponseDTO>;
  answerQuestion: Action<QuestionsModel, { answer: boolean; id: string }>;
  reset: Action<QuestionsModel, void>;
}

export const questionsModel: QuestionsModel = {
  loading: false,
  error: false,
  questions: [],
  questionsById: computed(state => keyBy(state.questions, 'id')),
  answers: [],
  results: computed(state =>
    state.answers.map(answer => ({
      id: answer.id,
      question: state.questionsById[answer.id].question,
      answer: answer.answer,
      correct: answer.correct,
    }))
  ),

  score: computed(
    state => state.answers.filter(answer => answer.correct).length
  ),

  showLoading: action((state, payload) => {
    state.loading = payload;
  }),

  showError: action((state, payload) => {
    state.error = payload;
  }),

  getQuestions: thunk(async (actions, _, { injections }) => {
    const { questionsService } = injections;
    const { showLoading, showError, addQuestions } = actions;

    try {
      showLoading(true);

      const { data } = await questionsService.get();

      showLoading(false);

      addQuestions(data);
    } catch (error) {
      showError(true);
    }
  }),

  addQuestions: action((state, payload) => {
    payload.results.forEach(result => {
      state.questions.push({
        id: shortid.generate(),
        question: parseString(result.question),
        category: result.category,
        correctAnswer: !!result.correct_answer,
      });
    });
  }),

  answerQuestion: action((state, payload) => {
    const { id, answer } = payload;
    const correct = state.questionsById[id].correctAnswer === answer;
    state.answers.push({
      id,
      answer,
      correct,
    });
  }),

  reset: action(state => {
    state.loading = false;
    state.error = false;
    state.questions = [];
    state.answers = [];
    state.results = [];
    state.score = 0;
  }),
};
