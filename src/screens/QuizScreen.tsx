import React from 'react';
import { Wizard, Steps, Step } from 'react-albus';
import { useHistory } from 'react-router-dom';
import { useStoreState, useStoreActions } from '../hooks';
import { QuestionStep } from '../components/QuestionStep';

export function QuizScreen() {
  const { push } = useHistory();
  const questions = useStoreState(state => state.questions).questions;
  const { answerQuestion } = useStoreActions(actions => actions.questions);

  if (!questions.length) push('/');

  return (
    <Wizard>
      <Steps>
        {questions.map((question, index) => {
          const { id } = question;
          return (
            <Step
              key={id}
              id={id}
              render={({ next }) => (
                <QuestionStep
                  step={index}
                  steps={questions.length}
                  question={question}
                  onAnswerPress={answer => {
                    answerQuestion({ id, answer });

                    if (index < questions.length - 1) {
                      next();
                    } else {
                      push('/results');
                    }
                  }}
                />
              )}
            />
          );
        })}
      </Steps>
    </Wizard>
  );
}
