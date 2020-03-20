import { createStore, Store } from 'easy-peasy';
import { questionsModel, QuestionsModel } from '../questions';
import { parseString } from '../../utils';

describe('questions store', () => {
  let store: Store<QuestionsModel>;

  beforeEach(() => {
    store = createStore(questionsModel);
  });

  test('showLoading action', () => {
    store.getActions().showLoading(true);

    expect(store.getState().loading).toBe(true);
  });

  test('showError action', () => {
    store.getActions().showError(true);

    expect(store.getState().error).toBe(true);
  });

  test('addQuestions action', () => {
    const results = [
      {
        category: 'General Knowledge',
        type: 'boolean',
        difficulty: 'hard',
        question:
          'This is the correct spelling of &quot;Supercalifragilisticexpialidocious&quot;.',
        correct_answer: 'True',
        incorrect_answers: ['False'],
      },
    ];

    store.getActions().addQuestions({ response_code: 0, results });

    expect(store.getState().questions[0].question).toBe(
      parseString(
        'This is the correct spelling of &quot;Supercalifragilisticexpialidocious&quot;.'
      )
    );
  });
});
