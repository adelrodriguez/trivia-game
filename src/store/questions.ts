import { action, Action, thunk, Thunk, computed, Computed } from 'easy-peasy';
import keyBy from 'lodash/keyBy';
import shortid from 'shortid';
import { StoreModel } from '.';
import { Injections } from './injections';
import { parseString } from '../utils';

export interface QuestionsModel {
  // State
  loading: boolean;
  questions: Question[];
  questionsById: Computed<
    QuestionsModel,
    { [key: string]: Question },
    StoreModel
  >;
  answers: Answer[];
  result: Computed<QuestionsModel, number, StoreModel>;
  // Actions
  setLoading: Action<QuestionsModel, boolean>;
  getQuestions: Thunk<QuestionsModel, void, Injections, StoreModel>;
  addQuestions: Action<QuestionsModel, ApiResponseDTO>;
  answerQuestion: Action<QuestionsModel, { answer: boolean; id: string }>;
}

export const questionsModel: QuestionsModel = {
  loading: false,
  questions: [],
  questionsById: computed(state => keyBy(state.questions, 'id')),
  answers: [],

  result: computed(
    state => state.answers.filter(answer => answer.correct).length
  ),

  setLoading: action((state, payload) => {
    state.loading = payload;
  }),

  getQuestions: thunk(async (actions, _, { injections }) => {
    const { questionsService } = injections;

    try {
      const { data } = await questionsService.get();

      actions.addQuestions(data);
    } catch (error) {
      console.log(error);
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
};
