import { createStore } from 'easy-peasy';
import { injections } from './injections';
import { questionsModel, QuestionsModel } from './questions';

export interface StoreModel {
  questions: QuestionsModel;
}

const storeModel: StoreModel = {
  questions: questionsModel,
};

export const store = createStore(storeModel, {
  injections,
});
